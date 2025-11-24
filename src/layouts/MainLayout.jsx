import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
      <div>
        <header>
          <Header />
        </header>
        <section className="w-11/12 mx-auto my-4">
          <LatestNews />
        </section>
        <nav className="w-11/12 mx-auto my-4">
          <Navbar />
        </nav>
        <main>
          <section className="left_nav"></section>
          <section className="main">
            <Outlet />
          </section>
          <section className="right_nav"></section>
        </main>
      </div>
    );
};

export default MainLayout;