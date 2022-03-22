<script setup lang="ts">
</script>
<template>
  <ul class="menu bg-gray-800 text-gray-300 w-56">
    <router-link to="/tts" custom v-slot="{ navigate, isActive }">
      <li @click="navigate">
        <span :class="{'active': isActive}">TTS</span>
      </li>
    </router-link>
    <router-link to="/asr" custom v-slot="{ navigate, isActive }">
      <li @click="navigate">
        <span :class="{'active': isActive}">ASR</span>
      </li>
    </router-link>
    <router-link to="/droid" custom v-slot="{ navigate, isActive }">
      <li @click="navigate" :class="{'active': isActive}">
        <span :class="{'active': isActive}">Droid</span>
      </li>
    </router-link>
  </ul>
</template>