<template>
  <div class="flex w-screen h-screen overflow-hidden bg-base-200">
    <div class="bg-base-200 h-[calc(100vh)] overflow-hidden flex gap-6">
      <div class="bg-base-100 text-base-content lg:w-[14em] p-6 flex flex-col justify-center">
        <div class="flex flex-col">
          <NuxtLink v-for="route in routes.admin" :to="route.path" class="menu-link">
            <div class="flex items-center gap-2 py-4 border-b border-accent-content/10">
              <i :class="route.icon"></i>
              <p class="hidden lg:block">{{ route.name }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="container flex flex-col flex-1 overflow-hidden">
      <header class="bg-base-300 h-[4em]" />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const { routes } = useConstants();
const router = useRouter();
const path = router.currentRoute?.value?.fullPath;
const me = ref();

onMounted(async () => {
  const { payload } = await useUsers.Me();
  return payload;
});
</script>
