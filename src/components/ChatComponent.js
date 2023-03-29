import { IMAGE } from "../images";
import { object } from "prop-types";
import { StyledPara } from "./StyledComponents/Text";
import { StyledBox, StyledSpan } from "./StyledComponents/Container";

const ChatComponent = (props) => {
  const { item } = props;

  return (
    <StyledBox>
      <StyledBox className="flex justify-end mt-8 mb-6">
        <StyledPara className="question_text">{item.question}</StyledPara>
        <StyledSpan height={"40px"} width={"40px"}>
          <img src={IMAGE.Avatar} className="w-[40px] max-w-[40px]" loading="eager" alt="avatar" />
        </StyledSpan>
      </StyledBox>

      <StyledBox className="flex">
        <StyledSpan height={"40px"} width={"40px"} margin={"0 12px 0 0"}>
          <img src={IMAGE.Logo} loading="eager" className="max-w-[40px] w-[40px]" alt="logo" />
        </StyledSpan>
        <StyledPara className="answer_text">{item.answer}</StyledPara>
      </StyledBox>
    </StyledBox>
  );
};

ChatComponent.propTypes = {
  item: object.isRequired
};

export default ChatComponent;
