"use client";
import Navbar  from "@/components/navbar/navbar";
import Home from "./sections/home";
import Services from "./sections/services";
import Reviews from "./sections/reviews";
import Team from "./sections/team";
import Blog from "./sections/blog";
import Contact from "./sections/contact"
import { useLenis } from "../hooks/useLenis";

export default function Page() {
  useLenis(); // 
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Reviews />
      <Team />
      <Blog />
      <Contact />

    </>
  );
}


