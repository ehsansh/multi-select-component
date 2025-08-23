import './SelectComponent.module.scss';
import InputComponent from '../InputComponent/InputComponent';

interface Option {
    label: string;
    icon: string;
}

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
