import styled from "styled-components";

export const Wrapper = styled.div`
  width: 390rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background: white;
`;

export const HeaderWrapper = styled.div`
  width: 390rem;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const HeaderText = styled.div`
  font-family: "BMHANNAPro";
  font-size: 40rem;
  margin-bottom: 10rem;
`;

interface ColorType {
  colorcode: string;
}

export const TextColor = styled.span<ColorType>`
  color: ${(props) => props.colorcode};
`;

export const SliderWrapper = styled.div`
  width: 280rem;
`;

export const CenterWrapper = styled.div`
  width: 390rem;
  height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const RecomText = styled.div`
  font-family: "BMHANNAPro";
  font-size: 32rem;
`;

export const RecomButton = styled.button<ColorType>`
  width: 120rem;
  height: 50rem;
  font-family: "BMHANNAPro";
  font-size: 20rem;
  border-radius: 10rem;
  border: 0px;
  background: ${(props) => props.colorcode};
  color: white;
  cursor: pointer;
`;

export const NaverButton = styled.button`
  width: 150rem;
  height: 40rem;
  font-family: "BMHANNAPro";
  font-size: 16rem;
  border-radius: 10rem;
  border: 0px;
  background: #5fbe54;
  color: white;
  cursor: pointer;
`;

export const FooterText = styled.span`
  font-family: "Pretendard-Medium";
  font-size: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 5rem;
  margin-top: 5rem;
`;

export const GithubIMG = styled.img`
  width: 22rem;
  height: 22rem;
  cursor: pointer;
`;

export const FooterWrapper = styled.div`
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const RangeText = styled.span`
  font-family: "BMHANNAPro";
  font-size: 20rem;
`;
