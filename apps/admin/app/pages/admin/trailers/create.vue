<template>
  <div class="flex flex-col h-screen py-6">
    <div class="flex items-center gap-4 mb-10">
      <i @click="navigateTo('/admin/trailers')" class="text-2xl ri-close-line"></i>
      <h1 class="text-2xl font-bold">New trailer</h1>
    </div>

    <div class="flex flex-col h-full gap-4 overflow-hidden lg:flex-row">
      <form class="flex flex-col flex-1 w-full h-full" @submit.prevent="onSubmit">
        <fieldset :disabled="loading" class="flex flex-col gap-4">
          <div class="flex items-center gap-4">
            <input
              class="w-full p-3 border rounded-md outline-none border-accent/30"
              type="text"
              v-model="tomatoesUrl"
              placeholder="Enter RottenTomato link"
              :disabled="mediaId ? true : false"
            />
            <button
              :disabled="!tomatoesUrl || mediaId ? true : false"
              class="btn btn-accent"
              type="button"
              @click="scrapeData"
            >
              <span v-if="loading" class="loading loading-dots loading-sm"></span>
              <span v-else>Scrape Data</span>
            </button>
          </div>

          <textarea
            required
            rows="10"
            placeholder="Enter video url"
            v-model="videoUrl"
            :disabled="!mediaId ? true : false"
            class="p-3 border rounded-md outline-none resize-none border-accent/30"
          />

          <input
            required
            type="date"
            v-model="releaseDate"
            :disabled="!mediaId ? true : false"
            class="p-3 border rounded-md outline-none border-accent/30"
          />

          <button type="submit" class="btn btn-accent" :disabled="loading || !mediaId">
            <span v-if="loading" class="loading loading-dots loading-sm"></span>
            <span v-else>Create</span>
          </button>
        </fieldset>
      </form>

      <div class="flex flex-1 p-6 overflow-auto bg-base-100">
        <vue-json-pretty :data="trailer" v-if="trailer"></vue-json-pretty>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const tomatoesUrl = ref("");
const videoUrl = ref("");
const releaseDate = ref("");
const mediaId = ref("");
const loading = ref(false);
const trailer = ref<{ mediaId: string; director: string; genre: string; casts: string[] } | null>(null);

const scrapeData = async () => {
  loading.value = true;
  const { payload, error } = await useScraper.ScrapeTomatoes(tomatoesUrl.value).finally(() => {
    loading.value = false;
  });

  if (error) {
    console.error(error);
    return;
  }

  trailer.value = payload as any;
  mediaId.value = trailer.value?.mediaId ?? "";
};

const onSubmit = async () => {
  if (!mediaId.value || !videoUrl.value || !releaseDate.value) {
    return;
  }
  loading.value = true;

  const { payload, error } = await useTrailers
    .CreateTrailer({
      ...trailer.value,
      director: trailer.value?.director[0]?.name,
      videoUrl: videoUrl.value,
      releaseDate: releaseDate.value,
      genre: JSON.stringify(trailer.value?.genre),
    })
    .finally(() => {
      loading.value = false;
    });

  if (error) {
    console.error(error);
    return;
  }

  window.location.href = `/admin/trailers/${payload?.id}`;

  console.log("onSubmit");
};
</script>
