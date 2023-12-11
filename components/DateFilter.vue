<template>
  <div class="px-10 py-2">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Data
          <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </MenuButton>
      </div>
  
      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <MenuItems class="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div class="py-1">
            <MenuItem v-slot="{ active }" v-for="date in dates">
              <a :href="localePath(generateDateURL(date), locale)" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">{{date}}</a>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
    </div>
</template>
  
<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const { locale, t: $t } = useI18n();
const localePath = useLocalePath();
const generateDateURL = (date) => '/blog/date/' + btoa(date);

import contentful from "contentful";
const config = useRuntimeConfig();
function extractUniqueYearsMonths(datesArray) {
  const uniqueDates = new Set();
  datesArray.forEach(dateString => {
    const date = new Date(dateString);
    const yearMonth = `${date.getFullYear()}-${date.getMonth() + 1}`; 
    uniqueDates.add(yearMonth);
  });

  return Array.from(uniqueDates);
}
const {
  data: dates,
  error,
  status,
} = await useAsyncData("dates", async () => {
  const contentfulClient = contentful.createClient({
    space: config.contentful.spaceId,
    accessToken: config.contentful.accessToken,
  });

  const { items } = await contentfulClient.getEntries({
    content_type: config.contentful.blogPostTypeId,
    order: "-sys.createdAt",
    locale: locale.value,
  });
  const updated = items.map((post) => post.sys.updatedAt);
  return extractUniqueYearsMonths(updated);
});
</script>

<style></style>