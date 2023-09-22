<template>
  <nav class="navbar">
    <div class="title">Kyanopi</div>
    <div class="tabs">
      <nav-btn to="/">
        <svg-icon type="memory" :path="MemoryImage"></svg-icon>
        主页
      </nav-btn>
      <nav-btn to="/gallery">
        <span class="material-icons">image</span>
        图库
      </nav-btn>
    </div>
  </nav>
  <div class="container">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import {MemoryImage} from "@pictogrammers/memory/lib/icons";
console.log(MemoryImage)
</script>

<style lang="less">
.navbar {
  background: black;
  width: calc(100vw - 2rem);
  color: white;
  padding: .7rem 1rem;
  display: flex;
  align-items: center;

  gap: 1rem;
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