import styled from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

export const Screen = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  justify-content: center;
  align-items: center;
`;

export const ScreenCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 90%;
  background: #f0f2f5;
  justify-content: space-around;
  align-items: center;

  @media ${device.laptop} {
    flex-direction: column;
    height: 100%;
  }
`;

export const LargeLogo = styled.img`
  width: 400px;
  margin-bottom: 200px;

  @media ${device.laptop} {
    width: 450px;
    margin-bottom: 0px;
  }
`;

export const Modal = styled.div`
  display: flex;
  width: 500px;
  height: 500px;
  background: #ffffff;
  flex-direction: column;
`;

export const ModalTitle = styled.div`
  width: 100%;
  height: 25%;
  background: #648de5ff;
`;

export const ModalSubtitle = styled.div`
  width: 100%;
  height: 15%;
  background: #9eb7e5ff;
`;

export const ModalSubmitButton = styled.div`
  width: 20%;
  height: 10%;
`;

export const ModalCenter = styled.div`
  width: 100%;
  height: 40%;
`;

export const ModalFooter = styled.div`
  width: 100%;
  height: 10%;
`;

/* CSS HEX */
// --fbWhite: #ffffff;
// --fbGrey: #f0f2f5;
// --sage: #cdc392ff;
// --alabaster: #e8e5daff;
// --wild-blue-yonder: #9eb7e5ff;
// --cornflower-blue: #648de5ff;
// --y-in-mn-blue: #304c89ff;

/* CSS HSL */
// --sage: hsla(50, 37%, 69%, 1);
// --alabaster: hsla(47, 23%, 88%, 1);
// --wild-blue-yonder: hsla(219, 58%, 76%, 1);
// --cornflower-blue: hsla(221, 71%, 65%, 1);
// --y-in-mn-blue: hsla(221, 48%, 36%, 1);

/* SCSS HEX */
// $sage: #cdc392ff;
// $alabaster: #e8e5daff;
// $wild-blue-yonder: #9eb7e5ff;
// $cornflower-blue: #648de5ff;
// $y-in-mn-blue: #304c89ff;

/* SCSS HSL */
// $sage: hsla(50, 37%, 69%, 1);
// $alabaster: hsla(47, 23%, 88%, 1);
// $wild-blue-yonder: hsla(219, 58%, 76%, 1);
// $cornflower-blue: hsla(221, 71%, 65%, 1);
// $y-in-mn-blue: hsla(221, 48%, 36%, 1);

/* SCSS RGB */
// $sage: rgba(205, 195, 146, 1);
// $alabaster: rgba(232, 229, 218, 1);
// $wild-blue-yonder: rgba(158, 183, 229, 1);
// $cornflower-blue: rgba(100, 141, 229, 1);
// $y-in-mn-blue: rgba(48, 76, 137, 1);

/* SCSS Gradient */
// $gradient-top: linear-gradient(0deg, #cdc392ff, #e8e5daff, #9eb7e5ff, #648de5ff, #304c89ff);
// $gradient-right: linear-gradient(90deg, #cdc392ff, #e8e5daff, #9eb7e5ff, #648de5ff, #304c89ff);
// $gradient-bottom: linear-gradient(180deg, #cdc392ff, #e8e5daff, #9eb7e5ff, #648de5ff, #304c89ff);
// $gradient-left: linear-gradient(270deg, #cdc392ff, #e8e5daff, #9eb7e5ff, #648de5ff, #304c89ff);
// $gradient-top-right: linear-gradient(45deg, #cdc392ff, #e8e5daff, #9eb7e5ff, #648de5ff, #304c89ff);
// $gradient-bottom-right: linear-gradient(135deg, #cdc392ff, #e8e5daff, #9eb7e5ff, #648de5ff, #304c89ff);
// $gradient-top-left: linear-gradient(225deg, #cdc392ff, #e8e5daff, #9eb7e5ff, #648de5ff, #304c89ff);
// $gradient-bottom-left: linear-gradient(315deg, #cdc392ff, #e8e5daff, #9eb7e5ff, #648de5ff, #304c89ff);
// $gradient-radial: radial-gradient(#cdc392ff, #e8e5daff, #9eb7e5ff, #648de5ff, #304c89ff);
