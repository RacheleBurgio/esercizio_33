import { Row, Col, Button } from 'react-bootstrap'
import { BsBookmark, BsFillBookmarkFill, BsTrash } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToFavouriteAction, removeFavouriteAction } from '../redux/action'

const Job = ({ data }) => {
  const dispatch = useDispatch()
  const favourites = useSelector((state) => state.favourites.content)
  const isVisible = useSelector((state) => state.showButton.isVisible)
  const isFavorited = favourites.findIndex((fav) => fav._id === data._id) !== -1

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      {isVisible ? (
        <>
          <Col xs={1}>
            <Button
              className={
                isFavorited
                  ? 'btn btn-warning'
                  : 'btn bg-light btn-outline-warning'
              }
              onClick={(e) => {
                e.preventDefault()
                dispatch(addToFavouriteAction(data))
              }}
            >
              {isFavorited ? <BsFillBookmarkFill /> : <BsBookmark />}
            </Button>
          </Col>
          <Col xs={3}>
            <Link to={`/${data.company_name}`}>{data.company_name}</Link>
          </Col>
          <Col xs={8}>
            <a href={data.url} target="_blank" rel="noreferrer">
              {data.title}
            </a>
          </Col>
        </>
      ) : (
        <>
          <Col xs={3}>
            <Link to={`/${data.company_name}`}>{data.company_name}</Link>
          </Col>
          <Col xs={8}>
            <a href={data.url} target="_blank" rel="noreferrer">
              {data.title}
            </a>
          </Col>
          <Col xs={1}>
            <Button
              variant="danger"
              onClick={() => dispatch(removeFavouriteAction(data._id))}
            >
              <BsTrash />
            </Button>
          </Col>
        </>
      )}
    </Row>
  )
}

export default Job
