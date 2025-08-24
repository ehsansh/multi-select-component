import type { Dispatch, SetStateAction } from 'react';
import styles from './InputComponent.module.scss';

import ChevronUp from '@/components/Icons/ChevronUp';

interface Props {
    setIsDropDownOpen: Dispatch<SetStateAction<boolean>>;
}

const InputComponent = ({ setIsDropDownOpen }: Props) => {
    return (
        <div onClick={() => setIsDropDownOpen((prev: boolean) => !prev)} className={styles.wrapper}>
            <input autoComplete="off" name="search" type="text" />
            <div className={styles.icons}>
                <ChevronUp size={20} color="#6B7280" />
            </div>
        </div>
    );
};

export default InputComponent;
