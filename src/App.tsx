import SelectComponent from '@/components/SelectComponent/SelectComponent';

const defaultOptions = [
    { label: 'Education', icon: '🎓' },
    { label: 'Yeeeah, science!', icon: '🧪' },
    { label: 'Art', icon: '🎨' },
    { label: 'Sport', icon: '⚽' },
    { label: 'Games', icon: '🎮' },
    { label: 'Health', icon: '🧑‍⚕️' },
];

function App() {
    return (
        <div>
            <SelectComponent options={defaultOptions} />
        </div>
    );
}

export default App;
