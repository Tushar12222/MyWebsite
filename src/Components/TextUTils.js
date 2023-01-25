import React from 'react'
import PagesLayout from './PagesLayout'
import t1 from 'D:/React - projects/my-website/src/images/textutils1.png'
import t2 from 'D:/React - projects/my-website/src/images/textutils2.png'
import t3 from 'D:/React - projects/my-website/src/images/textutils3.png'

export default function TextUTils() {
  return (
    <>
        <PagesLayout title="TextUtils" pic1={t1} pic2={t2} pic3={t3} desktop="40%" mobile="60%"
        p1="TextUtils is a website written on the React framework."
        p2="React is a JavaScript library for building user interfaces."
        p3="JavaScript , often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries."
        p4="This website provides basic utilities for string or sentence manipulation."
        p5="It comes with an option for Dark Mode too."
        p6="It is currently hosted on GitHub Pages. It can be accessed with the link: https://github.com/Tushar12222/TextUtils/"
        href="https://github.com/Tushar12222/TextUtils"
        />
        
    </>
  )
}
