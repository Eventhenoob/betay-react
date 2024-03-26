import { useEffect, useState } from "react";

export default function useTab() {
  const [isTab, setIsTab] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsTab(window.innerWidth <= 1071);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return isTab;
}
