import './globals.css';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
  weight: ['400', '600', '700', '800'],
});

export const metadata = {
  title: 'A1 Custom Prints & Embroidery | Custom T-Shirts, Corporate Shirts & School Uniforms',
  description: 'Premium custom DTF printing and embroidery services in The Bahamas. Gildan t-shirts, corporate polos, school uniform embroidery.',
  keywords: ['custom prints', 'embroidery', 'DTF print', 'Gildan', 'corporate shirts', 'school uniforms', 'Bahamas'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunito.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
