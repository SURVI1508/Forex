import styles from '../../styles/AllStyles/graph.module.css'
import { BsApple } from 'react-icons/bs';
import { ImAndroid } from 'react-icons/im';
import { IoIosArrowForward } from 'react-icons/io';

const Graph = () => {
    return (
        <div className={styles.graph__main__div}>
            <div className={styles.graph__main__container}>

                <div className={styles.graph__box}>
                    <div className={styles.graph__box__img}>
                        <h3 className={styles.heading__graph}>Viewership Installs & Signups Graph</h3>
                        <div>
                            <img src="./images/graph.jpeg" alt="graph" />
                        </div>
                    </div>


                    <div className={styles.graph__box__right}>
                        <div className={styles.graph__IOS__container}>
                            <div className={styles.graph__IOS__box}>
                                <BsApple style={{ fontSize: "30px", color: "gray" }} />
                                <ImAndroid style={{ fontSize: "30px", color: "gray" }} />
                                <p>102</p>
                            </div>
                            <span>Installs This Month</span><br />
                            <div className={styles.all__btn}>See All Customers <IoIosArrowForward style={{ color: "gray", fontSize: "25px" }} /></div>
                        </div>

                        <div className={styles.comodities}>
                            <span>Currencies Vs <br /> Commodities</span>
                            <div className={styles.comodities__icon}>
                                <div className={styles.icon}>
                                    <img src="./images/exchange.png" alt="" />
                                    <p>7k <br /> Clicks</p>
                                </div>
                                <div className={styles.icon}>
                                    <img src="./images/gold.png" alt="" />
                                    <p>10.6k <br /> Clicks</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Graph