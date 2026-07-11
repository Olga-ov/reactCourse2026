import styles from "./reviewsRest.module.css";
import { ReviewForm } from '../ReviewForm/ReviewForm.jsx';

export function ReviewsRest({review}) {
    if (!review) {
        return null;
    } 

    return (
        <div role='listMenu' className={styles.reviewWrapper}>
            <h2 className={styles.reviewItem}>Отзывы:</h2>
            <ul className={styles.reviewList}>
                {review.map(item => (
                    <li key={item.id}>
                        {item.user}: {item.text} - {item.rating} ⭐
                    </li>
                ))}
            </ul>
            <ReviewForm />
        </div>
    );
}