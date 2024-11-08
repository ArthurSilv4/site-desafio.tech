// 'use client'

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useAuth } from '@/contexts/AuthContext';

// interface User {
//   id: string;
//   email: string;
//   roles: string[];
// }

// interface Challenge {
//   id: string;
//   title: string;
//   description: string | null;
//   startDate: string;
//   endDate: string;
//   challengeDates: string[];
//   completed: boolean;
// }

// interface ChallengeData {
//   title: string | null;
//   description: string | null;
//   startDate: string;
//   endDate: string;
//   challengeDates: string[];
//   completed: boolean;
// }

// export default function Dashboard() {
//   const { token } = useAuth();
//   const [userData, setUserData] = useState<User | null>(null);
//   const [challenges, setChallenges] = useState<Challenge[]>([]);
//   const [challengeData, setChallengeData] = useState<ChallengeData>({
//     title: null,
//     description: null,
//     startDate: '',
//     endDate: '',
//     challengeDates: [],
//     completed: false,
//   });
//   const [editingChallenge, setEditingChallenge] = useState<Challenge | null>(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get('https://localhost:7092/users', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUserData(response.data);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     const fetchUserChallenges = async () => {
//       try {
//         const response = await axios.get('https://localhost:7092/challenges/all', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setChallenges(response.data);
//       } catch (error) {
//         console.error('Error fetching user challenges:', error);
//       }
//     };

//     if (token) {
//       fetchUserData();
//       fetchUserChallenges();
//     }
//   }, [token]);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     if (type === 'checkbox') {
//       setChallengeData({ ...challengeData, [name]: checked });
//     } else {
//       setChallengeData({ ...challengeData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('https://localhost:7092/challenges/create', challengeData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setChallenges([...challenges, response.data]);

//     } catch (error) {
//       console.error('Error creating challenge:', error);
//     }
//   };

//   const handleDelete = async (id: string) => {
//     try {
//       await axios.delete(`https://localhost:7092/challenges/delete/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setChallenges(challenges.filter(challenge => challenge.id !== id));
//     } catch (error) {
//       console.error('Error deleting challenge:', error);
//     }
//   };

//   const handleEdit = async (id: string, completed: boolean) => {
//     try {
//       const response = await axios.put(`https://localhost:7092/challenges/edit/${id}`, { completed }, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setChallenges(challenges.map(challenge => 
//         challenge.id === id ? { ...challenge, completed: response.data.completed } : challenge
//       ));
//     } catch (error) {
//       console.error('Error updating challenge:', error);
//     }
//   };

//   const handleEditClick = (challenge: Challenge) => {
//     setEditingChallenge(challenge);
//   };

//   const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     if (editingChallenge) {
//       setEditingChallenge({ ...editingChallenge, [name]: value });
//     }
//   };

//   const handleEditSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (editingChallenge) {
//       try {
//         const response = await axios.put(`https://localhost:7092/challenges/edit/${editingChallenge.id}`, editingChallenge, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setChallenges(challenges.map(challenge => 
//           challenge.id === editingChallenge.id ? response.data : challenge
//         ));
//         setEditingChallenge(null);
//       } catch (error) {
//         console.error('Error updating challenge:', error);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <p>Welcome to your dashboard</p>
//       {userData && (
//         <div>
//           <p>ID: {userData.id}</p>
//           <p>Email: {userData.email}</p>
//           <p>Role: {userData.roles[0]}</p>
//         </div>
//       )}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={challengeData.title || ''}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="description">Description:</label>
//           <input
//             type="text"
//             id="description"
//             name="description"
//             value={challengeData.description || ''}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="startDate">Start Date:</label>
//           <input
//             type="date"
//             id="startDate"
//             name="startDate"
//             value={challengeData.startDate}
//             onChange={(e) => {
//               const startDate = new Date(e.target.value);
//               const endDate = new Date(startDate);
//               endDate.setDate(startDate.getDate() + 4); 
//               setChallengeData({ ...challengeData, startDate: e.target.value, endDate: endDate.toISOString().split('T')[0] });
//             }}
//           />
//         </div>
//         <div>
//           <label htmlFor="endDate">End Date:</label>
//           <input
//             type="date"
//             id="endDate"
//             name="endDate"
//             value={challengeData.endDate}
//             onChange={(e) => setChallengeData({ ...challengeData, endDate: e.target.value })}
//             disabled
//           />
//         </div>
//         <button className='bg-green-200' type="submit">Create Challenge</button>
//       </form>

//       <br />
//       <h2 className='font-bold'>Your Challenges</h2>
//       {challenges.length > 0 ? (
//         <ul>
//           {challenges.map((challenge) => (
//             <li key={challenge.id}>
//               {editingChallenge && editingChallenge.id === challenge.id ? (
//                 <form onSubmit={handleEditSubmit}>
//                   <div>
//                     <label htmlFor="editTitle">Title:</label>
//                     <input
//                       type="text"
//                       id="editTitle"
//                       name="title"
//                       value={editingChallenge.title}
//                       onChange={handleEditInputChange}
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="editDescription">Description:</label>
//                     <input
//                       type="text"
//                       id="editDescription"
//                       name="description"
//                       value={editingChallenge.description || ''}
//                       onChange={handleEditInputChange}
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="editStartDate">Start Date:</label>
//                     <input
//                       type="date"
//                       id="editStartDate"
//                       name="startDate"
//                       value={editingChallenge?.startDate || ''}
//                       onChange={handleEditInputChange}
//                     />
//                   </div>
//                   <button type="submit">Save</button>
//                 </form>
//               ) : (
//                 <>
//                   <h3>{challenge.title}</h3>
//                   <p>{challenge.description}</p>
//                   <p>Start Date: {new Date(challenge.startDate).toLocaleDateString()}</p>
//                   <p>End Date: {new Date(challenge.endDate).toLocaleDateString()}</p>
//                   <p>Challenge Dates:</p>
//                   <ul>
//                     {challenge.challengeDates.map((date, index) => (
//                       <li key={index}>{new Date(date).toLocaleDateString()}</li>
//                     ))}
//                   </ul>
//                   <p>
//                     Completed: 
//                     <input 
//                       type="checkbox" 
//                       checked={challenge.completed} 
//                       onChange={(e) => handleEdit(challenge.id, e.target.checked)} 
//                     />
//                   </p>
//                   <button className='bg-red-200' onClick={() => handleDelete(challenge.id)}>Delete</button>
//                   <button className='bg-blue-200' onClick={() => handleEditClick(challenge)}>Edit</button>
//                   <br />
//                   <br />
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No challenges found.</p>
//       )}
//     </div>
//   );
// }

'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Trophy, Github, Linkedin, BookOpen, Code, GamepadIcon, Database, Star, CheckCircle, Clock, XCircle, Target, Settings } from 'lucide-react'

export default function Dashboard() {
  const [desafiosFiltro, setDesafiosFiltro] = useState('todos')

  const usuario = {
    nome: "João Silva",
    nivel: 5,
    experiencia: 75,
    desafiosConcluidos: 12,
    descricao: "Desenvolvedor Full Stack apaixonado por tecnologia",
    github: "https://github.com/joaosilva",
    linkedin: "https://linkedin.com/in/joaosilva"
  }

  const desafiosPropostos = [
    { id: 1, titulo: "API RESTful", descricao: "Criar uma API RESTful com Node.js", tipo: "back", dificuldade: "Médio", autor: "Maria Santos" },
    { id: 2, titulo: "Dashboard React", descricao: "Desenvolver um dashboard com React e Chart.js", tipo: "front", dificuldade: "Difícil", autor: "Carlos Oliveira" },
    { id: 3, titulo: "Jogo de Plataforma", descricao: "Criar um jogo de plataforma 2D com Phaser", tipo: "jogos", dificuldade: "Fácil", autor: "Ana Pereira" },
  ]

  const meusDesafios = [
    { id: 1, titulo: "Machine Learning Basics", descricao: "Implementar algoritmos básicos de ML", dataInicio: "2023-05-01", dataFim: "2023-05-15", status: "concluido" },
    { id: 2, titulo: "App de Tarefas", descricao: "Criar um app de tarefas com React Native", dataInicio: "2023-06-01", dataFim: null, status: "em andamento" },
    { id: 3, titulo: "Blog com Next.js", descricao: "Desenvolver um blog usando Next.js", dataInicio: null, dataFim: null, status: "nao concluido" },
  ]

  const missoes = [
    { id: 1, titulo: "Completar 5 desafios", descricao: "Complete 5 desafios de qualquer tipo", progresso: 60, experiencia: 100 },
    { id: 2, titulo: "Mestre do Frontend", descricao: "Complete 3 desafios de frontend", progresso: 33, experiencia: 150 },
    { id: 3, titulo: "Contribuidor Open Source", descricao: "Faça 3 contribuições em projetos open source", progresso: 0, experiencia: 200 },
  ]

  const getTrofeu = (desafiosConcluidos: number) => {
    if (desafiosConcluidos >= 20) return <Trophy className="text-yellow-500" />
    if (desafiosConcluidos >= 10) return <Trophy className="text-gray-400" />
    if (desafiosConcluidos >= 5) return <Trophy className="text-amber-600" />
    return null
  }

  const getIconeDesafio = (tipo: string) => {
    switch (tipo) {
      case 'front': return <Code />
      case 'back': return <Database />
      case 'jogos': return <GamepadIcon />
      case 'dados': return <BookOpen />
      default: return <Star />
    }
  }

  const getIconeStatus = (status: string) => {
    switch (status) {
      case 'concluido': return <CheckCircle className="text-green-500" />
      case 'em andamento': return <Clock className="text-yellow-500" />
      case 'nao concluido': return <XCircle className="text-red-500" />
      default: return null
    }
  }

  return (
    <div className="container mx-auto p-4">
      <Tabs defaultValue="perfil">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="perfil">Perfil</TabsTrigger>
          <TabsTrigger value="desafios-propostos">Desafios Propostos</TabsTrigger>
          <TabsTrigger value="meus-desafios">Meus Desafios</TabsTrigger>
          <TabsTrigger value="missoes">Missões</TabsTrigger>
          <TabsTrigger value="configuracoes">Configurações</TabsTrigger>
        </TabsList>

        <TabsContent value="perfil">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User /> {usuario.nome}
              </CardTitle>
              <CardDescription>Nível {usuario.nivel}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium">Experiência</p>
                <Progress value={usuario.experiencia} className="w-full" />
              </div>
              <div className="flex items-center gap-2">
                <span>Desafios concluídos: {usuario.desafiosConcluidos}</span>
                {getTrofeu(usuario.desafiosConcluidos)}
              </div>
              <p>{usuario.descricao}</p>
              <div className="flex gap-4">
                <a href={usuario.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github size={20} /> GitHub
                </a>
                <a href={usuario.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin size={20} /> LinkedIn
                </a>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="desafios-propostos">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {desafiosPropostos.map(desafio => (
              <Card key={desafio.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {getIconeDesafio(desafio.tipo)} {desafio.titulo}
                  </CardTitle>
                  <CardDescription>{desafio.descricao}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p><strong>Tipo:</strong> {desafio.tipo}</p>
                  <p><strong>Dificuldade:</strong> {desafio.dificuldade}</p>
                  <p><strong>Autor:</strong> {desafio.autor}</p>
                </CardContent>
                <CardFooter>
                  <Button>Iniciar Desafio</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="meus-desafios">
          <div className="space-y-4">
            <Select value={desafiosFiltro} onValueChange={setDesafiosFiltro}>
              <SelectTrigger>
                <SelectValue placeholder="Filtrar desafios" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos</SelectItem>
                <SelectItem value="concluido">Concluídos</SelectItem>
                <SelectItem value="em andamento">Em andamento</SelectItem>
                <SelectItem value="nao concluido">Não concluídos</SelectItem>
              </SelectContent>
            </Select>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {meusDesafios
                .filter(desafio => desafiosFiltro === 'todos' || desafio.status === desafiosFiltro)
                .map(desafio => (
                  <Card key={desafio.id}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {getIconeStatus(desafio.status)} {desafio.titulo}
                      </CardTitle>
                      <CardDescription>{desafio.descricao}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p><strong>Início:</strong> {desafio.dataInicio || 'Não iniciado'}</p>
                      <p><strong>Fim:</strong> {desafio.dataFim || 'Em andamento'}</p>
                      <Badge>{desafio.status}</Badge>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="missoes">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {missoes.map(missao => (
              <Card key={missao.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target /> {missao.titulo}
                  </CardTitle>
                  <CardDescription>{missao.descricao}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <p className="text-sm font-medium">Progresso</p>
                    <Progress value={missao.progresso} className="w-full" />
                  </div>
                  <p><strong>Experiência:</strong> {missao.experiencia} XP</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="configuracoes">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings /> Configurações da Conta
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="seu-email@exemplo.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="senha">Nova Senha</Label>
                <Input id="senha" type="password" />
              </div>
              <Button>Salvar Alterações</Button>
              <div className="pt-4">
                <Button variant="destructive">Desativar Conta</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}