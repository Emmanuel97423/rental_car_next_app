"use client"
import Image  from "next/image";

import { ComponentCustomButton } from "@/components";

const handleScroll = ()=>{

}
const ComponentHero = () => {
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                Trouver, réserver, ou louer une voiture -- rapidement et facilement!
            </h1>
            <p className="hero__subtitle">
                Rationalisez votre expérience de location de voiture grâce à notre processus de réservation sans effort.
            </p>
            <ComponentCustomButton
            title="Explorer"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
            />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/hero.png" alt="hero" fill className="object-contain" />
            </div>
            <div className="hero__image-overlay"/>
        </div>
    </div>
  )
}

export default ComponentHero;