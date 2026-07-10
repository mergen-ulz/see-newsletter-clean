import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'SEE Learning Mongolia Newsletter Images',
  description: 'Direct access to the SEE Learning Mongolia newsletter images.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
