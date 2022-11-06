/* eslint-disable */
import { useState } from 'react';
import styles from './InputList.module.css';

const InputList = (props) => {
    //변경된 입력값을 저장하는 변수
    const [input, setInput] = useState('');

    //입력값이 변경될 때 마다 input의 상태를 변경
    const updateInput = (e) => {
        setInput(e.target.value);
    };

    //'추가' 버튼 클릭 시 상위 컴포넌트로 input의 값을 전달하기 위한 함수
    const getInput = () => {
        if (input) {
            //input 값이 공백이 아니라면
            props.getList(input);
            setInput(''); //초기화
        }
    };

    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                placeholder='추가할 목록을 입력하세요.'
                onChange={updateInput}
                value={input}
            ></input>
            <button className={styles.button} onClick={getInput}>
                추가
            </button>
        </div>
    );
};

export default InputList;
