'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-zinc-900 text-white px-4 py-4">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        {/* Logo / título */}
        <h1 className="text-lg font-bold">Header da aplicação</h1>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-zinc-300">Home</Link>
          <Link href="/contatos" className="hover:text-zinc-300">Contatos</Link>
          <Link href="/dashboards" className="hover:text-zinc-300">Dashboards</Link>
        </nav>

        {/* Botão de menu mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden transition-transform duration-200 active:scale-95"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile dropdown com animação */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col items-end space-y-2 pr-4">
          <Link href="/" className="hover:text-zinc-300">Home</Link>
          <Link href="/contatos" className="hover:text-zinc-300">Contatos</Link>
          <Link href="/dashboards" className="hover:text-zinc-300">Dashboards</Link>
        </nav>
      </div>
    </header>
  )
}
