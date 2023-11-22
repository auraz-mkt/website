<template>
    <div class="test"></div>
    <button id="to-top-button" :onclick="goToTop" title="Go To Top"
        class="hidden fixed z-90 bottom-8 right-8 border-0 w-16 h-16 rounded-full drop-shadow-md bg-indigo-500 text-white text-3xl font-bold">&uarr;
    </button>
</template>

<script>
console = console
    export default {
  mounted: () => {
    const toTopButton = document.getElementById("to-top-button");

    // When the user scrolls down 200px from the top of the document, show the button
    window.onscroll = () => {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            toTopButton.classList.remove("hidden");
        } else {
            toTopButton.classList.add("hidden");
        }
    };
  },
  methods: {
    goToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
    
</script>

<style>
.placeholder {
    width: 0;
}
</style>