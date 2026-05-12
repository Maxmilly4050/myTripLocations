import { NavLink } from "react-router-dom"
import styles from "./AppNav.module.css"

function AppNav() {
    return (
        <NavLink>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/pricing">Pricing</NavLink>
                    </li>
                    <li>
                        <NavLink to="/product">Product</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">Log out</NavLink>
                    </li>
                </ul>
            </nav>
        </NavLink>
    )
}

export default AppNav
