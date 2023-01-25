import React from 'react'
import PagesLayout from './PagesLayout'
import tw1 from 'D:/React - projects/my-website/src/images/toweb1.png'
import tw2 from 'D:/React - projects/my-website/src/images/toweb2.png'
import tw3 from 'D:/React - projects/my-website/src/images/toweb3.png'

export default function TodoWebapp() {
  return (
    <>
    <PagesLayout title="Todo Web App" pic1={tw1} pic2={tw2} pic3={tw3} desktop="40%" mobile="60%"
    p1="This web app is mostly built on Flask and Python."
    p2="Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation."
    p3="Python is dynamically typed and garbage-collected."
    p4="Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries"
    p5="Storage is possible thanks to SQLITE."
    p6="This web app helps store your daily to do tasks."
    href="https://github.com/Tushar12222/Todo-web-app-using-flask"
    />
    </>
  )
}
