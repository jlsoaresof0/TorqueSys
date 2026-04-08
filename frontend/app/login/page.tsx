export default function LoginPage() {
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
        }}
      >
        <h1 style={{ marginTop: 0, marginBottom: 8 }}>Login</h1>
        <p style={{ margin: 0, color: '#4b5563' }}>Tela simples de login para teste.</p>
      </section>
    </main>
  );
}
