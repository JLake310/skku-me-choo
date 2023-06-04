import { useState } from "react";
import foodData from "@assets/data/data.json";
import githubimg from "@assets/images/githublogo.png";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import * as C from "@styles/Components";
import dishimg from "@assets/images/dish.png";
import placeimg from "@assets/images/place.png";

const JaGwaPage = () => {
  const ColorCode = "#4b81bf";
  const foodList: (string | number)[][] = foodData.insa;
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
        <C.FlexHeightBox height={85} />
        <C.CampusWrapper>
          <C.HeaderText>성균관대</C.HeaderText>
          <C.HeightBox height={15} />
          <C.HeaderText>
            <C.TextColor colorcode={ColorCode}>인사캠</C.TextColor>
          </C.HeaderText>
        </C.CampusWrapper>
        <C.FlexHeightBox height={15} />
        <C.HeaderText2>메뉴 추천 좀</C.HeaderText2>
        <C.FlexHeightBox height={15} />
        <C.DishIMG src={dishimg} alt="" />
        <C.FlexHeightBox height={41} />
      </C.HeaderWrapper>
      <C.CenterWrapper>
        <C.FlexHeightBox height={46.5} />
        <C.RecomText>{newFoodList[recom][0]}</C.RecomText>
        <C.FlexHeightBox height={15} />
        <C.RecomButton colorcode={ColorCode} onClick={RandomHandler}>
          메뉴 바꾸기
        </C.RecomButton>
        <C.FlexHeightBox height={50} />
        <C.RangeText>
          <C.PriceColor colorcode={ColorCode}>{sliderVal[0]}</C.PriceColor>
          원부터{" "}
          <C.PriceColor colorcode={ColorCode}>{sliderVal[1]}</C.PriceColor>
          원까지
        </C.RangeText>
        <C.FlexHeightBox height={20} />
        <C.SliderWrapper>
          <Slider
            range
            railStyle={{ backgroundColor: "#DDDDDD", height: 10 }}
            trackStyle={{ backgroundColor: ColorCode, height: 10 }}
            handleStyle={{
              borderColor: ColorCode,
              height: 16,
              width: 16,
              marginTop: -3,
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
          <C.FlexHeightBox height={63.5} />
        </C.SliderWrapper>
        <C.NaverButton onClick={() => HandleRedirect(newFoodList[recom][1])}>
          <C.PlaceIMG src={placeimg} alt="" />
          네이버 지도에서 보기
        </C.NaverButton>
        <C.FlexHeightBox height={33.25} />
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
