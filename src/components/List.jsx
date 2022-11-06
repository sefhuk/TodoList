/* eslint-disable */
import { useState } from 'react';
import styles from './List.module.css';

const List = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <input className={styles.check} type='checkbox' />
                <h2>{props.text}</h2>
            </div>
        </div>
    );
};

export default List;
