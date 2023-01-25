import styles from '../../styles/AllStyles/nav.module.css'
import { AiFillMessage } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';


const Nav = () => {
    return (
        <div className={styles.nav__main__div}>
            <input type="text" placeholder='🔍 Search' />
            <div className={styles.prfile__div}>
                <AiFillMessage style={{color: "#19A2FB"}}/>
                        <div className = {styles.avtar
                } ></div>
            <IoIosArrowDown style={{color: "gray"}}/>

        </div>
        </div >
    )
}

export default Nav