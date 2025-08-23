import './SelectComponent.module.scss';
import InputComponent from '@/components/InputComponent/InputComponent';
import DropDownList from '@/components/DropDownList/DropDownList';

import type { Option } from '@/types';

interface Props {
    options: Option[];
    width?: string;
}

const SelectComponent = ({ options, width = '220px' }: Props) => {
    return (
        <div style={{ width }}>
            <InputComponent />
            <DropDownList options={options} />
        </div>
    );
};

export default SelectComponent;
