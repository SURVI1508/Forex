import styles from '../styles/AllStyles/sidebar.module.css'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

const Main = () => {
    return (
        <div className={styles.main__main__div}>
            <div className={styles.main__main__container}>
                <Sidebar />
                <Dashboard/>
            </div>
        </div>
    )
}

export default Main