<template>
  <div class="index">
    <div class="main-picture-container">
      <div class="main-picture">
        <div class="main-picture-img-container">
          <img class="main-picture-img" src="~/assets/IMG_4401.jpg"/>
          <div class="main-picture-meta">
            <div class="meta-bar">
              <div class="meta">
                <icon color="white" scale=".7" :path="MemoryClock"/>
                2023.08.19 星期六 18:39
              </div>
              <div class="meta">
                <icon color="white" scale=".7" :path="MemoryAlphaF"/>
                1.6 26mm
              </div>
              <div class="meta">
                <icon color="white" scale=".7" :path="MemoryCompass"/>
                中国香港特别行政区油尖旺区星光大道
              </div>
              <div class="meta">
                <icon color="white" viewBox="0 0 24 27" scale=".8" :path="mdiApple"/>
                iPhone 13
              </div>
            </div>
          </div>
        </div>
        <div class="main-picture-caption">
          <div class="title">维多利亚港的夕阳</div>
          <div class="description">
            <p>
              虽然囿于手机相机简易性的限制，光线没有办法直接控制也没法设计，这就导致这张照片看上去并不是那么的精致，或者说「顺眼」，但...至少的确是拍了东西的，对吧？</p>
            <p>对面就是香港岛上的中环，那座山叫做太平山。山上有个观景台，视角很好——但行程也很单一。</p>
            <p>这张照片附近就是香港艺术馆、天星小轮、星光大道等等，港铁尖沙咀站也离这里不到五百米。</p>
            <p>
              我不清楚为什么这么多的东西，对当时的我来说是那么的如梦似幻。这种感觉，就好比一些人尽皆知的具有魅力的东西或地方终于被我所领略。这是一种自豪，还是一种满足感？</p>
            <p>
              即使我也同大多游人一样，根本没有认真地去理解当地的文化，更没有精力去寻找真正「地道」的美食和生活方式，但我总相信自己有那么几秒钟，是属于这个地方的人。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {MemoryCompass, MemoryClock, MemoryAlphaF} from "@pictogrammers/memory/lib/icons";
import {mdiApple} from "@mdi/js";
</script>

<style lang="less" scoped>
.main-picture-container {
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
}

.main-picture-meta{
  width: 100%;
  position: absolute;
  bottom: 1rem;
  display: flex;
  justify-content: center;
}

.meta-bar {
  display: flex;
  align-items: center;
  font-size: .8rem;
  background: rgba(0, 0, 0, .4);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  justify-content: center;
  padding: .2rem 1rem;
  width: calc(100% - 3.5rem);

  .meta {
    display: inline-flex;
    align-items: center;
    color: white;
    gap: .2rem;

    &::after {
      content: "|";
      margin: 0 .5rem;
      color: rgba(255,255,255, .4);
    }

    &:last-child::after {
      content: none;
    }
  }
}

.main-picture {
  max-width: 1200px;
  position: relative;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  gap: 2rem;

  .main-picture-img-container {
    width: 62%;
    position: relative;

    .main-picture-img {
      width: 100%;
      box-shadow: 3px 3px 10px rgba(0, 0, 0, .2);
      border-radius: 10px;
    }
  }

  .main-picture-caption {
    font-family: 'Noto Serif SC', '华文中宋', '宋体', SimSong, serif;
    width: 38%;
    .title {
      font-weight: 900;
      font-size: 2.5rem;
    }

    .description {
      font-size: 1.1rem;
    }
  }
}
</style>