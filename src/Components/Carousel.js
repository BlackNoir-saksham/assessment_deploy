import React from "react";
import "./Carousel.css";
import CarouselItem1 from "./CarouselItem1";
import CarouselItem2 from "./CarouselItem2";
import CarouselItem3 from "./CarouselItem3";
function Carousel() {
  return (
    <>
      <div className="sliding_carousel">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
        data-interval="1000"
        
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <CarouselItem1 />
          </div>
          <div class="carousel-item">
            <CarouselItem2 />
          </div>
          <div class="carousel-item">
            <CarouselItem3 />
          </div>
        </div>
      </div>
      </div>
      <div className="carousel_visible">
      <CarouselItem1/>
      <CarouselItem2/>
      <CarouselItem3/>
      </div>
    </>
  );
}

export default Carousel;
