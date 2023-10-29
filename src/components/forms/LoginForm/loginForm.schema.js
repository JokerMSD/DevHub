import { z } from "zod";

const loginFormSchema = z.object({
  email: z.string().min(1, "Por favor, insira um email"),
  password: z.string().min(1, "Por favor, insira uma senha"),
});

export { loginFormSchema };
