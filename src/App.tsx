import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarandFooter/Navbar';
import { Footer } from './layouts/NavbarandFooter/footer';
import { HomePage } from './layouts/HomePage/HomePage';

export const App = () => {
  return (
    <div>
    <Navbar />
     <HomePage/>
    <Footer/>
    </div>
        );
      }


