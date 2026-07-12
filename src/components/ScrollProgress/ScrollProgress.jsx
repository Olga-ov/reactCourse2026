import { useScrollProgress } from './useScrollProgress';
import styles from './ScrollProgress.module.css';

export const ScrollProgress = () => {
    const scrollProgress = useScrollProgress();

    return (
        <div className={styles.progressContainer}>
            <div 
                className={styles.progressBar} 
                style={{ 
                    width: `${scrollProgress}%`
                }}
            />
        </div>
    );
};