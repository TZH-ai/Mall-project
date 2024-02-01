<template>
<div class="top-navbar">
    <div class="container">
        <ul>
                    <li><router-link to="/Home" >Home</router-link></li>
                    <li><router-link to="/About">About</router-link></li>
                    <li><router-link to="/Services">Services</router-link></li>
                    <li><router-link to="/Contact">Contact</router-link></li>
        </ul>
       
        <ul>
            <li><a href="/login">登录</a></li>
            <li><a href="#">注册</a></li>
            <li><a href="#">消息通知</a></li>
            <li><a href="#">购物车</a></li>
        </ul>
    </div>
</div>


<div class="container">
    <!-- Your website content goes here -->
    <header class="site-header">
    <div class="site-container">
    
        <div class="logo">
            <img src="" alt="">
        </div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </div>
</header>
    <div class="main-content">
        <!-- Your main content here -->
    </div>
</div>





</template>
    
<script setup lang='ts'>
    
</script>
    
<style >
     *{
        margin: 0px;
        padding: 0px;
     }
     body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
}



.top-navbar {
    background-color: #333;
    padding: 10px;
    text-align: center;
}

.top-navbar ul {
    list-style: none;
    /* float: left; */
    margin: 0;
    padding: 0;
}

.top-navbar li {
    display: inline;
    margin-right: 20px;
}

.top-navbar a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 16px;
}

.site-header {
    background-color: #4CAF50;
    padding: 20px;
    text-align: center;
    color: white;
}

.site-header h1 {
    margin: 0;
}

.site-header nav {
    margin-top: 10px;
   
}

.site-header ul {
    list-style: none;
    margin: 0;
    padding: 0;
  
    background-color: burlywood;
}

.site-header li {
    display: inline;
    margin-right: 20px;
}

.site-header a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 18px;
}

/* Add the container styles to limit the content width */
.container {
    max-width: 1228px;
    margin: 0 auto;
}

/* Add additional styling for the main content if needed */
.main-content {
    padding: 20px;
}
.logo{
    background-color:red;
    width: 100px;
    height: 100px;
  
}
.top-navbar .container{
   display: flex;
   justify-content:space-between;
}

</style>