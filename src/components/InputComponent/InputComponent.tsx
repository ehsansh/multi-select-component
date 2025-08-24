import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useRef, useEffect } from 'react';
import styles from './InputComponent.module.scss';
import ChevronUp from '@/components/Icons/ChevronUp';

interface Props {
    setIsDropDownOpen: Dispatch<SetStateAction<boolean>>;
    addNewOption: (value: string) => boolean;
    isDropDownOpen: boolean;
}

const InputComponent = ({ setIsDropDownOpen, addNewOption, isDropDownOpen }: Props) => {
    const [error, setError] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (isDropDownOpen) {
            inputRef.current?.focus();
        } else {
            inputRef.current?.blur();
        }
    }, [isDropDownOpen]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (error) setError('');

        const value = e.currentTarget.value.trim();

        if (e.key === 'Enter' && value) {
            const isAdded = addNewOption(value);
            if (isAdded) e.currentTarget.value = '';
            else setError('This option already exists!');
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
            {error && <div className={styles.error}>{error}</div>}
        </div>
    );
};

export default InputComponent;
