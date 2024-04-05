import { useEffect, useState } from "react";

export default function useTab() {
  const [isTab, setIsTab] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsTab(window.innerWidth <= 978);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return isTab;
}
