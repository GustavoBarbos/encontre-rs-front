import { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import debounce from "lodash.debounce";
import { useNavigate, useParams } from "react-router-dom";
import { IUserState } from "@/interfaces/i-user";
import { Modal } from "../../components";
import { ModalFoundAnimal } from "./components";
import * as S from "./Animals.styles";
import {IAnimalFound} from "@/interfaces/i-animal-found";
import {getAnimalById, getAnimals} from "../../actions/get";

const Animals = () => {
  const token = useSelector((state: IUserState) => state.auth.token);
  const { id: personId } = useParams();

  const [data, setData] = useState<IAnimalFound[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<IAnimalFound[] | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [limit] = useState(10);
  const [modalOpen, setModalOpen] = useState(false);
  const [foundAnimal, setFoundAnimal] = useState<IAnimalFound>();

  const navigate = useNavigate();

  const fetchPersons = useCallback(
    async (term: string) => {
      const response = await getAnimals(token, term, currentPage, limit);
      const { results, totalPages } = response;
      if (results) {
        setTotalPages(totalPages);
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setLoading(true);
    getAnimals(token, "", currentPage, limit).then((response) => {
      const { results, totalPages } = response;
      if (results) {
        setTotalPages(totalPages);
        setData(results);
        setFilteredData(results);
        scrollToTop();

        setTimeout(() => {
          setLoading(false);
        }, 1500);
      }
    });
  }, [token, currentPage, limit]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    if (personId) {
      getAnimalById(personId).then((response) => {
        if (response.imageLink) {
          setFoundAnimal(response);
          setModalOpen(true);
        }
      });
    }
  }, [personId]);

  const handleClose = () => {
    navigate("/");
    setModalOpen(false);
  };

  const nextCurrentPageIsValid = currentPage < totalPages;

  return (
    <S.ContainerOutside>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <S.ContainerModal>
          <p>
            Para procurar algum animal digite sua espécie, nome ou características físicas.
            <br />
            Para procurar uma frase completa, coloque a frase entre aspas.{" "}
            <br />
            Para excluir um termo da pesquisa, coloque um menos (-) antes da
            palavra. <br />
            <br />
            <b>EXEMPLO:</b>
            <br />
            gato "rabo curto" -laranja
          </p>
        </S.ContainerModal>
      </Modal>

      <S.PersonsContainer>
        <h2>Pesquise um animal</h2>
        <p className="help-text" onClick={() => setIsOpen(true)}>
          Como pesquisar?
        </p>
        <div className="filter-container">
          <input
            type="text"
            placeholder="Pesquisar por espécie, nome ou características físicas..."
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>

        {loading && (
          <span className="loading-animation">
            <BeatLoader color="#000" />
          </span>
        )}

        <div className="cards-container">
          {filteredData &&
            filteredData.map((animal, index) => (
              <div
                className={`card ${loading && "loading"}`}
                key={index}
                onClick={() => navigate(`/found-animal/${animal.id}`)}
              >
                <div className="card-header">
                  <h3>{animal.animalType} {animal.name.length && ` - ${animal.name}`}</h3>
                  <img src={animal?.imageLink} alt="Person" />
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
        <ModalFoundAnimal foundAnimal={foundAnimal} onClose={handleClose} />
      )}
    </S.ContainerOutside>
  );
};

export default Animals;
