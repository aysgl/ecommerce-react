import '../styles/globals.scss'
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { Provider } from 'react-redux';
import store from '../store/configStore';
import { SessionProvider } from "next-auth/react"

function useResetHistory() {
  const router = useRouter()

  useEffect(() => {
    document.addEventListener("snipcart.ready", () => {
      Snipcart.events.on('snipcart.initialized', (snipcartState) => {
        // use `router.asPath` instead of `router.pathname`
        router.replace(router.asPath)
      });
    });
  }, [])
}

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}

export default MyApp
