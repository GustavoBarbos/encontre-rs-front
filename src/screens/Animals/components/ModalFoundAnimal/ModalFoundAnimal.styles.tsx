import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .columns-container {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    .column {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 20px;
      justify-content: space-around;
      padding: 10px;

      img {
        max-width: 100%;
        max-height: 400px;
        width: 400px;
        border-radius: 8px;
      }

      > div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: #f5f5f5;
        padding: 10px;
        border-radius: 8px;
      }

      label {
        font-size: 1.2rem;
        font-weight: bold;
      }

      .input {
        border-radius: 8px;
        word-wrap: break-word;
        line-height: 1.5;
        max-height: 200px;
        overflow-y: auto;
      }
    }

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
`;
