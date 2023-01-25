import React from 'react'
import Carousel from './Carousel'
import { isMobile } from "react-device-detect";
import Githubicon from 'D:/React - projects/my-website/src/images/github (1).png'
import { Link } from 'react-router-dom';


export default function PagesLayout(props) {
  return (
    <>
    <div >
        <center>
        <div className="container text-dark bg-light" >
            <h3>{props.title}</h3>
        </div>
        </center>
       
</div>
<br />
<br />

<Carousel pic1={props.pic1} pic2={props.pic2} pic3={props.pic3} width={isMobile ? props.mobile : props.desktop}/>

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<div className="card border-primary">
      <div className="card-body">
        <h5 className="card-title">Description</h5>
        <ul>
        <p className="card-text">
            
              <li>{props.p1}</li>
              <li>{props.p2}</li>
              <li>{props.p3}</li>
              <li>{props.p4}</li>
              <li>{props.p5}</li>
              <li>{props.p6}</li>
            
        </p>
        </ul>
        <Link to="/" className="btn btn-success">Home</Link>
        <a href={props.href}><button className='btn btn-primary mx-2'>Github Repo <img src={Githubicon} alt="source" height="24px" width="25px" /></button></a>
      </div>
    </div>
    </>
  )
}
 