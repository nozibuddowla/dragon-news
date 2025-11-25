import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homeLayout/LeftAside";
import RightAside from "../components/homeLayout/RightAside";

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
      <main className="w-11/12 mx-auto my-4 grid grid-cols-12 gap-6">
        <aside className="col-span-3">
          <LeftAside />
        </aside>
        <section className="main col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default MainLayout;
