import { Col, Card } from 'react-bootstrap'
import Book from '../types/Book'

interface SingleBookProps {
  bookToShow: Book
}

const SingleBook = (props: SingleBookProps) => {
  return (
    <Col xs={12} md={4} key={props.bookToShow.id}>
      <Card>
        <Card.Img variant="top" src={props.bookToShow.imageUrl} />
        <Card.Body>
          <Card.Title>{props.bookToShow.title}</Card.Title>
          <Card.Text>{props.bookToShow.description}</Card.Text>
          <Card.Text>{props.bookToShow.price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleBook
