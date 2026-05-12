import styles from './AppLayout.module.css'
import Sidebar from '../components/SideBar'

function AppLayout() {
    return (
        <div className={styles.app}>
            <Sidebar />
        </div>
    )
}

export default AppLayout
