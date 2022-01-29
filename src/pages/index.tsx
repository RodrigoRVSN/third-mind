import Head from 'next/head';
import { useMoralis } from 'react-moralis';

export default function Home(): JSX.Element {
  const { authenticate, user, logout, isAuthenticated } = useMoralis();

  return (
    <>
      <Head>
        <title>Inicio</title>
      </Head>
      <h1>{user?.get('username')}</h1>
      {isAuthenticated ? (
        <button type="button" onClick={() => logout()}>
          logout
        </button>
      ) : (
        <button type="button" onClick={() => authenticate()}>
          login
        </button>
      )}
    </>
  );
}
