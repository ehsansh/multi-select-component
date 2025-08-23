import './DropDownList.module.scss';

import type { Option } from '@/types';

interface Props {
    options: Option[];
}

const DropDownList = ({ options }: Props) => {
    return (
        <ul>
            {options.map((option) => (
                <li key={option.id}>
                    <span>{option.label}</span>
                    <span>{option.icon}</span>
                </li>
            ))}
        </ul>
    );
};

export default DropDownList;
