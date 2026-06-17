import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Empresa from './Pages/Empresa'
import Produtos from './Pages/Produtos'
import Contato from './Pages/Contato'
import './App.css'

function App() {
  const [paginaAtiva, setPaginaAtiva] =
    useState('Home')

  function renderizarPagina() {
    if (paginaAtiva === 'Empresa') return <Empresa />
    if (paginaAtiva === 'Produtos') return <Produtos />
    if (paginaAtiva === 'Contato') return <Contato />

    return <Home />
  }

  return (
    <>
      <Header
        paginaAtiva={paginaAtiva}
        aoMudarPagina={setPaginaAtiva}
      />

      <main className="conteudo-principal">
        {renderizarPagina()}
      </main>

      <Footer />
    </>
  )
}

export default App