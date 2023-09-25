<template>
  <div class="icon">
    <svg :style="getStyle()" :viewBox="viewBox" :height="height" :width="width">
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
    type: String
  },
  viewBox: {
    type: String,
    default: "0 0 21 21"
  },
  height: {
    type: String,
    default: "21px"
  },
  width: {
    type: String,
    default: "21px"
  }
})

function getStyle() {
  const result = {
    transform: `scale(${props.scale})`
  }

  if (props.color) {
    // @ts-ignore
    result['fill'] = props.color;
  }

  return result;
}
</script>

<style scoped lang="less">
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>