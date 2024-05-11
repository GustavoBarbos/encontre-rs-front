import * as S from "./Footer.styles";

const Footer = () => {
  return (
    <S.FooterContainer>
      <p>
        Criado por{" "}
        <a
          href="https://instagram.com/pedroafabri"
          target="_blank"
          rel="noreferrer"
        >
          Pedro Fabri
        </a>
      </p>
    </S.FooterContainer>
  );
};

export default Footer;
