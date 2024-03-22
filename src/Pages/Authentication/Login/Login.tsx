import Overlay from '../../../Componets/Overlay/Overlay';
import styles from './Login.module.scss'
import { IoIosClose } from "react-icons/io";

const Login = () => {

    return (
        <div className={styles.main}>
            <Overlay/>
            <div className={styles.mainLogin}>
                <IoIosClose className={styles.mainLoginClose}/>
                <h1>Вход в аккаунт</h1>
                <div className={styles.mainLoginWay}>
                    <div className={styles.mainLoginWayAccount}>
                       <div className={styles.mainLoginWayAccountSoc}>Продолжить с Google</div>
                       <div className={styles.mainLoginWayAccountSoc}>Продолжить с Apple</div> 
                    </div>
                    <p className={styles.mainLoginWayOr}>ИЛИ</p>
                    <form className={styles.mainLoginWayData} action="/" method="post">
                        <input id="login" type="text" placeholder="Номер телефона или почта"/>
                        <input id="password" type="password" placeholder="Пароль"/>
                        <div className={styles.mainLoginWayDataOptions}>
                            <a href='/'>Регистрация</a>
                            <a href='/'>Забыли пароль?</a>
                        </div>
                    </form>
                </div>
                <button onClick={(e) => e.preventDefault()} id="submit">Войти</button> 
            </div>
        </div>
    )
}

export default Login;

