import CarCard from '../CarCard/CarCard';
import styles from './styles.module.css'

const RentsPanel=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.filter}>
                    <input type='text' placeholder='Бренд автомобиля'/>
                    <input type='text' placeholder='Модель'/>
                    <input type='text' placeholder='Год выпуска'/>
                    <select name='transmission'>
                        <option value=''>Тип трансмиссии</option>
                        <option value='mechanic'>МКПП</option>
                        <option value='automatic'>АКПП</option>
                        <option value='variator'>Вариатор</option>
                        <option value='robot'>Роботизированная</option>
                    </select>
                    <input type='text' placeholder='Количество мест'/>
                    <input type='text' placeholder='Мощность двигателя в л.с'/>
                    <button>Применить фильтры</button>
                </div>
                <div className={styles.cards}>
                    <CarCard/>
                    <CarCard/>
                    <CarCard/>
                    <CarCard/>
                    <CarCard/>
                </div>
            </div>
        </div>
    )
}

export default RentsPanel;