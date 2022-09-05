import React from 'react'
import styles from './rank.module.css'
import Card from './card/Card'
export default function Rank() {
    return (
        <div className={styles.rank}>
            <div className="rank1"> TFT Meta Team Comps Tier List<button className={styles.headerBtn}>Set 7   *</button><input className={styles.headerSearch} type="text" placeholder="Search.." name="search" /></div>
            <div className={styles.line}></div>
            <div className={styles.rank2}> <p className={styles.rankP}>Patch 12.16</p>
                <div className={styles.rank2right}>
                    <p className={styles.rankP}>Tier Up</p> <p className={styles.rankP}>Tier Down</p> <p className={styles.rankP}>New</p>
                </div>

            </div>

            <div className={styles.rankCards}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

        </div >
    )
}
