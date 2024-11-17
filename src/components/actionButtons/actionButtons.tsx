import React from 'react';
import Link from "next/link";
import { Button } from '../ui/button';
import { Heart, LogIn, MessageSquare } from 'lucide-react';

interface ActionButtonsProps {
  className?: string;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ className }) => {
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

      <Link href={'/signIn'}>
        <Button variant="secondary" size="sm">
          <LogIn className="mr-2 h-4 w-4" />
          Login
        </Button>
      </Link>
    </div>
  );
};

export default ActionButtons;