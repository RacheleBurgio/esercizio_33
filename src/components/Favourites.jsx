import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux' // Import useDispatch
import Job from './Job'
import { Link } from 'react-router-dom'
import { hideButtons, showButton } from '../redux/action'
import { useEffect } from 'react'

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.content)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(hideButtons())
    return () => dispatch(showButton())
  }, [dispatch])

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Saved jobs: {favourites.length}</h1>
          <Link to="/">
            <h5>Return to home</h5>
          </Link>
          {favourites.map((jobData) => (
            <div key={jobData._id}>
              <Job data={jobData} key={jobData._id} />
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default Favourites
