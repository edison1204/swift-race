import React, { useState } from "react";
import ReactPlayer from 'react-player';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


function LandingSection() {
  const [activeVideo, setActiveVideo] = useState('https://www.youtube.com/watch?v=qXibCG14JoQ');
  const [videos] = useState([
    {
      url: "https://www.youtube.com/watch?v=qXibCG14JoQ",
      thumbnail: "https://e0.365dm.com/22/01/2048x1152/skysports-f1-williams-2022_5634154.jpg",
    },
    {
      url: "https://www.youtube.com/watch?v=pOdpuIZ-Tyw",
      thumbnail: "https://cdn-1.motorsport.com/images/mgl/01WvmdqY/s8/alpine-2022-f1-car-1.jpg",
    },
    {
      url: "https://www.youtube.com/watch?v=2-J68QLStmo",
      thumbnail: "https://f1-gate.com/media/img2021/20210816-alpine-f1.jpg",
    },
    {
      url: "https://www.youtube.com/watch?v=lvTFpn1ladw",
      thumbnail: "https://phantom-marca.unidadeditorial.es/7c84858b8922746699d8d504a18f191e/f/jpg/assets/multimedia/imagenes/2020/12/29/16092563273484.jpg",
    },
    {
      url: "https://www.youtube.com/watch?v=FVoScgNlPNA",
      thumbnail: "https://cdn-1.motorsport.com/images/mgl/254B8MM0/s8/red-bull-racing-2022-f1-car-1.jpg",
    },
    {
      url: "https://www.youtube.com/watch?v=wzeg8L04q5A",
      thumbnail: "https://e0.365dm.com/21/07/2048x1152/skysports-f1-2022-car_5448285.jpg",
    },
    {
      url: "https://www.youtube.com/watch?v=pOdpuIZ-Tyw",
      thumbnail: "https://cdna.artstation.com/p/assets/images/images/027/637/238/large/dessga-arturo-garcia-liveries-aston-shot-2-pink.jpg?1592120010",
    },
    {
      url: "https://www.youtube.com/watch?v=2-J68QLStmo",
      thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/92f68097165881.5ebeadd5b193c.jpeg",
    },
  ]);

  return (
    <section id="about-section" className="about-section">
      <div className="page-header-wrapper mb-50">
        <h1 className="sub-header">BIG &nbsp; GEST</h1>
        <h1 className="main-header">WAR GAME</h1>
        <h1 className="sub-header">ON BLOCKCHAIN</h1>
      </div>

      <div className="text-wrapper mb-100">
        <p className="def-txt mb-30"> <b>Swift-Race</b> has exquisitely digital collectibles created using blockchain technology.
          Each collectible is matchless, genuine and varies in rarity. The Faraland Universe
          has a lot of different races like human, orc, angel, demon, dragonborn, elf and
          fairy which are waiting for the user to discover and collect.</p>

        <p className="def-txt">Last but not least, Faraland is also a multiplayer RPG NFT GAME that lets the
          user engage in the combat arena and profit from battles.</p>

      </div>
      <div className="video-wrapper mb-30">
  


        <ReactPlayer
          className='react-player'
          url={activeVideo}
        />

      </div>

      <div className="video-select-carousel">
        <CarouselProvider
          className="videos-carousel-wrapper"
          naturalSlideWidth={400}
          naturalSlideHeight={150}
          totalSlides={videos.length}
          visibleSlides={3}
          orientation="horizontal"
        >
          <ButtonBack className="slider-btn">&#8249;</ButtonBack>

          <Slider className="videos-carousel-slider">
            {(videos.map((video, ind) => (
              <Slide key={ind} index={ind} onClick={() => setActiveVideo(video.url)} className="video-carousel-slide">
                <img src={video.thumbnail} alt={`video_${ind}`} />
              </Slide>
            )))}

          </Slider>
          <ButtonNext className="slider-btn">&#8250;</ButtonNext>
        </CarouselProvider>
      </div>


    </section>
  )
}

export default LandingSection;
