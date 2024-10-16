<template>
  <div class="w-full h-screen bgOne">
    <div class="flex h-full bg-[#101010]/95">
      <div class="container flex items-center justify-center w-full h-full">
        <form @submit.prevent="login" class="w-full lg:w-[35em]">
          <fieldset class="bg-base-200 shadow-lg w-full rounded lg:p-[4em] p-[2em] flex flex-col gap-6">
            <div class="flex flex-col gap-1 mb-4">
              <h2 class="text-2xl font-bold">Login</h2>
              <p class="text-sm opacity-50 text-base-content">Please enter your email and password to login</p>
            </div>

            <input type="hidden" v-model="email" placeholder="Email" class="w-full input input-bordered" />
            <input
              type="password"
              v-model="password"
              placeholder="PIN"
              class="w-full text-xl font-bold text-center input input-bordered"
            />
            <button type="submit" class="w-full btn btn-accent">
              <span v-if="loading" class="loading loading-dots loading-md"></span>
              <span v-else>CONTINUE</span>
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const loading = ref(false);
const email = ref("admin@codesordinate.studio");
const password = ref("");

const login = async () => {
  if (!email.value || !password.value) return;
  loading.value = true;

  const { payload, error } = await useUsers.Login(email.value, password.value).finally(() => {
    loading.value = false;
  });

  if (error) console.error(error);

  if (payload) window.location.href = "/admin/dashboard";
};
</script>
