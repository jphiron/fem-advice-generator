import styled, { keyframes } from "styled-components";
import { colors } from "../../style-variables";
import { motion } from "framer-motion";

const { neonGreen } = colors;

const spinnerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
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
