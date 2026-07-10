import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap', weight: ['400', '500', '600'] });

export const metadata = {
  title: 'A1 Custom Prints & Embroidery | Custom T-Shirts, Corporate Shirts & School Uniforms',
  description: 'Premium custom DTF printing and embroidery services in The Bahamas. Gildan t-shirts, corporate polos, school uniform embroidery.',
  keywords: ['custom prints', 'embroidery', 'DTF print', 'Gildan', 'corporate shirts', 'school uniforms', 'Bahamas'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
