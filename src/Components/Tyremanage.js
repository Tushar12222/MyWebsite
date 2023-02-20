import React from 'react'
import PagesLayout from './PagesLayout'
import t1 from 'D:/React - projects/my-website/src/images/tyre1.png'
import t2 from 'D:/React - projects/my-website/src/images/tyre2.png'
import t3 from 'D:/React - projects/my-website/src/images/tyre3.png'


export default function Tyremanage() {
  return (
    <>
     <PagesLayout title="" pic1={t1} pic2={t2} pic3={t3} desktop="68%" mobile="85%"
     p1="This is a management app built with React, Bootstrap and PocketBase."
     p2="PocketBase is a lightweight backend as a service provider."
     p3="The app is containerized with the help of docker compose."
     p4="Docker-compose is a tool provided by Docker to help build, run and manage app containers that have a microservice architecture."
     p5="For data persistence, a volume was created so the orders can be stored and not lost once the conatiners are no longer running."
     p6="This app helps create, update , delete and read orders."
     href="https://github.com/Tushar12222/Tyre_Distribution_management_system"
     />
    </>
  )
}
