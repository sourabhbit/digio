import React from "react";
import { staticText } from "../../constants";
import "./style.css";

export default function Footer() {
  return <footer className="footerWrapper">{staticText.FOOTER_TEXT}</footer>;
}
