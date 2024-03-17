import React from 'react'
import styles from '@/styles/Homepage.module.css'
import mainImg from '@/assets/baker2.png'
import bgImg from '@/assets/bg4.avif'
import Image from 'next/image'

const Homepage = () => {
  return (
    <div className={styles.page1outer}>
      <div className={styles.subtextdiv}>
        <div className={styles.left}>
          <div className={styles.about}>
            <p>Hi, I am <span>RUPA BHATT</span></p>
            <p>From home to heart, homemade Baker. Crafting culinary magic. Satisfying cravings, one bake at a time. Baking memories to cherish.</p>

          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.stat}>
            <h1>150+</h1>
            <p>Happy<br></br>clients</p>

          </div>
          <div className={styles.stat}>
            <h1>5+</h1>
            <p>Years of<br></br> experience</p>
          </div>
        </div>

      </div>
      <Image src={mainImg} className={styles.mainimg} alt="mainimg" quality={100}/>
      <div className={styles.maintextdiv}>
        <h1><span>&nbsp;</span>BAKER'S BOX</h1>
        <h2>Cake Designer</h2>
      </div>
      <Image src={bgImg} className={styles.bgImg} alt="bgimg" quality={100}/>
    </div>
  )
}

export default Homepage