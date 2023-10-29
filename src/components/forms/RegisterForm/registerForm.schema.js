import { z } from "zod";

const registerFormSchema = z
  .object({
    name: z.string().min(1, "Campo obrigatório"),
    email: z
      .string()
      .email("Formato de e-mail inválido")
      .min(1, "Campo obrigatório"),
    password: z
      .string()
      .min(8, "Sua senha deve possuir pelo menos 8 caracteres")
      .regex(/[a-z]+/, "É necessario conter ao menos uma letra minuscula")
      .regex(/[A-Z]+/, "É necessario conter ao menos uma letra maiuscula")
      .regex(/[0-9]+/, "É necessario conter ao menos um numero")
      .regex(
        /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]+/,
        "É necessario conter ao menos um caracter especial",
      ),
    password2: z.string().min(1, "Confirmar a senha é obrigatorio"),
    bio: z.string().min(1, "Campo obrigatório"),
    contact: z.string().min(1, "Campo obrigatório"),
    course_module: z.string().min(21, "Campo obrigatório"),
  })
  .refine((data) => data.password === data.password2, {
    message: "As senhas devem ser iguais",
    path: ["password2"],
  });

export { registerFormSchema };
