import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
      axios
        .get("https://react-yazi-yorum.herokuapp.com/posts")
        .then((response) => {
          setArticles(response.data);
        });
    }, []);

    return articles.map((article) => {
        return (
          <div key={article.id} className="ui relaxed divided list">
            <div className="item">
              <i className="large github middle aligned icon"></i>
              <div className="content">
                <Link to={`/posts/${article.id}`} className="header">
                  {article.title}
                </Link>
                <div className="description">{article.created_at}</div>
              </div>
            </div>
          </div>
        );
    })
}

export default ArticleList;