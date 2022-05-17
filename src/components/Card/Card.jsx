import { Container, Body, Label, Quote, Button } from "./Card.styles";
import DiceIcon from "../../assets/images/icon-dice.svg";
import MobileSeparator from "../../assets/images/pattern-divider-mobile.svg";
import DesktopSeparator from "../../assets/images/pattern-divider-desktop.svg";
import { useState } from "react";
import { Loader } from "../Loader/Loader";
import { AnimatePresence } from "framer-motion";

const Card = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Container>
      <AnimatePresence exitBeforeEnter>
        <Body>
          {loading ? (
            <Loader key="loader" layoutId="loader" />
          ) : (
            <>
              <Label>Advice #117</Label>
              <Quote
                key="quote"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layoutId="quote"
              >
                “It is easy to sit up and take notice, what's difficult is
                getting up and taking action.”
              </Quote>
            </>
          )}
        </Body>
      </AnimatePresence>
      <picture style={{ transition: "all .2s"}}>
        <source srcSet={DesktopSeparator} media="(min-width: 570px)" />
        <img src={MobileSeparator} alt="" />
      </picture>
      <Button aria-label="Get new advice">
        <img src={DiceIcon} alt="Dice icon" />
      </Button>
    </Container>
  );
};

export { Card };
