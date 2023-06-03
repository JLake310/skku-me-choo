import React, { useState } from "react";
import food_data from "@assets/data/data.json";
import styled from "styled-components";

const MainPage = () => {
  const food_list: string[] = food_data.all;
  const [recom, setRecom] = useState(
    Math.round(Math.random() * food_list.length)
  );
  const RandomHandler = () => {
    setRecom(Math.round(Math.random() * food_list.length));
  };
  return (
    <Wrapper>
      <CenterWrapper>
        <RecomText>{food_list[recom]}</RecomText>
        <RecomButton onClick={RandomHandler}>랜덤 바꾸기</RecomButton>
      </CenterWrapper>
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  width: 390rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const CenterWrapper = styled.div`
  width: 390rem;
  height: 100rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const RecomText = styled.div`
  font-family: "Pretendard-SemiBold";
  font-size: 16rem;
`;

const RecomButton = styled.button`
  width: 100rem;
  height: 50rem;
  font-family: "Pretendard-SemiBold";
  font-size: 16rem;
  border-radius: 10rem;
  border: 0px;
`;
