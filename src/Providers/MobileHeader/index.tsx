import { useState, createContext, useMemo, useContext, useEffect } from "react";

interface IValue {
  isMobile: boolean;
  windowSize: number;
}

const HeaderMobileContext = createContext({} as IValue);

export const useMobile = (): IValue => useContext(HeaderMobileContext);

const MobileProvider: React.FC<any> = ({ children }) => {
  const [isMobile, setMobile] = useState(false);
  const [windowSize, setWindowSize] = useState(0);

  const value = useMemo(() => {
    return {
      windowSize,
      isMobile,
    };
  }, [windowSize, isMobile]);

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
    if (windowSize < 920) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [windowSize]);

  return (
    <HeaderMobileContext.Provider value={value}>
      {children}
    </HeaderMobileContext.Provider>
  );
};

export default MobileProvider;
