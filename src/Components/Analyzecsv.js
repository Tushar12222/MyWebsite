import React from 'react'
import PagesLayout from './PagesLayout'
import a1 from "D:/React - projects/my-website/src/images/analyze1.png";
import a2 from "D:/React - projects/my-website/src/images/analyze2.png";
import a3 from "D:/React - projects/my-website/src/images/analyze3.png";


export default function Analyzecsv() {
  return (
    <>
    <PagesLayout title="Analyze CSV" pic1={a1} pic2={a2} pic3={a3} desktop="40%" mobile="57%"
    p1="This app is built on React , Bootstrap , Flask and PocketBase."
    p2="Pocket Base is an open source backend consisting of embedded database (SQLite) with real-time subscriptions, built-in auth management, convenient dashboard UI and simple REST-ish API."
    p3="The frontend sends the uploaded file to pocketbase to store the file and then requests the backend."
    p4="The backend retrieves the file from pocketbase with the help of id and name sent from the frontend."
    p5="The backend then processes the file and generates the pdf."
    p6="The pdf is stored as a blob type in react and served to the user."
    href="https://github.com/Tushar12222/AnalyzeCSV"
    />
    </>
  )
}
