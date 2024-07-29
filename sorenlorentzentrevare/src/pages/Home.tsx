import React from 'react';
import '../App.css';

const Home = () => {
  return (
    <div className="App">
      <section className="#Home relative h-screen">
        <div className="absolute inset-0 bg-factory bg-cover bg-center"/>
        <div className="absolute inset-0 bg-gradient-to-b from-lightBrown to-darkBrown opacity-40 flex justify-center items-center"/>
        <div className="z-10 flex flex-col h-full items-center justify-center">
            <div className="relative space-y-5" style={{ top: '-50px' }}>
                <h2 className="font-bold text-3xl text-center text-white text-shadow-lg">TRAPPER - VINDUER - INNREDNING - RESTAURERING</h2>
                <h1 className="font-bold text-6xl text-center text-white text-shadow-lg">SØREN LORENTZEN TREVAREFABRIKK</h1>
            </div>
        </div>
      </section>
      <section className="#About relative h-screen">
        <div className="absolute inset-0 bg-working bg-cover bg-center"/>
        <div className="absolute inset-0 bg-gradient-to-b from-lightBrown to-darkBrown opacity-40"/>
      </section>
    </div> 
  );
}

export default Home;