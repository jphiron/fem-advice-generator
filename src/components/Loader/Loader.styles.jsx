import styled, { keyframes } from "styled-components";
import { colors } from "../../style-variables";

const { neonGreen } = colors;

const spinnerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  margin-bottom: 2.5rem;

  &:after {
    content: "";
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    margin: 0;
    border-radius: 50%;
    border: 4px solid ${neonGreen};
    border-color: ${neonGreen} transparent ${neonGreen} transparent;
    animation: ${spinnerAnimation} .75s linear infinite;
  }
`;

export { Spinner };
