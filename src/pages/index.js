import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, Typography } from "@material-tailwind/react";
import NavbarC from "@/components/Navbar";
import Me from '../../public/Me.svg'
import Gradient from '../../public/Gradient.svg'

import Profile from "@/components/profile";
import Projects from "@/components/Projects";
import Technology from "@/components/Technology";
import Git from "@/components/Git";
import Aboutme from "@/components/Aboutme";
import Contactme from "@/components/Contactme";
import Welcome from "@/components/welcome";

export default function Home() {
  return (
    <div className="area">
      <ul className="circles">
        <li className="rounded-full"></li>
        <li className=""></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
       </ul>
      <NavbarC />
      <div className="bg-bg  p-4 md:p-6">
        <Welcome />

        <Projects />
      </div>
      {/* <Git/> */}
      <Technology />

      <Aboutme />
      <div className="  p-4 md:p-6">
        <Contactme />
      </div>
     
    </div>
  );
}
