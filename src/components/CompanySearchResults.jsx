import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Job from './Job'
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { showButton } from '../redux/action' // Adjust the path as necessary

const CompanySearchResults = () => {
  const dispatch = useDispatch()
  const [jobs, setJobs] = useState([])
  const params = useParams()

  const baseEndpoint =
    'https://strive-benchmark.herokuapp.com/api/jobs?company='

  useEffect(() => {
    getJobs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    dispatch(showButton(true, false))
  }, [dispatch])

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company)
      if (response.ok) {
        const { data } = await response.json()
        setJobs(data)
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          <Link to="/">
            <h5>Return to home</h5>
          </Link>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
