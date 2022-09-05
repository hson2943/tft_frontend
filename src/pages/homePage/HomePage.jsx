import React from 'react'
import styles from './homePage.module.css'
import Header from '../../components/header/Header';
import MenuPage from '../../components/menuPage/MenuPage';
import Adver from '../../components/adver/Adver';
import Filter from '../../components/filter/Filter';
import Rank from '../../components/rank/Rank';
import Footer from '../../components/footer/Footer';
import Adver2 from '../../components/adver2/Adver2';
import Board from '../../components/board/Board';
export default function HomePage() {
    return (
        <div className={styles.homePage}>
            <Header />
            <MenuPage />
            <div className={styles.homePageAd}>
                <div className={styles.homePageAdTop}>
                    <Adver />
                </div>
                <div className={styles.homePageAdDown}>
                    <Board />
                </div>


            </div>
            <div className={styles.homePageContent}>
                <div className={styles.homePageContentLeft}>
                    <Filter />
                    <Adver2 />
                </div>
                <div className={styles.homePageContentRight}>
                    <Rank />
                </div>
            </div>
            <div className={styles.homePageFooter}>
                <Footer />
            </div>
        </div>
    )
}
