"use client"
import React from 'react'
import styles from '@/styles/Socials.module.css'
import { SocialIcon } from 'react-social-icons';

const Socials = () => {
  return (
    <div className={styles.social}>
      <div className={styles.socialcard}
        onClick={() => window.open('https://www.instagram.com/_bakers_box?igsh=MWlvaml5bW9vMTNrZg==','_blank')}
        >
          <SocialIcon url='https://instagram.com' style={{height: 40, width: 40}}/>
          <p>@_bakers_box</p>
        </div>

        <div className={styles.socialcard}
              onClick={() => window.open('rabhatt1982@gmail.com', '_blank')}
              >
                <SocialIcon url='https://mail.google.com/mail/' style={{height: 40, width: 40}}/>
                <p>rabhatt1982@gamil.com</p>
        </div>

        <div className={styles.socialcard}
              onClick={() => window.open('https://www.facebook.com/profile.php?id=100063836513181&mibextid=ZbWKwL', '_blank')}
              >
                <SocialIcon url='https://www.facebook.com/' style={{height: 40, width: 40}}/>
                <p>Baker's Box</p>
        </div>
    </div>
  )
}

export default Socials