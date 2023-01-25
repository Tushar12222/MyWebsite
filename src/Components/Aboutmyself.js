import React from 'react'
import ProfilePic from 'D:/React - projects/my-website/src/images/profilepic.png'
import Leetcode from 'D:/React - projects/my-website/src/images/leetcode.svg'

export default function Aboutmyself() {
    
  return (
    <>
        
            
       <div className="card  border-warning text-wrap text-bg-info" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={ProfilePic} className="img-fluid rounded-start my-2" alt="Profile Pic"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Tushar Girish H</h5>
        <p className="card-text fst-italic">Born and brought up in Bangalore. <br /> Currently studying at VIT Vellore. <br /> (B-Tech Mechanical) <br /> Played for the FootBall team at both primary and junior college levels at the KISA tournament. <br />Always looking for new tech to explore. <br />Enthusiast and a FootBaller at heart. <br />Would love to get an opportunity to work for a tech company. <br />Just a beginner at Leetcode so dont judge! <br /> <br /> <br /> <b>Contacts:</b>  <br />Email: <a href="">tusharh75@gmail.com</a> <br /> Phone no: +91 8197008560 
        <br /> <br /> <b>Coding:</b>  <br />  <a href="https://leetcode.com/TusharGH/">   <img src={Leetcode} alt="Leetcode" height="50px" width="50px"/></a>
        </p>
      </div>
    </div>
  </div>
</div>


    
        
    </>
  );
}
