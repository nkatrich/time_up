import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import countdownIcon from '../assets/icons/countdown.svg';
import timerIcon from '../assets/icons/timer.svg';

const Button = () => {
    const [countdown, setCountdown] = useState(true)
    const [timer, setTimer] = useState(false)

  function callCountdown() {
    setCountdown(true)
    setTimer(false)
  }

  function callTimer() {
    setCountdown(false)
    setTimer(true)
  }

  const handleClick = (event) => {
    const button = event.target.closest('button')
    if (!button) return

    const action = button.dataset.action
    if (action === 'countdown') {
      callCountdown()
    } else if (action === 'timer') {
      callTimer()
    }
  }

  return (
    <StyledWrapper onClick={handleClick}>
      <div className="button-container">
        <button style={countdown ? styleCountdown : baseStyleBtnMenu} data-action="countdown">
          <img src={countdownIcon} alt="countdown" />
        </button>
        <button style={timer ? styleCountdown : baseStyleBtnMenu} data-action="timer">
          <img src={timerIcon} alt="timer" />
        </button>
      </div>
    </StyledWrapper>
  )
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
    overflow: hidden;
  }

  .button-menu:hover {
    transform: scale(1.1);
  }`;

  const baseStyleBtnMenu = {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    transition: 'all ease-in-out 0.1s',
    cursor: 'pointer'
  }

  const styleCountdown = {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(57, 0, 227)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    transition: "all ease-in-out 0.1s",
    cursor: "pointer"
  }

  const styleTimer = {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(57, 0, 227)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    transition: "all ease-in-out 0.1s",
    cursor: "pointer"
  }

export default Button;
