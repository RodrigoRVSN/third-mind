import { Header } from '@App/components/layout/Header';
import Head from 'next/head';
import { useMoralis } from 'react-moralis';
import { Avatar } from '@nextui-org/react';

export default function Home(): JSX.Element {
  const { user } = useMoralis();

  return (
    <>
      <Head>
        <title>Inicio</title>
      </Head>
      <Header />
      <Avatar
        size="xl"
        color="gradient"
        src="https://avatars.dicebear.com/api/pixel-art/rodrigo.svg"
        bordered
        css={{ size: '$20', margin: 'auto' }}
      />
      <h1>{user?.get('username')}</h1>
    </>
  );
}
