import styles from './InputComponent.module.scss';

import ChevronUp from '@/components/Icons/ChevronUp';

const InputComponent = () => {
    return (
        <div className={styles.wrapper}>
            <input autoComplete="off" name="search" type="text" />
            <div className={styles.icons}>
                <ChevronUp size={20} color="#6B7280" />
            </div>
        </div>
    );
};

export default InputComponent;
