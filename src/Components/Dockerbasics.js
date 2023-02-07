import React from 'react'
import PagesLayout from './PagesLayout'
import d1 from 'D:/React - projects/my-website/src/images/doc1.png'
import d2 from 'D:/React - projects/my-website/src/images/doc2.png'
import d3 from 'D:/React - projects/my-website/src/images/doc3.png'

export default function Dockerbasics() {
  return (
    <>
    <PagesLayout title="Docker Basics" pic1={d1} pic2={d2} pic3={d3} desktop="57%" mobile="74%"
    p1="A basic app built on React and Spring Boot."
    p2="Spring Boot is an open source Java-based framework used to create a micro Service."
    p3="The frontend and backend were containerized."
    p4="The frontend React used a base image from Dockerhub named alpine and the backend used a base image named openjdk."
    p5="This app was made to understand what containers are and how are they deployed from images and what Docker is."
    p6="This app just takes a string input from the user and returns it in uppercase with the help of spring boot."
    href="https://github.com/Tushar12222/Docker-Basics"
    />
    </>
  )
}
