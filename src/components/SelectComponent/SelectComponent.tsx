import { useState } from 'react';
import InputComponent from '@/components/InputComponent/InputComponent';
import DropDownList from '@/components/DropDownList/DropDownList';
import { useClickOutside } from '@/hooks/useClickOutside';
import { v4 as uuidv4 } from 'uuid';
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

    const addNewOption = (value: string) => {
        const found = availableOptions.find(
            (option) => option.label.toLowerCase() === value.toLowerCase()
        );
        if (!found) {
            const newItem = {
                label: value,
                id: uuidv4(),
            };
            setAvailableOptions((prev) => [newItem, ...prev]);
            return true;
        }
        return false;
    };

    return (
        <div ref={componentRef} style={{ width }}>
            <InputComponent
                addNewOption={addNewOption}
                isDropDownOpen={isDropDownOpen}
                setIsDropDownOpen={setIsDropDownOpen}
            />
            <DropDownList isDropDownOpen={isDropDownOpen} options={availableOptions} />
        </div>
    );
};

export default SelectComponent;
