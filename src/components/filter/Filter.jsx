import React from 'react'
import styles from './filter.module.css'
export default function Filter() {
    return (
        <div className={styles.filter}>
            <button className={styles.filterBtn}>Set 7   *</button>
            <div className={styles.line}></div>
            <div className={styles.filterBtnList}>
                <li><button className={styles.filterBtn2}>Set 7   *</button></li>
                <li><button className={styles.filterBtn2}>Set 7   *</button></li>
                <li><button className={styles.filterBtn2}>Set 7   *</button></li>
            </div>
            <div className={styles.line}></div>

        </div>
    )
}
