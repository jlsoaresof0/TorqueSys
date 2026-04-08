import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'TorqueSys',
  description: 'Tela de teste',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          fontFamily:
            "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          background: '#f5f7fb',
          color: '#111827',
        }}
      >
        <header
          style={{
            display: 'flex',
            gap: 16,
            padding: '14px 20px',
            borderBottom: '1px solid #e5e7eb',
            background: '#ffffff',
          }}
        >
          <Link href="/" style={{ color: '#111827', textDecoration: 'none', fontWeight: 700 }}>
            TorqueSys
          </Link>
          <Link href="/login" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 600 }}>
            Login
          </Link>
          <Link href="/register" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 600 }}>
            Registro
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
