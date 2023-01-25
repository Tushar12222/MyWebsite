import React from 'react'
import PagesLayout from './PagesLayout';
import ph1 from 'D:/React - projects/my-website/src/images/phno1.png'
import ph2 from 'D:/React - projects/my-website/src/images/phno2.png'
import ph3 from 'D:/React - projects/my-website/src/images/phno3.png'


export default function PhonenumberApi() {
  return (
    <>
        <PagesLayout title="PhoneNo API" pic1={ph1} pic2={ph2} pic3={ph3} desktop="40%" mobile="57%"
        p1="This API is mainly built on Flask and Python"
        p2="Storage is possible thanks to SQLITE"
        p3="SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine."
        p4="SQLite is the most used database engine in the world."
        p5="This API helps you store phonenumbers and access them."
        p6="This API was built to understand the different endpoints in an API and how to use them."
        href="https://github.com/Tushar12222/-Flask-API"
        />
    </>
  );
}
