import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("⚠ Nome Obrigatório!"),
  email: yup
    .string()
    .email("⚠ Email inválido!")
    .required("⚠ Email obrigatório!"),
  password: yup
    .string()
    .required("⚠ Senha obrigatória!")
    .min(8, "⚠ Sua senha deve conter ao menos 8 caracteres!")
    .matches(
      /^(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-zA-z])/,
      "⚠ Sua senha deve conter ao menos, uma letra, um símbolo e um número!"
    ),
  confirmPass: yup
    .string()
    .oneOf([yup.ref("password")], "⚠ A confirmação deve ser igual a senha!"),
  bio: yup.string().required("⚠ Bio obrigatória!"),
  contact: yup.string().required("⚠ Contato obrigatório!"),
  course_module: yup.string().required("⚠ Módulo Obrigatório!"),
});
