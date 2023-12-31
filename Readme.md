# React-modal-context

## Package NPM link

[![NPM](https://img.shields.io/npm/v/modal-library.svg)](https://www.npmjs.com/package/@samuelprigent/react-modal-context)

- https://www.npmjs.com/package/@samuelprigent/react-modal-context

## Description

React component that allows iterating multiple modals using context to handle the display :

- To add another modal, create a new component like `<CustomModalTwo/>`.
- Wrap each modal component with his own `<ModalContextProvider>`.
- This ensures that each modal has his own isolated context.

## Install

```bash
npm i @samuelprigent/react-modal-context
```

## Example

In your `App.jsx` file

```jsx
import { useContext } from "react";
import {
  ModalContextProvider,
  ModalVersion,
  ModalContext,
} from "@samuelprigent/react-modal-context";

const App = () => {
  const CustomModal = () => {
    const { toggleShow } = useContext(ModalContext);

    // == Your modal here
    const modalContent = (
      <>
        <h2>Modal title</h2>
        <p>Description of the modal</p>
        <div onClick={toggleShow} className="closeButton">
          Close
        </div>
      </>
    );

    // == Your trigger here
    return (
      <>
        <button onClick={toggleShow} className="button-style">
          Show modal
        </button>
        <ModalVersion modalContent={modalContent} />
      </>
    );
  };

  return (
    <ModalContextProvider>
      <CustomModal />
    </ModalContextProvider>
  );
};
```

## License

MIT © [samuelprigent](https://github.com/samuelprigent)
