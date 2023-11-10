export const useValidatePattern = () => {
  return function (
    text: string,
    patternValidations: {
      pattern: RegExp;
      shouldMatch: boolean;
      errorMessage: { "en-US": string; "pt-BR": string };
    }[],
  ): { hasError: boolean; errorMessage: { "en-US": string; "pt-BR": string } } {
    for (const { pattern, shouldMatch, errorMessage } of patternValidations) {
      const hasMatched = pattern.test(text);
      if (hasMatched !== shouldMatch) {
        return {
          hasError: true,
          errorMessage: errorMessage,
        };
      }
    }
    return {
      hasError: false,
      errorMessage: { "en-US": "", "pt-BR": "" },
    };
  };
};
