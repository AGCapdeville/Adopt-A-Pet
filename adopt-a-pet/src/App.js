import "./App.css";
import React from "react";
import logo from "./images/LogoColorTransparentBkg.png";

import {
  Screen,
  ScreenCard,
  LargeLogo,
  Modal,
  ModalTitle,
  ModalSubtitle,
  ModalCenter,
  ModalFooter,
  ModalSubmitButton,
} from "./standards/styledDivs.js";

function App() {
  return (
    <Screen>
      <ScreenCard>
        <LargeLogo src={logo} />
        <Modal>
          <ModalTitle>Welcome to Adopt-A-Pet</ModalTitle>
          <ModalSubtitle>Login</ModalSubtitle>
          <ModalCenter></ModalCenter>
          <ModalFooter>
            <ModalSubmitButton>Sign In</ModalSubmitButton>
          </ModalFooter>
        </Modal>
      </ScreenCard>
    </Screen>
  );
}

export default App;
