import { AppProps } from 'next/app';
import { MoralisProvider } from 'react-moralis';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <MoralisProvider
      appId="jjbuLVPBoluwxR0T5gXZGwUFdZByqye9CtnPBcMs"
      serverUrl="https://sdufp1nkwckv.usemoralis.com:2053/server"
      initializeOnMount
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
