import type { Dispatch, SetStateAction } from 'react';
import { useRef, useEffect } from 'react';
import styles from './InputComponent.module.scss';
import ChevronUp from '@/components/Icons/ChevronUp';
import type { Option } from '@/types';
import { v4 as uuidv4 } from 'uuid';
interface Props {
    setIsDropDownOpen: Dispatch<SetStateAction<boolean>>;
    setAvailableOptions: Dispatch<SetStateAction<Option[]>>;
    isDropDownOpen: boolean;
}

const InputComponent = ({ setIsDropDownOpen, setAvailableOptions, isDropDownOpen }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (isDropDownOpen) {
            inputRef.current?.focus();
        } else {
            inputRef.current?.blur();
        }
    }, [isDropDownOpen]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value.trim();
        if (e.key === 'Enter' && value) {
            const newItem = {
                label: value,
                id: uuidv4(),
            };
            setAvailableOptions((prev) => [newItem, ...prev]);
            e.currentTarget.value = '';
        }
    };

    return (
        <div onClick={() => setIsDropDownOpen((prev: boolean) => !prev)} className={styles.wrapper}>
            <input
                onKeyDown={handleKeyDown}
                ref={inputRef}
                autoComplete="off"
                name="search"
                type="text"
            />
            <div className={`${styles.icons} ${isDropDownOpen ? styles.rotate : ''}`}>
                <ChevronUp size={20} color="#6B7280" />
            </div>
        </div>
    );
};

export default InputComponent;
