import styles from './InputList.module.css';

const InputList = () => {
    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                placeholder='추가할 목록을 입력하세요.'
            ></input>
            <button className={styles.button}>추가</button>
        </div>
    );
};

export default InputList;

