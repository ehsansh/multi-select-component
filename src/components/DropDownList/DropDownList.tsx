import { useState, useRef } from 'react';
import styles from './DropDownList.module.scss';
import type { Dispatch, SetStateAction } from 'react';
import Check from '@/components/Icons/Check';
import type { Option } from '@/types';
import clsx from 'clsx';
interface Props {
    options: Option[];
    isDropDownOpen: boolean;
    setIsDropDownOpen: Dispatch<SetStateAction<boolean>>;
    highlightedIndex: number;
}

const DropDownList = ({ options, isDropDownOpen, highlightedIndex }: Props) => {
    if (options.length === 0) return null;
    const [selectedOptionIds, setSelectedOptionIds] = useState<string[]>([]);
    const listRef = useRef<HTMLUListElement>(null);

    const toggleOption = (id: string) => {
        setSelectedOptionIds((prev) =>
            prev?.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };

    return (
        <ul
            ref={listRef}
            tabIndex={0}
            id="dropdown-list"
            role="listbox"
            className={clsx(styles.dropdownList, { [styles.open]: isDropDownOpen })}
        >
            {options.map((option, index) => (
                <li
                    role="option"
                    aria-selected={selectedOptionIds.includes(option.id)}
                    className={clsx(styles.dropdownOption, {
                        [styles.selected]: selectedOptionIds.includes(option.id),
                        [styles.highlighted]: index === highlightedIndex,
                    })}
                    onClick={() => toggleOption(option.id)}
                    key={option.id}
                >
                    <div className={styles.content}>
                        <span>{option.label}</span>
                        <span>{option.icon}</span>
                    </div>
                    <Check color="#2563EB" size={19} />
                </li>
            ))}
        </ul>
    );
};

export default DropDownList;
