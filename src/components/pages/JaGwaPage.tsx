import { useState } from "react";
import foodData from "@assets/data/data.json";
import githubimg from "@assets/images/githublogo.png";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import * as C from "@styles/Components";
import dishimg from "@assets/images/dish.png";
import placeimg from "@assets/images/place.png";

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
      <C.TopDiv>
        <C.FlexHeightBox height={102} />
        <C.CampusWrapper>
          <C.CampusTextWrapper>
            <C.CampusText1>성균관대</C.CampusText1>
            <C.CampusText2 colorcode={ColorCode}>자과캠</C.CampusText2>
          </C.CampusTextWrapper>
        </C.CampusWrapper>
        <C.FlexHeightBox height={15} />
        <C.TopTextImageDiv>
          <C.TopText>메뉴 추천 좀</C.TopText>
          <C.TopIMG src={dishimg} alt="" />
        </C.TopTextImageDiv>
        <C.FlexHeightBox height={29} />
      </C.TopDiv>
      <C.BottomDiv>
        <C.FlexHeightBox height={35} />
        <C.BottomCenterDiv>
          <C.FlexHeightBox height={39.45} />
          <C.RecomDiv>
            <C.RecomDesc>누를 때마다 메뉴가 바뀌어요!</C.RecomDesc>
            <C.RecomButton
              colorcode={ColorCode}
              len={String(newFoodList[recom][0]).length}
              onClick={RandomHandler}
            >
              {newFoodList[recom][0]}
            </C.RecomButton>
          </C.RecomDiv>
          <C.FlexHeightBox height={30.01} />
          <C.PriceSliderDiv>
            <C.PriceText>
              <C.PriceColor colorcode={ColorCode}>{sliderVal[0]}</C.PriceColor>
              원부터{" "}
              <C.PriceColor colorcode={ColorCode}>{sliderVal[1]}</C.PriceColor>
              원까지
            </C.PriceText>
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
            </C.SliderWrapper>
          </C.PriceSliderDiv>
          <C.FlexHeightBox height={50.02} />
          <C.NaverButton onClick={() => HandleRedirect(newFoodList[recom][1])}>
            <C.NaverButtonIMG src={placeimg} alt="" />
            네이버 지도에서 보기
          </C.NaverButton>
          <C.FlexHeightBox height={39.46} />
        </C.BottomCenterDiv>
        <C.FlexHeightBox height={37.5} />
        <C.FooterDiv>
          <C.GithubIMG
            src={githubimg}
            alt=""
            onClick={() =>
              GithubHandler("https://github.com/JLake310/skku-me-choo")
            }
          />
          <C.CopyrightText>
            Copyright © Jaeyeon Kim All Rights Reserved.
          </C.CopyrightText>
        </C.FooterDiv>
      </C.BottomDiv>
    </C.Wrapper>
  );
};

export default JaGwaPage;
