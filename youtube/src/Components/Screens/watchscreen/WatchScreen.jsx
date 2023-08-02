import React from 'react'
import "./watchscreen.scss"
import { Row ,Col} from 'react-bootstrap'
import VideoMetaData from '../../videometadata/VideoMetaData'
import VideoHorizontal from '../../videohorizontal/VideoHorizontal'
import Comments from '../../comments/Comments'
const WatchScreen = () => {
  return (
    <Row>
        <Col Lg={8}>
             <div className="watchScreen__player">
             <iframe width="560" height="315" src="https://www.youtube.com/embed/0Po2g_qQwlk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             </div>
             <VideoMetaData/>
             <Comments/>
              
        </Col>
        <Col Lg={4}>
       {
        [...Array(10)].map(()=>{
           return <VideoHorizontal/>
        })
       }
        </Col>
    </Row>
  )
}

export default WatchScreen
