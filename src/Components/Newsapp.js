import React from 'react'
import PagesLayout from './PagesLayout'
import n1 from 'D:/React - projects/my-website/src/images/news1.png'
import n2 from 'D:/React - projects/my-website/src/images/new2.png'
import n3 from 'D:/React - projects/my-website/src/images/news3.png'



export default function Newsapp() {
  return (
    <>
        <PagesLayout title="The Daily News App" pic1={n1} pic2={n2} pic3={n3} desktop="32%" mobile="50%"
        p1="This Daily News app is mostly built with React and Bootstrap."
        p2="Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites."
        p3="This app is built on class based components."
        p4="This app makes use of an api called the News API."
        p5="This app comes with infinite scrolling which loads new news every hour."
        p6="This app could not be hosted since the api is only free during development."
        href="https://github.com/Tushar12222/News-App"
        />
    </>
  )
}
