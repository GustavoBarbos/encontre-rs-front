import { IPersonFound } from "@/interfaces/i-person-found";
import Modal from "../../../../components/Modal/Modal";
import * as S from "./ModalFoundPerson.styles";

interface ModalFoundPersonProps {
  foundPerson?: IPersonFound;
  onClose: () => void;
}

const ModalFoundPerson = ({ foundPerson, onClose }: ModalFoundPersonProps) => {
  if (!foundPerson) {
    return null;
  }

  return (
    <Modal isOpen={true} onClose={onClose}>
      <S.ModalContainer>
        <h1>{foundPerson.name ?? "Sem nome"}</h1>
        <div className="columns-container">
          <div className="column">
            {foundPerson.imageLink && (
              <img src={foundPerson.imageLink} alt="Imagem da pessoa" />
            )}
          </div>
          <div className="column">
            <div>
              <label htmlFor="description">Descrição Física:</label>
              <div id="description" className="input">
                {foundPerson.description ?? "Sem descrição"}
              </div>
            </div>
            <div>
              <label htmlFor="contact">Contato:</label>
              <div id="contact" className="input">
                {`${foundPerson.foundBy.email} ${foundPerson.foundBy.contacts}`}
              </div>
            </div>
          </div>
        </div>
      </S.ModalContainer>
    </Modal>
  );
};

export default ModalFoundPerson;
