import Card from "./Card";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const BodyWrapper = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  background: ${({ theme }) => (theme === "dark" ? "black" : "white")};
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
`;

const Body = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  console.log(theme);

  return (
    <>
    <BodyWrapper theme={theme}>
      <Card />
      <Card />
      <Card />
    </BodyWrapper>
    <button onClick={toggleTheme}>TOGGLE THEME</button>
    </>
  );
};

export default Body;
