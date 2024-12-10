import { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Job from './Job'
import { BsBookmarkStar } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getJobsAction } from '../redux/action'

const MainSearch = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')
  const jobs = useSelector((state) => state.jobs.content)

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(getJobsAction(query))
  }

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={9} className="ms-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={1} className="me-auto">
          <Link to="/favourites" className="btn btn-warning">
            <BsBookmarkStar />
          </Link>
        </Col>

        <Col xs={10} className="mx-auto mb-5">
          {jobs &&
            jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
