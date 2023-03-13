export const ERROR_TYPE_EMAIL = 'O campo "email" deve ser uma string';
export const ERROR_INVALID_EMAIL =
  'O campo "email" deve ter um email válido, sem espaços e com menos de 70 caracteres';
export const ERROR_SIZE_NAME =
  "O nome precisa conter mais que 3 letras e menos que 100 letras";
export const ERROR_TYPE_NAME = 'O campo "nome" deve ser uma string';
export const ERROR_INVALID_AGE =
  'O campo "idade" deve ser uma data válida no formato YYYY-MM-DD';
export const ERROR_DUPLICATE_EMAIL = (email) => `O email ${email} já existe`;
export const ERROR_INVALID_ID = "Id não encontrado";

export const ERROR_INVALID_PASSWORD_TYPE =
  "A senha deve ser uma string ou um number";
export const ERROR_PASSWORD_SIZE = "A senha deve conter no minimo 8 caracteres";
