import { useValidatePattern } from "~/composables/useValidatePattern";

export const useValidateUsername = () => {
  const patternValidate = useValidatePattern();

  const patternValidations: {
    pattern: RegExp;
    shouldMatch: boolean;
    errorMessage: { "en-US": string; "pt-BR": string };
  }[] = [
    {
      pattern: /[^a-zA-Z0-9._]/,
      shouldMatch: false,
      errorMessage: {
        "en-US":
          "Username must have only lowercase letters (a-z), uppercase letters (A-Z), numbers (0-9), underscores (_), or dots (.)",
        "pt-BR":
          "Nome de usuário deve ter apenas letras minúsculas (a-z), letras maiúsculas (A-Z), números (0-9), sublinhados (_), ou pontos (.)",
      },
    },
    {
      pattern: /^.{0,2}$/,
      shouldMatch: false,
      errorMessage: {
        "en-US": "Username must have at least three characters",
        "pt-BR": "Nome de usuário deve ter pelo menos três caracteres",
      },
    },
    {
      pattern: /^[\d.]/,
      shouldMatch: false,
      errorMessage: {
        "en-US": "Username cannot start with digit (0-9) or dot (.)",
        "pt-BR":
          "Nome de usuário não pode começar com dígitos (0-9) ou ponto (.)",
      },
    },
    {
      pattern: /.*?[.]$/,
      shouldMatch: false,
      errorMessage: {
        "en-US": "Username cannot end with a dot (.)",
        "pt-BR":
          "Nome de usuário não pode começar com dígitos (0-9) ou ponto (.)",
      },
    },
    {
      pattern: /[._][._]/,
      shouldMatch: false,
      errorMessage: {
        "en-US":
          "Username cannot have consecutive dot (.) and/or underscore (_)",
        "pt-BR":
          "Nome de usuário não pode ter pontos (.) e/ou sublinhados (_) consecutivos",
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
