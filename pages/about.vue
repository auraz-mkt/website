<template>
  <main class="about">
    <ProfileCard
      v-for="founder in founders"
      :key="founder.linkedinId"
      :name="founder.name"
      :experience="founder.experience"
      :education="founder.education"
      :gravatar-id="founder.gravatarId"
      :linkedin-id="founder.linkedinId"
    />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Auraz | Sobre",
  description: "Auraz - Trazendo Marketing de volta para as Pessoas",
});
</script>

<script>
export default {
  data() {
    return {
      founders: [
        {
          name: "Gabriela André",
          experience: "Ex Meta e Bytedance (Social Media)",
          education: "Bacharel Relações Internacionais",
          gravatarId: "99f9e9b11a8be74bbb04994a24ed17f2",
          linkedinId: "gabriela-andr%C3%A9",
        },
        {
          name: "Júlia Goldman",
          experience: "Ex ONU e Bytedance (Social Media)",
          education: "Bacharel Relações Internacionais e Marketing",
          gravatarId: "78672fab5733bfcf13c4120888db29a8",
          linkedinId: "juliafelippegoldman",
        },
        {
          name: "Renato Cordeiro",
          experience: "Ex Elo7 (Principal ML Engineer)",
          education: "Doutorando Ciência da Computação",
          gravatarId: "cdffc1df22bce6b6a4a1776e2450474c",
          linkedinId: "renatocf",
        },
      ],
    };
  },
};
</script>

<style>
.about {
  @apply w-full;
  @apply flex flex-col lg:flex-row justify-evenly items-center;

  @apply bg-light;
}
</style>
