import "./Presentation.css";
import React, { useEffect, useState } from "react";
import { usePresentation } from "../../context/PresentationContext.tsx";
import Page01 from "./slides/Page01.tsx";
import Page02 from "./slides/Page02.tsx";
import Page03 from "./slides/Page03.tsx";
import BrandingLayout from "./components/BrandingLayout.tsx";

const Presentation: React.FC = () => {
  const { currentPage, goToPage } = usePresentation();
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  const handlePageChange = (nextPage: number) => {
    setIsFadingOut(true);
    setTimeout(() => {
      goToPage(nextPage);
      setIsFadingOut(false);
    }, 500); // Adjust the timeout to match your CSS transition duration
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" && currentPage > 1) {
        handlePageChange(currentPage - 1);
      } else if (event.key === "ArrowRight" && currentPage < pages.length) {
        handlePageChange(currentPage + 1);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentPage, goToPage]);

  const pages = [Page01, Page02, Page03];

  return (
    <div className="presentation">
      <BrandingLayout currentPage={currentPage}>
        <div className={`page ${isFadingOut ? "fade-out" : "fade-in"}`}>
          {React.createElement(pages[currentPage - 1])}
        </div>
      </BrandingLayout>
    </div>
  );
};

export default Presentation;
