// questo componente recupererà dei dati da un'API e li utilizzerà
// per creare una semplice libreria

import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import SingleBook from './SingleBook'
import Book from '../types/Book'

// https://striveschool-api.herokuapp.com/food-books

const FetchComponent = () => {
  const [books, setBooks] = useState<Book[]>([])
  // quello che ho fatto sopra è stato FORNIRE a TS la "forma" di books
  // se non lo fate, TS deduce qualcosa di MOLTO SBAGLIATO da un "[]":
  // ovvero un array di NEVER
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getBooks()
  }, [])

  const getBooks = () => {
    fetch('https://striveschool-api.herokuapp.com/food-books')
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('errore nella chiamata API')
        }
      })
      .then((data: Book[]) => {
        console.log('DATA', data)
        setBooks(data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log('errore', err)
        setIsLoading(false)
      })
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h2 className="text-center">Libri di cucina</h2>
        </Col>
      </Row>
      <Row>
        {isLoading ? (
          <Col xs={12} md={6}>
            <Spinner animation="border" variant="success" />
          </Col>
        ) : (
          <>
            {books.map((b) => {
              return <SingleBook bookToShow={b} />
            })}
          </>
        )}
      </Row>
    </Container>
  )
}

export default FetchComponent
