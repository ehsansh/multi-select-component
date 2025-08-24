import { useState } from 'react';
import SelectComponent from '@/components/SelectComponent/SelectComponent';
import { v4 as uuidv4 } from 'uuid';
import SelectInfo from '@/components/SelectInfo/SelectInfo';
import type { Option } from '@/types';

const defaultOptions = [
    { label: 'Education', icon: '🎓' },
    { label: 'Yeeeah, science!', icon: '🧪' },
    { label: 'Art', icon: '🎨' },
    { label: 'Sport', icon: '⚽' },
    { label: 'Games', icon: '🎮' },
    { label: 'Health', icon: '🧑‍⚕️' },
];

const optionsWithId: Option[] = defaultOptions.map((option) => ({
    ...option,
    id: uuidv4(),
}));

function App() {
    const [availableOptions, setAvailableOptions] = useState(optionsWithId);
    const [selectedOptionIds, setSelectedOptionIds] = useState<string[]>([]);

    return (
        <div>
            <div className="selectWrap">
                <SelectComponent
                    availableOptions={availableOptions}
                    selectedOptionIds={selectedOptionIds}
                    setAvailableOptions={setAvailableOptions}
                    setSelectedOptionIds={setSelectedOptionIds}
                    width="300px"
                />
            </div>
            <SelectInfo />
        </div>
    );
}

export default App;
