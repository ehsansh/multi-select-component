import type { Dispatch, SetStateAction } from 'react';
import { useRef, useEffect } from 'react';
import styles from './InputComponent.module.scss';
import ChevronUp from '@/components/Icons/ChevronUp';

interface Props {
    setIsDropDownOpen: Dispatch<SetStateAction<boolean>>;
    isDropDownOpen: boolean;
}

const InputComponent = ({ setIsDropDownOpen, isDropDownOpen }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (isDropDownOpen) {
            inputRef.current?.focus();
        } else {
            inputRef.current?.blur();
        }
    }, [isDropDownOpen]);

    return (
        <div onClick={() => setIsDropDownOpen((prev: boolean) => !prev)} className={styles.wrapper}>
            <input ref={inputRef} autoComplete="off" name="search" type="text" />
            <div className={`${styles.icons} ${isDropDownOpen ? styles.rotate : ''}`}>
                <ChevronUp size={20} color="#6B7280" />
            </div>
        </div>
    );
};

export default InputComponent;
