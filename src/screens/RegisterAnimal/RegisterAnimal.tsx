import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { IUserState } from "@/interfaces/i-user";
import { IAnimalRequest } from "@/interfaces/i-animal-found";
import * as S from "./RegisterAnimal.styles";
import compressImage from "../../functions/compressImage";
import validateFileType from "../../functions/validateFileType";
import { useAlert } from 'react-alert'
import {createFoundAnimal} from '../../actions/post';

const animalTypes = [
  'Cachorro',
  'Calopsita',
  'Cavalo',
  'Furão',
  'Gato',
  'Hamster',
  'Papagaio',
  'Porco',
  'Twister',
  'Outros'
]

const RegisterAnimal = () => {
  const alert = useAlert();
  const [loading, setLoading] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const fileRef = useRef<File>();
  const { token } = useSelector((state: IUserState) => state.auth);

  const { register, handleSubmit, reset } = useForm();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {

      if(!validateFileType(file.type)) {
        alert.error("Formato invalido de imagem.");
      }

      fileRef.current = file;
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    try {
      let compressedFile: File | undefined;
      if (fileRef.current) {
        compressedFile = await compressImage(fileRef.current);
      }

      const animal: IAnimalRequest = {
        name: data.name,
        description: data.description,
        animalType: data.animalType,
        image: compressedFile,
      };

      await createFoundAnimal(animal, token);
      reset();
      fileRef.current = undefined;
      setImagePreviewUrl(null);
      alert.success("Animal cadastrado com sucesso.");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.RegisterPersonContainer>
      <div className="warning">
        <p>
          <strong>ATENÇÃO:</strong> Em respeito aos donos dos pets, poste
          somente <strong>ANIMAIS VIVOS</strong> na plataforma.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="image-upload"
            className="label-image"
            style={{
              height: imagePreviewUrl ? "auto" : "300px",
              width: imagePreviewUrl ? "auto" : "300px",
              cursor: imagePreviewUrl ? "default" : "pointer",
            }}
          >
            <div className="image">
              <S.ImageUploadInput
                {...register("image", { required: "Este campo é obrigatório" })}
                id="image-upload"
                type="file"
                onChange={handleFileChange}
              />
              <span
                style={{
                  display: imagePreviewUrl ? "none" : "block",
                }}
              >
                Escolher imagem
              </span>
              {imagePreviewUrl && (
                <img src={imagePreviewUrl} alt="Imagem de pré-visualização" />
              )}
            </div>
          </label>

          <div>
            <div>
              <label htmlFor="animalType">Tipo do Animal:</label>
              <select
                  id="animalType"
                  {...register("animalType")}
              >
                {animalTypes.map(at => <option value={at.toUpperCase()}>{at}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="name">Nome do animal (se tiver):</label>
              <input
                  type="text"
                  id="name"
                  {...register("name")}
                  placeholder="Caso não saiba o nome da pessoa, deixe em branco"
              />
            </div>
            <div className="description">
              <label htmlFor="description">
                Características físicas do animal:
              </label>
              <textarea
                  id="description"
                  {...register("description")}
                  placeholder="Descreva esse animal o máximo possível para ajudar na busca..."
              />
            </div>
          </div>
        </div>

        <button className="register-button" type="submit">
          {loading ? "Registrando..." : "Cadastrar animal"}
        </button>
      </form>
    </S.RegisterPersonContainer>
  );
};

export default RegisterAnimal;
