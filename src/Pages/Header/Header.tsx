import styles from './Header.module.scss'

const Header = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.headerLogo}>Logo</h1>
            <input type='text' placeholder='Поиск' className={styles.headerSearch}/>
            <div className={styles.headerLogin}>Вход</div>
        </div>
    )
}

export default Header;