import { useState } from 'react';
import styles from './DropDownList.module.scss';

import Check from '@/components/Icons/Check';
import type { Option } from '@/types';

interface Props {
    options: Option[];
}

const DropDownList = ({ options }: Props) => {
    const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

    return (
        <ul>
            {options.map((option) => (
                <li
                    className={selectedOptionId === option.id ? styles.selected : ''}
                    onClick={() => setSelectedOptionId(option.id)}
                    key={option.id}
                >
                    <div>
                        <span>{option.label}</span>
                        <span>{option.icon}</span>
                    </div>
                    <Check />
                </li>
            ))}
        </ul>
    );
};

export default DropDownList;
