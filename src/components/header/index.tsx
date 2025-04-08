import Link from 'next/link'

export default function Header() {
    return (
        <header className="flex px-2 py-4 bg-zinc-900 text-white">
            <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
                <h1>Header da aplicação</h1>
            </div>
            <nav>
                <ul className="flex items-center justify-center gap-4 mr-10">
                    <li>
                        <Link href="/">
                        Home
                        </Link>
                    </li>

                    <li>
                        <Link href="/contatos">Contatos</Link>
                    </li>

                    <li>
                        <Link href="/dashboards">Dashboards</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}