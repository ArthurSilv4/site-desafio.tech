'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '@/contexts/AuthContext';

interface User {
  id: string;
  email: string;
  roles: string[];
}

interface Challenge {
  id: string;
  title: string;
  description: string | null;
  startDate: string;
  endDate: string;
  challengeDates: string[];
  completed: boolean;
}

interface ChallengeData {
  title: string | null;
  description: string | null;
  startDate: string;
  endDate: string;
  challengeDates: string[];
  completed: boolean;
}

export default function Dashboard() {
  const { token } = useAuth();
  const [userData, setUserData] = useState<User | null>(null);
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [challengeData, setChallengeData] = useState<ChallengeData>({
    title: null,
    description: null,
    startDate: '',
    endDate: '',
    challengeDates: [],
    completed: false,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://localhost:7092/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
        console.log('User data:', response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const fetchUserChallenges = async () => {
      try {
        const response = await axios.get('https://localhost:7092/challenges/all', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setChallenges(response.data);
        console.log('User challenges:', response.data);
      } catch (error) {
        console.error('Error fetching user challenges:', error);
      }
    };

    if (token) {
      fetchUserData();
      fetchUserChallenges();
    }
  }, [token]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setChallengeData({ ...challengeData, [name]: checked });
    } else {
      setChallengeData({ ...challengeData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:7092/challenges/create', challengeData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Challenge created:', response.data);
      // Atualize a interface do usuário conforme necessário
    } catch (error) {
      console.error('Error creating challenge:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`https://localhost:7092/challenges/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setChallenges(challenges.filter(challenge => challenge.id !== id));
      console.log('Challenge deleted:', id);
    } catch (error) {
      console.error('Error deleting challenge:', error);
    }
  };

  const handleEdit = async (id: string, completed: boolean) => {
    try {
      const response = await axios.put(`https://localhost:7092/challenges/edit/${id}`, { completed }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setChallenges(challenges.map(challenge => 
        challenge.id === id ? { ...challenge, completed: response.data.completed } : challenge
      ));
      console.log('Challenge updated:', response.data);
    } catch (error) {
      console.error('Error updating challenge:', error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard</p>
      {userData && (
        <div>
          <p>ID: {userData.id}</p>
          <p>Email: {userData.email}</p>
          <p>Role: {userData.roles[0]}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={challengeData.title || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={challengeData.description || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={challengeData.startDate}
            onChange={(e) => {
              const startDate = new Date(e.target.value);
              const endDate = new Date(startDate);
              endDate.setDate(startDate.getDate() + 4); 
              setChallengeData({ ...challengeData, startDate: e.target.value, endDate: endDate.toISOString().split('T')[0] });
            }}
          />
        </div>
        <div>
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={challengeData.endDate}
            onChange={(e) => setChallengeData({ ...challengeData, endDate: e.target.value })}
            disabled
          />
        </div>
        <button className='bg-green-200' type="submit">Create Challenge</button>
      </form>

      <br />
      <h2 className='font-bold'>Your Challenges</h2>
      {challenges.length > 0 ? (
        <ul>
          {challenges.map((challenge) => (
            <li key={challenge.id}>
              <h3>{challenge.title}</h3>
              <p>{challenge.description}</p>
              <p>Start Date: {challenge.startDate}</p>
              <p>End Date: {challenge.endDate}</p>
              <p>Challenge Dates:</p>
              <ul>
                {challenge.challengeDates.map((date, index) => (
                  <li key={index}>{date}</li>
                ))}
              </ul>
              <p>
                Completed: 
                <input 
                  type="checkbox" 
                  checked={challenge.completed} 
                  onChange={(e) => handleEdit(challenge.id, e.target.checked)} 
                />
              </p>
              <button className='bg-red-200' onClick={() => handleDelete(challenge.id)}>Delete</button>
              <br />
              <br />
            </li>
          ))}
        </ul>
      ) : (
        <p>No challenges found.</p>
      )}
    </div>
  );
}