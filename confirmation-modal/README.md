# Confirmation Modal Component

A customizable confirmation modal component built with styled-components.

## Installation

To install the package, use npm:

```bash
npm install confirmation-modal-wealth-health
```

## Usage

Exemple :
```jsx
import { useState } from 'react';
import ConfirmationModal from 'confirmation-modal-wealth-health';

function App() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <div>
      <button onClick={() => setShowConfirmation(true)}>Show Modal</button>
      <ConfirmationModal
        show={showConfirmation}
        message="Employee Created!"
        onClose={closeConfirmation}
        closeButtonText='x'
        overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        contentStyle={{ padding: '30px', borderRadius: '10px' }}
        messageStyle={{ fontSize: '1.2rem' }}
        closeButtonStyle={{ fontSize: '1rem', color: 'red' }}
      />
    </div>
  );
}

export default App;

```

## Props

The ConfirmationModal component accepts the following props:

- ``show`` (boolean): Determines whether the modal is visible or not.
- ``message`` (string): The message to display inside the modal.
- ``onClose`` (function): Callback function to call when the close button is clicked.
- ``closeButtonText`` (string): Text to display inside the close button.
- ``overlayStyle`` (object): Custom styles for the modal overlay.
- ``contentStyle`` (object): Custom styles for the modal content.
- ``messageStyle`` (object): Custom styles for the message text.
- ``closeButtonStyle`` (object): Custom styles for the close button.

## Styling
The component uses styled-components for styling. You can pass custom styles through the props to customize the appearance of the modal, overlay, message, and close button.

## Autor

Développé avec ❤️ par [Dany XIONG]([lien](https://github.com/Ekkylibre)).