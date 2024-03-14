"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Homepage from "@/components/Homepage";
import Products from "@/components/Products";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";
import Navbar from "@/components/Navbar";
import { useRef } from 'react';

export default function Home() {

  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const productsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        productsRef={productsRef}
        contactRef={contactRef}
      />
      <div ref={homeRef} id="home-section">
      <Homepage/>
      </div>
      <div ref={aboutRef} id="about-section">
      <About/>
      </div>
      <div ref={productsRef} id="products-section">
      <Products/>
      </div>
      <div ref={contactRef} id="contact-section">
      <Footer/>
      </div>
      <Socials/>
    </div>
  );
}
