import { darkMode, lightMode } from '@App/core/styles/theme';
import { NextUIProvider } from '@nextui-org/react';
import { AppProps } from 'next/app';
import { MoralisProvider } from 'react-moralis';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightMode.className,
        dark: darkMode.className,
      }}
    >
      <NextUIProvider>
        <MoralisProvider
          appId="jjbuLVPBoluwxR0T5gXZGwUFdZByqye9CtnPBcMs"
          serverUrl="https://sdufp1nkwckv.usemoralis.com:2053/server"
          initializeOnMount
        >
          <Component {...pageProps} />
        </MoralisProvider>
      </NextUIProvider>
    </NextThemesProvider>
  );
}
