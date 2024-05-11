import styled from "styled-components";

export const RegisterPersonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .warning {
    background-color: #5db4e75f;
    margin: 20px 0px;
    padding: 20px;
    border-radius: 20px;
    width: 85%;
    max-width: 700px;
    line-height: 1.5;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 50px;
      width: 90%;
      max-width: 700px;
      min-height: 300px;
      justify-content: space-evenly;

      .image {
        height: 100%;
        width: 100%;
        border-radius: 20px;
        border: 1px solid #000;
        background-color: #4e4d4d16;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
      }
      img {
        max-width: 300px;
        max-height: 300px;
        border-radius: 20px;
      }

      > div {
        width: 100%;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        gap: 40px;

        > div {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        input,
        textarea {
          padding: 10px;
          border-radius: 10px;
          max-width: 100%;
          resize: none;
        }

        textarea {
          min-height: 150px;
          max-height: 150px;
        }
      }
    }

    .register-button {
      background-color: #000;
      color: #fff;
      padding: 10px 20px;
      border-radius: 10px;
      margin: 30px 0px;
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    form > div {
      flex-direction: row;

      > div {
        width: 55%;
      }
    }
  }
`;

export const ImageUploadInput = styled.input.attrs({
  type: "file",
})`
  display: none;
  width: 100%;
  height: 100%;
`;
