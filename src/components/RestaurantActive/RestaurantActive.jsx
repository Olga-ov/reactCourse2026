import styles from './RestaurantActive.module.css';
import { ListMenu } from "../listMenu/listMenu";
import { ReviewsRest } from "../reviewsRest/reviewsRest";

export function RestaurantActive( {activeRest} ) {

    if (!activeRest) {
        return <p className={styles.placeholder}>Выберите ресторан</p>;
    }

    return (
        <div className={styles.activeRestContainer}>
            {activeRest.menu.length > 0 && (
                <ListMenu menu={activeRest.menu} />
            )}
            {activeRest.reviews.length > 0 && (
                <ReviewsRest review={activeRest.reviews} />
            )} 
        </div>
    )
}

