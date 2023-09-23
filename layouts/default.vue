<template>
  <nav class="navbar" :class="{active: navbarActive}">
    <div class="title">Kyanopi</div>
    <div class="tabs">
      <nav-btn to="/">
        <icon :path="MemoryMap"/>
        那一天
      </nav-btn>
      <nav-btn to="/gallery">
        <icon color="white" :path="MemoryImage"/>
        图库
      </nav-btn>
    </div>
  </nav>
  <div class="container">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import {MemoryMap, MemoryImage} from "@pictogrammers/memory";
import {ref} from "@vue/reactivity";

const navbarActive = ref(false);
</script>

<style lang="less">
.navbar {
  background: black;
  width: calc(100vw - 2rem);
  color: white;
  padding: .7rem 1rem;
  display: flex;
  align-items: center;
  height: 42px;

  gap: 1rem;

  transform: translateY(calc(-42px - 1.4rem));
  opacity: 0;
  transition: all .2s ease;

  &.active {
    transform: translateY(0);
    opacity: 1;
  }
}

.title {
  font-size: 2rem;
  font-family: 'DM Serif Text', serif;
}

.tabs {
  display: flex;
  gap: .5rem;
  align-items: center;
}
</style>