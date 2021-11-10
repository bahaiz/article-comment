import ArticleList from "./components/ArticleList";

function App() {

  return (
    <div className="App">
      <header></header>
      <div className="ui raised very padded text container segment">
        <div className="ui relaxed divided list">
          <ArticleList />
        </div>
      </div>
    </div>
  );
}

export default App;
