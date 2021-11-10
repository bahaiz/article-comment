import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ArticleList from "./components/ArticleList";
import ArticleDetail from "./components/ArticleDetail"; 

const App = () => {

  return (
    <Router>
      <div className="App">
        <header></header>
        <div className="ui raised very padded text container segment">
          <Routes>
            <Route exact path="/" element={<ArticleList />} />
            <Route path="/posts/:id" element={<ArticleDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
