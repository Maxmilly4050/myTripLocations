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
        <li className={styles.cityItem}>
            <span>{city.emoji}</span>
            <h3 className={styles.name}>{city.name}</h3>
            <time className={styles.date}>{formatDate(city.date)}</time>
            <button className={styles.deleteBtn}>&times;</button>
        </li>
    )
}

export default CityItem
