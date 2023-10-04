import { createContext, ReactNode, useContext, useState } from "react";

type PresentationContextProps = {
  currentPage: number;
  goToPage: (page: number) => void;
};

const PresentationContext = createContext<PresentationContextProps | undefined>(
  undefined
);

export function usePresentation() {
  const context = useContext(PresentationContext);
  if (!context) {
    throw new Error(
      "usePresentation must be used within a PresentationProvider"
    );
  }
  return context;
}

type PresentationProviderProps = {
  children: ReactNode;
};

export function PresentationProvider({ children }: PresentationProviderProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <PresentationContext.Provider value={{ currentPage, goToPage }}>
      {children}
    </PresentationContext.Provider>
  );
}
