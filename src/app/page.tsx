"use client";

import Image from "next/image";
import Head from "next/head";
import NavFixed from "@/components/NavFixed";
import Landing from "@/components/Landing";
import ProductList from "@/components/ProductList";
import cardinalOne from "../../public/cardinal-one-hero.png";
import cardinalOneMob from "../../public/cardinal-one-mobile.png";
import wcNewHero from "../../public/wc-new-hero.jpg";
import wcNewHeroMob from "../../public/wc-new-hero-mob.jpg";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-400">
      <div>
        <Head>
          <title>Westcraft Brewers</title>
        </Head>
        <NavFixed />
        <div className="h-full w-full visible lg:collapse lg:w-0 lg:h-0 z-[8888]">
          <Image
            className="object-cover h-screen"
            src={wcNewHeroMob}
            alt="hero-image"
            priority
          />
        </div>

        <div className="h-0 collapse lg:h-full lg:w-full lg:visible z-[8889]">
          <Image
            className="object-cover h-screen"
            src={wcNewHero}
            alt="hero-image"
            priority
          />
        </div>

        <div className="h-full w-full visible lg:collapse lg:w-0 lg:h-0 z-[8888]">
          <Image
            className="object-cover h-screen"
            src={cardinalOneMob}
            alt="hero-image"
            priority
          />
        </div>
        <div className="h-0 collapse lg:h-full lg:w-full lg:visible z-[8889]">
          <Image
            className="object-cover h-screen"
            src={cardinalOne}
            alt="hero-image"
            priority
          />
        </div>

        <ProductList />
        <Landing />
      </div>
      <Footer />
    </main>
  );
}
