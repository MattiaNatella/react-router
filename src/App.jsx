import AboutUs from "./pages/AboutUs"
import HomePage from "./pages/HomePage"
import PostsList from "./pages/PostsList"
import PostDetail from "./pages/PostDetail"
import DefaultLayout from "./layouts/DefaultLayout"
import NotFound404 from "./pages/NotFound404"
import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/chi-siamo" Component={AboutUs} />
          <Route path="/posts" Component={PostsList} />
          <Route path="/dettaglio-post/:id" Component={PostDetail} />
          <Route path="*" Component={NotFound404} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
