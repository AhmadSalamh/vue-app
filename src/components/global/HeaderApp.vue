<template lang="">
    <div>
         <div class="home-header">
        <!--Start Navbar-->
        <nav class="navbar navbar-expand-sm fixed-top">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src='img/home/logo.svg' alt="logo">
                </a>


                <div class=" navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-md-auto">
                        <router-link to="/" tag="li" class="nav-item active">
                            <a class="nav-link text-uppercase" href="#">Home <span class="sr-only">(current)</span></a>
                        </router-link>
                        <router-link to="/InquireAbout" tag="li" class="nav-item">
                            <a class="nav-link text-uppercase" href="#"> Track </a>
                        </router-link>
                        <li class="nav-item">
                            <a class="nav-link text-uppercase" href="#"> العربية</a>
                        </li>
                    </ul>
                </div> 
            </div>
        </nav>
    </div>
    </div>
</template>
<script>
export default {
    name:'HeaderApp'
}
</script>