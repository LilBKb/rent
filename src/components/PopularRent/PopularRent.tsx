import CarCard from '../CarCard/CarCard';
import styles from './styles.module.css'

const PopularRent=()=>{
    return(
        <div className={styles.container}>
            <CarCard/>
            <CarCard/>
            <CarCard/>
            <CarCard/>
        </div>
    )
}

export default PopularRent;