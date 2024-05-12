import Modal from "../../../../components/Modal/Modal";
import * as S from "./ModalFoundAnimal.styles";
import {IAnimalFound} from "@/interfaces/i-animal-found";

interface ModalFoundAnimalProps {
  foundAnimal?: IAnimalFound;
  onClose: () => void;
}

const ModalFoundAnimal = ({ foundAnimal, onClose }: ModalFoundAnimalProps) => {
  if (!foundAnimal) {
    return null;
  }

  return (
    <Modal isOpen={true} onClose={onClose}>
      <S.ModalContainer>
        <h1>{foundAnimal.animalType ?? "Tipo: Outros"}</h1>
        <div className="columns-container">
          <div className="column">
            {foundAnimal.imageLink && (
              <img src={foundAnimal.imageLink} alt="Imagem da pessoa" />
            )}
          </div>
          <div className="column">
            <div>
              <label htmlFor="name">Nome:</label>
              <div id="name" className="input">
                {foundAnimal.name.length > 0 ? foundAnimal.name : "Sem nome"}
              </div>
            </div>
            <div>
              <label htmlFor="description">Descrição Física:</label>
              <div id="description" className="input">
                {foundAnimal.description ?? "Sem descrição"}
              </div>
            </div>
            <div>
              <label htmlFor="contact">Contato:</label>
              <div id="contact" className="input">
                {`${foundAnimal.foundBy.email} ${foundAnimal.foundBy.contacts ?? ''}`}
              </div>
            </div>
          </div>
        </div>
      </S.ModalContainer>
    </Modal>
  );
};

export default ModalFoundAnimal;
