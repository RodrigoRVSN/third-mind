import { ButtonSignIn } from '@App/components/elements/ButtonSignIn';
import Box from '@mui/material/Box';
import Head from 'next/head';
import { useMoralis } from 'react-moralis';

export default function Home(): JSX.Element {
  const { user } = useMoralis();

  return (
    <>
      <Head>
        <title>Inicio</title>
      </Head>

      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          justifyContent: 'center',
          width: '100vw',
        }}
      >
        <h1>{user?.get('username')}</h1>
        <ButtonSignIn />
      </Box>
    </>
  );
}
