<template>
  <main class="signup">
    <form class="signup_form">
      <div v-if="signupError" class="signup_form__error">
        {{ errorCause[locale] }}
      </div>

      <div class="signup_form__fields">
        <form-input
          v-model="signupCredentials.email"
          input-type="email"
          input-name="email"
          autocomplete-type="username"
          :input-label="$t('auth.formFields.email')"
          :input-validator="validateEmail"
          @valid-input="setFormFieldIsValid('email', $event)"
        />

        <form-input
          v-model="signupCredentials.password"
          input-type="password"
          input-name="password"
          autocomplete-type="new-password"
          :input-label="$t('auth.formFields.password')"
          :input-validator="validatePassword"
          @valid-input="setFormFieldIsValid('password', $event)"
        />

        <form-input
          v-model="signupCredentials.passwordConfirmation"
          input-type="password"
          input-name="passwordConfirmation"
          autocomplete-type="new-password"
          :input-label="$t('auth.formFields.passwordConfirmation')"
          :input-validator="confirmPassword"
          @valid-input="setFormFieldIsValid('passwordConfirmation', $event)"
        />
      </div>

      <form-submit-button
        @click.prevent.stop="signup"
        :allow-submit="checkAllFormFieldsAreValid"
      >
        Signup
      </form-submit-button>

      <div class="signup_form__login_instead">
        {{ $t("auth.signup.anonymousHasAccount") }}
        <NuxtLink to="/auth/login" class="signup_form__login_instead__link">
          {{ $t("auth.signup.loginInstead") }}
        </NuxtLink>
      </div>
    </form>
  </main>
</template>

<script setup>
import { useCredentialsEncoder } from "~/composables/useCredentialsEncoder";
import { useFormValidator } from "~/composables/useFormValidator";
import { useValidateEmail } from "~/composables/useValidateEmail";
import { useValidatePassword } from "~/composables/useValidatePassword";
import { useConfirmPassword } from "~/composables/useConfirmPassword";
import { useAurazApiFetch } from "~/composables/useAurazApiFetch";

const { t: $t, locale } = useI18n();

const signupCredentials = ref({
  email: "",
  password: "",
  passwordConfirmation: "",
});

const { setFormFieldIsValid, checkAllFormFieldsAreValid } =
  useFormValidator(signupCredentials);

const credentialsEncoder = useCredentialsEncoder();
const validateEmail = useValidateEmail();
const validatePassword = useValidatePassword();
const confirmPassword = computed(() =>
  useConfirmPassword(signupCredentials.value.password),
);

/**
 * `username` and `password` are the default form fields according to the OAuth2 protocol.
 * Although creators and brands will have an Auraz username, the identifier for auth purposes
 * will be the user's email.
 */
const urlEncodedSignupCredentials = computed(() =>
  credentialsEncoder(
    signupCredentials.value.email,
    signupCredentials.value.password,
  ),
);

const {
  status: signupStatus,
  error: signupError,
  execute: signup,
} = await useAurazApiFetch(`/v1/auth/signup`, {
  method: "POST",
  body: urlEncodedSignupCredentials,
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  credentials: "include",
  // Signup is executed *manually* on client-side
  lazy: true,
  watch: false,
  server: false,
  immediate: false,
});

const errorCause = computed(() => signupError.value?.data.error.cause);

watchEffect(async () => {
  if (signupStatus.value === "success") {
    await navigateTo({ path: "/campaigns/create" });
  }
});

const pageTitle = `${$t("companyName")} | ${$t("auth.signup.cta")}`;

useSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  twitterTitle: pageTitle,
});
</script>

<style>
.signup {
  @apply w-full;
  @apply flex flex-col justify-start md:justify-center items-center;
}

.signup_form {
  @apply md:border md:border-gray-300 md:rounded-xl;
  @apply md:px-8 md:py-12;
  @apply w-full md:w-3/4 lg:w-1/2;

  @apply flex flex-col justify-center items-center;
  @apply gap-8;
}

.signup_form__fields {
  @apply w-full;
  @apply flex flex-col justify-start items-center;
  @apply gap-4;
}

.signup_form__error {
  @apply p-8;

  @apply text-center;
  @apply text-red-900 bg-red-100;
}

.signup_form__login_instead {
  @apply text-base;
  @apply text-center;
}

.signup_form__login_instead__link {
  @apply text-primary;
  @apply underline;
  @apply whitespace-nowrap;
}
</style>
