
import styles from "./listMenu.module.css";
import { CounterDish } from "../Counters/CounterDish/CounterDish";

export function ListMenu({menu}) {
    if (!menu) {
        return null;
    }

    return (
        <div role='listMenu' className={styles.menuWrapper}>
            <h2 className={styles.menuTitle}>Меню:</h2>
            <ul className={styles.menuList}>
                {menu.map(item => (
                    <li key={item.id} className={styles.menuItem}>
                        {item.name}
                        <CounterDish />
                    </li>
                ))}
            </ul>
        </div>
    );
}