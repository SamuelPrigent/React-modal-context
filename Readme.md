# React-modal-context

[![NPM](https://img.shields.io/npm/v/modal-library.svg)](https://www.npmjs.com/package/modal-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Description

A React component that allows iterating multiple modals using context to handle the display.

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
  ModalContextVersion,
  ModalContext,
} from "../modalContext.jsx";

const App = () => {
  const ModalTriggerContext = () => {
    const { toggleShow } = useContext(ModalContext);

    // == Edit the modal content here
    const modalContent = (
      <>
        <h2>Modal title</h2>
        <p>Description of the modal</p>
        <div onClick={toggleShow} className="closeButton">
          Close
        </div>
      </>
    );

    // == edit the trigger button here
    return (
      <>
        <button onClick={toggleShow} className="button-style">
          Show modal
        </button>
        <ModalContextVersion modalContent={modalContent} />
      </>
    );
  };

  return (
    <ModalContextProvider>
      <ModalTriggerContext />
    </ModalContextProvider>
  );
};
```

## License

MIT © [samuelprigent](https://github.com/samuelprigent)
