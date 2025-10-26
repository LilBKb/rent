import styles from './styles.module.css'


const RegistrationForm=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <form>
                    <label>Имя:</label>
                    <input type='text' placeholder='Введите имя'/>
                    <label>Фамилия:</label>
                    <input type='text' placeholder='Введите фамилию'/>
                    <label>Отчество:</label>
                    <input type='text' placeholder='Введите отчество'/>
                    <label>Паспорт:</label>
                    <input type='text' placeholder='Введите номер паспорта'/>
                    <label>Водительское удостоверение:</label>
                    <input type='text' placeholder='Введите номер водительского удостоверения'/>
                    <input type='submit' value='Зарегистрироваться'/>

                </form>
            </div>
        </div>
    )
}


export default RegistrationForm;