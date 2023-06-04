import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SelectPage = () => {
  const navigate = useNavigate();
  const JaGwaHandler = () => {
    navigate("/jagwa");
  };
  const InSaHandler = () => {
    navigate("/insa");
  };
  return (
    <Wrapper>
      <SelectButton onClick={JaGwaHandler} campus="jagwa">
        자과캠
      </SelectButton>
      <HeightBox />
      <SelectButton onClick={InSaHandler} campus="insa">
        인사캠
      </SelectButton>
    </Wrapper>
  );
};

export default SelectPage;

const Wrapper = styled.div`
  width: 390rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: white;
`;

const SelectButton = styled.button<ButtonType>`
  border: 0px;
  background: white;
  font-family: "BMHANNAPro";
  font-size: 60rem;
  color: ${(props) => (props.campus === "jagwa" ? "#2b6653" : "#4b81bf")};
  cursor: pointer;
`;

interface ButtonType {
  campus: string;
}

const HeightBox = styled.div`
  height: 100rem;
`;
