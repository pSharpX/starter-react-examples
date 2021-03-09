import React from "react";
import AppNavbar from "../navbar/Navbar";
import ScrollerMenu from "../menu/ScrollerMenu";

export default function Header() {
  return (
    <header>
      <ScrollerMenu />
      <AppNavbar />
    </header>
  );
}
