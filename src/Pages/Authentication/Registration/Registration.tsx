import { IoIosClose, IoMdArrowBack } from 'react-icons/io'
import Overlay from '../../../Componets/Overlay/Overlay'
import styles from './Registration.module.scss'

const Registration = () => {

    return (
        <div className={styles.main}>
            <Overlay/>
            <div className={styles.mainRegistration}>
                <IoMdArrowBack className={styles.mainRegistrationBack}/>
                <IoIosClose className={styles.mainRegistrationClose}/>
                <h1>Регистрация</h1>
                <form action="">
                    <input type="email" placeholder='Почта'/>
                    <input type="password" placeholder='Пароль'/>
                    <input type="text" placeholder='Никнейм'/>
                    <button onClick={(e) => e.preventDefault()} id="submit">Регистрация</button>
                </form>
            </div>
        </div>
    )
}

export default Registration