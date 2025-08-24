import styles from './SelectInfo.module.scss';

const SelectInfo = () => {
    return (
        <div className={styles.infoContainer}>
            <h2 className={styles.title}>How to Use the Select</h2>
            <ul className={styles.list}>
                <li>Click on the input to open or close the dropdown.</li>
                <li>
                    When the input is focused:
                    <ul>
                        <li>Press ↑ or ↓ to navigate items.</li>
                        <li>Press Enter to select or add a new item.</li>
                        <li>Press Esc to close the dropdown.</li>
                    </ul>
                </li>
                <li>Click outside to close the dropdown menu.</li>
                <li>Type in the input and press Enter to add a new item.</li>
                <li>
                    Click an item to select it (✓ checkmark appears). Click again to deselect it.
                </li>
                <li>If you try to add a duplicate item, an error message will be shown.</li>
            </ul>
        </div>
    );
};

export default SelectInfo;
