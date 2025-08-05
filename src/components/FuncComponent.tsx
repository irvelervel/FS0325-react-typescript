import { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

interface FuncComponentProps {
  subtitle: string
  btnLabel?: string
}

const FuncComponent = ({ subtitle, btnLabel }: FuncComponentProps) => {
  const [count, setCount] = useState(0)
  const [movie, setMovie] = useState<null | { Title: string }>(null)
  // movie dovrebbe essere di tipo null | { Title: string }
  // lo fornisco manualmente a "movie" andando ad aggiungere un generic a useState

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4} className="text-center">
          <h2>Io invece sono un componente a funzione</h2>
          <h3>{subtitle}</h3>
          <p>
            Valore di count: {count} e il titolo del film è {movie?.Title}
          </p>
          {/* il ? si chiama "OPTIONAL CHAINING" e serve a "fermare" la valutazione
      della proprietà "Title" qualora movie sia null */}
          <Button
            variant="info"
            onClick={() => {
              setCount(count + 1)
              setMovie({
                Title: 'Interstellar',
              })
            }}
          >
            {btnLabel || 'CLICK'}
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default FuncComponent
