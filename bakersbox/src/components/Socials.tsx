"use client"
import React from 'react'
import styles from '@/styles/Socials.module.css'
import { SocialIcon } from 'react-social-icons';

const Socials = () => {
  return (
    <div className={styles.social}>
      <div className={styles.socialcard}
        onClick={() => window.open('','_blank')}
        >
          <SocialIcon url='https://instagram.com' style={{height: 40, width: 40}}/>
          <p>@codershub.dev</p>
        </div>

        <div className={styles.socialcard}
              onClick={() => window.open('', '_blank')}
              >
                <SocialIcon url='https://mail.google.com' style={{height: 40, width: 40}}/>
                <p>maharship2705@gmail.com</p>
        </div>

        <div className={styles.socialcard}
              onClick={() => window.open('', '_blank')}
              >
                <SocialIcon url='' style={{height: 40, width: 40}}/>
                <p>Maharshi Pandya</p>
        </div>
    </div>
  )
}

export default Socials