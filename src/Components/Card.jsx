import Button from "./Button";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: gray
`;

const Card = () => {
  return (
    <CardWrapper>
      <div>PRODUCT DETAILS</div>
      <Button />
    </CardWrapper>
  );
};
export default Card;
