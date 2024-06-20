// Location: Next.js looks for _app.tsx in the pages directory. When it finds this file, it uses it to wrap all the page components.
// The main purpose of _app.tsx is to override the default App component

// Next.js Initialization: When Next.js initializes, it looks for the _app.tsx file in the pages directory. 
// If it finds this file, it uses it to wrap all the page components.
import { AppProps } from 'next/app';
import Layout from '../layout';
import "../styles/globals.css"

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp;