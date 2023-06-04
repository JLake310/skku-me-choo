import { useState } from "react";
import foodData from "@assets/data/data.json";
import githubimg from "@assets/images/githublogo.png";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import * as C from "@styles/Components";

const JaGwaPage = () => {
  const ColorCode = "#2b6653";
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
    <C.Wrapper>
      <C.HeaderWrapper>
        <C.HeaderText>성균관대</C.HeaderText>
        <C.HeaderText>
          <C.TextColor colorcode={ColorCode}>자과캠</C.TextColor>
        </C.HeaderText>
        <C.HeaderText>메뉴 추천 좀</C.HeaderText>
      </C.HeaderWrapper>
      <C.CenterWrapper>
        <C.RecomText>{newFoodList[recom][0]}</C.RecomText>
        <C.RecomButton colorcode={ColorCode} onClick={RandomHandler}>
          메뉴 바꾸기
        </C.RecomButton>
        <C.RangeText>
          {sliderVal[0]}원부터 {sliderVal[1]}원까지
        </C.RangeText>
        <C.SliderWrapper>
          <Slider
            range
            railStyle={{ backgroundColor: "#f8f8ff", height: 10 }}
            trackStyle={{ backgroundColor: ColorCode, height: 10 }}
            handleStyle={{
              borderColor: ColorCode,
              height: 28,
              width: 28,
              // marginLeft: -10,
              marginTop: -9,
              backgroundColor: ColorCode,
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
        </C.SliderWrapper>
        <C.NaverButton onClick={() => HandleRedirect(newFoodList[recom][1])}>
          네이버 지도에서 보기
        </C.NaverButton>
      </C.CenterWrapper>
      <C.FooterWrapper>
        <C.GithubIMG
          src={githubimg}
          alt=""
          onClick={() =>
            GithubHandler("https://github.com/JLake310/skku-me-choo")
          }
        />
        <C.FooterText>
          Copyright © Jaeyeon Kim All Rights Reserved.
        </C.FooterText>
      </C.FooterWrapper>
    </C.Wrapper>
  );
};

export default JaGwaPage;
