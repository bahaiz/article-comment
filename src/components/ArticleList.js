import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

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
            <div key={article.id} className="item">
            <i className="large github middle aligned icon"></i>
            <div className="content">
                <a className="header">{article.title}</a>
                <div className="description">{article.created_at}</div>
            </div>
            </div>
        );
    })
}

export default ArticleList;