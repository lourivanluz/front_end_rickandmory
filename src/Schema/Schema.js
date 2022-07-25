import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .required("obrigatório")
    .matches("^[a-zA-Z \u00C0-\u00FF]+$", "deve ter somente letras"),
  email: yup.string().email("invalido").required("obrigatório"),
  password: yup
    .string()
    .required("obrigatória")
    .matches("^.{8,}$", "deve ter ao menos 8 digitos")
    .matches("[A-Z]", "deve ter ao menos uma letra maiúscula")
    .matches("[a-z]", "deve ter ao menos uma letra minúscula")
    .matches("[0-9]", "deve ter ao menos um número")
    .matches("[#?!@$%^&*-]", "deve ter ao menos um caracter espcial"),
});
