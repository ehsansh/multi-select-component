import './SelectComponent.module.scss';
import InputComponent from '@/components/InputComponent/InputComponent';
import DropDownList from '@/components/DropDownList/DropDownList';

import type { Option } from '@/types';

interface Props {
    options: Option[];
}

const SelectComponent = ({ options }: Props) => {
    return (
        <div>
            <InputComponent />
            <DropDownList options={options} />
        </div>
    );
};

export default SelectComponent;
