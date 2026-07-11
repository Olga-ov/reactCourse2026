import styles from './ReviewForm.module.css';
import { useForm } from './useForm';
import { CounterUI } from '../Counters/CounterUI/CounterUI';

export const ReviewForm = () => {
    const {form, setName, setText, setRating, setClear} = useForm();

    const {name, text, rating} = form;

    return (
        <div className={styles.containerReviewForm}>
            <div className={styles.blokReviewForm}>
                <span className={styles.spanReviewForm}>Имя</span>
                <input 
                    value={name} 
                    className={styles.inputReviewForm} 
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div className={styles.blokReviewForm}>
                <span className={styles.spanReviewForm}>Текст</span>
                <input 
                    value={text} 
                    className={styles.inputReviewForm}
                    onChange={(event) => setText(event.target.value)}
                />
            </div>
            <div className={styles.blokReviewForm}>
                <span className={styles.spanReviewForm}>Рейтинг</span>
                <CounterUI
                    value={rating} 
                    onIncrement={() => setRating(Math.min(rating + 1, 5))}
                    onDecrement={() => setRating(Math.max(rating - 1, 1))}
                />
            </div>
            <button 
                type="button"
                onClick={setClear}
            >Clear</button>
        </div>
    );
}