import React from 'react'
import styles from '@/styles/About.module.css'
import AboutImg from '@/assets/rupa-photo.png'
import Image from 'next/image'

const About = () => {
  return (
    <div className={styles.about}>
       <div className={styles.textdiv}>
        <h1>About Me</h1>
        <p>Meet RUPA BHATT, a master of the oven, whose passion for baking transcends mere ingredients to create culinary symphonies that delight the senses.</p>
        <p>With skillful hands and a creative spirit, Rupa crafts each confection with love and precision, weaving together tradition and innovation to bring joy to every bite. Welcome to Rupa's bakery, where every creation tells a story of dedication, craftsmanship, and the pure pleasure of baking.</p>
        <p>Specialising in an array of mouthwatering treats, from decadent cakes and pastries, each crafted with meticulous attention to detail and a dash of creativity. Signature specialties include indulgent chocolate creations, delicate French pastries, and rustic sourdough loaves, ensuring a delightful experience with every bite.</p>
        <p>Whether it's a celebration or a simple pleasure, Rupa's specialties promise to elevate any occasion with unforgettable taste sensations.</p>

      </div>
      <Image src={AboutImg} alt="aboutimg" quality={100}/>
    </div>
  )
}

export default About