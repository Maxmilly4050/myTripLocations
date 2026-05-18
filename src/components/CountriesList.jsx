import Spinner from './Spinner'
import Message from './Message'
import styles from './countriesList.module.css'
import CountryItem from './CountryItem'

function CountriesList({ cities, isLoading }) {
    if (isLoading) {
                return <Spinner />
            }
    if (!cities.length) {
        return <Message message="Add your first city by clicking on the map."/>
    }
        return (
            <div className={styles.countriesList}>
                <ul className={styles.countriesList}>
                    {cities.map((city) => (
                        <CountryItem key={city.id} country={city} />
                    ))}
                </ul>
            </div>
        )
    }


export default CountriesList
