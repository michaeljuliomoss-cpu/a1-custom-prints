import './globals.css';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', display: 'swap', weight: ['600', '700', '800'] });

export const metadata = {
  title: 'A1 Custom Prints & Embroidery | Custom T-Shirts, Corporate Shirts & School Uniforms',
  description: 'Premium custom DTF printing and embroidery services in The Bahamas. Gildan t-shirts, corporate polos, school uniform embroidery.',
  keywords: ['custom prints', 'embroidery', 'DTF print', 'Gildan', 'corporate shirts', 'school uniforms', 'Bahamas'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
