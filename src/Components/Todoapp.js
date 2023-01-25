import React from 'react'

import Todo from 'D:/React - projects/my-website/src/images/todo4.jpeg'

import Todo1 from 'D:/React - projects/my-website/src/images/todo2.jpeg'
import Todo2 from 'D:/React - projects/my-website/src/images/todo3.jpeg'
import PagesLayout from './PagesLayout'





export default function Todoapp() {

  return (
    <>
    <PagesLayout title="Todo App" pic1={Todo1} pic2={Todo2} pic3={Todo} mobile="30%" desktop="13%"
    p1="A todo app built to help you remember your day to day task."
    p2="The app is built on mainly Flutter."
    p3="Flutter is an open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single codebase."
    p4="The app consists of a simple auth and sign up page which was brought into the app using Firebase."
    p5="The storage of the tasks was done locally using Hive."
    p6="Hive is a lightweight and blazing fast key-value database written in pure Dart, which allows you to store and sync application data offline.
    As a key-value data store written in Dart, Hive supports primitive and complex data structures while providing the highest level of performance."
    href="https://github.com/Tushar12222/ToDo-App"

    />
    
    

   
    </>
  )
}
