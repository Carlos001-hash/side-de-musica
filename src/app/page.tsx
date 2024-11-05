"use client"

import Header from "./components/Header";
import React, { useCallback } from 'react';
import Hero from "./components/Hero";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <div className="relative w-full h-screen flex flex-col bg-black  p-0 md:p-1.5">
      <div className="relative w-full h-full flex flex-col">
        <div className="relative w-full m-0 h-full  flex flex-row-reverse pb-20">
          <div className="relative w-full m-0 h-full  flex flex-row-reverse p-0 md:pb-1.5">
            <div className="relative w-full h-full flex flex-col ">
              <Header />
              <Hero />
            </div>
            <SideBar />
          </div>
        </div>
        <Footer />
      </div>
    </div>

  );
}
