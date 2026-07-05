import styles from "./nameRest.module.css";
import { restaurants } from '../../dataMock/mock';
import { ListMenu } from "../listMenu/listMenu";
import { ReviewsRest } from "../reviewsRest/reviewsRest";

export function NameRest() {

    return (
        <div role='nameRest' className={styles.container}>
            <h1 >Список ресторанов</h1>
            <ul className={styles.listRest}>
                {restaurants.map(restaurant => (
                    <li key={restaurant.id} className={styles.nameRest}>
                        {restaurant.name}
                        <ListMenu 
                            menu={restaurant.menu} 
                        />
                        <ReviewsRest 
                            review={restaurant.reviews}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
