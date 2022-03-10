
import { Route, Routes } from 'react-router';
import About from './about/about';
import './App.css';
import Feed from './feed/feed';
import Footer from './footer/footer';
import Header from './header/header';
import NewPost from './newPost/newPost';
import PostPage from './postPage/postPage';




function App() {
  return (
    <div className="App">
       <Header />
      <main>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/PostPage" element={<PostPage />} />
        
        <Route path="/NewPost" element={<NewPost />} />
        <Route path="/About" element={<About />}></Route>
        <Route path="/postPage/:id" element={<PostPage />} />
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
