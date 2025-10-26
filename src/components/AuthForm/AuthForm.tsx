import styles from './styles.module.css'

const AuthForm=()=>{
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <form>
                    <label>
                        Номер телефона:
                    </label>
                        <input placeholder='Введите номер телефона' type="text" required/>
                    <label>
                        Пароль:
                    </label>
                        <input placeholder='Введите пароль' type="text" required/>
                    <input type='submit' value='Войти'/>
                </form>
            </div>
        </div>
    )
}

export default AuthForm;