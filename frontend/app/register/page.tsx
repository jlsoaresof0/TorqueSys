export default function RegisterPage() {
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
        <h1 style={{ marginTop: 0, marginBottom: 8 }}>Registro</h1>
        <p style={{ marginTop: 0, marginBottom: 24, color: '#4b5563' }}>
          Tela de registro simples para teste.
        </p>

        <form style={{ display: 'grid', gap: 14 }}>
          <label style={{ display: 'grid', gap: 6, fontSize: 14 }}>
            Nome
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              required
              style={{
                padding: '10px 12px',
                borderRadius: 8,
                border: '1px solid #d1d5db',
                fontSize: 14,
              }}
            />
          </label>

          <label style={{ display: 'grid', gap: 6, fontSize: 14 }}>
            E-mail
            <input
              type="email"
              name="email"
              placeholder="voce@exemplo.com"
              required
              style={{
                padding: '10px 12px',
                borderRadius: 8,
                border: '1px solid #d1d5db',
                fontSize: 14,
              }}
            />
          </label>

          <label style={{ display: 'grid', gap: 6, fontSize: 14 }}>
            Senha
            <input
              type="password"
              name="password"
              placeholder="********"
              required
              minLength={6}
              style={{
                padding: '10px 12px',
                borderRadius: 8,
                border: '1px solid #d1d5db',
                fontSize: 14,
              }}
            />
          </label>

          <button
            type="submit"
            style={{
              marginTop: 6,
              padding: '11px 12px',
              border: 0,
              borderRadius: 8,
              background: '#2563eb',
              color: '#fff',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Criar conta
          </button>
        </form>
      </section>
    </main>
  );
}
