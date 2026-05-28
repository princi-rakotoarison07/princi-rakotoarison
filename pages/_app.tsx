import type { AppProps } from 'next/app';
import { Outfit } from 'next/font/google';
import '@/styles/globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${outfit.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
