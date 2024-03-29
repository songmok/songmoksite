"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

const MobDarkModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const sun = { color: "white" };
  return (
    <button
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {theme === "dark" ? <FaSun style={sun} /> : <FaMoon />}
    </button>
  );
};

export default MobDarkModeButton;
