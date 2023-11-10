import { useValidatePattern } from "~/composables/useValidatePattern";

export const useValidatePassword = () => {
  const patternValidate = useValidatePattern();

  const patternValidations: {
    pattern: RegExp;
    shouldMatch: boolean;
    errorMessage: { "en-US": string; "pt-BR": string };
  }[] = [
    {
      pattern: /[\p{Cc}\p{Cn}\p{Cs}\p{Cf}]/u,
      shouldMatch: false,
      errorMessage: {
        "en-US": "Password must have only printable characters",
        "pt-BR": "Senha deve ter apenas caracteres imprimíveis",
      },
    },
    {
      pattern: /^.{0,7}$/,
      shouldMatch: false,
      errorMessage: {
        "en-US": "Password must have at least eight characters",
        "pt-BR": "Senha deve ter pelo menos oito caracteres",
      },
    },
  ];

  return function (username: string): {
    hasError: boolean;
    errorMessage: { "en-US": string; "pt-BR": string };
  } {
    return patternValidate(username, patternValidations);
  };
};
