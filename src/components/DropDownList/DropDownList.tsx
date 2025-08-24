import { useRef } from 'react';
import styles from './DropDownList.module.scss';
import Check from '@/components/Icons/Check';
import type { Option } from '@/types';
import clsx from 'clsx';
interface Props {
    options: Option[];
    isDropDownOpen: boolean;
    highlightedIndex: number;
    selectedOptionIds: string[];
    toggleOption: (id: string) => void;
}

const DropDownList = ({
    options,
    isDropDownOpen,
    highlightedIndex,
    selectedOptionIds,
    toggleOption,
}: Props) => {
    if (options.length === 0) return null;

    const listRef = useRef<HTMLUListElement>(null);

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
