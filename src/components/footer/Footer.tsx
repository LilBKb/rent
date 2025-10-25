import styles from './styles.module.css'

const Footer =()=>{
    return(
        <div className={styles.container}>
            <div>
                <h1 className={styles.header}>🚗 CAR RENTAL PRO</h1>
            <p>Аренда автомобилей по всей России с 2025 года.</p>
            </div>
            <div className={styles.footer__column}>
                <p>Услуги:</p>
                <ul>
                    <li>-Аренда  от 1 дня</li>
                    <li>-Премиум-авто</li>
                    <li>-С водителем</li>
                    <li>-Доставка авто</li>
                </ul>
            </div>
            <div className={styles.footer__column}>
                <p>Автопарк:</p>
                <ul>
                    <li>-Эконом</li>
                    <li>-Комфорт</li>
                    <li>-Бизнес</li>
                    <li>-Внедородники</li>
                </ul>
            </div>
            <div className={styles.footer__column}>
                <p>Контакты:</p>
                <ul>
                    <li>-Электронная почта</li>
                    <li>-Телефон</li>
                    <li>-Telegram</li>
                    <li>-Факс</li>
                </ul>
            </div>

        </div>
    )
}

export default Footer;