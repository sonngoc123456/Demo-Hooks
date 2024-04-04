
import './App.css';
import ListHooks from "./components/ListHooks";
import {Routes,Route} from "react-router-dom";
import EditProduct from "./components/EditProduct";
import DetailProduct from "./components/DetailProduct";

function App() {
  return (
      <Routes>
        <Route path='/' element={<ListHooks/>} />
        <Route path='/edit' element={<EditProduct/>} />
        <Route path='/detail' element={<DetailProduct/>} />
      </Routes>
  );
}

export default App;
