import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

const schema = z.object({
  email: z.string().email({ message: "Email formati noto‘g‘ri" }),
  password: z
    .string()
    .min(6, "Parol kamida 6 ta belgidan iborat bo‘lishi kerak")
    .regex(/[A-Z]/, "Kamida 1 ta katta harf bo‘lishi kerak")
    .regex(/[0-9]/, "Kamida 1 ta raqam bo‘lishi kerak"),
});

const RegisterPage = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = async ({ email, password }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      alert("Ro'yxatdan o'tishda xatolik: " + err.message);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gradient-to-br from-blue-50 to-white text-gray-900"
      }`}
    >
      <div
        className={`w-full max-w-md rounded-2xl shadow-xl p-8 ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2 className={`text-3xl font-bold text-center mb-6 ${theme === "dark" ? "text-white" : "text-blue-700"}`}>
          Ro’yxatdan o’tish
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              className={`w-full px-4 py-3 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-xl focus:outline-none focus:ring-2 ${
                theme === "dark" ? "bg-gray-700 text-white focus:ring-blue-500" : "focus:ring-blue-400"
              }`}
              {...register("email")}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Parol"
              className={`w-full px-4 py-3 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-xl focus:outline-none focus:ring-2 ${
                theme === "dark" ? "bg-gray-700 text-white focus:ring-blue-500" : "focus:ring-blue-400"
              }`}
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition"
          >
            Ro’yxatdan o’tish
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-600 dark:text-gray-400">
          Hisobingiz bormi?{" "}
          <a href="/login" className="text-blue-600 font-medium hover:underline">
            Kirish
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
