import { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector } from "react-redux";
import debounce from "lodash.debounce";
import { useNavigate, useParams } from "react-router-dom";
import { IUserState } from "@/interfaces/i-user";
import { IPersonFound } from "@/interfaces/i-person-found";
import { Modal } from "../../components";
import { getPersonById, getPersons } from "../../actions/get";
import { ModalFoundPerson } from "./components";
import * as S from "./Persons.styles";

const Persons = () => {
  const token = useSelector((state: IUserState) => state.auth.token);
  const { id: personId } = useParams();

  const [data, setData] = useState<IPersonFound[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<IPersonFound[] | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(10);
  const [modalOpen, setModalOpen] = useState(false);
  const [foundPerson, setFoundPerson] = useState<IPersonFound>();

  const navigate = useNavigate();

  let alreadyFetched = false;

  const fetchPersons = useCallback(
    async (term: string) => {
      const response = await getPersons(token, term, currentPage, limit);
      const { results } = response;
      if (results) {
        setFilteredData(results);
      }
    },
    [token, currentPage, limit]
  );

  const debouncedSearch = useMemo(
    () =>
      debounce((term: string) => {
        if (term.trim() !== "") {
          fetchPersons(term);
        } else {
          setFilteredData(data);
        }
      }, 500),
    [fetchPersons, data]
  );

  const handleSearchTermChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    []
  );

  useEffect(() => {
    debouncedSearch(searchTerm);

    return () => {
      debouncedSearch.cancel();
    };
  }, [searchTerm, debouncedSearch]);

  useEffect(() => {
    if (!alreadyFetched) {
      alreadyFetched = true;

      getPersons(token, "", currentPage, limit).then((response) => {
        const { results } = response;
        if (results) {
          setData(results);
          setFilteredData(results);
        }
      });
    }
  }, [token, currentPage, limit]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    if (personId) {
      getPersonById(personId).then((response) => {
        if (response.imageLink) {
          setFoundPerson(response);
          setModalOpen(true);
        }
      });
    }
  }, [personId]);

  const handleClose = () => {
    navigate("/");
    setModalOpen(false);
  };

  const nextCurrentPageIsValid = data.length === limit;

  return (
    <S.ContainerOutside>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <S.ContainerModal>
          <p>
            Para procurar alguém digite seu nome ou características físicas.
            <br />
            Para procurar uma frase completa, coloque a frase entre aspas.{" "}
            <br />
            Para excluir um termo da pesquisa, coloque um menos (-) antes da
            palavra. <br />
            <br />
            <b>EXEMPLO:</b>
            <br />
            pedro "olhos azuis" -loiro
          </p>
        </S.ContainerModal>
      </Modal>

      <S.PersonsContainer>
        <h2>Pesquise Alguém</h2>
        <p className="help-text" onClick={() => setIsOpen(true)}>
          Como pesquisar por alguém?
        </p>
        <div className="filter-container">
          <input
            type="text"
            placeholder="Pesquisar por nome..."
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>
        <div className="cards-container">
          {filteredData &&
            filteredData.map((person, index) => (
              <div
                className="card"
                key={index}
                onClick={() => navigate(`/${person.id}`)}
              >
                <div className="card-header">
                  <h2>{person.name}</h2>
                  <img src={person?.imageLink} alt="Person" />
                </div>
              </div>
            ))}
        </div>
      </S.PersonsContainer>
      <div className="pagination-container">
        <button
          className={`${currentPage === 1 && "disabled"}`}
          onClick={() => {
            if (currentPage === 1) return;
            handlePageChange(currentPage - 1);
          }}
        >
          Anterior
        </button>
        <span>{currentPage}</span>
        <button
          className={`${!nextCurrentPageIsValid && "disabled"}`}
          onClick={() => {
            return nextCurrentPageIsValid
              ? handlePageChange(currentPage + 1)
              : null;
          }}
        >
          Próximo
        </button>
      </div>
      {modalOpen && (
        <ModalFoundPerson foundPerson={foundPerson} onClose={handleClose} />
      )}
    </S.ContainerOutside>
  );
};

export default Persons;
