<template>
  <div @click="$emit('close-popup')" class="w-full z-50 h-screen fixed top-0 left-0 bg-stone-600">
    <div
      @click.stop
      class="bg-white display-inline
      fixed top-1/2 left-1/2 transform
      -translate-x-1/2 -translate-y-1/2 rounded-lg">
      <img
          class="absolute right-[10px] top-[10px] cursor-pointer"
          :src="require('@/assets/icons/X.svg')" width="25"
          @click="$emit('close-popup')"
      >
      <slot />
    </div>
  </div>
</template>
