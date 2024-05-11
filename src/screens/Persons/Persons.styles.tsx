import styled from "styled-components";

export const PersonsContainer = styled.div`
  max-height: 80%;
  overflow-y: auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  margin-top: 20px;

  .filter-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
    width: 100%;

    input {
      padding: 0.5rem;
      width: 50%;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-right: 0.5rem;
    }
  }

  .help-text {
    margin: 0.5rem 0;
    font-size: 0.8rem;
    color: blue;
    cursor: pointer;
  }
  .loading-animation {
    margin-top: 20px;
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    width: 100%;
    margin-top: 1rem;
  }

  .card {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .card-header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    width: 100%;

    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }

    h2 {
      bottom: 0;
      font-size: 1rem;
      background-color: #333;
      width: 90%;
      height: auto;
      color: #fff;
      padding: 1rem;
      border-radius: 20px;
      text-align: center;
    }
  }

  .loading {
    opacity: 0;
  }

  @media (min-width: 768px) {
    width: 95%;
  }
`;

export const ContainerOutside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  .pagination-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2.5rem 0 1rem 0;
    max-width: 90%;
    width: 80%;
    gap: 2px;

    button {
      padding: 0.5rem 0.1rem;
      border: none;
      border-radius: 5px;
      background-color: #333;
      color: #fff;
      cursor: pointer;
    }

    .disabled {
      background-color: #ccc;
      color: #fff;
      cursor: not-allowed;
    }

    span {
      padding: 0.5rem 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    @media (min-width: 768px) {
      width: min-content;
      gap: 20px;
      button {
        padding: 0.5rem 1rem;
      }
    }
  }
`;

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  line-height: 1.5;

  p {
    text-align: center;
  }
`;
