import React from "react";
import Aboutmyself from "./Aboutmyself";
import Projectcardstack from "./Projectcardstack";

export default function Home() {
  return (
    <>
      <div className="container bg-light">
        <center>
          {" "}
          <p>
            {" "}
            <b>
              Click on the icon to get more info on the specific project
            </b>{" "}
          </p>
        </center>
      </div>
      <Projectcardstack />
      <br />
      <br />
      <div style={{ backgroundColor: "grey" }}>
        <Aboutmyself />
      </div>
    </>
  );
}
