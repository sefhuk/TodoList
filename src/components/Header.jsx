import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
    return (
        <div className={styles.container}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <h1 className={styles.title}>TodoList</h1>
        </div>
    );
};

export default Header;

