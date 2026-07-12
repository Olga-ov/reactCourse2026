import { useState } from "react";
import styles from "./RestaurantsList.module.css";
import { restaurants } from '../../constants/mock';
import { RestaurantActive } from "../RestaurantActive/RestaurantActive";

export function RestaurantsList() {
    const [activeRestId, setActiveRestId] = useState(null);

    const activeRest = restaurants.find(r => r.id === activeRestId);

    return (
        <div role='RestaurantsList' className={styles.container}>
            <h1 >Список ресторанов</h1>
            <div className={styles.tabsRest}>
                {restaurants.map(restaurant => (
                    <button 
                        key={restaurant.id} 
                        className={styles.RestaurantsList}
                        onClick={() => setActiveRestId(restaurant.id)}
                    >
                        {restaurant.name}
                    </button>
                ))}
            </div>
            <div className={styles.RestaurantsList}>
                <RestaurantActive 
                    activeRest={activeRest}
                />
            </div>
        </div>
    );
}
