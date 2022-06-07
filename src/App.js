import Menu from "./components/menu";
import { Routes, Route } from 'react-router-dom';
import FirstPage from "./pages/first_page";
import SecondPage from "./pages/second_page";
import ThirdPage from "./pages/third_page";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route
          path="first_page"
          element={<FirstPage />}
        />
        <Route
          path="second_page"
          element={<SecondPage />}
        />
        <Route
          path="third_page"
          element={<ThirdPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
