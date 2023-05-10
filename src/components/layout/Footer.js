import {FaApple, FaAvianex, FaCcVisa, FaGg} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
   return(
      <div>
         <footer className={styles.footer}>
            <FaApple />
            <FaAvianex />
            <FaCcVisa />
            <FaGg />
         </footer>
      </div>
   )
}

export default Footer