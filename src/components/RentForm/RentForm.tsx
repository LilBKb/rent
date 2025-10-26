import styles from './styles.module.css'


const RentForm=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <form>
                    <label>Бренд:</label>
                    <input type='text' placeholder='Введите бренд автомобиля'/>
                    <label>Модель:</label>
                    <input type='text' placeholder='Введите модель'/>
                    <label>Год выпуска:</label>
                    <input type='text' placeholder='Введите год выпуска'/>
                    <label>Трансмиссия:</label>
                    <select name='transmission'>
                        <option value=''>Выберите тип трансмиссии</option>
                        <option value='mechanic'>МКПП</option>
                        <option value='automatic'>АКПП</option>
                        <option value='variator'>Вариатор</option>
                        <option value='robot'>Роботизированная</option>
                    </select>
                    <label>Количество мест:</label>
                    <input type='text' placeholder='Введите количество мест'/>
                    <label>Мощность двигателя в л.с:</label>
                    <input type='text' placeholder='Введите мощность двигателя в л.с'/>
                    <label>Фотографии:</label>
                    <input type='file' placeholder='Загрузите фотографии автомобиля'/>
                    <label>Описание:</label>
                    <textarea placeholder='Описание вашего автомобиля'></textarea>
                    <input type='submit' value='Зарегистрироваться'/>

                </form>
            </div>
        </div>
    )
}


export default RentForm;