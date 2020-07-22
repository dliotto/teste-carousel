import React, { Component, useEffect, useState, useRef } from 'react';
import Slider from "react-slick";
import Iframe from 'react-iframe';
import localIpUrl from 'local-ip-url';
import './App.css';

//https://react-slick.neostack.com/docs/example/dynamic-slides
//https://www.npmjs.com/package/react-iframe

const App = () => {
    const slider = useRef();

    useEffect(() => {
      console.log(localIpUrl('public', 'ipv4'));

    },[]);

    const [ip, setIp] = useState();
 
  
  function gotTo(){
    slider.slickGoTo(2);
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    lazyLoad: true
  };

    return (
      <>
        <div>
          <h2> Single Item</h2>
          <Slider ref={slider} {...settings}>
            <div>
              <Iframe url="https://blog.2amgaming.com/2019/11/otimizar-pc-csgo-maximo-fps/"
                      width="100%"
                      height="500px"
                      id="myId"
                      className="myClassname"
                      display="initial"
                      position="relative"/>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </>
    );
}

export default App;
