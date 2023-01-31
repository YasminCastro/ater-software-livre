import { useState, createContext, useMemo, useContext, useEffect } from "react";

interface IValue {
  isTabletSize: boolean;
  isMobileSize: boolean;
  windowSize: number;
}

const HeaderMobileContext = createContext({} as IValue);

export const useResponsive = (): IValue => useContext(HeaderMobileContext);

const ResponsiveProvider: React.FC<any> = ({ children }) => {
  const [isTabletSize, setTabletSize] = useState(false);
  const [isMobileSize, setMobileSize] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const value = useMemo(() => {
    return {
      windowSize,
      isTabletSize,
      isMobileSize,
    };
  }, [windowSize, isTabletSize, isMobileSize]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        setWindowSize(window.innerWidth);
      });

      return window.removeEventListener("resize", () => {
        setWindowSize(window.innerWidth);
      });
    }
  }, []);

  useEffect(() => {
    if (windowSize < 550) {
      setMobileSize(true);
    } else if (windowSize < 920) {
      setTabletSize(true);
    } else {
      setTabletSize(false);
      setMobileSize(false);
    }
  }, [windowSize]);

  return (
    <HeaderMobileContext.Provider value={value}>
      {children}
    </HeaderMobileContext.Provider>
  );
};

export default ResponsiveProvider;
