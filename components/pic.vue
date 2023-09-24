<template>
  <div class="picture">
    <div class="img" style="background-image: url('_nuxt/assets/IMG_4401.jpg')"/>
    <div class="main-picture-meta">
      <div class="meta-bar">
        <div class="meta" v-if="date">
          <icon color="white" scale=".7" :path="MemoryClock"/>
          {{ date }}
        </div>
        <div class="meta" v-if="f">
          <icon color="white" scale=".7" :path="MemoryAlphaF"/>
          {{ f }}
        </div>
        <div class="meta" v-if="location">
          <icon color="white" scale=".7" :path="MemoryCompass"/>
          {{ location }}
        </div>
        <div class="meta" v-if="device">
          <icon color="white" viewBox="0 0 24 27" scale=".8" :path="mdiApple"/>
          {{ device }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {MemoryClock, MemoryAlphaF, MemoryCompass} from "@pictogrammers/memory/lib/icons";
import {mdiApple} from "@mdi/js";

const props = defineProps({
  date: {
    type: String
  },
  f: {
    type: String
  },
  location: {
    type: String
  },
  device: {
    type: String
  }
});
</script>

<style lang="less">
.picture {
  height: 100%;

  .meta-bar {
    display: flex;
    align-items: center;
    font-size: .8rem;
    background: rgba(0, 0, 0, .4);
    border-radius: 10px;
    justify-content: center;
    padding: .2rem 1rem;
    width: calc(100% - 3.5rem);
    backdrop-filter: blur(5px);

    .meta {
      display: inline-flex;
      align-items: center;
      color: white;
      gap: .2rem;

      &::after {
        content: "|";
        margin: 0 .5rem;
        color: rgba(255, 255, 255, .4);

        @media (max-width: 800px) {
          margin: 0 .2rem;
        }
      }

      &:last-child::after {
        content: none;
      }
    }
  }

  .main-picture-meta {
    width: 100%;
    position: absolute;
    bottom: 0;
    opacity: 0;
    display: flex;
    justify-content: center;
    transition: all .2s ease;
  }

  &:hover {
    .main-picture-meta {
      opacity: 1;
      bottom: 1rem;
    }
  }

  .img {
    height: 100%;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, .2);
    border-radius: 10px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: all .2s ease;

    @media (max-width: 800px) {
      height: 320px;
    }

    @media (min-width: 1200px) {
      &:hover {
        transform: rotate(-2.5deg) scale(1.1);
        box-shadow: 3px 3px 14px rgba(0, 0, 0, .5);
      }
    }
  }
}
</style>