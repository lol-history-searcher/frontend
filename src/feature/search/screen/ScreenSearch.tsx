import { URL_SUMMONER } from "@/constant/urlPathFactory";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";

const ScreenSearch = () => {
  const router = useRouter();
  const [nickname, setNickname] = useState("");

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`${URL_SUMMONER}/${nickname}`);
  };

  const handleNicknameInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNickname(e.currentTarget.value);
  };

  return (
    <StyledWrapper>
      <form onSubmit={handleSearchSubmit}>
        <input
          placeholder="닉네임을 입력해 주세요."
          onChange={handleNicknameInputChange}
        />
      </form>
    </StyledWrapper>
  );
};

export default ScreenSearch;

const StyledWrapper = styled.div``;
