<template>
    <div class="nav-btn" :class="{active: route.href === props.to}">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import {defineProps} from 'vue';
import {useRoute} from "nuxt/app";

const props = defineProps({
  to: {
    type: String
  },
  href: {
    type: String
  }
})

const route = useRoute();
</script>

<style scoped lang="less">
.nav-btn {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  font-size: .9rem;

  background: transparent;
  border-radius: 100px;
  padding: .2rem .7rem;
  cursor: pointer;
  transition: all .2s ease;

  &.active {
    background: white;
    color: black;
  }

  &:not(.active) {
    &:hover, &:focus {
      background: rgba(255, 255, 255, .3);
    }
  }
}
</style>