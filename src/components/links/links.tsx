import React from 'react';
import Link from "next/link";

interface LinksProps {
  className?: string;
}

const Links: React.FC<LinksProps> = ({ className }) => {
  return (
    <nav className={className}>
      <Link href="/" className="hover:underline">
        Página Inicial
      </Link>
      <Link href="/crieSeuDesafio" className="hover:underline">
        Crie seu Desafio
      </Link>
      <Link href="/saibaMais" className="hover:underline">
        Saiba mais
      </Link>
      <Link href="/perguntasFrequentes" className="hover:underline">
        Perguntas Frequentes
      </Link>
    </nav>
  );
};

export default Links;