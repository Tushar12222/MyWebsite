import React from 'react'

import Todo from 'D:/React - projects/my-website/src/images/flutter.png'
import Uis from 'D:/React - projects/my-website/src/images/flutter.png'
import Textutils from 'D:/React - projects/my-website/src/images/react.png'
import Blockchain from 'D:/React - projects/my-website/src/images/solidity.png'
import Phonenumberapi from 'D:/React - projects/my-website/src/images/python.png'
import Todowebapp from 'D:/React - projects/my-website/src/images/python.png'
import NewsApp from 'D:/React - projects/my-website/src/images/react.png'
import Gameinfo from 'D:/React - projects/my-website/src/images/react.png'
import iNoteBook from 'D:/React - projects/my-website/src/images/mern.jpg'

import { Link } from 'react-router-dom'

export default function Projectcardstack() {
  return (
    <>
    <center>
      <div className="row row-cols-1 row-cols-md-5 g-4 my-1 mx-2">
  <div className="col">
    <div className="card border-success h-100" >
    <Link to="/todoapp">

      <img src={Todo}  className="card-img-top" alt="..."/>
      </Link>
      <br />
      <div className="card-body">
        <h5 className="card-title"> ToDo App </h5>
        
      </div>
    </div>
    
  </div>

  <div className="col">
    <div className="card border-success h-100">
    <Link to="/ysiuis">

      <img src={Uis}  className="card-img-top" alt="..."/>
      </Link>
      <br />
      <div className="card-body">
        <h5 className="card-title">Youtube, Spotify, Instagram UIs</h5>
      </div>
    </div>
    
  </div>
  <div className="col">
    <div className="card border-success h-100">
    <Link to="/todowebapp">

      <img src={Todowebapp}  className="card-img-top" alt="..."/>
      </Link>
      <br />
      <div className="card-body">
        <h5 className="card-title">Todo Web App</h5>
      </div>
    </div>
    
  </div>
  <div className="col">
    <div className="card border-success h-100">
    <Link to="/phnoapi">

      <img src={Phonenumberapi}  className="card-img-top" alt="..."/>
      </Link>
      <br />
      <div className="card-body">
        <h5 className="card-title">Phonenumber API</h5>
      </div>
    </div>
    
  </div>
  <div className="col">
    <div className="card border-success h-100">
    <Link to="textutils">

      <img src={Textutils}  className="card-img-top" alt="..."/>
      </Link>
      <br />
      <div className="card-body">
        <h5 className="card-title">TextUtils</h5>
      </div>
    </div>
    
  </div>
  
  <div className="col">
    <div className="card border-success h-100">
    <Link to="/blockchain">

      <img src={Blockchain}  className="card-img-top" alt="..."/>
      </Link>
      <br />
      <div className="card-body">
        <h5 className="card-title">Blockchain for Supply Chain</h5>
      </div>
    </div>
    
  </div>

  <div className="col">
    <div className="card border-success h-100">
    <Link to="/newsapp">

      <img src={NewsApp}  className="card-img-top" alt="..."/>
      </Link>
      <br />
      <div className="card-body">
        <h5 className="card-title">The Daily News App</h5>
      </div>
    </div>
    
  </div>
  <div className="col">
    <div className="card border-success h-100">
    <Link to="/gameinfo">

      <img src={Gameinfo}  className="card-img-top" alt="..."/>
      </Link>
      <br />
      <div className="card-body">
        <h5 className="card-title">Game Info</h5>
      </div>
    </div>
    
  </div>
  <div className="col">
    <div className="card border-success h-100">
    <Link to="/inotebook">

      <img src={iNoteBook}  className="card-img-top" alt="..."/>
      </Link>
      <br />
      <div className="card-body">
        <h5 className="card-title">iNoteBook</h5>
      </div>
    </div>
    
  </div>

</div>  
</center>      
    
  
    </>
  )
}
