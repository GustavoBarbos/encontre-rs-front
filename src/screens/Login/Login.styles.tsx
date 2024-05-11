import styled from "styled-components";

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  margin-top: 40px;

  .form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    color: #333;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    width: 70%;

    @media (min-width: 768px) {
      max-width: 440px;
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    color: #5628c8;
    cursor: pointer;
  }

  h2 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: #333;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    > div {
      display: flex;
      flex-direction: column;
      gap: 0.1rem;
    }
  }

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #333;
  }

  input {
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    outline: none;
    transition: border-color 0.3s;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  input:focus {
    border-color: #007bff;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #0056b3;
  }

  .error {
    color: #dc3545;
    font-size: 0.9rem;
    font-weight: bold;
    text-align: center;
  }

  .success {
    color: #28a745;
    font-size: 0.9rem;
    font-weight: bold;
    text-align: center;
  }
`;
