"use client";
import useMuiMedia from "../../hook/useMuiMedia";
import HeaderMob from "./HeaderMob";
import HeaderWeb from "./HeaderWeb";

export default function Header() {
  const { mobile } = useMuiMedia();

  return (
    <header className="text-gray-600 body-font relative">
      {mobile ? <HeaderWeb /> : <HeaderMob />}
    </header>
  );
}
