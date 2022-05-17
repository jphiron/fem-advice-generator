import { Container, Body, Label, Quote, Button } from "./Card.styles";
import DiceIcon from "../../assets/images/icon-dice.svg";
import MobileSeparator from "../../assets/images/pattern-divider-mobile.svg";
import DesktopSeparator from "../../assets/images/pattern-divider-desktop.svg";
import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import { AnimatePresence, motion } from "framer-motion";

const defaultAdvice = {
  id: 71,
  advice: "It is easy to sit up and take notice, what's difficult is getting up and taking action."
}

const Card = () => {
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState(defaultAdvice);

  const getAdvice = async () => {
    setLoading(true);
    const res = await fetch("https://api.adviceslip.com/advice");
    const json = await res.json();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    setAdvice({ ...json.slip });
  };

  return (
    <Container>
      <Body>
        <AnimatePresence exitBeforeEnter>
          {loading ? (
            <Loader
              key="loader"
              layoutId="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: .2 }}
            />
          ) : (
            <motion.div
              style={{
                display: "flex",
                flexFlow: "column nowrap",
                alignItems: "center",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: .2 }}
            >
              <Label>Advice #{advice.id}</Label>
              <Quote>“{advice.advice?.replace("Ã¤", "ä")}”</Quote>
            </motion.div>
          )}
        </AnimatePresence>
      </Body>
      <picture style={{ transition: "all .2s" }}>
        <source srcSet={DesktopSeparator} media="(min-width: 570px)" />
        <img src={MobileSeparator} alt="" />
      </picture>
      <Button
        aria-label="Get new advice"
        onClick={getAdvice}
        disabled={loading}
      >
        <img src={DiceIcon} alt="Dice icon" />
      </Button>
    </Container>
  );
};

export { Card };
