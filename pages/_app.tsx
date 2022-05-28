import firebase, { FirebaseContext } from '../firebase';
import '../styles/globals.css'
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FirebaseContext.Provider value={{ firebase }}>
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  );
}

export default MyApp
