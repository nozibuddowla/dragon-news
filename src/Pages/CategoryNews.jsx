import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);

  const newsId = parseInt(id);

  useEffect(() => {
    if (newsId === 0) {
      setCategoryNews(data);
      return;
    } else if (newsId === 1) {
      const filterNews = data.filter(
        (news) => news?.others?.is_today_pick === true
      );
      setCategoryNews(filterNews);
    } else if (newsId === 10) {
      const filterNews = data.filter(
        (news) => news.others.is_trending === true
      );
      setCategoryNews(filterNews);
    } else {
      const filterNews = data.filter((news) => news.category_id === newsId);
      setCategoryNews(filterNews);
    }
  }, [data, id]);

  return (
    <div>
      <h2 className="font-semibold text-xl leading-[30px] mb-5">
        Total - <span className="text-secondary">{categoryNews.length}</span>{" "}
        news Found
      </h2>
      <div className="grid grid-cols-1 gap-5">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
