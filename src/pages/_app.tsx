import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import ContactMeFooter from '@/components/ContactMeFooter';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar/>
      <Component {...pageProps}/>
      <ContactMeFooter />
    </div>

  );

}
