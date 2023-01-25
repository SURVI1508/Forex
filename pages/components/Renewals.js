import styles from '../../styles/AllStyles/renewals.module.css'
import { FaRupeeSign } from 'react-icons/fa';

const Renewals = () => {
    return (
        <div className={styles.renewals__main__div}>
            <div className={styles.renewals__main__container}>
                <div className={styles.renewals__card}>
                    <div className={styles.renewals__card__price__text}>
                        <div>
                            <FaRupeeSign style={{ fontSize: "60px" }} />
                        </div>
                        <div>
                            <p>16,58,000</p>
                            <span>Last Month Sales</span>
                        </div>
                    </div>
                    <div className={styles.renewals__card__bottom}>
                        <img src="./images/bag.png" alt="" />
                    </div>
                    <div className={styles.comodity__type}>
                        <div className={styles.comodity__type__color}>
                            <span>Gold</span>
                            <div className={styles.comodity__type__gold}>4</div>
                        </div>
                        <div className={styles.comodity__type__color}>
                            <span>Silver</span>
                            <div className={styles.comodity__type__gold} style={{ background: "#EEEEEE" }}>12</div>
                        </div>
                        <div className={styles.comodity__type__color}>
                            <span>Titanium</span>
                            <div className={styles.comodity__type__gold} style={{ background: "#0099FB" }}>15</div>
                        </div>
                    </div>
                </div>


                <div className={styles.renewals__card}>
                    <div className={styles.renewals__card__price__text}>
                        <div>
                            <FaRupeeSign style={{ fontSize: "60px" }} />
                        </div>
                        <div>
                            <p>16,58,000</p>
                            <span>Last Month Sales</span>
                        </div>
                    </div>
                    <div className={styles.renewals__card__bottom}>
                        <img src="./images/next.png" alt="" />
                    </div>
                    <div className={styles.comodity__type}>
                        <div className={styles.comodity__type__color}>
                            <span>Gold</span>
                            <div className={styles.comodity__type__gold}>5</div>
                        </div>
                        <div className={styles.comodity__type__color}>
                            <span>Silver</span>
                            <div className={styles.comodity__type__gold} style={{ background: "#EEEEEE" }}>55</div>
                        </div>
                        <div className={styles.comodity__type__color}>
                            <span>Titanium</span>
                            <div className={styles.comodity__type__gold} style={{ background: "#0099FB" }}>3</div>
                        </div>
                    </div>
                </div>


                <div className={styles.renewals__card}>
                    <div className={styles.renewals__card__upcoming}>
                        <span className={styles.renewals__card__upcoming__heading}>Upcoming Renewal client</span>
                        <div className={styles.renewals__card__upcoming__price}>
                            <div className={styles.renewals__card__upcoming__name}>
                                <p>Nitin Singhal</p>
                                <div className={styles.gold}>Gold</div>
                            </div>
                            <span>₹ 81,99</span>
                        </div>

                        <div className={styles.renewals__card__upcoming__price}>
                            <div className={styles.renewals__card__upcoming__name}>
                                <p>Nitin Singhal</p>
                                <div className={styles.gold} style={{ background: "#EEEEEE" }}>Platinum</div>
                            </div>
                            <span>₹ 81,99</span>
                        </div>

                        <div className={styles.renewals__card__upcoming__price}>
                            <div className={styles.renewals__card__upcoming__name}>
                                <p>Nitin Singhal</p>
                                <div className={styles.gold} style={{ background: "#0099FB" }}>Titanium</div>
                            </div>
                            <span>₹ 81,99</span>
                        </div>
                        <p className={styles.renewals__card__upcoming__seeAll}>See All</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Renewals