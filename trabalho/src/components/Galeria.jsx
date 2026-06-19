import CardFoto from './CardFoto.jsx'

function Galeria() {
  const fotos = [
    {
      imagem: 'https://th.bing.com/th/id/OIP.1T7E0MbHPdz08-IsrIq9AAHaEK?w=325&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
      titulo: 'Interface moderna',
      descricao:
        'Layout inicial com destaque visual.'
    },
    {
      imagem: 'https://th.bing.com/th/id/OIP.MzJ55do2TQ84k9_wTwxPkgHaEK?w=273&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
      titulo: 'Componentes reutilizáveis',
      descricao:
        'Peças pequenas que podem ser combinadas.'
    },
    {
      imagem: 'https://th.bing.com/th/id/OIP.c9VZYhC_9zHJLFBlZkBXewHaEK?w=311&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
      titulo: 'Galeria responsiva',
      descricao:
        'Cards organizados para apresentar conteúdo.'
    }
  ]

  return (
    <section className="galeria">
      <div className="titulo-secao">
        <span>Galeria</span>
        <h2>Resultado visual da Home</h2>
      </div>

      <div className="grade-fotos">
        {fotos.map((foto) => (
          <CardFoto
            key={foto.titulo}
            imagem={foto.imagem}
            titulo={foto.titulo}
            descricao={foto.descricao}
          />
        ))}
      </div>
    </section>
  )
}

export default Galeria