import { z } from "zod";

const registerFormSchema = z.object({

    name: z
    .string()
    .min(1,"Campo obrigatório"),
    email: z
    .string()
    .email("Formato de e-mail inválido")
    .min(1, "Campo obrigatório"),
    password: z
    .string()
    .min(8, "Sua senha deve possuir pelo menos 8 caracteres")
    .regex(/[a-z]+/,"É necessario conter ao menos uma letra minuscula")    
    .regex(/[A-Z]+/,"É necessario conter ao menos uma letra maiuscula")
    .regex(/[0-9]+/,"É necessario conter ao menos um numero")
    .regex(
        /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]+/,
        "É necessario conter ao menos um caracter especial"
    ),
    confirmPassword: z.string().min(1, "Confirmar a senha é obrigatorio"),
    bio: z
    .string()
    .min(1, "Campo obrigatório"),
    contact: z
    .string()
    .min(1, "Campo obrigatório"),
    module: z
    .string()
    .min(2, "Campo obrigatório")
    .regex(/[mM]+[1-5]/, "Selecione um Módulo"),
}).refine((password, confirmPassword) => password === confirmPassword, {
    message: "As senhas devem ser iguais",
    path: ["confirmPassword"],
});

export { registerFormSchema };