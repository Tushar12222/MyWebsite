import React from "react";
import PagesLayout from "./PagesLayout";
import n1 from "D:/React - projects/my-website/src/images/note1.png";
import n2 from "D:/React - projects/my-website/src/images/note2.png";
import n3 from "D:/React - projects/my-website/src/images/note3.png";

export default function Inotebook() {
  return (
    <>
      <PagesLayout
        title="iNoteBook"
        pic1={n1}
        pic2={n2}
        pic3={n3}
        desktop="62%"
        mobile="79%"
        p1="An app built with React, Bootstrap, MongoDB and Express."
        p2="MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need."
        p3="Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."
        p4="This app uses JWT token to manage sessions."
        p5="JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA."
        p6="This app helps you store notes, edit or delete them."
        href="https://github.com/Tushar12222/iNoteBook"
      />
    </>
  );
}
