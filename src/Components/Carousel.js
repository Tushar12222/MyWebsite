import React from 'react'

export default function Carousel(props) {
  return (
    <>
     <div className="container" style={{width : `${props.width}` }}>
    <div id="carouselExampleAutoplaying" className="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-interval="2000">
  <div className="carousel-inner" >
    <div className="carousel-item active">
      <img src={props.pic1} className="d-block  w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={props.pic2} className="d-block  w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={props.pic3} className="d-block  w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>

    </>
  )
}
