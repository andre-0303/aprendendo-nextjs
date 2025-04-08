export default function Header() {
    return (
        <header className="flex px-2 py-4 bg-zinc-900 text-white">
            <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
                <h1>Header da aplicação</h1>
            </div>
            <nav>
                <ul className="flex items-center justify-center gap-4 mr-10">
                    <li>
                        <a href="#">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Posts
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}