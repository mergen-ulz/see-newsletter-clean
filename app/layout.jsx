import "./globals.css";

export const metadata = {
  title: 'SEE Learning Mongolia Newsletter Images',
  description: 'Direct access to the SEE Learning Mongolia newsletter images.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  );
}
