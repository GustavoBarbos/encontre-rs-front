import * as S from "./About.styles";

const About = () => {
  return (
    <S.WarningsContainer>
      <h1 id="important">IMPORTANTE! LEIA ATENTAMENTE!</h1>
      <br/>
      <h1>Como usar a plataforma?</h1>
      <h4>
        A plataforma é somente para pessoas e animais <b><u>ENCONTRADOS</u></b>.<br/>
        Caso você esteja procurando alguém, use a tela de busca ou receba notificações do bot do telegram.<br/>
        Navegue na busca ou cadastro de pessoas e animais utilizando o menu superior deste site.
      </h4>

      <h1>O que é o Encontre RS?</h1>
      <h4>
        O Encontre RS é a tentativa de dois desenvolvedores de software,{" "}
        <a
          href="https://instagram.com/pedroafabri"
          target="_blank"
          rel="noreferrer"
        >
          Pedro Fabri
        </a>{" "}
        e um grande amigo que preferiu ficar anônimo, de ajudar na grande
        tragédia que aconteceu no Rio Grande do Sul.
        <br />O sistema funcionca como um "Google" de pessoas e animais encontrados,
        possibilitando que os abrigos cadastrem pessoas e animais que foram resgatados
        para que os parentes ou donos os encontrem.
      </h4>

      <h1>Notificações no Telegram</h1>
      <h4>
        Para ajudar você a saber quando uma nova pessoa ou animal é cadastrado na
        plataforma nós desenvolvemos um bot do Telegram.
        <br />
        Para utilizá-lo basta criar uma conta no Telegram e{" "}
        <a href="https://t.me/EncontreRSBot" target="_blank" rel="noreferrer">
          CHAMAR O BOT
        </a>
      </h4>

      <h1>Achei um erro no sistema. E agora?</h1>
      <h4>
        Esse sistema foi desenvolvido às pressas e no nosso tempo livre, então
        sabemos que na pressa muita coisa pode passar.
        <br />
        Caso você tenha encontrado algum bug e queira nos avisar envie um e-mail
        para{" "}
        <a href="mailto:pedroafabri@gmail.com" target="_blank" rel="noreferrer">
          pedroafabri@gmail.com
        </a>
      </h4>

      <h1>Sou dev, como posso ajudar?</h1>
      <h4>
        Você pode ver o código da aplicação nos seguintes repositórios:&nbsp;
        <a
          href="https://github.com/GustavoBarbos/encontre-rs-front"
          target="_blank"
          rel="noreferrer"
        >
          FRONTEND
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/pedroafabri/encontre-rs-server"
          target="_blank"
          rel="noreferrer"
        >
          BACKEND
        </a>
        <br />
        Lembrando que mantemos essa aplicação em nosso tempo livre, então
        podemos demorar para avaliar algum PR ou alteração.
      </h4>
    </S.WarningsContainer>
  );
};

export default About;
