<template>
  <div class="index">
    <div class="main-picture-container">
      <div class="main-picture">
        <div class="main-picture-img-container">
          <pic
              date="2023.08.19 星期六 18:39"
              f="1.6 26mm"
              location="中国香港特别行政区油尖旺区星光大道"
              device="iPhone 13"
          />
        </div>
        <div class="main-picture-caption">
          <div class="title">维多利亚港的夕阳</div>
          <div class="subtitle">The sunset of the Victoria Harbour</div>
          <div class="description">
            <p>
              虽然囿于手机相机简易性的限制，光线没有办法直接控制也没法设计，这就导致这张照片看上去并不是那么的精致，但...至少的确是拍了东西的，对吧？</p>
            <p>对面就是香港岛上的中环，那座山叫做太平山。山上有个观景台，视角很好——但行程也很单一。</p>
            <p>这张照片附近就是香港艺术馆、天星小轮、星光大道等等，港铁尖沙咀站也离这里不到五百米。</p>
            <p>
              我不清楚为什么这么多的东西，对当时的我来说是那么的如梦似幻。这种感觉，就好比一些人尽皆知的具有魅力的东西或地方终于被我所领略。这是一种自豪，还是一种满足感？</p>
            <p>
              即使我也同大多游人一样，根本没有认真地去理解当地的文化，更没有精力去寻找真正「地道」的美食和生活方式，但我总觉得自己有那么几秒钟，是属于这个地方的人。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Pic from "~/components/pic.vue";
</script>

<style lang="less" scoped>
.main-picture-container {
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
}

.main-picture {
  max-width: 1200px;
  position: relative;
  padding: 0 1rem;
  display: flex;
  align-items: stretch;
  gap: 2rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  .main-picture-img-container {
    width: 62%;
    position: relative;

    @media (max-width: 1200px) {
      width: 50%;
    }

    @media (max-width: 800px) {
      width: 100%;
    }
  }

  .main-picture-caption {
    font-family: 'Noto Serif SC', '华文中宋', '宋体', SimSong, serif;
    width: 38%;

    @media (max-width: 1200px) {
      width: 50%;
    }

    @media (max-width: 800px) {
      width: 100%;
    }

    .title {
      font-weight: 900;
      font-size: 2.5rem;
      @media (max-width: 1200px) {
        font-size: 2rem;
      }
    }

    .description {
      font-size: 1.1rem;
      @media (max-width: 1200px) {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 1200px) {
    padding: 0 2rem;
  }
}
</style>