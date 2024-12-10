'use client'

import React from 'react'
import styles from '../styles/Header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Header = () => {

    const handleHomeRoute = (e) => {
        e.preventDefault()
        router.push('/')
    }

    return (
        <div className={styles.container}>
          <div 
            className={styles.link}
            onClick = {handleHomeRoute}
          >
            Home
          </div>
        </div>
      )
}

export default Header;