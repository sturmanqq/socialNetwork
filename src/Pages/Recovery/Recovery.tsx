import Overlay from '../../Componets/Overlay/Overlay';
import styles from './Recovery.module.scss'

import { IoIosClose } from 'react-icons/io';
import { IoMdArrowBack } from "react-icons/io";

const Recovery = () => {
    return (
        <div className={styles.main}>
            <Overlay/>
            <div className={styles.mainRecovery}>
                <IoMdArrowBack className={styles.mainRecoveryBack}/>
                <IoIosClose className={styles.mainRecoveryClose}/>
                <h1>Восстановление пароля</h1>
                <form action="">
                    <input type="email" placeholder='Введите свою почту'/>
                    <button onClick={(e) => e.preventDefault()} id="submit">Восстановить</button>
                </form>
            </div>
        </div>
    )
}

export default Recovery;