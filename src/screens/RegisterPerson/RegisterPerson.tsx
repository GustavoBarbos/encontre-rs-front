import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createFoundPerson } from "../../actions/post";
import { IUserState } from "@/interfaces/i-user";
import { IPersonRequest } from "@/interfaces/i-person-found";
import * as S from "./RegisterPerson.styles";
import compressImage from "../../functions/compressImage";

const RegisterPerson = () => {
  const [loading, setLoading] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const fileRef = useRef<File>();
  const { token } = useSelector((state: IUserState) => state.auth);

  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
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

      const user: IPersonRequest = {
        name: data.name,
        description: data.description,
        image: compressedFile,
      };

      await createFoundPerson(user, token);
      reset();
      navigate("/found-person");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.RegisterPersonContainer>
      <div className="warning">
        <p>
          <strong>ATENÇÃO:</strong> Em respeito a familia das vitimas, poste
          somente <strong>PESSOAS VIVAS</strong> na plataforma.
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
              <label htmlFor="name">Nome completo:</label>
              <input
                type="text"
                id="name"
                {...register("name")}
                placeholder="Caso não saiba o nome da pessoa, deixe em branco"
              />
            </div>
            <div className="description">
              <label htmlFor="description">
                Características físicas dessa pessoa:
              </label>
              <textarea
                id="description"
                {...register("description")}
                placeholder="Descreva essa pessoa o máximo possível para ajudar na busca..."
              />
            </div>
          </div>
        </div>

        <button className="register-button" type="submit">
          {loading ? "Registrando..." : "Cadastrar pessoa"}
        </button>
      </form>
    </S.RegisterPersonContainer>
  );
};

export default RegisterPerson;
