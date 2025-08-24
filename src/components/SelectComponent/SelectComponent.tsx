import { useState, useEffect } from 'react';
import InputComponent from '@/components/InputComponent/InputComponent';
import DropDownList from '@/components/DropDownList/DropDownList';
import { useClickOutside } from '@/hooks/useClickOutside';
import { v4 as uuidv4 } from 'uuid';
import type { Option } from '@/types';
import styles from './SelectComponent.module.scss';

interface Props {
    options: Option[];
    width?: string;
}

const SelectComponent = ({ options, width = '220px' }: Props) => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [availableOptions, setAvailableOptions] = useState(options);
    const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

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
            setHighlightedIndex(0);
            return true;
        }
        return false;
    };

    const onHighlightChange = (key: string) => {
        if (key === 'ArrowDown') {
            setHighlightedIndex((prev) => (prev + 1) % availableOptions.length);
        } else if (key === 'ArrowUp') {
            setHighlightedIndex(
                (prev) => (prev - 1 + availableOptions.length) % availableOptions.length
            );
        } else if (key === 'Escape') {
            setIsDropDownOpen(false);
        }
    };

    useEffect(() => {
        setHighlightedIndex(-1);
    }, [isDropDownOpen]);

    return (
        <div
            ref={componentRef}
            className={styles.selectWrapper}
            style={{ '--select-width': width } as React.CSSProperties}
        >
            <InputComponent
                addNewOption={addNewOption}
                isDropDownOpen={isDropDownOpen}
                setIsDropDownOpen={setIsDropDownOpen}
                onHighlightChange={onHighlightChange}
            />
            <DropDownList
                setIsDropDownOpen={setIsDropDownOpen}
                isDropDownOpen={isDropDownOpen}
                options={availableOptions}
                highlightedIndex={highlightedIndex}
            />
        </div>
    );
};

export default SelectComponent;
