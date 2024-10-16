<template>
  <div class="flex flex-col flex-1 h-full gap-8 mb-4 overflow-auto lg:overflow-hidden lg:flex-row">
    <div class="flex flex-col flex-1 gap-10 lg:border-r-2 lg:h-full lg:overflow-auto border-base-content/10">
      <div class="flex items-center gap-4 mb-10">
        <NuxtLink to="/admin/trailers" class="btn btn-sm btn-outline btn-accent">Back</NuxtLink>
        <h2 class="text-3xl font-bold uppercase text-secondary">Overview</h2>
      </div>

      <div class="flex flex-col items-center gap-6 lg:items-end lg:flex-row">
        <img :src="imageUrl(trailer?.poster as string)" :alt="trailer?.title" class="lg:w-[15em] w-full" />

        <div class="flex flex-col w-full gap-2">
          <h1 class="text-3xl font-bold text-secondary">
            {{ trailer?.title }}
          </h1>
          <p :class="`${!trailer?.releaseDate && 'loader-skeleton-short'}`">
            Release Date:
            <span class="font-bold text-secondary">{{ useHelpers.formatDate(trailer?.releaseDate ?? "") }}</span>
          </p>

          <p :class="`${!trailer?.runtime && 'loader-skeleton-short'}`">
            Runtime: <span class="font-bold text-secondary">{{ trailer?.runtime ?? "" }}</span>
          </p>

          <p :class="`${!trailer?.genre && 'loader-skeleton-short'}`">
            Genre: <span class="font-bold text-secondary">{{ trailer?.genre }}</span>
          </p>

          <p :class="`${!trailer?.id && 'loader-skeleton-short'}`">
            Director: <span class="font-bold text-secondary">{{ trailer?.director }}</span>
          </p>

          <div class="flex mt-10">
            <button v-if="trailer?.id" @click="onPublishOrUnpublish" class="btn btn-accent btn-sm">
              {{ trailer?.isPublished ? "Unpublish Trailer" : "Publish Trailer" }}
            </button>
          </div>
        </div>
      </div>

      <div class="w-full pr-10">
        <h2 class="text-xl font-bold uppercase text-secondary">Plot</h2>
        <p v-if="trailer?.plot" class="text-lg leading-relaxed">{{ trailer?.plot }}</p>

        <div v-else class="flex flex-col gap-2">
          <p class="loader-skeleton-long"></p>
          <p class="loader-skeleton-long"></p>
          <p class="loader-skeleton-long"></p>
          <p class="w-5/6 loader-skeleton-long"></p>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-xl font-bold uppercase text-secondary">Cast</h2>

        <div class="grid items-center grid-cols-3 gap-6 lg:grid-cols-6">
          <div v-for="person in trailer?.casts || []" :key="person.id">
            <div class="flex flex-col gap-2">
              <div
                :class="`w-[6em] h-[6em] border-2 border-base-content/10 rounded-full bg-base-content/5 overflow-hidden  ${
                  person.id ? 'bg-cover' : 'skeleton'
                }`"
              >
                <img :src="castUrl(person.image)" :alt="person.name" class="object-cover w-full h-full" />
              </div>
              <p class="capitalize">{{ person.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:w-[30em] flex flex-col gap-6">
      <h2 class="text-2xl font-bold text-secondary">Trailer</h2>

      <div class="flex flex-col gap-4 border-2 rounded-lg border-base-content/10">
        <video class="w-full" controls v-if="trailer?.mediaId">
          <source :src="videoUrl(trailer?.mediaId)" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Trailer = Awaited<ReturnType<typeof useTrailers.Trailer>>["payload"];

const { videoUrl, imageUrl, castUrl } = useConstants();
const { slug } = useRoute().params;
const trailer = ref<Trailer | null>(null);

onMounted(async () => {
  const { payload } = await useTrailers.Trailer(slug as string);
  trailer.value = payload ?? null;
});

const onPublishOrUnpublish = async () => {
  if (trailer?.value?.id) {
    const { payload, error } = await useTrailers.PublishOrUnpublish({
      id: trailer?.value?.id,
      isPublished: !trailer?.value?.isPublished,
    });

    if (payload) trailer.value!.isPublished = payload.isPublished;
  }
};
</script>

<style scoped lang="postcss">
.loader-skeleton-long {
  @apply p-3 bg-base-content/5 skeleton w-full;
}

.loader-skeleton-short {
  @apply p-3 bg-base-content/5 skeleton w-3/12 mb-1;
}
</style>
