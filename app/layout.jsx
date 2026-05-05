import './globals.css';

export const metadata = {
  title: 'SEE Learning Mongolia Newspaper - 2026 May',
  description: 'Full SEE Learning Mongolia newspaper issue, May 2026.',
  openGraph: {
    title: 'SEE Learning Mongolia Newspaper - 2026 May',
    description: 'Full SEE Learning Mongolia newspaper issue, May 2026.',
    images: ['/newsletter/page-1.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  );
}
