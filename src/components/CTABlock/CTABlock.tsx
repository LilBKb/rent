import styles from './styles.module.css'


const CTABlock=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.header}>Почему именно мы?</h2>
                <p>💸 Экономьте до 25% при раннем бронировании</p>
                <p>🚘 Лучшие цены на аренду от 1 дня</p>
                <p>🎁 Бесплатная отмена брони за 48 часов</p>
                <p>⭐ Выгодные условия для постоянных клиентов</p>
                <p>🏆 Премиум-авто по стандартным ценам</p>
            </div>
        </div>
    )
}

export default CTABlock;