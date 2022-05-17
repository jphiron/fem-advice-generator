import { Spinner } from "./Loader.styles"

const Loader = () => {
  return <Spinner initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} />;
};

export { Loader };
