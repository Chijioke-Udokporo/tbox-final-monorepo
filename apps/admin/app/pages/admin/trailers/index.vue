<template>
  <div class="flex flex-col flex-1 gap-6 overflow-hidden">
    <div class="flex items-center justify-between gap-4">
      <h2 class="text-3xl font-bold uppercase text-secondary">Trailers ( {{ trailers?.totalDocs }} )</h2>
      <div>
        <NuxtLink to="/admin/trailers/create" class="btn btn-accent">Create Trailer</NuxtLink>
      </div>
    </div>

    <div class="flex items-center justify-between gap-2 px-3 border rounded-md border-base-content/20 bg-base-200">
      <input type="text" class="w-full py-3 outline-none bg-base-200" placeholder="Search Title, Genre, Year,etc" />
      <i class="ri-search-line" />
    </div>

    <div class="grid flex-1 grid-cols-2 gap-10 pb-20 overflow-auto lg:flex lg:flex-wrap lg:gap-10">
      <NuxtLink
        :to="`/admin/trailers/${trailer.id}`"
        v-for="trailer in trailers?.docs"
        :key="trailer.id"
        :class="`flex flex-col gap-2 cursor-pointer ${!trailer.isPublished ? 'opacity-40' : ''}`"
      >
        <div class="overflow-hidden bg-cover rounded-lg bg-base-200">
          <img
            :src="imageUrl(trailer.poster as string)"
            :alt="trailer.title"
            class="lg:w-[12em] min-h-[10em] bg-base-100"
          />
        </div>

        <div class="flex items-center justify-between gap-2">
          <div>
            <p class="text-lg">{{ trailer.title }}</p>
            <p class="text-sm opacity-60">{{ useHelpers.formatDate(trailer.releaseDate) }}</p>
          </div>

          <i v-if="trailer.isPublished" class="text-xl text-green-500 ri-checkbox-circle-fill" />
          <i v-else class="text-xl ri-close-circle-fill text-error" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { imageUrl } = useConstants();
type Trailers = Awaited<ReturnType<typeof useTrailers.Trailers>>["payload"];
const trailers = ref<Trailers | null>(null);

onMounted(async () => {
  const { payload, error } = await useTrailers.Trailers();
  if (payload) trailers.value = payload;
});
</script>
