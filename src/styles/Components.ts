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
  height: 394rem;
  flex-grow: 394;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: #f8f8f8;
`;

export const HeaderText = styled.div`
  font-family: "BMHANNAPro";
  font-size: 25rem;
`;
export const HeaderText2 = styled.div`
  font-family: "BMHANNAPro";
  font-size: 40rem;
`;

interface ColorType {
  colorcode: string;
}

export const TextColor = styled.span<ColorType>`
  color: ${(props) => props.colorcode};
  font-size: 30rem;
`;

export const SliderWrapper = styled.div`
  width: 280rem;
`;

export const CenterWrapper = styled.div`
  width: 370rem;
  height: 384.25rem;
  flex-grow: 384.25;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  // background: #f8f8f8;
`;

export const RecomText = styled.div`
  font-family: "BMHANNAPro";
  font-size: 36rem;
`;

export const RecomButton = styled.button<ColorType>`
  font-family: "BMHANNAPro";
  font-size: 20rem;
  color: #3d3d3d;
  cursor: pointer;
  width: 112rem;
  height: 44rem;
  background: #ffffff;
  border: 3rem solid ${(props) => props.colorcode};
  border-radius: 8rem;
`;

export const NaverButton = styled.button`
  width: 191.6rem;
  height: 36rem;
  font-size: 15rem;
  background: #ffffff;
  border: 3rem solid #5fbe54;
  border-radius: 8rem;

  font-family: "BMHANNAPro";
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterText = styled.span`
  font-family: "Pretendard-Medium";
  font-size: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-right: 19.4rem;
  margin-bottom: 18.25rem;
`;

export const GithubIMG = styled.img`
  width: 22rem;
  height: 22rem;
  margin-bottom: 14rem;
  margin-right: 3.93rem;
  cursor: pointer;
`;

export const FooterWrapper = styled.div`
  height: 65rem;
  width: 390rem;
  flex-grow: 65;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const RangeText = styled.span`
  font-family: "BMHANNAPro";
  font-size: 20rem;
`;

interface HeightType {
  height: number;
}

export const FlexHeightBox = styled.div<HeightType>`
  height: ${(props) => `${props.height}rem`};
  flex-grow: ${(props) => `${props.height}`};
`;

export const HeightBox = styled.div<HeightType>`
  height: ${(props) => `${props.height}rem`};
`;

export const CampusWrapper = styled.div`
  width: 200rem;
  height: 110rem;

  background: #ffffff;

  box-shadow: 0rem 0rem 15rem rgba(43, 102, 83, 0.2);
  border-radius: 10rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DishIMG = styled.img`
  width: 70rem;
  height: 70rem;
`;

export const PriceColor = styled.span<ColorType>`
  color: ${(props) => props.colorcode};
`;

export const PlaceIMG = styled.img`
  width: 12.6rem;
  height: 18rem;
  margin-right: 15rem;
`;
