import firebase, { FirebaseContext } from '../firebase';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '../styles/globals.css';
import { store } from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FirebaseContext.Provider value={{ firebase }}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </FirebaseContext.Provider>
  );
}

export default MyApp
