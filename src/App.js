
import './App.css';
import ListProducts from "./components/ListProducts";
import {Routes,Route} from "react-router-dom";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";
import DetailProduct from "./components/DetailProduct";

function App() {
  return (
      <Routes>
        <Route path='/' element={<ListProducts/>} />
        <Route path='/create' element={<CreateProduct/>} />
        <Route path='/edit' element={<EditProduct/>} />
        <Route path='/detail' element={<DetailProduct/>} />
      </Routes>
  );
}

export default App;
