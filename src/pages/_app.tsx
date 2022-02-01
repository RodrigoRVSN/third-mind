/* eslint-disable @typescript-eslint/no-explicit-any */
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { NextComponentType } from 'next';
import createEmotionCache from '@App/core/styles/createEmotionCache';
import { MoralisProvider } from 'react-moralis';
import { theme } from '@App/core/styles/theme';
import { ThemeProvider } from '@mui/material';

const clientSideEmotionCache = createEmotionCache();

interface IApp {
  Component: NextComponentType;
  pageProps: any;
  emotionCache: EmotionCache;
}

export default function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: IApp): JSX.Element {
  return (
    <CacheProvider value={emotionCache}>
      <MoralisProvider
        appId="jjbuLVPBoluwxR0T5gXZGwUFdZByqye9CtnPBcMs"
        serverUrl="https://sdufp1nkwckv.usemoralis.com:2053/server"
        initializeOnMount
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </MoralisProvider>
    </CacheProvider>
  );
}
