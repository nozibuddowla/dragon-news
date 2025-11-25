import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

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
        (news) => news.others.is_today_pick === true
      );
        setCategoryNews(filterNews);
    } else if (newsId === 10) {
        const filterNews = data.filter(
          (news) => news.others.is_trending === true
        );
        setCategoryNews(filterNews);
    }
    else {
      const filterNews = data.filter((news) => news.category_id === newsId);
      setCategoryNews(filterNews);
    }
  }, [data, id]);

  return (
    <div>
      <p>Total - {categoryNews.length} news Found</p>
    </div>
  );
};

export default CategoryNews;
