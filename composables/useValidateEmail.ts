import { useValidatePattern } from "~/composables/useValidatePattern";

/**
 * Validates emails according to W3C HTML5 email pattern,
 * which willfully violates RFC 5332. See more at:
 * - https://stackoverflow.com/q/201323
 * - https://stackoverflow.com/a/8829363
 */
const W3C_HTML5_EMAIL_PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;

export const useValidateEmail = () => {
  const patternValidate = useValidatePattern();

  const patternValidations: {
    pattern: RegExp;
    shouldMatch: boolean;
    errorMessage: { "en-US": string; "pt-BR": string };
  }[] = [
    {
      pattern: W3C_HTML5_EMAIL_PATTERN,
      shouldMatch: true,
      errorMessage: {
        "en-US":
          "Invalid email! Email should be formatted `john.smith@gmail.com`",
        "pt-BR":
          "E-mail inválido! E-mail deveria ter formato `leonardo.silva@gmail.com`",
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
