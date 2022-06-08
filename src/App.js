import { useEffect } from "react";
import Menu from "./components/menu";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import FirstPage from "./pages/first_page";
import SecondPage from "./pages/second_page";
import ThirdPage from "./pages/third_page";
import TotalPage from "./pages/total_page";
import links from './links';
import { usePath } from "./hooks";

function App() {
  const { pathname } = useLocation();
  const [ target ] = usePath(pathname);
  const navigate = useNavigate();
  useEffect(() => {
    navigate(target);
  }, [target, navigate]);
  return (
    <div className="App">
      <Menu />
      <Routes>
      <Route
          path={links.total}
          element={<TotalPage />}
        />
        <Route
          path={links.first}
          element={<FirstPage />}
        />
        <Route
          path={links.second}
          element={<SecondPage />}
        />
        <Route
          path={links.third}
          element={<ThirdPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
