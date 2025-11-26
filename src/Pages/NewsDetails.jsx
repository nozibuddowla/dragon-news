import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/homeLayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});
//   console.log(data, id, news);

  useEffect(() => {
    const newsDetails = data.find((news) => news.id === id);

    setNews(newsDetails);
  }, [data, id]);

  return (
    <div>
      <header className="py-3">
        <Header />
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 ">
        <section className="col-span-9">
          <h2 className="text-xl font-semibold mb-5 text-primary">
            Dragon News
          </h2>
          <NewsDetailsCard news={news} />
        </section>
        <section className="col-span-3">
          <aside>
            <RightAside />
          </aside>
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
