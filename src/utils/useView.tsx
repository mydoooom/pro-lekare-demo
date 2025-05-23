import { useEffect, useState } from "react";

export enum Breakpoints {
  SM = 640,
  MD = 768,
  LG = 1024,
  XL = 1280,
  XXL = 1536
}

export function useView (breakpoint: number) {
  const [bpView, setBpView] = useState(false);

  const isView = (breakpoint: number) => {
    return window.innerWidth >= breakpoint;
  }

  useEffect(() => {
    const handleResize = () => {
      setBpView(isView(breakpoint));
    };

    window.addEventListener("resize", handleResize);
    setBpView(isView(breakpoint));

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return bpView;
}
