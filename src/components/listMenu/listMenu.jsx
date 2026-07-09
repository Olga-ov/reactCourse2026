import styles from "./listMenu.module.css";

export function ListMenu({menu}) {
    if (!menu) {
        return null;
    } 

    return (
        <div role='listMenu' className={styles.menuWrapper}>
            <h2 className={styles.menuItem}>Меню:</h2>
            <ul className={styles.menuList}>
                {menu.map(item => (
                    <li key={item.id}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}