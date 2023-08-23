import React, { useState } from 'react';
// import { Routes, Route} from 'react-router-dom';

import './App.scss';
import Impressum from './elements/rechtliches/impressum';
import Datenschutz from './elements/rechtliches/datenschutz';
import ContactForm from './elements/form/form';

import logo from './assets/images/logo_v2.png';
import opener from './assets/icons/opener.svg';

//import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Repeater from './elements/repeater/repeater';
import Spotify from './elements/spotify/spotify';

import Footer from './elements/footer/footer';

function App() {

  const linklist = [ {headline: ' Spotify ', hyperlink: 'https://open.spotify.com/artist/7mz2YCy9p7wecxgUD5tvgF', alt: '', imageSource: '', plugIn: <Spotify/>},
                     {headline: ' Instagram ', hyperlink: 'https://www.instagram.com/taminoherzog/'},
                     {headline: ' LinkedIn ', hyperlink: 'https://www.linkedin.com/in/tamino-herzog-00265b286'},
                     {headline: ' E-Mail ', hyperlink: 'mailto:tamino@taminoherzog.de'},
                     {headline: ' Telefon ', hyperlink: 'tel:+4917646179396'}
                    ];

  return <div className="App">
            <div className="headerImage" id="top">
              <img src={logo} className='logo'/>
              <h2> Tamino Herzog </h2>
              <h1 className="masterHeadline"> Follow Me On: </h1>
            </div>
            <div className='repeaterBox'> 
              {linklist.map ((v,k) => {
                return(
                <Repeater 
                        key={`${k} ${v.headline} ${v.hyperlink} ${v.alt} ${v.imageSource} ${v.plugIn}`}
                        item={v}
                        index={k}
                />
                      );
              })
              }
            </div>

            <ContactForm />
            <Footer />
          </div>
  
}

export default App;