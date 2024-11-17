import React from 'react';
import Link from "next/link";
import { Button } from '../ui/button';
import { Heart, LogIn, MessageSquare } from 'lucide-react';
import { AuthContext } from '@/contexts/AuthContext';

interface ActionButtonsProps {
  className?: string;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ className }) => {

  const authContext = React.useContext(AuthContext);
  const isLoggedIn = authContext?.token ? true : false;

  return (
    <div className={className}>
      <Link href={''}>
        <Button variant="secondary" size="sm">
          <MessageSquare className="mr-2 h-4 w-4" />
          Feedback
        </Button>
      </Link>

      <Link href={''}>
        <Button variant="secondary" size="sm">
          <Heart className="mr-2 h-4 w-4" />
          Apoie
        </Button>
      </Link>

      {isLoggedIn ? (
        <Link href={'/dashboard'}>
          <Button variant="secondary" size="sm">
            <LogIn className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
        </Link>
      ) : (
        <Link href={'/signIn'}>
          <Button variant="secondary" size="sm">
            <LogIn className="mr-2 h-4 w-4" />
            Login
          </Button>
        </Link>
      )}
    </div>
  );
};

export default ActionButtons;