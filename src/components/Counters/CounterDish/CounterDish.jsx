import { useState } from 'react';
import styles from './CounterDish.module.css';

export const CounterDish = ({ minDish = 0, maxDish = 5 }) => {
    const [count, setCount] = useState(0);


    const increment = () => setCount(c => Math.min(c + 1, maxDish));
    const decrement = () => setCount(c => Math.max(c - 1, minDish));

    return (
        <div className={styles.containerCounter}>
            <button className={styles.btnCounter} onClick={increment}>
                +
            </button>
            <span className={styles.countCounter}>{count}</span>
            <button className={styles.btnCounter} onClick={decrement}>
                -
            </button>
        </div>
    );
 
}