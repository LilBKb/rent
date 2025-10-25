import styles from './styles.module.css'
import car from '../../assets/ferrari-296.jpg'

const CarCard=()=>{
    return(
        <div className={styles.container}>
            <img className={styles.card__image} src={car} />
            <p>Ferrari</p>
            <button>Аренда</button>
        </div>
    )
}

export default CarCard;