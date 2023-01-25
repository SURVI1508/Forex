import styles from '../../styles/AllStyles/sidebar.module.css'
import { IoIosArrowDown } from 'react-icons/io';

const Sidebar = () => {

    const dropDown = () => {
        var item = document.getElementById("item");
        var itemArr = document.getElementById("itemArr");

        if (item.style.height === "0px") {
            item.style.height = "100%";
            itemArr.style.transform = "rotate(180deg)"
        } else {
            item.style.height = 0;
            itemArr.style.transform = "rotate(0deg)"
        }
    }
    const dropDown2 = () => {
        var item2 = document.getElementById("item2");
        var itemArr2 = document.getElementById("itemArr2");

        if (item2.style.height === "0px") {
            item2.style.height = "100%";
            itemArr2.style.transform = "rotate(180deg)"
        } else {
            item2.style.height = 0;
            itemArr2.style.transform = "rotate(0deg)"
        }
    }

    const dropDown3 = () => {
        var item3 = document.getElementById("item3");
        var itemArr3 = document.getElementById("itemArr3");

        if (item3.style.height === "0px") {
            item3.style.height = "100%";
            itemArr3.style.transform = "rotate(180deg)"
        } else {
            item3.style.height = 0;
            itemArr3.style.transform = "rotate(0deg)"
        }
    }


    const dropDown4 = () => {
        var item4 = document.getElementById("item4");
        var itemArr4 = document.getElementById("itemArr4");

        if (item4.style.height === "0px") {
            item4.style.height = "100%";
            itemArr4.style.transform = "rotate(180deg)"
        } else {
            item4.style.height = 0;
            itemArr4.style.transform = "rotate(0deg)"
        }
    }


    const dropDown5 = () => {
        var item5 = document.getElementById("item5");
        var itemArr5 = document.getElementById("itemArr5");

        if (item5.style.height === "0px") {
            item5.style.height = "100%";
            itemArr5.style.transform = "rotate(180deg)"
        } else {
            item5.style.height = 0;
            itemArr5.style.transform = "rotate(0deg)"
        }
    }


    const dropDown6 = () => {
        var item6 = document.getElementById("item6");
        var itemArr6 = document.getElementById("itemArr6");

        if (item6.style.height === "0px") {
            item6.style.height = "100%";
            itemArr6.style.transform = "rotate(180deg)"
        } else {
            item6.style.height = 0;
            itemArr6.style.transform = "rotate(0deg)"
        }
    }
    return (
        <>

            <div className={styles.sidebar__main__div} id="sideBar">
                <div className={styles.sidebar__main__container}>
                    <div className={styles.sidebar__main__container__container}>
                        <div className={styles.sidebar__brand__logo}>
                            <img src="./images/logo.png" alt="" />
                        </div>
                        <div className={styles.sidebar__dashboard__list__container}>

                            <div className={styles.sidebar__dashboard__text}>
                                <img src="./images/dashboard (1) 1.png" alt="" />
                                Dashboard
                            </div>

                            <div className={styles.sidebar__dashboard__user__container}>
                                <div className={styles.sidebar__dashboard__user__dropdown__main}>

                                    <div className={styles.sidebar__dashboard__user__dropdown}>
                                        <img src="./images/group.png" alt="" />
                                        USER
                                        <IoIosArrowDown className={styles.sidebar__dashboard__user__dropdown__Arrow} onClick={dropDown} id="itemArr" />
                                    </div>

                                    <div className={styles.sidebar__dashboard__user__dropdown__list} id="item">
                                        <span>All Customers</span>
                                        <span>Manually Add Customers</span>
                                        <span>Free Trial Customers</span>
                                        <span>Active Paid Customers</span>
                                        <span>Dormant Clients</span>
                                        <span>Upcoming Renewals</span>
                                        <span>Create User</span>
                                        <span>All Users</span>
                                        <span>All Unverified Clients</span>
                                    </div>


                                    <div className={styles.sidebar__dashboard__user__dropdown}>
                                        <img src="./images/group.png" alt="" />
                                        ANALYTICS
                                        <IoIosArrowDown className={styles.sidebar__dashboard__user__dropdown__Arrow} id="itemArr2" onClick={dropDown2} />
                                    </div>

                                    <div className={styles.sidebar__dashboard__user__dropdown__list} id="item2">
                                        <span>Notification</span>
                                        <span>Notification History</span>
                                        <span>Chatbots Logbook</span>
                                        <span>Active Paid Customers</span>
                                        <span>Chatbot Traffic Analysis</span>
                                        <span>Newsletter Subscription</span>
                                        <span>Open Gold Admin</span>
                                        <span>All Users</span>
                                        <span>Track Referrals</span>
                                        <span>Accounting Sheets</span>
                                    </div>


                                    <div className={styles.sidebar__dashboard__user__dropdown}>
                                        <img src="./images/group.png" alt="" />
                                        CREATE REPORTS
                                        <IoIosArrowDown className={styles.sidebar__dashboard__user__dropdown__Arrow} id="itemArr3" onClick={dropDown3} />
                                    </div>

                                    <div className={styles.sidebar__dashboard__user__dropdown__list} id="item3">
                                        <span>Notification</span>
                                        <span>Notification History</span>
                                        <span>Chatbots Logbook</span>
                                    </div>


                                    <div className={styles.sidebar__dashboard__user__dropdown}>
                                        <img src="./images/group.png" alt="" />
                                        DOCUMENTATION
                                        <IoIosArrowDown className={styles.sidebar__dashboard__user__dropdown__Arrow} id="itemArr4" onClick={dropDown4} />
                                    </div>

                                    <div className={styles.sidebar__dashboard__user__dropdown__list} id="item4">
                                        <span>Notification</span>
                                        <span>Notification History</span>
                                        <span>Chatbots Logbook</span>
                                        <span>Active Paid Customers</span>
                                        <span>Chatbot Traffic Analysis</span>
                                        <span>Newsletter Subscription</span>
                                        <span>Open Gold Admin</span>
                                        <span>All Users</span>
                                        <span>Track Referrals</span>
                                        <span>Accounting Sheets</span>
                                    </div>


                                    <div className={styles.sidebar__dashboard__user__dropdown}>
                                        <img src="./images/group.png" alt="" />
                                        SETTINGS
                                        <IoIosArrowDown className={styles.sidebar__dashboard__user__dropdown__Arrow} id="itemArr5" onClick={dropDown5} />
                                    </div>

                                    <div className={styles.sidebar__dashboard__user__dropdown__list} id="item5">
                                        <span>Notification</span>
                                        <span>Notification History</span>
                                        <span>Chatbots Logbook</span>

                                    </div>


                                    <div className={styles.sidebar__dashboard__user__dropdown}>
                                        <img src="./images/group.png" alt="" />
                                        ALERTS
                                        <IoIosArrowDown className={styles.sidebar__dashboard__user__dropdown__Arrow} id="itemArr6" onClick={dropDown6} />
                                    </div>

                                    <div className={styles.sidebar__dashboard__user__dropdown__list} id="item6">
                                        <span>Notification</span>
                                        <span>Notification History</span>
                                        <span>Chatbots Logbook</span>
                                    </div>
                                </div>
                                <button>LOG OUT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sidebar