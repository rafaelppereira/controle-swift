import { GithubLogo } from "phosphor-react"

function App() {
  return (
    <main className="max-w-6xl mx-auto px-8 py-10">
      <header className="bg-white rounded-lg py-6 px-7 flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-gray-600 font-regular">Controle de projeto</h1>
          <p className="text-sm max-w-sm mt-2"><span className="text-red-500 font-semibold">V.1.0.0</span> - Alocados no <a className="text-blue-500 underline" href="https://github.com/rafaelppereira" target="_blank">Github Rafael Pereira</a> com a instituição Swift promotora</p>
        </div>
        <div className="hidden md:block">
          <span className="flex items-center gap-2 text-gray-600 animate-bounce text-sm">
            <GithubLogo size={20} />
            Branch main
          </span>

          <a
            href="https://github.com/rafaelppereira/swiftpromotora-frontend-form"
            target="_blank"
            className="bg-red-500 mt-2 block text-white px-4 py-1 rounded-lg hover:brightness-75 transition-all"
          >
            Clonar repositório
          </a>
        </div>
      </header>

      <div className="flex flex-col gap-4 mt-10">
        <div className="bg-white px-5 py-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl text-gray-600">Landing page</h1>
              <p className="text-sm text-gray-500">Página institucional da Swift promotora</p>
            </div>

            <a 
              href="https://www.figma.com/file/EKpWLETiHX0Mtd8a0dJubd/Swift-promotora" 
              target="_blank"
              className="bg-blue-500 hidden md:flex text-white px-5 py-2 rounded-lg text-sm hover:brightness-75 transition-all"
            >
              Acessar projeto
            </a>
          </div>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value="20" 
            step="10" 
            disabled
            className="w-full mt-10 h-2 bg-gray-200 rounded-lg appearance-none dark:bg-gray-600 " 
          />
          <span className="text-sm text-green-500 mt-4 block animate-pulse">20% do projeto</span>
        </div>

        <div className="bg-white px-5 py-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl text-gray-600">Criação da persona Sof.ia</h1>
              <p className="text-sm text-gray-500">Persona com detalhes de personalidade</p>
            </div>

            <a 
              href="https://www.figma.com/file/EKpWLETiHX0Mtd8a0dJubd/Swift-promotora" 
              target="_blank"
              className="bg-blue-500 hidden md:flex text-white px-5 py-2 rounded-lg text-sm hover:brightness-75 transition-all"
            >
              Acessar projeto
            </a>
          </div>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value="100" 
            step="10" 
            disabled
            className="w-full mt-10 h-2 bg-red-500 rounded-lg appearance-none dark:bg-gray-600 " 
          />
          <span className="text-sm text-green-500 mt-4 block animate-pulse">100% do projeto</span>
        </div>

        <div className="bg-white px-5 py-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl text-gray-600">Dashboard de gerenciamento</h1>
              <p className="text-sm text-gray-500">Dashboard para tratativa de dados vindo do formulário</p>
            </div>

            <a 
              href="" 
              target="_blank"
              className="bg-blue-500 hidden md:flex text-white px-5 py-2 rounded-lg text-sm hover:brightness-75 transition-all"
            >
              Acessar projeto
            </a>
          </div>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value="60" 
            step="10" 
            disabled
            className="w-full mt-10 h-2 bg-red- rounded-lg appearance-none dark:bg-gray-600 " 
          />
          <span className="text-sm text-green-500 mt-4 block animate-pulse">60% do projeto</span>
        </div>

        <div className="bg-white px-5 py-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl text-gray-600">Formulário de interação</h1>
              <p className="text-sm text-gray-500">Para coleta de dados das contratações</p>
            </div>

            <a 
              href="https://swiftpromotora.com.br/app/fgts" 
              target="_blank"
              className="bg-blue-500 hidden md:flex text-white px-5 py-2 rounded-lg text-sm hover:brightness-75 transition-all"
            >
              Acessar projeto
            </a>
          </div>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value="90" 
            step="10" 
            disabled
            className="w-full mt-10 h-2 bg-red- rounded-lg appearance-none dark:bg-gray-600 " 
          />
          <span className="text-sm text-green-500 mt-4 block animate-pulse">90% do projeto</span>
        </div>
      </div>
    </main>
  )
}

export default App
