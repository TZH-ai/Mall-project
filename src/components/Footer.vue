<!-- Footer.vue -->
<template>
    <footer class="footer-container">
      <div class="footer-content">
        <div class="footer-logo">
          <!-- <img src="logo.png" alt="Logo"> -->
        </div>
        <div class="footer-links">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/services">Services</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
        <div class="footer-social">
          <!-- Add your social media icons or links here -->
          <a href="#" target="_blank"><i class="fab fa-facebook"></i></a>
          <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
          <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2023 Your Website. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  // You can add logic here if needed
  </script>
  
  <style scoped>
  .footer-container {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  .footer-logo img {
    width: 50px; /* Adjust the size of your logo */
  }
  
  .footer-links a {
    color: #fff;
    text-decoration: none;
    margin: 0 10px;
    font-weight: bold;
  }
  
  .footer-social a {
    color: #fff;
    text-decoration: none;
    font-size: 20px;
    margin: 0 10px;
  }
  
  .footer-bottom {
    margin-top: 20px;
  }
  </style>
  