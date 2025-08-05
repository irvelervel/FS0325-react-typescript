import { Form, Container, Row, Col, Button } from 'react-bootstrap'
import { useState, FormEvent } from 'react'

const FormComponent = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const submitForm = (e: FormEvent) => {
    e.preventDefault()
    console.log('FORM SALVATO')
  }

  return (
    <Container>
      <Row className="justify-content-center my-5">
        <Col xs={12} md={6} lg={4}>
          <h3>Il Mio Form in TS</h3>
          <Form onSubmit={submitForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              INVIA
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default FormComponent
