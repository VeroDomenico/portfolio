import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import ContactMeFooter from '@/components/ContactMeFooter';
import { ThemeProvider } from '../context/ThemeContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Navbar/>
      <Component {...pageProps}/>
    </ThemeProvider>
  );
}
