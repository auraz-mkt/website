<template>
  <div class="form_field">
    <label :for="inputName" class="form_field__label">{{ inputLabel }}</label>
    <div class="form_field__input">
      <input
        :type="currentInputType"
        :name="inputName"
        :id="inputName"
        :value="modelValue"
        :autocomplete="autocompleteType"
        @input="$emit('update:modelValue', $event.target.value)"
        class="form_field__input__box"
        :class="{ form_field__input__box__error: showError }"
      />
      <div
        v-if="isPassword"
        class="form_field__reveal_secret"
        @mousedown="passwordIsShowing = true"
        @touchstart="passwordIsShowing = true"
        @mouseup="passwordIsShowing = false"
        @touchend="passwordIsShowing = false"
      >
        <Icon name="bxs:hide" v-if="passwordIsShowing" />
        <Icon name="bxs:show" v-else />
      </div>
    </div>

    <div v-if="showError" class="form_field__error">
      <span class="form_field__error__icon">
        <Icon name="ooui:error" />
      </span>
      <span class="form_field__error__text">
        {{ errorMessage[locale] }}
      </span>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();

const props = defineProps([
  "modelValue",
  "inputType",
  "inputName",
  "inputLabel",
  "inputValidator",
  "autocompleteType",
]);

const passwordIsShowing = ref(false);

const {
  modelValue,
  inputType,
  inputName,
  inputLabel,
  inputValidator,
  autocompleteType,
} = toRefs(props);

const isPassword = inputType.value === "password";
const currentInputType = isPassword
  ? computed(() => (passwordIsShowing.value ? "text" : "password"))
  : ref(inputType.value);

const emit = defineEmits(["update:modelValue", "validInput"]);

const validation = ref({ hasError: false, errorMessage: "" });
const showError = computed(() => modelValue.value && validation.value.hasError);
const errorMessage = computed(() => validation.value.errorMessage);

watchEffect(() => {
  validation.value = inputValidator.value(modelValue.value);
  emit("validInput", !validation.value.hasError);
});
</script>

<style>
.form_field {
  @apply w-full;
  @apply flex flex-col justify-start items-start;
  @apply gap-2;
}

.form_field__label {
  @apply text-dark;
}

.form_field__input {
  @apply relative;
  @apply w-full;
}

.form_field__input__box {
  @apply w-full;
  @apply px-3 py-2;

  @apply bg-gray-200;
  @apply outline-primary;

  @apply rounded-lg;
  @apply caret-primary;
}

.form_field__input__box__error {
  @apply bg-red-50;
  @apply outline-red-700;
}

.form_field__reveal_secret {
  @apply absolute;

  @apply w-10 h-full;

  @apply top-0;
  @apply right-0;

  @apply flex flex-col justify-center items-center;
}

.form_field__error {
  @apply p-4;

  @apply w-full;
  @apply text-red-900 bg-red-100;
  @apply rounded;

  @apply flex flex-row justify-start items-baseline;
  @apply gap-2;
}

.form_field__error__icon {
  @apply text-sm;
  @apply flex flex-col justify-center;
}
</style>
