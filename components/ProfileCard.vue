<template>
  <div class="profile">
    <img class="profile__picture" :src="gravatarUrl" :alt="altText" />
    <div class="profile__name">
      {{ name }}
    </div>
    <div class="profile__experience">
      {{ experience }}
    </div>
    <div class="profile__education">
      {{ education }}
    </div>
    <a class="profile__linkedin" :href="linkedinUrl">LinkedIn</a>
  </div>
</template>

<script>
export default {
  props: {
    profileId: String,
  },
  computed: {
    name() {
      return this.$t(`founders.${this.profileId}.name`);
    },
    experience() {
      return this.$t(`founders.${this.profileId}.experience`);
    },
    education() {
      return this.$t(`founders.${this.profileId}.education`);
    },
    gravatarId() {
      return this.$t(`founders.${this.profileId}.gravatarId`);
    },
    linkedinId() {
      return this.$t(`founders.${this.profileId}.linkedinId`);
    },
    gravatarUrl() {
      return `https://gravatar.com/avatar/${this.gravatarId}?s=128&d=mp`;
    },
    linkedinLocale() {
      return this.$i18n.locale.replace("-", "_");
    },
    linkedinUrl() {
      return `https://linkedin.com/in/${this.linkedinId}?locale=${this.linkedinLocale}`;
    },
    altText() {
      return `${this.$t('profileImageAlt')} ${this.name}`;
    },
  },
};
</script>

<style>
.profile {
  @apply w-96 lg:w-auto;
  @apply lg:basis-1/4;

  @apply px-6 py-12;
  @apply my-4;
  @apply lg:mx-8 lg:my-16;

  @apply text-center;
  @apply flex items-center flex-col;

  @apply text-dark bg-light;
  @apply selection:text-dark selection:bg-tertiary;

  @apply shadow-2xl shadow-primary;
}

.profile__picture {
  @apply block;
  @apply w-40 h-40;

  @apply rounded-full;
  @apply select-none;

  @apply bg-gradient-to-br from-primary to-secondary;
  @apply hover:shadow-glow-xl hover:shadow-tertiary;
}

.profile__name {
  @apply mt-8;

  @apply font-serif;
  @apply text-3xl;

  @apply hover:text-shadow-lg hover:shadow-tertiary;
}

.profile__experience {
  @apply mt-4;
  @apply text-xl;
}

.profile__education {
  @apply text-xl;
}

.profile__linkedin {
  @apply block;
  @apply mt-4;
  @apply text-lg;

  @apply no-underline;
  @apply text-primary font-bold;
  @apply hover:text-shadow-lg hover:shadow-tertiary;
  @apply focus:outline-none focus:text-shadow-lg focus:shadow-tertiary;
}
</style>
