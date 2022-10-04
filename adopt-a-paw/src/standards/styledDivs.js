import styled from "styled-components";
import { COLORS, DEVICE, MODAL_CONSTANTS } from "./constants";

export const NavbarContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 5vh;
  background: ${COLORS.trueBlue};
  justify-content: end;
`;

export const NavbarItem = styled.button`
  display: flex;
  justify-contents: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  padding: 5px;
  font-weight: bold;
  border: none;
  background: ${COLORS.trueBlue};
  color: ${COLORS.offWhite};
`;

export const Screen = styled.div`
  display: flex;
  height: 95vh;
  width: 100vw;
  background: #f0f2f5;
  justify-content: center;
  align-items: center;
`;

export const ScreenCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 90%;
  background: #f0f2f5;
  align-items: center;
  justify-content: center;

  @media ${DEVICE.laptop} {
    flex-direction: column;
    height: 100%;
  }
`;

export const LargeLogo = styled.img`
  width: 400px;
  margin-bottom: 200px;
  margin-right: 10%;

  @media ${DEVICE.laptop} {
    width: 350px;
    margin-top: 100px;
    margin-bottom: 75px;
    margin-right: 0%;
  }
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: auto;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  align-items: center;
  padding-bottom: 5%;
`;

export const ModalInput = styled.input`
  width: 80%;
  font-size: 17px;
  padding: 14px 16px;
  border-radius: 6px;
  border: 1px solid #dddfe2;
  margin-top: 5%;
`;

export const ModalButton = styled.button`
  width: 90%;
  height: 48px;
  border: none;
  border-radius: 6px;
  font-size: 20px;
  padding: 0 16px;
  margin-top: 5%;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    filter: brightness(95%);
  }

  &:active {
    transition-duration: 100ms;
    transform: scale(0.97);
  }
`;
export const LoginButton = styled(ModalButton)`
  width: 90%;
  background-color: ${COLORS.trueBlue};
  color: ${COLORS.white};
`;
export const SignUpButton = styled(ModalButton)`
  width: 60%;
  font-size: 16px;
  background-color: ${COLORS.goodGreen};
  color: ${COLORS.white};
`;

export const ModalLink = styled.a`
  font-size: 14px;
  margin-top: 16px;
  font-weight: bold;
  color: ${COLORS.trueBlue};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ModalSeparator = styled.div`
  width: 90%;
  border-bottom: 1px solid #dadde1;
  margin: 20px 16px;
`;
