/* eslint-disable jsx-a11y/no-autofocus */
import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";

import { IMAGE } from "../../images";
import ChatComponent from "../../components/ChatComponent";
import { StyledPara } from "../../components/StyledComponents/Text";
import { StyledBox, StyledSpan } from "../../components/StyledComponents/Container";

const LandingPage = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const [data, setData] = useState([]);

  const inputRef = useRef();
  const answerRef = useRef();

  const [loading, setLoading] = useState(false);
  const [isParsing, setIsParsing] = useState(false);

  useEffect(() => {
    if (input) {
      inputRef.current.scrollIntoView();
    }
  }, [input]);

  const { register, handleSubmit, reset } = useForm({
    mode: "onChange",
    reValidateMode: "onChange"
  });

  const handleData = async (question) => {
    reset({ inputText: "" });

    const res = await axios({
      method: "post",
      url: "/bot",
      params: {
        question: question
      },
      headers: {
        accept: "application/json",
        "content-type": "application/json"
      }
    });

    if (res) {
      return res.data;
    }
  };

  const handleChat = async (data) => {
    setLoading(true);
    setIsParsing(true);
    setInput(data.inputText);

    const res = await handleData(data.inputText);
    if (res) {
      setOutput(res);
      setLoading(false);
    }
  };

  const typeWriter = (text, delay) => {
    const textArray = text.split("");

    textArray.forEach((char, i) => {
      setTimeout(() => {
        answerRef.current.innerHTML += char;
        answerRef.current.scrollIntoView();
        if (answerRef.current.innerHTML.length === textArray.length) {
          setData((preVal) => {
            return [
              ...preVal,
              {
                question: input,
                answer: output
              }
            ];
          });

          setInput("");
          setOutput("");
          setIsParsing(false);
        }
      }, delay * i);
    });
  };

  return (
    <main>
      <StyledBox className="main_container">
        <StyledBox width={"100%"} height={"100vh"}>
          <StyledBox className="outputBox_container">
            {data &&
              data.map((item, index) => {
                return <ChatComponent item={item} key={index} />;
              })}

            {input && (
              <StyledBox>
                <StyledBox className="flex justify-end mt-8 mb-6">
                  <StyledPara className="question_text" ref={inputRef}>
                    {input}
                  </StyledPara>
                  <StyledSpan height={"40px"} width={"40px"}>
                    <img
                      src={IMAGE.Avatar}
                      loading="eager"
                      className="w-[40px] max-w-[40px]"
                      alt="avatar"
                    />
                  </StyledSpan>
                </StyledBox>

                <StyledBox className="flex">
                  <StyledSpan height={"40px"} width={"40px"} margin={"0 12px 0 0"}>
                    <img
                      src={IMAGE.Logo}
                      loading="eager"
                      className="max-w-[40px] w-[40px]"
                      alt="logo"
                    />
                  </StyledSpan>
                  {loading ? (
                    <img src={IMAGE.BlinkerRed} className="blinker" loading="eager" alt="blinker" />
                  ) : (
                    <StyledPara ref={answerRef} className="outputBlinker answer_text">
                      {typeWriter(output, 20)}
                    </StyledPara>
                  )}
                </StyledBox>
              </StyledBox>
            )}
          </StyledBox>

          {/* Input */}
          <StyledBox height={"15%"}>
            <form onSubmit={handleSubmit(handleChat)} className="w-full">
              <StyledBox className="inputBox_container">
                <input
                  type="text"
                  autoFocus={true}
                  defaultValue={""}
                  autoComplete={"off"}
                  disabled={isParsing}
                  {...register("inputText")}
                  placeholder="Ask me anything related to crypto..."
                />

                <button
                  className={`${isParsing ? "opacity-50 cursor-auto" : "opacity-100"}`}
                  disabled={isParsing}
                  type="submit"
                >
                  <img src={IMAGE.ArrowUp} loading="eager" alt="arrowUp" />
                </button>
              </StyledBox>
            </form>
          </StyledBox>
        </StyledBox>
      </StyledBox>
    </main>
  );
};

export default LandingPage;
