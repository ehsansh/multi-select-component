# Multi Select Component

This is a React + TypeScript project implementing a **multi drop-down select component**. The component allows users to select, add, and manage multiple items from a dropdown list.

## Live Demo

You can try the multi-select component online:

[View Demo on Vercel](https://multi-select-component-gamma.vercel.app/)

---

## Features

- Open and close dropdown by clicking on the input.
- Navigate items using **Arrow Up (↑)** and **Arrow Down (↓)** keys.
- Select or add new items using **Enter**.
- Close dropdown with **Escape** key or by clicking outside.
- Add new items by typing and pressing Enter.
- Click an item to select it (✓ checkmark appears); click again to deselect.
- Prevent duplicate items and show an error message if attempted.
- Fully **controlled component** with reusable state management.

---

## Tech Stack

- **React 19**
- **TypeScript**
- **SCSS**
- **Vite**
- **UUID** for unique item IDs
- **clsx** for conditional class handling

---

## Project Structure

- `SelectComponent`: Parent component managing dropdown state and selected items.
- `InputComponent`: Handles user input, keyboard navigation, and error display.
- `DropDownList`: Displays list of options and selected items.
- `useClickOutside`: Custom hook to detect clicks outside the component.

## SelectComponent Props

`SelectComponent` is a **controlled component**. You need to provide the options, selected IDs, and state setters from the parent component. The following props are required:

| Prop                   | Type                                             | Description                                                               |
| ---------------------- | ------------------------------------------------ | ------------------------------------------------------------------------- |
| `availableOptions`     | `Option[]`                                       | Array of available options, each with `id`, `label`, and optional `icon`. |
| `selectedOptionIds`    | `string[]`                                       | Array of IDs representing currently selected options.                     |
| `setAvailableOptions`  | `React.Dispatch<React.SetStateAction<Option[]>>` | Setter function to update the options array from parent.                  |
| `setSelectedOptionIds` | `React.Dispatch<React.SetStateAction<string[]>>` | Setter function to update selected option IDs from parent.                |
| `width` (optional)     | `string`                                         | Width of the select input (default: `"220px"`).                           |

### Example Usage

```tsx
const [availableOptions, setAvailableOptions] = useState<Option[]>(initialOptions);
const [selectedOptionIds, setSelectedOptionIds] = useState<string[]>([]);

return (
    <SelectComponent
        availableOptions={availableOptions}
        selectedOptionIds={selectedOptionIds}
        setAvailableOptions={setAvailableOptions}
        setSelectedOptionIds={setSelectedOptionIds}
        width="300px"
    />
);
```

## How To Start

```bash
git clone https://github.com/your-username/lobox-task.git
cd lobox-task
npm install
npm run dev

```
