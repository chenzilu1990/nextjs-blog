import Link from "next/link";
import styles from '../../styles/Home.module.css';
import Image from "next/image";
import Head from "next/head";
import Script from "next/script"
export default function FirstPost() {

    return (
        <>
            <Head>
                <title>First Post11111</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                    }
            />
            <h1>First Post22222</h1>
            <h1 >
                <Link href="/">Back to home</Link>
            </h1>
            <Image
            src="/images/profile.jpg"
            height={144}
            width={144}
            alt="erjwerj"
            
            />
        </>
    )
}