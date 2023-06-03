import React, { useState } from "react";
import food_data from "@assets/data/data.json";
import styled from "styled-components";

const MainPage = () => {
  const food_list: string[][] = food_data.all;
  const [recom, setRecom] = useState(
    Math.round(Math.random() * food_list.length)
  );
  const isMobile = function () {
    const match = window.matchMedia("(pointer:coarse)");
    return match && match.matches;
  };
  const RandomHandler = () => {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        setRecom(Math.round(Math.random() * (food_list.length - 1)));
      }, 50 * i);
    }
  };

  const HandleRedirect = (id: string) => {
    if (isMobile()) {
      window.location.href = `https://m.place.naver.com/restaurant/${id}/home`;
    } else {
      window.location.href = `https://map.naver.com/v5/entry/place/${id}`;
    }
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderText>성균관대</HeaderText>
        <HeaderText>메뉴 추천 좀</HeaderText>
      </HeaderWrapper>
      <CenterWrapper>
        <RecomText>{food_list[recom][0]}</RecomText>
        <RecomButton onClick={RandomHandler}>메뉴 바꾸기</RecomButton>
        <NaverButton onClick={() => HandleRedirect(food_list[recom][1])}>
          네이버 지도에서 보기
        </NaverButton>
      </CenterWrapper>
      <FooterText>Copyright © Jaeyeon Kim All Rights Reserved.</FooterText>
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
`;

const HeaderWrapper = styled.div`
  width: 390rem;
  height: 300rem;
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

const CenterWrapper = styled.div`
  width: 390rem;
  height: 200rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 100rem;
`;

const RecomText = styled.div`
  font-family: "BMHANNAPro";
  font-size: 30rem;
`;

const RecomButton = styled.button`
  width: 100rem;
  height: 40rem;
  //   font-family: "Pretendard-SemiBold";
  font-family: "BMHANNAPro";
  font-size: 16rem;
  border-radius: 10rem;
  border: 0px;
  background: #2b6653;
  color: white;
  cursor: pointer;
`;

const NaverButton = styled.button`
  width: 150rem;
  height: 40rem;
  //   font-family: "Pretendard-SemiBold";
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
  height: 295rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 5rem;
`;
