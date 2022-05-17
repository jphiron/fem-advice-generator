import { Container, Label, Body, Button } from "./Card.styles";
import DiceIcon from "../../assets/images/icon-dice.svg";
import DesktopSeparator from "../../assets/images/pattern-divider-desktop.svg";

const Card = () => {
  return (
    <Container>
      <Label>Advice #</Label>
      <Body>
        Turn jeans inside out when washing them to help preserve their colour.
      </Body>
      <img src={DesktopSeparator} alt="" />
      <Button>
        <img src={DiceIcon} alt="Dice icon" />
      </Button>
    </Container>
  );
};

export { Card };
