import { useState } from 'react';
import InputComponent from '@/components/InputComponent/InputComponent';
import DropDownList from '@/components/DropDownList/DropDownList';
import { useClickOutside } from '@/hooks/useClickOutside';

import type { Option } from '@/types';

interface Props {
    options: Option[];
    width?: string;
}

const SelectComponent = ({ options, width = '220px' }: Props) => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [availableOptions, setAvailableOptions] = useState(options);

    const componentRef = useClickOutside(() => {
        setIsDropDownOpen(false);
    });

    return (
        <div ref={componentRef} style={{ width }}>
            <InputComponent
                setAvailableOptions={setAvailableOptions}
                isDropDownOpen={isDropDownOpen}
                setIsDropDownOpen={setIsDropDownOpen}
            />
            <DropDownList isDropDownOpen={isDropDownOpen} options={availableOptions} />
        </div>
    );
};

export default SelectComponent;
