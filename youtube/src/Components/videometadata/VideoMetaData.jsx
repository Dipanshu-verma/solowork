import React from 'react'
import "./videometadata.scss"
import numeral from 'numeral'
import moment from 'moment'
import ReactShowMoreText from 'react-show-more-text'
import { MdThumbUp,MdThumbDown } from 'react-icons/md'
const VideoMetaData = () => {
  return (
    <div className="videoMetaData py-2">
        <div className="videoMetaData__top">
            <h5>title</h5>
            <div className="d-flex justify-content-between align-items-center py-1">
            <span> {numeral(3000).format("0.a")} views • 
            {moment("2020-06-06").fromNow()}</span>
            
            <div>
                <span className='mr-3'>
                    <MdThumbUp size={23}/>
                    {numeral(3000).format("0.a")}
                </span>
                <span className='mr-3'>
                    <MdThumbDown size={23}/>
                   { numeral(3000).format("0.a")}
                </span>
            </div>
            </div>
        </div>
        <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
            <div className='d-flex'>
            <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="" className='rounded-circle '/>
          <div className='d-flex flex-column  px-3'>
                  <span>Dhruv </span>
                  <span>{numeral(3000).format("0.a")} Subscriber</span>
          </div>
            </div>
            <button className="btn border-0 p-2 m-2">Subscribe</button>
        </div>
        <div className="videoMetaData__description">
        <ReactShowMoreText
        lines={3}
        more="Show More"
        less="Show Less"
        anchorClass='showMoreText'
        expanded={false}
        >
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, quam rem autem culpa provident, quia adipisci magnam fugiat sapiente, nulla ex. Nihil sapiente eligendi iste consequuntur quia ex laudantium? Nobis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, quam rem autem culpa provident, quia adipisci magnam fugiat sapiente, nulla ex. Nihil sapiente eligendi iste consequuntur quia ex laudantium? Nobis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, quam rem autem culpa provident, quia adipisci magnam fugiat sapiente, nulla ex. Nihil sapiente eligendi iste consequuntur quia ex laudantium? Nobis.
               </ReactShowMoreText>
        </div>
    </div>
  )
}

export default VideoMetaData
