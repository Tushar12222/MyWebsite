import React from 'react'
import PagesLayout from './PagesLayout'
import g1 from 'D:/React - projects/my-website/src/images/game1.png'
import g2 from 'D:/React - projects/my-website/src/images/game2.png'
import g3 from 'D:/React - projects/my-website/src/images/game3.png'


export default function Gameinfo() {
  return (
    <>
    <PagesLayout titile="Game Info" pic1={g1} pic2={g2} pic3={g3} desktop="34%" mobile="59%"
    p1="An app that is built on React and Bootstrap."
    p2="It uses the CheapShark API."
    p3="CheapShark is a price comparison website for digital PC Games. We keep track of prices across multiple stores including Steam, GreenManGaming, Fanatical, and many others."
    p4="Default images used to handle 404 error."
    p5="Uses a search bar to dynamically fetch data from the api."
    p6="Hosted on github pages: https://tushar12222.github.io/Game-Info/"
    href="https://github.com/Tushar12222/Game-Info"
    />
    </>
  )
}
