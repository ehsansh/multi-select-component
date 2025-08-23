import './SelectComponent.module.scss';
import InputComponent from '../InputComponent/InputComponent';

import type { Option } from '../../types';

interface Props {
    options: Option[];
}

const SelectComponent = ({ options }: Props) => {
    return (
        <div>
            <InputComponent />
        </div>
    );
};

export default SelectComponent;
