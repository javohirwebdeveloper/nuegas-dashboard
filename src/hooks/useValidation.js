import { useState } from "react";

export const useValidation = () => {
  const [errors, setErrors] = useState({});

  const validate = ({ email, password }) => {
    const newErrors = {};

    // Email validation
    if (!email) {
      newErrors.email = "Email majburiy!";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email formati noto‘g‘ri!";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Parol kiritilishi shart!";
    } else if (password.length < 6) {
      newErrors.password = "Parol kamida 6 ta belgidan iborat bo‘lishi kerak!";
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password = "Kamida 1 ta katta harf bo‘lishi kerak!";
    } else if (!/[0-9]/.test(password)) {
      newErrors.password = "Kamida 1 ta raqam bo‘lishi kerak!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { errors, validate };
};
