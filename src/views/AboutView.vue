<template>
  <div class="menu">
    <ul class="menu-items">
      <li class="menu-item" @mouseover="showSubmenu = true" @mouseleave="showSubmenu = false">
        <a href="#">菜单1</a>
        <ul class="submenu" v-show="showSubmenu">
          <li><a href="#">子菜单1</a></li>
          <li><a href="#">子菜单2</a></li>
          <li><a href="#">子菜单3</a></li>
        </ul>
      </li>
      <li class="menu-item" @mouseover="showSubmenu2 = true" @mouseleave="showSubmenu2 = false">
        <a href="#">菜单2</a>
        <ul class="submenu" v-show="showSubmenu2">
          <li><a href="#">子菜单4</a></li>
          <li><a href="#">子菜单5</a></li>
          <li><a href="#">子菜单6</a></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const showSubmenu = ref(false);
const showSubmenu2 = ref(false);
</script>

<style scoped>
.menu {
  display: inline-block;
  position: relative;
}

.menu-items {
  list-style: none;
  padding: 0;
}

.menu-item {
  display: inline-block;
  position: relative;
  margin-right: 20px;
}

.submenu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #f9f9f9;
  padding: 10px;
  border: 1px solid #ccc;
  width: max-content; /* 让子菜单宽度自适应内容 */
}

.menu-item:hover .submenu {
  display: block;
}
</style>
         