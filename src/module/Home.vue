<script setup lang="ts">
import Menu from '@/components/Menu.vue'
</script>
<template>
<div class="h-full flex">
  <div class="h-full bg-gray-800">
    <Menu></Menu>
  </div>
  <div class="flex-1 flex flex-col h-full">
    <div class="navbar bg-base-100 px-8">
      <a class="btn btn-ghost normal-case text-xl">Asiainfo UED Digital Virtual Man</a>
    </div>
    <div class="flex-1 overflow-hidden overflow-y-auto bg-gray-300">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>