import React from 'react'
import styles from '@/styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.section4outermost}>
      <div className={styles.left}>
        <p>Life is short, eat dessert first.
        For moments worth celebrating, trust our bakery. 
          <span> </span>
        </p>
      </div>
      <div className={styles.right}>
          <h1>
            Visit<br/>
            Us<br/>
            today
          </h1>
      </div>
    </div>
  )
}

export default Footer