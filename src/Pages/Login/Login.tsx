import styles from './Login.module.scss'

const Login = () => {

    return (
        <main className={styles.main}>
            <form className={styles.mainForm} action="/" method="post">
                <h1>Вход в аккаунт</h1>
                <input id="login" type="text" placeholder="Номер телефона или почта"/>
                <input id="password" type="password" placeholder="Пароль"/>
                <button onClick={(e) => e.preventDefault()} id="submit">Войти</button> 
            </form>
            <div className={styles.mainOptions}>
                <a href='/'>Регистрация</a>
                <a href='/'>Забыли пароль?</a>
            </div>
        </main>
    )
}

export default Login;

