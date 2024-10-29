import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { RxDoubleArrowUp } from "react-icons/rx";

const MainLayout = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <div>
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-2 animate-bounce  p-2 bg-blue-500 text-white rounded-full shadow-lg"
          >
            <RxDoubleArrowUp className="font-extrabold text-3xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default MainLayout;
