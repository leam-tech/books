<template>
  <div
    class="flex-1 flex justify-center items-center bg-gray-25"
    :class="{
      'window-drag': platform !== 'Windows',
    }"
  >
    <div
      class="w-full w-form shadow-lg rounded-lg border relative bg-white"
      style="height: 700px"
    >
      <!-- Welcome to Frappe Books -->
      <div class="px-4 py-4">
        <h1 class="text-2xl font-semibold select-none text-center">
          {{ t`Welcome to Frappe Books` }}
        </h1>
      </div>

      <!-- Login Information -->
      <div class="px-4 py-4">
        <div class="flex flex-col gap-4">
          <input
            v-model="entitySlug"
            type="text"
            :placeholder="t`Slug`"
            class="border rounded-md p-2"
          />
          <input
            v-model="email"
            type="email"
            :placeholder="t`Email`"
            class="border rounded-md p-2"
          />
          <input
            v-model="password"
            type="password"
            :placeholder="t`Password`"
            class="border rounded-md p-2"
          />
          <Button
            type="primary"
            :disabled="!entitySlug || !email || !password"
            @click="login"
          >
            <span class="text-base text-white">
              {{ t`Login` }}
            </span>
          </Button>
        </div>
      </div>

      <!-- Language Selector -->
      <div
        class="
          w-full
          flex
          justify-between
          items-center
          absolute
          p-4
          text-gray-900
        "
        style="top: 100%; transform: translateY(-100%)"
      >
        <LanguageSelector class="text-sm w-28" />
      </div>
    </div>
    <Loading
      v-if="logingIn"
      :open="logingIn"
      :show-x="false"
      :full-width="true"
      :message="t`Logging in...`"
    />
  </div>
</template>
<script lang="ts">
import Button from 'src/components/Button.vue';
import LanguageSelector from 'src/components/Controls/LanguageSelector.vue';
import Loading from 'src/components/Loading.vue';
import { fyo } from 'src/initFyo';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Login',
  components: {
    LanguageSelector,
    Loading,
    Button,
  },
  emits: ['login'],
  data() {
    return {
      entitySlug: '',
      email: '',
      password: '',
      logingIn: false,
    } as {
      entitySlug: string;
      email: string;
      password: string;
      logingIn: boolean;
    };
  },
  mounted() {
    if (fyo.store.isDevelopment) {
      // @ts-ignore
      window.ds = this;
    }
  },
  methods: {
    login() {
      this.logingIn = true;
      this.$emit('login', {
        entitySlug: this.entitySlug,
        email: this.email,
        password: this.password,
      });
    },
  },
});
</script>
