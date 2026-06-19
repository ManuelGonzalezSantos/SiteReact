import Botao from './Botao'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-conteudo">
        <span className="etiqueta">
          Wiki guiada com react
        </span>

        <h1>
          Os Cavaleiros dos Zodiaco
        </h1>

        <p>
          Um site sobre a franquia "Os Cavaleiros dos Zodiaco"
        </p>

        <Botao texto="Começar agora" />
      </div>

      <div className="painel-projeto">
        <strong>Informações</strong>
        <span>Saga do santuário</span>
        <span>Saga de poseidom</span>
        <span>Saga de hasgard</span>
        <span>Saga de hades</span>
      </div>
    </section>
  )
}

export default Hero