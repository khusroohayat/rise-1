import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { pageRoutes } from "@/constants/constants";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "@/components/common/ScrollToTop";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // animation duration in ms
      once: false, // animate only once
    });
  }, []);

  return (
    <>
      <ScrollToTop />

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
