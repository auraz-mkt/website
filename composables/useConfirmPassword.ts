export const useConfirmPassword = (password: string) => {
  return function (passwordConfirmation: string): {
    hasError: boolean;
    errorMessage: { "en-US": string; "pt-BR": string };
  } {
    if (!passwordConfirmation || passwordConfirmation !== password) {
      return {
        hasError: true,
        errorMessage: {
          "en-US": "Password confirmation does not match the password",
          "pt-BR": "Confirmação de senha é diferente da senha usada",
        },
      };
    }

    return { hasError: false, errorMessage: { "en-US": "", "pt-BR": "" } };
  };
};
