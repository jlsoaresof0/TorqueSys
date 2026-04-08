import Link from 'next/link';

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: 'calc(100vh - 54px)',
        display: 'grid',
        placeItems: 'center',
        padding: 24,
      }}
    >
      <section
        style={{
          width: '100%',
          maxWidth: 420,
          background: '#fff',
          borderRadius: 12,
          boxShadow: '0 10px 25px rgba(15, 23, 42, 0.08)',
          padding: 24,
          textAlign: 'center',
        }}
      >
        <h1 style={{ marginTop: 0 }}>Tela inicial</h1>
        <p style={{ color: '#4b5563' }}>Escolha uma opção:</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <Link href="/login" style={{ color: '#2563eb', fontWeight: 600 }}>
            Login
          </Link>
          <Link href="/register" style={{ color: '#2563eb', fontWeight: 600 }}>
            Registro
          </Link>
        </div>
      </section>
    </main>
  );
}
