import styles from './CounterUI.module.css';

export const CounterUI = ({
    value,
    onIncrement,
    onDecrement
}) => {

    return (
        <div className={styles.containerCounter}>
            <button 
                className={styles.btnCounter} 
                onClick={onIncrement}
            >
                +
            </button>
                <span className={styles.countCounter}>{value}</span>    
            <button 
                className={styles.btnCounter} 
                onClick={onDecrement}
            >
                -
            </button>
        </div>
    );
};