import type { Dispatch, SetStateAction } from 'react';
import styles from './InputComponent.module.scss';
import ChevronUp from '@/components/Icons/ChevronUp';

interface Props {
    setIsDropDownOpen: Dispatch<SetStateAction<boolean>>;
    isDropDownOpen: boolean;
}

const InputComponent = ({ setIsDropDownOpen, isDropDownOpen }: Props) => {
    return (
        <div onClick={() => setIsDropDownOpen((prev: boolean) => !prev)} className={styles.wrapper}>
            <input autoComplete="off" name="search" type="text" />
            <div className={`${styles.icons} ${isDropDownOpen ? styles.rotate : ''}`}>
                <ChevronUp size={20} color="#6B7280" />
            </div>
        </div>
    );
};

export default InputComponent;
