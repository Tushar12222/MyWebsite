import React from 'react'
import PagesLayout from './PagesLayout'
import c1 from 'D:/React - projects/my-website/src/images/chat1.png'
import c2 from 'D:/React - projects/my-website/src/images/chat2.png'
import c3 from 'D:/React - projects/my-website/src/images/chat3.png'


export default function Chat() {
  return (
    <>
    <PagesLayout title="Chat App" pic1={c1} pic2={c2} pic3={c3} desktop="63%" mobile="80%"
    p1="A chat app built with React, Bootstrap and PocketBase."
    p2="It uses server side events from Pocketbase to detect changes in the database."
    p3="It then updates the messages on the UI in realtime."
    p4="The app is containerized."
    p5="Docker compose was used to build the microservice architecture."
    p6="This app provides messaging ability to any registered user on the app."
    href="https://github.com/Tushar12222/Chat_App"
    />
    </>
  )
}
