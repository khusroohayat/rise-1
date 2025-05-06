import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { pageRoutes } from "./constants/constants";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {pageRoutes.map((item, idx) => (
          <Route key={idx} path={item.path} element={item.element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
