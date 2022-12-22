import { useState } from "react";
import SingleQuestion from "./SingleQuestion";
import { data } from "./data";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./styles.css";

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #111;
  font-weight: 700;
  font-size: 32px;
  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;
export default function Faq() {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="p-5">

{/* 
	<Icon to="/">Tumo Labs</Icon> */}
      {questions.map((question) => (
        <SingleQuestion {...question} />
      ))}
    </div>
  );
}
