<template>
  <nav class="navbar" :class="{active: navbarActive}" @mouseleave="navbarActive = false">
    <div class="title">Kyanopi</div>
    <div class="tabs">
      <nav-btn to="/">
        <icon :color="getBlackOrWhite(route.path === '/')" :path="MemoryMap"/>
        那一天
      </nav-btn>
      <nav-btn to="/gallery">
        <icon :color="getBlackOrWhite(route.path === '/gallery')" :path="MemoryImage"/>
        图库
      </nav-btn>
    </div>
  </nav>
  <div id="nav-activator" @mouseenter="navbarActive = true"/>
  <div class="container">
    <slot/>
  </div>
  <bottom-bar/>
</template>

<script lang="ts" setup>
import {MemoryMap, MemoryImage} from "@pictogrammers/memory";
import {getBlackOrWhite} from "~/fn";
import {ref} from "@vue/reactivity";
import {useRoute} from "vue-router";
import BottomBar from "~/components/bottom-bar.vue";

const navbarActive = ref(false);
const route = useRoute();
</script>

<style lang="less">
#nav-activator {
  z-index: 1;
  display: block;
  height: 42px;
  width: 100vw;
  position: fixed;
  top: 0;
}

.navbar {
  background: black;
  width: calc(100vw - 2rem);
  color: white;
  padding: .7rem 1rem;
  display: flex;
  align-items: center;
  height: 42px;
  z-index: 100;
  position: fixed;
  top: 0;

  gap: 1rem;

  transform: translateY(calc(-42px - 1.4rem));
  opacity: 0;
  transition: all .2s cubic-bezier(.49,0,.52,1);

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