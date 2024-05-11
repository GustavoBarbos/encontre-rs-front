import * as S from "./About.styles";

const About = () => {
  return (
    <S.WarningsContainer>
        <h1>O que é o Encontre RS?</h1>
        <h4>
            O Encontre RS é a tentativa de dois desenvolvedores de software, <a href="https://instagram.com/pedroafabri" target="_blank">Pedro Fabri</a> e <a href="https://www.linkedin.com/in/gustavobarbos/" target="_blank">Gustavo Sena</a>, de ajudar na grande tragédia que aconteceu no Rio Grande do Sul.<br/>
        O sistema funcionca como um "Google" de pessoas encontradas, possibilitando que os abrigos cadastrem pessoas que foram resgatadas para que os parentes as encontrem.
        </h4>

        <h1>Notificações no Telegram</h1>
        <h4>Para ajudar você a saber quando uma nova pessoa é cadastrada na plataforma nós desenvolvemos um bot do Telegram.<br/>
            Para utilizá-lo basta criar uma conta no Telegram e <a href="https://t.me/EncontreRSBot" target="_blank">CHAMAR O BOT</a>
        </h4>

        <h1>Achei um erro no sistema. E agora?</h1>
        <h4>
            Esse sistema foi desenvolvido às pressas e no nosso tempo livre, então sabemos que na pressa muita coisa pode passar.<br/>
            Caso você tenha encontrado algum bug e queira nos avisar envie um e-mail para <a href="mailto:pedroafabri@gmail.com" target="_blank">pedroafabri@gmail.com</a>
        </h4>

        <h1>Sou dev, como posso ajudar?</h1>
        <h4>
            Você pode ver o código da aplicação nos seguintes repositórios:&nbsp;
            <a href="https://github.com/GustavoBarbos/encontre-rs-front" target="_blank">FRONTEND</a> | <a
            href="https://github.com/pedroafabri/encontre-rs-server" target="_blank">BACKEND</a><br/>
            Lembrando que mantemos essa aplicação em nosso tempo livre, então podemos demorar para avaliar algum PR ou alteração.

        </h4>
    </S.WarningsContainer>
  );
};

export default About;
