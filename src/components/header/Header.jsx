import React from 'react'
import styles from './header.module.css'
export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <img className={styles.headerImg} src="https://rerollcdn.com/brand.svg" alt="TFTactics" width={120} height={25} />
                <button className={styles.headerBtn}>Set 7   *</button>
            </div>
            <div className={styles.headerMidle}>
                <button className={styles.headerBtn}>Set 7   *</button>
                <input className={styles.headerSearch} type="text" placeholder="Search.." name="search" />
            </div>
            <div className={styles.headerRight}>
                <button className={styles.headerBtn2}>  DOWNLOAD APP  </button>
            </div>


        </div>
    )
}
