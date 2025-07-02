
import './App.css'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Movies from './pages/Movies';
import WishlistPage from './pages/WishlistPage';
import Auth from "./auth/Auth"; // ✅ CORRECT



const images = [
  { position: [0, 0, 1.5], rotation: [0, 0, 0], url: '/mygallery/1.jpg',title:"the batman" },
  { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: '/mygallery/2.jpeg',title:"american physcho" },
  { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: '/mygallery/3.jpeg' , title:"iron man "},
  { position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: '/mygallery/4.jpeg',title:"daredevil" },
  { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: '/mygallery/5.jpeg' ,title:"grown ups"},
  { position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: '/mygallery/6 (1).jpeg',title:"hangover" },
  { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: '/mygallery/7.jpeg',title:"f1"},
  { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: '/mygallery/8.jpeg',title:"Ballerina" },
  { position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: '/mygallery/9.jpeg' ,title:"deadpool x wolverine"}
]

function App() {
  

  return (
    <>

    <Routes>
      <Route path="/" element={<Home images={images}/>} />
      <Route path="/wishlist" element={<WishlistPage/>}/>
      <Route path="/login" element={<Auth/>} />
       <Route path="/movies" element={<Movies />} />
    </Routes>



    </>
  )
}

export default App
