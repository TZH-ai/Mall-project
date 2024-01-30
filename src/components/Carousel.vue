<template>
  <div class="carousel-container">
    <!-- 导航栏部分 -->
    <div class="nav-container">
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="nav-item"
        @mouseover="showSubMenu(category)"
       
      >
        {{ category.name }}
        <div v-if="activeCategory === category" class="sub-menu"  @mouseleave="hideSubMenu">
          <!-- 二级菜单内容，根据实际需要替换为你的内容 -->
          <div v-for="(subCategory, subIndex) in category.subCategories" :key="subIndex" class="sub-menu-nav">
            {{ subCategory }} 
          </div>
        </div>
      </div>
    </div>

    <!-- 轮播图部分 -->
    <div class="carousel-wrapper">
      <!-- 轮播图内容，这里使用了一个简单的占位图，请替换为你的实际轮播图内容 -->
      <div class="carousel" :style="{ transform: `translateX(${translateValue}px)` }">
        <div v-for="(item, index) in carouselItems" :key="index" class="carousel-item">
          <img :src="item.image" alt="carousel-item" />
        </div>
      </div>
    </div>
    <button @click="prevSlide" class="carousel-button prev-button">&lt;</button>
    <button @click="nextSlide" class="carousel-button next-button">&gt;</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const carouselItems = ref([
  { image: 'https://placekitten.com/800/400' },
  { image: 'https://placekitten.com/801/400' },
  { image: 'https://placekitten.com/802/400' },
]);

const translateValue = ref(0);
const categories = ref([
  { name: '分类1', subCategories: ['子分类1-1', '子分类1-2'] },
  { name: '分类2', subCategories: ['子分类2-1', '子分类2-2'] },
  { name: '分类3', subCategories: ['子分类3-1', '子分类3-2'] },
]);

const activeCategory = ref(null);

const prevSlide = () => {
  const itemWidth = document.querySelector('.carousel-item').offsetWidth;
  translateValue.value += itemWidth;
};

const nextSlide = () => {
  const itemWidth = document.querySelector('.carousel-item').offsetWidth;
  translateValue.value -= itemWidth;
};

const showSubMenu = (category) => {
  activeCategory.value = category;
};

const hideSubMenu = () => {
  activeCategory.value = null;
};
</script>

<style scoped>
/* 样式部分 */
.carousel-container {
  display: flex;
  margin-top: 20px; /* 调整导航栏与轮播图之间的距离 */
}

.nav-container {
  width: 200px;
}

.nav-item {
  position: relative;
  margin-bottom: 10px;
}

.sub-menu {
  position: absolute;
  top: 0;
  left: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
}

.sub-menu-nav {
  width: 100px;
  z-index: 3;
  background-color: #fff;
}

.carousel-wrapper {
  overflow: hidden;
  flex-grow: 1;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  flex-shrink: 0;
  width: 100%;
}

.carousel img {
  width: 100%;
  height: auto;
}

.carousel-button {
  font-size: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.prev-button {
  left: 150px;
}

.next-button {
  right: 10px;
}
</style>
