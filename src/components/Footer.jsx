import styles from './Sidebar.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.copyright}>
                &copy; ({new Date().getFullYear()}) MyTripLocations. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer
