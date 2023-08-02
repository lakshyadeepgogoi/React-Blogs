import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pageination from "./components/Pageination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css"

export default function App() {
  const{fetchBlogPosts} = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  },[]);
  return (
    <div>
      <Header/>
      <Blogs/>
      <Pageination/>
    </div>
  );
  }