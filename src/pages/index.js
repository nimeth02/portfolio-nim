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

export default function Home() {
  return (
    <div >
<NavbarC />

<Profile/>
<div className="bg-bg2  p-4 md:p-6">
<Projects />
</div>
<Git/>
<Technology/>

<Aboutme />
<div className="bg-bg2  p-4 md:p-6">
<Contactme />
</div>
    </div>
  );
}
