import React from 'react'
import PagesLayout from './PagesLayout'
import i1 from 'D:/React - projects/my-website/src/images/spotify.jpeg'
import i2 from 'D:/React - projects/my-website/src/images/insta.jpeg'
import i3 from 'D:/React - projects/my-website/src/images/youtube.jpeg'

export default function YoutubeSpotifyInstagram() {
  return (
    <>
        <PagesLayout title="Youtube, Spotify and Instagram UIs" pic1={i2} pic2={i1} pic3={i3} desktop="20%" mobile="37%"
        p1="All the three UIs have been built on Flutter"
        p2="All the three UIs follow the Model-View-Controller architecture (mvc)."
        p3="The Model-View-Controller (MVC) is an architectural pattern that separates an application into three main logical components: the model, the view, and the controller."
        p4="Each of these components are built to handle specific development aspects of an application."
        p5="This architecture allows for better testing."
        p6="This project was done to get a better understanding of structuring code."
        href="https://github.com/Tushar12222"
        />
    </>
  )
}
