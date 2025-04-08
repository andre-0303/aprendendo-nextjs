export default function Dashboard() {
    return (
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar */}
        <aside className="bg-zinc-800 text-white md:w-64 w-full p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">Home</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">Analytics</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">Relatórios</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">Configurações</a>
            </li>
          </ul>
        </aside>
  
        {/* Conteúdo principal */}
        <main className="flex-1 p-6 bg-gray-100">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-zinc-900">Dashboard</h1>
            <p className="text-gray-700">Resumo geral da aplicação.</p>
          </header>
  
          {/* Cards de resumo */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">👥 Total de Usuários</h3>
              <p className="text-gray-600 text-lg font-medium">1.234 usuários cadastrados</p>
              <p className="text-sm text-gray-400 mt-1">+12 novos hoje</p>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">💰 Vendas</h3>
              <p className="text-gray-600 text-lg font-medium">R$ 47.500,00 em abril</p>
              <p className="text-sm text-gray-400 mt-1">+5% comparado a março</p>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">🕒 Últimos acessos</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Ana Souza - 08:23</li>
                <li>• João Lima - 09:15</li>
                <li>• Maria Clara - 10:02</li>
                <li>• Carlos Miguel - 10:37</li>
              </ul>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">📋 Relatórios</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Relatório de vendas - ✅ Enviado</li>
                <li>• Relatório de usuários - ⏳ Em andamento</li>
                <li>• Relatório de bugs - ❌ Pendência</li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    );
  }
  