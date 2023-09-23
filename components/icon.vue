<template>
  <div class="icon">
    <svg :style="{'transform': `scale(${scale})`, 'fill': `${color}`}" viewBox="0 0 21 21" height="21px" width="21px">
      <path :d="path"/>
    </svg>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  path: {
    type: String,
    required: true
  },
  scale: {
    type: String,
    default: "1"
  },
  color: {
    type: String,
    validator: (v: string) => ["black", "white"].includes(v),
    default: "black"
  }
})
</script>

<style scoped lang="less">
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>