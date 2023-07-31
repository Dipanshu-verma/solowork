import React, { useEffect } from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import Categories from '../../categorybar/Categories'
import Video from '../../video/Video'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideos } from '../../../Redux/actions/video.action'
 
const HomeScreen = () => {

 const dispatch  =  useDispatch();

 useEffect(()=>{
  
  dispatch(getPopularVideos())

 },[dispatch])

 const {videos} = useSelector(state=> state.homeVideos)
console.log(videos);

  return (
    <Container>
      <Categories/>
      <Row>
        {
          videos.map((video)=>{
            return(
                <Col lg={4} md={3}>
                    <Video key={video.id} video={video} />
                </Col>
            )

            })
        }
      </Row>
    </Container>
  )
}

export default HomeScreen
