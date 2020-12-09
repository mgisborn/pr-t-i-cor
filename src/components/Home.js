import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import Styled from "styled-components";
import { useAuthManager } from "./AuthManager";

export default function Home() {
  const { isLoggedIn, user, logout } = useAuthManager();

  if (!isLoggedIn) {
    return <Redirect to="/login/" />;
  }
  const { avatar_url, login, starred_url } = user;

  return (
    <Wrapper>
      <div className="container">
        <img src={avatar_url} alt="Avatar" />
        <span>{login}</span>
        <button onClick={logout}>Выход</button>
        <div>
          <div className="pre-content">
            <span>{starred_url}</span>
          </div>
          <div className="content">
            <span>список с тегировкой</span>
          </div>
          <div className="rmd-board">
            <spawn>Описание</spawn>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = Styled.section`
.container{
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Arial;
  button{
    all: unset;
    width: 100px;
    height: 35px;
    margin: 10px 10px 0 0;
    align-self: flex-end;
    background-color: #0041C2;
    color: #fff;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #0041C2;
    &:hover{
      background-color: #fff;
      color: #0041C2;
    }
  }
  >div{
    height: 100%;
    width: 100%;
    display: flex;
    font-size: 18px;
    justify-content: left;
    align-items: center;
    .rmd-board{
      display: flex;
      flex-direction: column;
      padding: 200px 100px;    
      margin-left: 40px;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
      width: auto;
    }
    .pre-content{
      display: flex;
      flex-direction: column;
      padding: 20px 130px;    
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
      width: auto;
    }
    .content{
      display: flex;
      flex-direction: column;
      padding: 20px 100px;    
      margin-left: 20px;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
      width: auto;
  
      img{
        height: 150px;
        width: 150px;
        border-radius: 50%;
      }
  
      >span:nth-child(2){
        margin-top: 20px;
        font-weight: bold;
      }
  
      >span:not(:nth-child(2)){
        margin-top: 8px;
        font-size: 14px;
      }
  
    }
  }
}
`;
