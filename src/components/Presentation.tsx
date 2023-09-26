import "./Presentation.css";
import React, { useEffect, useState } from "react";
import { usePresentation } from "../context/PresentationContext";

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
      } else if (event.key === "ArrowRight") {
        handlePageChange(currentPage + 1);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentPage, goToPage]);

  return (
    <div className="presentation">
      <div className={`page ${isFadingOut ? "fade-out" : "fade-in"}`}>
        <h1>Page {currentPage}</h1>
      </div>
    </div>
  );
};

export default Presentation;
