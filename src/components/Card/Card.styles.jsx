import styled from "styled-components";
import { colors } from "../../style-variables";

const { neonGreen, lightCyan, grayishBlue, darkGrayishBlue, darkBlue } = colors;

const Container = styled.div`
  display: flex;
  position: relative;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
  background: ${darkGrayishBlue};
  max-width: 450px;
  padding: 3rem 2.5rem 4rem 2.5rem;
  border-radius: 15px;

  @media screen and (max-width: 410px) {
    padding: 2rem 1.1rem 3rem;
  }
`;

const Label = styled.h2`
  font-size: 0.9rem;
  text-transform: uppercase;
  color: ${neonGreen};
  letter-spacing: 3px;
  margin-bottom: 1.5rem;
`;

const Quote = styled.p`
  margin-bottom: 2.5rem;
  text-align: center;
  font-size: 28px;
  color: ${lightCyan};

  @media screen and (max-width: 410px) {
    margin-bottom: 2rem;
    font-size: 28px;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -30px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  outline: none;
  border: none;
  background: ${neonGreen};
  cursor: pointer;
  transition: box-shadow 0.2s ease-out;

  &:hover {
    box-shadow: 0 0 30px ${neonGreen};
  }
`;

export { Container, Label, Quote, Button };
