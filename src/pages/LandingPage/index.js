/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-autofocus */
import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import { IMAGE } from "../../images";
import { StyledHead, StyledPara } from "../../components/StyledComponents/Text";
import { StyledBox, StyledSpan } from "../../components/StyledComponents/Container";

const LandingPage = () => {
  const [output, setOutput] = useState([]);

  const { register, handleSubmit, reset } = useForm({
    mode: "onChange",
    reValidateMode: "onChange"
  });

  useEffect(() => {
    reset({
      inputText: ""
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [output]);

  const handleData = async (question) => {
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
    const res = await handleData(data.inputText);
    if (res) {
      setOutput((preVal) => {
        return [
          ...preVal,
          {
            question: data.inputText,
            answer: res
          }
        ];
      });
    }
  };

  return (
    <main>
      <StyledBox className="main_container">
        <StyledBox height={"100vh"} width={"100%"} padding={"50px 0 30px 0"}>
          <StyledBox height={"80%"}>
            {/* Output */}
            <StyledBox className="outputBox_container">
              {output.map((item, index) => {
                return (
                  <StyledBox key={index} margin={"0 15px 30px 0"}>
                    <StyledBox className="flex mb-2 justify-end">
                      <StyledPara margin={"0 10px 0 0"}>{item.question}</StyledPara>
                      <StyledSpan height={"30px"} width={"30px"}>
                        <img
                          src={IMAGE.Avatar}
                          className="rounded-full w-[30px] max-w-[30px]"
                          alt="avatar"
                        />
                      </StyledSpan>
                    </StyledBox>

                    <StyledBox className="flex">
                      <StyledSpan height={"30px"} width={"30px"} margin={"0 10px 0 0"}>
                        <img src={IMAGE.Logo} className="max-w-[30px]" alt="logo" />
                      </StyledSpan>
                      <StyledPara>{item.answer}</StyledPara>
                    </StyledBox>
                  </StyledBox>
                );
              })}
            </StyledBox>
          </StyledBox>

          {/* Input */}
          <StyledBox height={"20%"} className="flex items-end">
            <form onSubmit={handleSubmit(handleChat)} className="w-full">
              <StyledBox className="inputBox_container">
                <input
                  type="text"
                  autoFocus={true}
                  defaultValue={""}
                  autoComplete={"off"}
                  {...register("inputText")}
                  placeholder="Ask me anything related to crypto..."
                />

                <button className="inputBox_button" type="submit">
                  <StyledHead color={"#9A00B3"} size={"16px"} margin={"0 6px 0 0"}>
                    Ask Now
                  </StyledHead>
                  <img src={IMAGE.ArrowUp} alt="arrowUp" />
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
