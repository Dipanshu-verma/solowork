import React from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import Categories from '../../categorybar/Categories'
import Video from '../../video/Video'

const HomeScreen = () => {
  return (
    <Container>
      <Categories/>
      <Row>
        {
            [...new Array(20)].map(()=>{
            return(
                <Col lg={3} md={4}>
                    <Video />
                </Col>
            )

            })
        }
      </Row>
    </Container>
  )
}

export default HomeScreen
