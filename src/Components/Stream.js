import React from 'react'
import PagesLayout from './PagesLayout'
import s1 from 'D:/React - projects/my-website/src/images/stream1.png'
import s2 from 'D:/React - projects/my-website/src/images/stream2.png'
import s3 from 'D:/React - projects/my-website/src/images/stream3.png'


export default function Stream() {
  return (
    <>
    <PagesLayout title="Basic Youtube" pic1={s1} pic2={s2} pic3={s3} desktop="62%" mobile="79%" 
    p1="An app built with React , Bootstrap and PocketBase."
    p2="This app provides search filtering."
    p3="Search Filtering was implemented with the help of pocketbase's filltering api."
    p4="It compares the query to all the video titles and checks if it contains the query and if yes it then displays it as an option in the search dropdown."
    p5="This app is the most basic version of youtube."
    p6="The app lets you to add and view videos anonymously."
    href="https://github.com/Tushar12222/Basic-Youtube"
    />
    </>
  )
}
