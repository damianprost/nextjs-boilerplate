'use client'

import { createClient } from '../lib/supabase/client'

export default function GoogleLoginButton() {
  const supabase = createClient()

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
  }

  return (
    <button
      onClick={handleLogin}
      className="text-sm px-4 py-2 rounded-full border border-slate-700 hover:border-slate-500 transition"
    >
      Iniciar sesión
    </button>
  )
}
