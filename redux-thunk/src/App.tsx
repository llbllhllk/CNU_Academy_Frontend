import DefaultTemplate from "./components/DefaultTemplate";
import { Route, Routes } from "react-router";
import { PostsPage } from "./pages";

function App() {
  return (
    <DefaultTemplate>
      <PostsPage />
      {/* <Routes>
        <Route path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/posts">
          <PostsPage />
        </Route>
        <Route path="*"></Route>
      </Routes> */}
    </DefaultTemplate>
  );
}

export default App;
