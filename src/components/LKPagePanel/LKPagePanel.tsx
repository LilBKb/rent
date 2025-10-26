import CarCard from '../CarCard/CarCard';
import styles from './styles.module.css'

const LKPagePanel=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <h2>Личный кабинет</h2>
                <div className={styles.info}>
                <p>Имя:</p>
                <p>Фамилия:</p>
                <p>Отчество:</p>
                <p>Номер паспорта:</p>
                <p>Номер водительского удостоверения</p>
                <p>Дата рождения:</p>
                </div>
                <div className={styles.rent}>
                    <CarCard/>
                    <CarCard/>
                    <CarCard/>
                    <CarCard/>
                </div>
            </div>
        </div>
    )
}

export default LKPagePanel;