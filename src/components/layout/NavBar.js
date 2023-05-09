import { Link } from "react-router-dom"
import styles from './NavBar.module.css'


function NavBar() {
   return (
      <div>
         <ul className={styles.navBarUl}>
            <li className={styles.navBarLi}> 
               <Link className={styles.navBarLink} to='/'>Home</Link>
            </li>
            <li className={styles.navBarLi}> 
               <Link className={styles.navBarLink} to='/historia'>História</Link>
            </li>
            <li className={styles.navBarLi}> 
               <Link className={styles.navBarLink} to='/contato'>Contato</Link>
            </li>
            <li className={styles.navBarLi}> 
               <Link className={styles.navBarLink} to='/trabalheConosco'>Trabalhe Conosco</Link>
            </li>
         </ul>
      </div>
   )
}

export default NavBar