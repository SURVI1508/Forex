import styles from '../../styles/AllStyles/dashboard.module.css'
import Nav from './Nav'
import Header from './Header'


const Dashboard = () => {
    return (
        <div className={styles.dashboard__main__div}>
            <div className={styles.dashboard__main__container}>
                <Nav />
                <Header/>
            </div>
        </div>
    )
}

export default Dashboard