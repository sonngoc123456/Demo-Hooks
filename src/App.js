
import './App.css';
import ListHooks from "./components/ListHooks";
import {Routes,Route} from "react-router-dom";
import HookReducer from "./components/HookReducer";
import CustomHook from "./components/CustomHook";


function App() {
  return (
      <Routes>
        <Route path='/' element={<ListHooks/>} />
        <Route path='/r' element={<HookReducer/>} />
        <Route path='/c' element={<CustomHook/>} />
      </Routes>
  );
}

export default App;
