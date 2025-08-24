import SelectComponent from '@/components/SelectComponent/SelectComponent';
import { v4 as uuidv4 } from 'uuid';
import SelectInfo from '@/components/SelectInfo/SelectInfo';

const defaultOptions = [
    { label: 'Education', icon: '🎓' },
    { label: 'Yeeeah, science!', icon: '🧪' },
    { label: 'Art', icon: '🎨' },
    { label: 'Sport', icon: '⚽' },
    { label: 'Games', icon: '🎮' },
    { label: 'Health', icon: '🧑‍⚕️' },
];

const optionsWithId = defaultOptions.map((option) => ({
    ...option,
    id: uuidv4(),
}));

function App() {
    return (
        <div>
            <div className="selectWrap">
                <SelectComponent options={optionsWithId} width="300px" />
            </div>
            <SelectInfo />
        </div>
    );
}

export default App;
