import type { AppProps } from 'next/app';
import "../app/globals.css";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-body',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-heading',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${poppins.variable}`}>
      <Component {...pageProps} />
    </div>
  );
} 