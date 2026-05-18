import { Link } from 'react-router-dom'
import styles from './CityItem.module.css'

function CityItem({ city }) {
    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        })
    }

    return (
        <li>
            <Link to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`} className={styles.cityItem}>
                <span>{city.emoji}</span>
                <h3 className={styles.name}>{city.name}</h3>
                <time className={styles.date}>{formatDate(city.date)}</time>
                <button className={styles.deleteBtn}>&times;</button>
            </Link>
        </li>
    )
}

export default CityItem
