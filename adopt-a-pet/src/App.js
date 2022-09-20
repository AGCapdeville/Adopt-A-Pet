import './App.css';
import React  from 'react';

import {
  Screen,
  Modal,
  ModalTitle,
  ModalSubtitle
} from "./standards/styledDivs.js";

function App() {
  return (
    <Screen>
      <Modal>
        <ModalTitle>
          Welcome to Adopt-A-Pet
        </ModalTitle>
        <ModalSubtitle>
          Login
        </ModalSubtitle>
      </Modal>
    </Screen>
  );
}

export default App;
