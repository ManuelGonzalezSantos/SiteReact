import Container from '../components/Container.jsx'
import SecaoTexto from '../components/SecaoTexto.jsx'
import Botao from '../components/Botao.jsx'

function Produtos() {
  return (
    <Container>

      <SecaoTexto
        titulo="Produtos"
        texto="A página de produtos apresenta uma chamada simples."
      />

      <Botao texto="Ver detalhes" />

    </Container>
  )
}

export default Produtos