import React from "react";
import logo from "../images/LogoColorTransparentBkg.png";
import {
  Screen,
  ScreenCard,
  LargeLogo,
  Modal,
  ModalInput,
  SignUpButton,
  LoginButton,
  ModalLink,
  ModalSeparator,
} from "../standards/styledDivs.js";

import { setupUser } from "../userFunctions.js";

const Portal = () => {
  return (
    <Screen>
      <ScreenCard>
        <LargeLogo src={logo} />
        <Modal>
          <ModalInput placeholder="Email or phone number"></ModalInput>
          <ModalInput placeholder="Password"></ModalInput>
          <LoginButton>Log In</LoginButton>
          <ModalLink>Forgot password?</ModalLink>
          <ModalSeparator />
          <SignUpButton onClick={() => setupUser()}>
            Create new account
          </SignUpButton>
        </Modal>
      </ScreenCard>
    </Screen>
  );
};

export default Portal;
