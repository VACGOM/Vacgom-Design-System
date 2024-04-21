import React, { useState } from 'react';
import { Header } from './Header';
import './page.scss';


interface User {
  name: string;
}

export const Page: React.FC = () => {
  const [user, setUser] = useState<User | undefined>(undefined);

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section className="storybook-page">
        <h2>Pages in Storybook</h2>
        {/* Remaining content unchanged */}
      </section>
    </article>
  );
};
