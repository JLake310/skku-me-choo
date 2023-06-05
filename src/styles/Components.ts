import styled from "styled-components";

interface ColorType {
  colorcode: string;
}

interface HeightType {
  height: number;
}

interface ButtonType {
  colorcode: string;
  len: number;
}

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

export const TopDiv = styled.div`
  width: 390rem;
  height: 399rem;
  flex-grow: 399;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background: #f8f8f8;
`;

export const BottomDiv = styled.div`
  width: 390rem;
  height: 445rem;
  flex-grow: 445;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: white;
`;

export const FlexHeightBox = styled.div<HeightType>`
  height: ${(props) => `${props.height}rem`};
  flex-grow: ${(props) => `${props.height}`};
`;

export const CampusWrapper = styled.div`
  width: 200rem;
  height: 110rem;
  flex-grow: 110;
  background: #ffffff;
  box-shadow: 0rem 0rem 15rem rgba(43, 102, 83, 0.2);
  border-radius: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CampusTextWrapper = styled.div`
  width: 87rem;
  height: 89rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const CampusText1 = styled.span`
  width: 87rem;
  height: 89rem;
  font-family: "Pretendard-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 25rem;
  line-height: 45rem;
  text-align: center;
  color: #353535;
`;
export const CampusText2 = styled.span<ColorType>`
  width: 87rem;
  height: 89rem;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 30rem;
  line-height: 45rem;
  text-align: center;
  color: ${(props) => props.colorcode};
`;

export const TopTextImageDiv = styled.div`
  width: 192rem;
  height: 143rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const TopText = styled.span`
  width: 192rem;
  height: 58rem;
  font-family: "Pretendard-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 40rem;
  line-height: 58rem;
  text-align: center;
  color: #353535;
`;

export const TopIMG = styled.img`
  width: 70rem;
  height: 70rem;
`;

export const BottomCenterDiv = styled.div`
  box-sizing: border-box;

  width: 370rem;
  height: 335rem;
  flex-grow: 335;

  background: #ffffff;
  border: 3rem solid #4b81bf;
  border-radius: 10rem;
  margin: 0 auto;
`;

export const FooterDiv = styled.div`
  width: 370rem;
  height: 37.5rem;
  flex-grow: 37.5;

  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const RecomDiv = styled.div`
  width: 294.59rem;
  height: 85.03rem;
  flex-grow: 85.03;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const RecomDesc = styled.span`
  width: 182rem;
  height: 19.01rem;
  font-family: "Pretendard-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 16rem;
  line-height: 19rem;
  color: #767676;
`;

export const RecomButton = styled.button<ButtonType>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 294.59rem;
  height: 56.02rem;

  background: ${(props) => props.colorcode};
  border-radius: 10rem;
  border: 0px;
  cursor: pointer;

  font-family: "Pretendard-Bold";
  font-style: normal;
  font-weight: 800;
  font-size: 30rem;
  font-size: ${(props) => (props.len > 9 ? "24rem" : "30rem")};
  line-height: 36rem;

  color: #ffffff;
`;

export const PriceSliderDiv = styled.div`
  width: 284.54rem;
  height: 57.02rem;
  flex-grow: 57.02;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const SliderWrapper = styled.div`
  width: 284.54rem;
  height: 16.01rem;
  margin: 0 auto;
`;

export const PriceText = styled.span`
  width: 205.11rem;
  height: 21.01rem;
  font-family: "Pretendard-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 18rem;
  line-height: 21rem;
  text-align: center;
  color: #353535;
`;

export const PriceColor = styled.span<ColorType>`
  color: ${(props) => props.colorcode};
`;

export const NaverButton = styled.button`
  width: 191.6rem;
  height: 34rem;
  background: #ffffff;
  border: 2rem solid #5fbe54;
  border-radius: 8rem;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  font-family: "Pretendard-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 15rem;
  line-height: 20rem;

  color: #626262;
`;

export const NaverButtonIMG = styled.img`
  width: 12.6rem;
  height: 18rem;
  margin-right: 15rem;
`;

export const GithubIMG = styled.img`
  width: 25.34rem;
  height: 24.5rem;
  margin-right: 3.93rem;
`;

export const CopyrightText = styled.span`
  font-family: "Pretendard-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 10rem;
  line-height: 12rem;
  text-align: center;
  margin-top: 9rem;
`;
