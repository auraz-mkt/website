export const useFormValidator = (formData: Ref<{}>) => {
  const validFields: Ref<Record<string, boolean>> = ref({
    ...Object.keys(formData.value).reduce(
      (clone, key) => ({ ...clone, [key]: false }),
      {},
    ),
  });

  return {
    setFormFieldIsValid: function (fieldName: string, validInput: boolean) {
      validFields.value[fieldName] = validInput;
    },

    checkAllFormFieldsAreValid: computed(() => {
      return Object.values(validFields.value).reduce((a, b) => a && b, true);
    }),
  };
};
