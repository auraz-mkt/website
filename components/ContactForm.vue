<template>
  <div class="grid grid-cols-2 gap-4 mt-20 p-6">
    <div class="contact-form">
      <div class="mx-auto w-full">
        <form action="https://formbold.com/s/9EPBp" method="POST">
          <div class="mb-5">
            <label
              for="name"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              {{ name }}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              :placeholder="placeholderName"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="email"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              {{ email }}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              :placeholder="placeholderEmail"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="subject"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              {{ type }}
            </label>
            <div class="flex justify-between">
              <div class="flex gap-10">
                <div class="inline-flex items-center">
                  <label
                    class="relative flex cursor-pointer items-center rounded-full p-3"
                    for="html"
                    data-ripple-dark="true"
                  >
                    <input
                      id="html"
                      name="type"
                      type="radio"
                      class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                    />
                    <div
                      class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3.5 w-3.5"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <circle
                          data-name="ellipse"
                          cx="8"
                          cy="8"
                          r="8"
                        ></circle>
                      </svg>
                    </div>
                  </label>
                  <label
                    class="mt-px cursor-pointer select-none font-light text-gray-700"
                    for="html"
                  >
                    {{ typeCreator }}
                  </label>
                </div>
                <div class="inline-flex items-center">
                  <label
                    class="relative flex cursor-pointer items-center rounded-full p-3"
                    for="react"
                    data-ripple-dark="true"
                  >
                    <input
                      id="react"
                      name="type"
                      type="radio"
                      class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                    />
                    <div
                      class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3.5 w-3.5"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <circle
                          data-name="ellipse"
                          cx="8"
                          cy="8"
                          r="8"
                        ></circle>
                      </svg>
                    </div>
                  </label>
                  <label
                    class="mt-px cursor-pointer select-none font-light text-gray-700"
                    for="react"
                  >
                    {{ typeBrand }}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-5">
            <label
              for="message"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              {{ message }}
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              :placeholder="placeholderMessage"
              class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button
              class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
            >
              {{ submitButton }}
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="contact-form-description">
      <div v-html="renderBlogText(contactForms?.fields?.description)"></div>
    </div>
  </div>
  
</template>

<script setup>
import contentful from "contentful";
const { locale, t: $t } = useI18n();
const config = useRuntimeConfig();
const {
    data: contactForms,
    error,
    status,
} = useAsyncData("contactForms", async () => {
    const contentfulClient = contentful.createClient({
        space: config.contentful.spaceId,
        accessToken: config.contentful.accessToken,
    });

    const { items } = await contentfulClient.getEntries({
        content_type: config.contentful.contactFormTypeId,
        locale: locale.value,
    });

    return items[0];
});
</script>

<script>
export default {
  computed: {
    name() {
      return this.$t(`contact_form.name`);
    },
    email() {
      return this.$t(`contact_form.email`);
    },
    type() {
      return this.$t(`contact_form.type`);
    },
    typeBrand() {
      return this.$t(`contact_form.type_brand`);
    },
    typeCreator() {
      return this.$t(`contact_form.type_creator`);
    },
    message() {
      return this.$t(`contact_form.message`);
    },
    placeholderName() {
      return this.$t(`contact_form.place_holder_name`);
    },
    placeholderEmail() {
      return this.$t(`contact_form.place_holder_email`);
    },
    placeholderMessage() {
      return this.$t(`contact_form.place_holder_message`);
    },
    submitButton() {
      return this.$t(`contact_form.submit_button`);
    },
  },
};
</script>

<style>
@media screen and (max-width: 767px) {
  .contact-form {
    min-width: 100vw;
  }
}
@media screen and (min-width: 768px) {
  .contact-form {
    min-width: 40vw;
  }
}

p {
  margin: 1em;
}
</style>
