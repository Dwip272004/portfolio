// src/components/FlowingSection.jsx
import React from "react";
import FlowingMenu from "../components/FlowingMenu/FlowingMenu"; // adjust path if needed

const menuItems = [
  {
    text: "About",
    link: "#about",
    image: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Cool-HD-Background-Wallpapers.jpg", // change to your images
  },
  {
    text: "Skills",
    link: "#skills",
    image: "https://source.unsplash.com/random/800x200?skills",
  },
  {
    text: "Projects",
    link: "#projects",
    image: "https://source.unsplash.com/random/800x200?project",
  },
  {
    text: "Experience",
    link: "#experience",
    image: "https://source.unsplash.com/random/800x200?office",
  },
  {
    text: "Contact",
    link: "#contact",
    image: "https://source.unsplash.com/random/800x200?email",
  },
];

export default function FlowingSection() {
  return (
    <section id="menu" className="min-h-screen w-full bg-[rgb(6,0,16)]">
      <FlowingMenu items={menuItems} />
    </section>
  );
}
