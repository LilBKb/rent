import styles from './styles.module.css'
import img from '../../assets/134216_menu_lines_hamburger_icon (2).png'
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Header = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);


  return(
    <div className={styles.container}>
      <img src={img} alt='menu' className={styles.menu} onClick={()=>setIsSidebarOpen(prev=>!prev)}/>
      {isSidebarOpen && <Sidebar isSideBarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />}
      <h1>Аренда авто</h1>
    </div>
  )
}
export default Header;