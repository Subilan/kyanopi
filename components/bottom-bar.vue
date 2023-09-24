<template>
  <div class="bottom-bar-activator" @mouseenter="bottombarActive = true"/>
  <div class="bottom-bar" :class="{active: bottombarActive}" @mouseleave="bottombarActive = false">
    <div class="bottom-bar-inner">
      <div class="bottom-bar-left">

      </div>
      <div class="bottom-bar-center">
        <div class="bottom-title">
          那一天
        </div>
        <div class="bottom-subtitle">
          维多利亚港的夕阳
        </div>
      </div>
      <div class="bottom-bar-right">

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const bottombarActive = ref(false);
</script>

<style lang="less" scoped>
.bottom-title {
  font-family: 'Noto Serif SC', '华文中宋', '宋体', SimSong, serif;
  font-weight: 900;
  font-style: italic;
  font-size: 2.7rem;
  position: fixed;
  bottom: calc(72px - 50%);
  text-shadow: -2px -2px 0 #000,
    0 -2px 0 #000,
    2px -2px 0 #000,
  2px 0 0 #000,
  2px 2px 0 #000,
  0 2px 0 #000,
  -2px 2px 0 #000,
  -2px 0 0 #000;
}

.bottom-bar {
  width: 100vw;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  background: black;
  box-shadow: 0 -2px 12px rgba(0, 0, 0, .2);
  color: white;
  z-index: 100;
  opacity: 0;
  transform: translateY(72px);
  transition: all .2s cubic-bezier(.49, 0, .52, 1);

  &.active {
    transform: translateY(0);
    opacity: 1;
  }

  .bottom-bar-inner {
    max-width: 1200px;
    display: flex;
    justify-content: center;
  }
}

.bottom-bar-center {
  display: flex;
  align-items: center;
  flex-direction: column;

  .bottom-subtitle {
    transform: translateY(1rem);
    font-family: 'Noto Serif SC', '华文中宋', '宋体', SimSong, serif;
  }
}

.bottom-bar-activator {
  position: fixed;
  display: block;
  bottom: 0;
  width: 100vw;
  height: 52px;
  z-index: 1;
}
</style>