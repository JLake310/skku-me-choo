import React, { useState } from "react";
import foodData from "@assets/data/data.json";
import styled from "styled-components";
import githubimg from "@assets/images/githublogo.png";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const MainPage = () => {
  const foodList: (string | number)[][] = foodData.jagwa;
  const [newFoodList, setFoodList] = useState(foodList);
  const [recom, setRecom] = useState(
    Math.round(Math.random() * newFoodList.length)
  );
  const PriceRange = [3500, 30000];
  const [sliderVal, setVal] = useState([PriceRange[0], PriceRange[1]]);

  const isMobile = function () {
    const match = window.matchMedia("(pointer:coarse)");
    return match && match.matches;
  };
  const RandomHandler = () => {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        setRecom(Math.round(Math.random() * (newFoodList.length - 1)));
      }, 50 * i);
    }
  };

  const HandleRedirect = (id: string | number) => {
    if (isMobile()) {
      window.location.href = `https://m.place.naver.com/restaurant/${id}/home`;
    } else {
      window.location.href = `https://map.naver.com/v5/entry/place/${id}`;
    }
  };

  const GithubHandler = (link: string) => {
    window.location.href = link;
  };

  const SliderHandler = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setVal(value);
      let newList: (string | number)[][] = [];
      // eslint-disable-next-line array-callback-return
      foodList.map((item) => {
        if (!(Number(item[2]) > value[1] || Number(item[3]) < value[0])) {
          newList.push(item);
        }
      });
      setRecom(Math.round(Math.random() * (newList.length - 1)));
      setFoodList(newList);
    }
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderText>성균관대</HeaderText>
        <HeaderText>메뉴 추천 좀</HeaderText>
      </HeaderWrapper>
      <CenterWrapper>
        <RecomText>{newFoodList[recom][0]}</RecomText>
        <RecomButton onClick={RandomHandler}>메뉴 바꾸기</RecomButton>
        <RangeText>
          {sliderVal[0]}원부터 {sliderVal[1]}원까지
        </RangeText>
        <SliderWrapper>
          <Slider
            range
            railStyle={{ backgroundColor: "#f8f8ff", height: 10 }}
            trackStyle={{ backgroundColor: "#2b6653", height: 10 }}
            handleStyle={{
              borderColor: "#2b6653",
              height: 28,
              width: 28,
              // marginLeft: -10,
              marginTop: -9,
              backgroundColor: "#2b6653",
              opacity: 1.0,
            }}
            min={PriceRange[0]}
            max={PriceRange[1]}
            step={500}
            defaultValue={[PriceRange[0], PriceRange[1]]}
            onChange={(value) => {
              SliderHandler(value);
            }}
          />
        </SliderWrapper>
        <NaverButton onClick={() => HandleRedirect(newFoodList[recom][1])}>
          네이버 지도에서 보기
        </NaverButton>
      </CenterWrapper>
      <FooterWrapper>
        <GithubIMG
          src={githubimg}
          alt=""
          onClick={() =>
            GithubHandler("https://github.com/JLake310/skku-me-choo")
          }
        />
        <FooterText>Copyright © Jaeyeon Kim All Rights Reserved.</FooterText>
      </FooterWrapper>
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  width: 390rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background: white;
`;

const HeaderWrapper = styled.div`
  width: 390rem;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const HeaderText = styled.div`
  font-family: "BMHANNAPro";
  font-size: 40rem;
  margin-bottom: 10rem;
`;

const SliderWrapper = styled.div`
  width: 280rem;
`;

const CenterWrapper = styled.div`
  width: 390rem;
  height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const RecomText = styled.div`
  font-family: "BMHANNAPro";
  font-size: 32rem;
`;

const RecomButton = styled.button`
  width: 120rem;
  height: 50rem;
  font-family: "BMHANNAPro";
  font-size: 20rem;
  border-radius: 10rem;
  border: 0px;
  background: #2b6653;
  color: white;
  cursor: pointer;
`;

const NaverButton = styled.button`
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

const FooterText = styled.span`
  font-family: "Pretendard-Medium";
  font-size: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 5rem;
  margin-top: 5rem;
`;

const GithubIMG = styled.img`
  width: 22rem;
  height: 22rem;
  cursor: pointer;
`;

const FooterWrapper = styled.div`
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const RangeText = styled.span`
  font-family: "BMHANNAPro";
  font-size: 20rem;
`;
