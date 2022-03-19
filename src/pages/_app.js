import '../styles/globals.scss'
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { Provider } from 'react-redux';
import store from '../store/configStore';

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

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
