<template>
  <main class="login">
    <form class="login_form">
      <div class="login_form__fields">
        <div v-if="loginError" class="login_form__error">
          {{ errorCause[locale] }}
        </div>

        <form-input
          v-model="loginCredentials.email"
          input-type="email"
          input-name="email"
          autocomplete-type="username"
          :input-label="$t('auth.formFields.email')"
          :input-validator="validateEmail"
          @valid-input="setFormFieldIsValid('email', $event)"
        />

        <form-input
          v-model="loginCredentials.password"
          input-type="password"
          input-name="password"
          autocomplete-type="current-password"
          :input-label="$t('auth.formFields.password')"
          :input-validator="validatePassword"
          @valid-input="setFormFieldIsValid('password', $event)"
        />
      </div>

      <form-submit-button
        @click.prevent.stop="login"
        :allow-submit="checkAllFormFieldsAreValid"
      >
        Login
      </form-submit-button>

      <div class="login_form__signup_instead" :lang="locale">
        {{ $t("auth.login.anonymousHasNoAccount") }}
        <NuxtLink to="/auth/signup" class="login_form__signup_instead__link">
          {{ $t("auth.login.signupInstead") }}
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
import { useAurazApiFetch } from "~/composables/useAurazApiFetch";

const { t: $t, locale } = useI18n();

const loginCredentials = ref({
  email: "",
  password: "",
});

const { setFormFieldIsValid, checkAllFormFieldsAreValid } =
  useFormValidator(loginCredentials);

const credentialsEncoder = useCredentialsEncoder();
const validateEmail = useValidateEmail();
const validatePassword = useValidatePassword();

/**
 * `username` and `password` are the default form fields according to the OAuth2 protocol.
 * Although creators and brands will have an Auraz username, the identifier for auth purposes
 * will be the user's email.
 */
const urlEncodedLoginCredentials = computed(() =>
  credentialsEncoder(
    loginCredentials.value.email,
    loginCredentials.value.password,
  ),
);

const {
  status: loginStatus,
  error: loginError,
  execute: login,
} = await useAurazApiFetch(`/v1/auth/login`, {
  method: "POST",
  body: urlEncodedLoginCredentials,
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  credentials: "include",
  // Login is executed *manually* on client-side
  lazy: true,
  watch: false,
  server: false,
  immediate: false,
});

const errorCause = computed(() => loginError.value?.data.error.cause);

watchEffect(async () => {
  if (loginStatus.value === "success") {
    await navigateTo({ path: "/campaigns/create" });
  }
});

const pageTitle = `${$t("companyName")} | ${$t("auth.login.greeting")}`;

useSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  twitterTitle: pageTitle,
});
</script>

<style>
.login {
  @apply w-full;
  @apply flex flex-col justify-start md:justify-center items-center;
}

.login_form {
  @apply md:border md:border-gray-300 md:rounded-xl;
  @apply md:px-8 md:py-12;

  @apply w-full md:w-3/4 lg:w-1/2;
  @apply flex flex-col justify-center items-center;
  @apply gap-8;
}

.login_form__fields {
  @apply w-full;
  @apply flex flex-col justify-start items-center;
  @apply gap-4;
}

.login_form__error {
  @apply p-8;

  @apply text-center;
  @apply text-red-900 bg-red-100;
}

.login_form__signup_instead {
  @apply text-base;
  @apply text-center;
}

.login_form__signup_instead__link {
  @apply text-primary;
  @apply underline;
  @apply whitespace-nowrap;
}
</style>
