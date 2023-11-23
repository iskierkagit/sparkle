import React from 'react'
import Carousel from 'better-react-carousel'
import VideoBg from '../../Assets/video/sand_2.mp4'

const Gallery = () => {
  return (
    <div>
      <Carousel cols={3} rows={1} gap={5} loop>
        <Carousel.Item>
          <img width="100%" src={require("../../Assets/img/1.jpg")} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={require("../../Assets/img/2.jpg")} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={require("../../Assets/img/3.jpg")} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={require("../../Assets/img/4.jpg")} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={require("../../Assets/img/5.jpg")} />
        </Carousel.Item>
      </Carousel>
      <video src={VideoBg} autoPlay loop muted playsInline/>
    </div>
  )
}

export default Gallery;
