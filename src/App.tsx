// import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

import './App.css';
import { Parent , Pr} from './components/parent';
import {Textchild, Objchild, Arrchild} from './components/childprops'
import { Eventprop } from './components/Eventprop';
import { TypeEvent } from './components/typeEvent';

import HeaderComp from './components/headerComp';
import FooterComp from './components/footerComp';
import { IndexBody } from './components/indexBody';

const propobj = {
  first: "alice",
  last: "ping"
}

const person = [
  {name: "Bob"},
  {name: "Alice"},
  {name: "Jonny"}
]

// type indexProptype = {
//     cards: {
//         imagefile: string
//         title: string
//         description: string
//     }[]
// }
const IndexCardsData = [
  {
    imagefile : './logo192.png',
    title : "image1",
    description : "first image"
  },
  {
    imagefile : './logo192.png',
    title : "image2",
    description : "second image"
  },
  {
    imagefile : './logo192.png',
    title : "image3",
    description : "third image"
  },
  {
    imagefile : './logo192.png',
    title : "image1",
    description : "first image"
  },
  {
    imagefile : './logo192.png',
    title : "image2",
    description : "second image"
  },
  {
    imagefile : './logo192.png',
    title : "image3",
    description : "third image"
  }
]

function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <HeaderComp/>
        {/* <header>
          <nav>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/about"> About </NavLink>
          </nav>
        </header> */}


        <main>
          <Routes>
            <Route path='/' element={<IndexBody cards={IndexCardsData}/>}/>
            <Route path='about' element={
              <Eventprop clickhandler={(event) => {
                console.log("button Clicked");
                console.log(event);
              }}>Child text</Eventprop>
            }/>
          </Routes>
        </main>

            <FooterComp/>

      
      </BrowserRouter>


      {/* <Eventprop clickhandler={(event) => {
        console.log("button Clicked");
        console.log(event);
      }}>Child text</Eventprop>

      <TypeEvent value='' handlechange={(event) => {
        console.log(event)
      }}></TypeEvent> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
