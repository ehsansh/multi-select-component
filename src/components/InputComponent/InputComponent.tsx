import './InputComponent.module.scss';

import ChevronDown from '../Icons/ChevronDown';
import ChevronUp from '../Icons/ChevronUp';

const InputComponent = () => {
    return (
        <div>
            <input type="text" />
            <div className="icons">
                <ChevronUp size={15} color="gray" />
                <ChevronDown size={15} color="gray" />
            </div>
        </div>
    );
};

export default InputComponent;
