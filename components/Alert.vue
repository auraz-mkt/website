<template>
    <div v-if="show"
        class=" fixed top-4 left-4 p-4 text-light rounded-lg bg-dark">
        {{ message }}
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            show: false,
            message: '',
        };
    },
    methods: {
        showAlert(message) {
            this.message = message;
            this.show = true;
            setTimeout(() => {
                this.show = false;
            }, 4000);
        },
    },
};
</script>
  
<style></style>
  