export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <nav className="relative z-10 flex items-center justify-between px-6 md:px-16 py-6">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center font-bold">
            JM
          </div>
          <span className="text-lg font-semibold tracking-tight">JobMatch</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#personas" className="hover:text-white transition">Para personas</a>
          <a href="#empresas" className="hover:text-white transition">Para empresas</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm px-4 py-2 rounded-full border border-slate-700 hover:border-slate-500 transition">
            Iniciar sesión
          </button>
        </div>
      </nav>

      <section className="relative z-10 flex flex-col items-center text-center px-6 pt-20 pb-28">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-medium mb-6">
          ✦ Impulsado por inteligencia artificial
        </span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-tight">
          Conectamos talento con oportunidades,{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            con inteligencia artificial
          </span>
        </h1>
        <p className="mt-6 text-slate-400 max-w-xl text-lg">
          Subí tu CV y dejá que la IA te conecte con las mejores ofertas laborales.
          O encontrá el candidato ideal para tu empresa en minutos.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 font-semibold hover:opacity-90 transition shadow-lg shadow-purple-500/25">
            Soy candidato →
          </button>
          <button className="px-7 py-3.5 rounded-full border border-slate-700 font-semibold hover:border-slate-500 transition">
            Soy empresa →
          </button>
        </div>
      </section>

      <section className="relative z-10 px-6 md:px-16 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "📄", title: "Subí tu CV", desc: "Cargá tus datos y tu CV en PDF en pocos minutos." },
            { icon: "🤖", title: "La IA analiza", desc: "Nuestro sistema evalúa tu perfil contra cada oferta laboral." },
            { icon: "🎯", title: "Te conectamos", desc: "Las empresas reciben los perfiles más compatibles." },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur p-6 hover:border-slate-700 transition"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="personas"
        className="relative z-10 px-6 md:px-16 py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <span className="text-cyan-400 text-sm font-semibold tracking-wide uppercase">
            Para personas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Tu próximo trabajo, más cerca de lo que pensás
          </h2>
          <p className="text-slate-400 mb-6">
            Registrate con tu cuenta de Google, completá tu perfil laboral y subí tu CV.
            Nuestra IA te va a tener en cuenta para cada oferta que coincida con tu perfil.
          </p>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li className="flex items-center gap-2">✅ Registro rápido con Google</li>
            <li className="flex items-center gap-2">✅ Verificación segura por código</li>
            <li className="flex items-center gap-2">✅ Perfil siempre editable</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-xl">
          <div className="h-64 rounded-xl bg-slate-800/50 flex items-center justify-center text-slate-500 text-sm">
            Vista previa del formulario (próxima fase)
          </div>
        </div>
      </section>

      <section
        id="empresas"
        className="relative z-10 px-6 md:px-16 py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="order-2 md:order-1 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-xl">
          <div className="h-64 rounded-xl bg-slate-800/50 flex items-center justify-center text-slate-500 text-sm">
            Vista previa del panel de empresa (próxima fase)
          </div>
        </div>
        <div className="order-1 md:order-2">
          <span className="text-purple-400 text-sm font-semibold tracking-wide uppercase">
            Para empresas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Encontrá el perfil ideal, sin perder tiempo
          </h2>
          <p className="text-slate-400 mb-6">
            Publicá tu oferta laboral con los requisitos del puesto. Nuestra IA filtra
            entre todos los candidatos registrados y te enviamos los CVs más compatibles
            dentro del plazo que necesites.
          </p>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li className="flex items-center gap-2">✅ Publicá ofertas laborales</li>
            <li className="flex items-center gap-2">✅ Filtrado inteligente por IA</li>
            <li className="flex items-center gap-2">✅ Recibí los perfiles a tiempo</li>
          </ul>
        </div>
      </section>

      <footer className="relative z-10 border-t border-slate-800 px-6 md:px-16 py-8 text-center text-slate-500 text-sm">
        © 2026 JobMatch. Conectando personas y empresas con inteligencia artificial.
      </footer>
    </main>
  );
}
