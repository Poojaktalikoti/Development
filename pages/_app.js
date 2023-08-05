import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/styles/globals.css';
import Head from 'next/head';



export default function App({ Component, pageProps }) {
  return (
    <>
    
    <Head>
        <title>Organic Products</title>
        <meta 
           name="description" 
           content="Generated by create next app" 
        />
        <meta 
           name="viewport" 
           content="width=device-width, initial-scale=1"
         />
        <link rel="icon" href="/favicon.ico" />

        
       
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
     
<link 
rel="preconnect" 
href="https://fonts.gstatic.com" 
crossorigin="true"
/>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Vithkuqi:wght@700&display=swap" 
rel="stylesheet"
/>


             </Head>
             <Header/>
             <Component {...pageProps} />
             <Footer/>
  </>
  );
}
