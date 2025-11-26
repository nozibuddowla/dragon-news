import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homeLayout/LeftAside";
import RightAside from "../components/homeLayout/RightAside";
import Loader from "../components/Loader/Loader";

const MainLayout = () => {
  const { state } = useNavigation();

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
        <aside className="col-span-3 sticky top-2 h-fit">
          <LeftAside />
        </aside>
        <section className="main col-span-6">
          {state === "loading" ? <Loader /> : <Outlet></Outlet>}
        </section>
        <aside className="col-span-3 sticky top-2 h-fit">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default MainLayout;
