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
    const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

    return (
        <ul className={`${isDropDownOpen ? styles.open : ''}`}>
            {options.map((option) => (
                <li
                    className={selectedOptionId === option.id ? styles.selected : ''}
                    onClick={() => setSelectedOptionId(option.id)}
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
