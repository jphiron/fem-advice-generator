import { Container, Label, Quote, Button } from "./Card.styles";
import DiceIcon from "../../assets/images/icon-dice.svg";
import MobileSeparator from "../../assets/images/pattern-divider-mobile.svg";
import DesktopSeparator from "../../assets/images/pattern-divider-desktop.svg";

const Card = () => {
  return (
    <Container>
      <Label>Advice #117</Label>
      <Quote>
        “It is easy to sit up and take notice, what's difficult is getting up and taking action.”
      </Quote>
      <picture>
        <source srcset={DesktopSeparator} media="(min-width: 570px)"/>
        <img src={MobileSeparator} alt="" />
      </picture>
      <Button>
        <img src={DiceIcon} alt="Dice icon" />
      </Button>
    </Container>
  );
};

export { Card };
