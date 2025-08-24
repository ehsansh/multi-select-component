# Multi Select Component

This is a React + TypeScript project implementing a **multi drop-down select component**. The component allows users to select, add, and manage multiple items from a dropdown list.

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

## How To Use

```bash
git clone https://github.com/your-username/lobox-task.git
cd lobox-task
npm install
npm run dev

```
