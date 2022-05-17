import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../../style-variables";

const { neonGreen, neonGreenDisabled, lightCyan, grayishBlue, darkGrayishBlue, darkBlue } = colors;

const Container = styled(motion.div)`
  display: flex;
  position: relative;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-evenly;
  background: ${darkGrayishBlue};
  width: 450px;
  height: 260px;
  padding: 2rem 2.5rem 4rem 2.5rem;
  border-radius: 15px;
  transition: all .2s;

  @media screen and (max-width: 570px) {
    width: 100%;
  }

  @media screen and (max-width: 410px) {
    padding: 3rem 1.1rem 3rem;
  }
`;

const Body = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`

const Label = styled.h2`
  font-size: 0.9rem;
  text-transform: uppercase;
  color: ${neonGreen};
  letter-spacing: 3px;
  margin-bottom: 2rem;
`;

const Quote = styled(motion.p)`
  margin-bottom: 2.5rem;
  text-align: center;
  font-size: 28px;
  color: ${lightCyan};

  @media screen and (max-width: 410px) {
    margin-bottom: 2rem;
    font-size: 22px;
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
  transition: all 0.2s ease-out;

  &:hover {
    box-shadow: 0 0 30px ${neonGreen};
  }

  &:disabled {
    background: ${neonGreenDisabled};
    box-shadow: 0 0 20px ${neonGreenDisabled};
  }
`;

export { Container, Label, Quote, Button, Body };
