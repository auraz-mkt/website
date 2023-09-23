<template>
    <MenuBar />
    
</template>
  
<script setup>
const { t: $t } = useI18n();
const pageTitle = `${$t("companyName")}`;

useSeoMeta({
    title: pageTitle,
    ogTitle: pageTitle,
    twitterTitle: pageTitle,
});
</script>
  
<style lang="css">

</style>
  