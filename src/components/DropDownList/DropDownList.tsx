import { useState } from 'react';
import styles from './DropDownList.module.scss';

import Check from '@/components/Icons/Check';
import type { Option } from '@/types';

interface Props {
    options: Option[];
    isDropDownOpen: boolean;
}

const DropDownList = ({ options, isDropDownOpen }: Props) => {
    if (options.length === 0) return null;
    const [selectedOptionIds, setSelectedOptionIds] = useState<string[]>([]);

    const toggleOption = (id: string) => {
        setSelectedOptionIds((prev) =>
            prev?.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };

    return (
        <ul id="dropdown-list" role="listbox" className={`${isDropDownOpen ? styles.open : ''}`}>
            {options.map((option) => (
                <li
                    role="option"
                    aria-selected={selectedOptionIds.includes(option.id)}
                    className={selectedOptionIds?.includes(option.id) ? styles.selected : ''}
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
