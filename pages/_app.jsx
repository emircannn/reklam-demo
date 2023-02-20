import '@/styles/globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SessionProvider } from "next-auth/react"
import { Router, useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { PropagateLoader } from 'react-spinners';
import NProgress from "nprogress";
import "../styles/globals.css";
import "nprogress/nprogress.css";

import { Provider } from 'react-redux'
import store from '../redux/store'

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function Loading() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url) => (url !== router.asPath) && setLoading(true);
    const handleComplate = (url) => (url === router.asPath) && setTimeout(() =>{setLoading(false)},1500);

    router.events.on("routeChangeStart", handleStart)
    router.events.on("routeChangeComplete", handleComplate)
    router.events.on("routeChangeError", handleComplate)

    return () => {
    router.events.off("routeChangeStart", handleStart)
    router.events.off("routeChangeComplete", handleComplate)
    router.events.off("routeChangeError", handleComplate)
    }
  })
  return loading && (
    <div className="w-screen h-screen fixed bg-primary z-50 flex items-center justify-center"><PropagateLoader className='mx-auto' color='#fff'/></div>
  )
}

export default function App({ Component, pageProps:{session, ...pageProps} }) {
  return(
    <SessionProvider session={session}>
      <Provider store={store}>
        <Loading/>
      <ToastContainer />
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
    )
}
