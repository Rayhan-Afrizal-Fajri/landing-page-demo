import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "alt") {
      root.classList.add("theme-alt");
    } else {
      root.classList.remove("theme-alt");
    }
  }, [theme]);

  return { theme, setTheme };
}
