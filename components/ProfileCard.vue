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
    name: String,
    experience: String,
    education: String,
    gravatarId: String,
    linkedinId: String,
  },
  computed: {
    gravatarUrl() {
      return `https://gravatar.com/avatar/${this.gravatarId}?s=128&d=mp`;
    },
    linkedinUrl() {
      return `https://linkedin.com/in/${this.linkedinId}`;
    },
    altText() {
      return `Imagem Perfil ${this.name}`;
    },
  },
};
</script>

<style>
.profile {
  @apply w-96 lg:w-auto;
  @apply lg:basis-1/4;

  @apply mx-8 my-16;
  @apply px-6 py-12;

  @apply text-center;
  @apply flex items-center flex-col;

  @apply bg-inherit selection:bg-dark;
  @apply text-dark selection:text-light;

  @apply shadow-2xl;
}

.profile__picture {
  @apply block;
  @apply w-40 h-40;

  @apply rounded-full;
  @apply select-none;

  @apply bg-gradient-to-br;
  @apply from-slate-300;
  @apply via-slate-200;
  @apply to-slate-400;
}

.profile__name {
  @apply mt-8;

  @apply font-serif;
  @apply text-3xl;
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
  @apply mt-2;
  @apply text-lg;

  @apply font-bold;
  @apply no-underline;
  @apply outline-1 outline-offset-2 outline-current;
}
</style>
