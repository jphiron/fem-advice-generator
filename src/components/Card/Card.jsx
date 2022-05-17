import { Container, Body, Label, Quote, Button } from "./Card.styles";
import DiceIcon from "../../assets/images/icon-dice.svg";
import MobileSeparator from "../../assets/images/pattern-divider-mobile.svg";
import DesktopSeparator from "../../assets/images/pattern-divider-desktop.svg";
import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import { AnimatePresence } from "framer-motion";

const Card = () => {
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState({});

  const getAdvice = async () => {
    setLoading(true);
    const res = await fetch("https://api.adviceslip.com/advice/76");
    const json = await res.json();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    setAdvice({...json.slip});
  }

  useEffect(() => {
    getAdvice();
  }, [])

  return (
    <Container>
      <AnimatePresence exitBeforeEnter>
        <Body>
          {loading ? (
            <Loader key="loader" layoutId="loader" />
          ) : (
            <>
              <Label>Advice #{advice.id}</Label>
              <Quote
                key="quote"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layoutId="quote"
              >
                “{advice.advice.replace("Ã¤", "ä")}”
              </Quote>
            </>
          )}
        </Body>
      </AnimatePresence>
      <picture style={{ transition: "all .2s"}}>
        <source srcSet={DesktopSeparator} media="(min-width: 570px)" />
        <img src={MobileSeparator} alt="" />
      </picture>
      <Button aria-label="Get new advice" onClick={getAdvice}>
        <img src={DiceIcon} alt="Dice icon" />
      </Button>
    </Container>
  );
};

export { Card };
