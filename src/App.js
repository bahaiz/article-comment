import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://react-yazi-yorum.herokuapp.com/posts")
      .then((response) => {
        setArticles(response.data);
      });
  }, []);

  return (
    <div className="App">
      <header></header>
      <div className="ui raised very padded text container segment">
        <div className="ui relaxed divided list">
          {articles.map((article) => {
            return (
              <div key={article.id} className="item">
                <i className="large github middle aligned icon"></i>
                <div className="content">
                  <a className="header">{article.title}</a>
                  <div className="description">{article.created_at}</div>
                </div>
              </div>
            );
          })}

          
        </div>
      </div>
    </div>
  );
}

export default App;
