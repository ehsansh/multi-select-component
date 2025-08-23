import './DropDownList.module.scss';

import type { Option } from '@/types';

interface Props {
    options: Option[];
}

const DropDownList = ({ options }: Props) => {
    return (
        <ul>
            {options.map((option, index) => (
                <li key={index}>
                    <span>{option.label}</span>
                    <span>{option.icon}</span>
                </li>
            ))}
        </ul>
    );
};

export default DropDownList;
