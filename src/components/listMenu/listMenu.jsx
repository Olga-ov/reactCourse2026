
import styles from "./listMenu.module.css";
import { Counter } from "../Counters/Counter";
import { useState } from "react";

export function ListMenu({menu}) {
    if (!menu) {
        return null;
    }

    const [counts, setCounts] = useState({});

    const updateCount = (id, count) => {
        setCounts(prev => ({ ...prev, [id]: count }));
    };

    return (
        <div role='listMenu' className={styles.menuWrapper}>
            <h2 className={styles.menuTitle}>Меню:</h2>
            <ul className={styles.menuList}>
                {menu.map(item => (
                    <li key={item.id} className={styles.menuItem}>
                        {item.name}
                        <Counter />
                    </li>
                ))}
            </ul>
        </div>
    );
}