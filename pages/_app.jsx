import '@/styles/globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps:{session, ...pageProps} }) {

  return <SessionProvider session={session}>
    <ToastContainer />
    <Component {...pageProps} />
  </SessionProvider> 
}
