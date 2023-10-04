import "./BrandingLayout.css";
import React, { ReactNode } from "react";

interface BrandingLayoutProps {
  currentPage: number;
  children: ReactNode;
}
const BrandingLayout: React.FC<BrandingLayoutProps> = ({
  currentPage,
  children,
}) => {
  return (
    <div className="wrapper">
      <div className="branding-container">
        <div className="current-page">Page {currentPage}</div>
        <div className="brand">ency</div>
        {children}
      </div>
    </div>
  );
};

export default BrandingLayout;
