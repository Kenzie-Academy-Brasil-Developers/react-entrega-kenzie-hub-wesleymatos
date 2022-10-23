import * as yup from "yup";

export const schema = yup.object({
  title: yup.string().required("⚠ Tecnologia obrigatória!"),
  status: yup.string().required("⚠ Status obrigatório!"),
});
