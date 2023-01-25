import React from 'react'
import PagesLayout from './PagesLayout'
import b1 from 'D:/React - projects/my-website/src/images/blockchain5.png'
import b2 from 'D:/React - projects/my-website/src/images/blockchain2.png'
import b3 from 'D:/React - projects/my-website/src/images/blockchain7.png'




export default function Blockchain() {
  return (
    <>
    <PagesLayout title="Blockchain Backend for Supply Chain" pic1={b1} pic2={b2} pic3={b3} mobile="30%" desktop="13%"
    p1="Backend for a supply chain built on Blockchain with the help of Solidity."
    p2="Solidity is a statically-typed curly-braces programming language designed for developing smart contracts that run on Ethereum."
    p3="Ethereum is a technology for building apps and organizations, holding assets, transacting and communicating without being controlled by a central authority. There is no need to hand over all your personal details to use Ethereum - you keep control of your own data and what is being shared. Ethereum has its own cryptocurrency, Ether, which is used to pay for certain activities on the Ethereum network."
    p4="Blockchain is a shared, immutable ledger for recording transactions, tracking assets and building trust."
    p5="This program helps manage information on the blockchain between a single producer and consumer."
    p6="The backend can be further improved by introducing digital signature to ensure authenticity."
    href="https://github.com/Tushar12222/Basic-Solidity-backend-for-simple-supply-chain"
    />
    </>
  )
}
