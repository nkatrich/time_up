import React from 'react';
import styled from 'styled-components';
import countdownIcon from '../assets/icons/countdown.svg';
import timerIcon from '../assets/icons/timer.svg';

const Button = () => {
  return (
    <StyledWrapper>
      <div className="button-container">
        <button className="button">
          <img src={countdownIcon} alt="countdown" />
        </button>
        <button className="button">
          <img src={timerIcon} alt="timer" />
        </button>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button-container {
    display: flex;
    background-color: rgba(57, 0, 227, 0.5);
    border: 2px solid rgb(57, 0, 227);
    width: 250px;
    height: 70px;
    align-items: center;
    justify-content: space-around;
    border-radius: 15px;
    position: fixed;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
  }

  .button {
    outline: 0 !important;
    border: 0 !important;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: all ease-in-out 0.1s;
    cursor: pointer;
  }

  .button:hover {
    transform: scale(1.1);
  }`;

export default Button;
