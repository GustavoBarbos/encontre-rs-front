import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: white;
    padding: 20px;

    h2 {
      cursor: pointer;
    }
  }

  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 70%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: right 0.3s ease;
    z-index: 999;
    animation: ${fadeIn} 0.3s ease;
    right: -100%;
    display: flex;
    flex-direction: column;
  }

  .sidebar-open {
    right: 0;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 998;
    display: none;
  }

  .overlay-open {
    display: block;
  }

  button {
    padding: 15px;
    background-color: #333;
    color: white;
    border: none;
    cursor: pointer;
  }

  .logout {
    background-color: #a02424;
    margin-top: auto;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    background-color: #333;
    align-items: center;

    .navbar {
      padding: 20px;
    }
    .sidebar {
      position: relative;
      right: 0;
      background-color: transparent;
      flex-direction: row;
      justify-content: space-around;
      gap: 20px;
      max-width: 700px;
    }

    .overlay {
      display: none;
    }

    button {
      padding: 0;
      background-color: #333;
      color: white;
      border: none;
      cursor: pointer;
      border: 1px solid white;
      padding: 10px 20px;
      border-radius: 10px;
      width: 150px;
    }

    .icon {
      display: none;
    }

    .logout {
      margin-right: 10px;
      margin-top: 0;
    }
  }
`;
