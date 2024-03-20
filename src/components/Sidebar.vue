<script setup>

</script>

<template>
  <div class="sidebar">
    <div class="side_inner">

      <!--        sidebar header-->
      <div class="side_header">
        <a href="#/map" class="logo">
          <img class="side_logo-img" src="./assets/logo-sidebar.png" alt="side-logo">
          <div class="side_logo-text">РОСАВТОДОР</div>
        </a>
      </div>
      <!--        sidebar header-->

      <nav class="nav">
        <ul class="nav_list">

          <li class="nav_list_item">
            <a href="#/map" class="nav_list_link">
              <span class="nav_list_link_text">Карта</span>
            </a>
          </li>

          <li class="nav_list_item">
            <a href="" class="nav_list_link">
              <span class="nav_list_link_text">Чат</span>
            </a>
          </li>
        </ul>
      </nav>
      <!--        navigation-->
      <div class="side_footer">
        <a href="#/" class="logout_link">
          <svg class="logout_link_icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
          <span class="logout_link_text">
              Logout
            </span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar{
  position: sticky;
  z-index: 10;
  height: 100%;
  top: 0;
  left: 0;
  width: 300px;
  color: #BAB9B8;
  overflow-y: auto;

  &::-webkit-scrollbar{
    width: 5px;
  }

  &::-webkit-scrollbar-thumb{
    background-color: #2c3e50;
    border-radius: 12px;

  }
}

.side_inner{
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #002F55;
  min-height: 600px;
  padding: 20px 15px;
}

.side_footer{
  text-align: center;
  padding: 10px 0;
  margin: auto 0 0;
}
.side_header{
  position: relative;
  margin-bottom: 20px;
}
.logo{
  display: flex;
  width: 100%;
  text-decoration: none;
  align-items: center;
  color: inherit;
}

.side_logo-img{
  width: 65px;
  height: 65px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.side_logo-text{
  font-size: 25px;
  font-weight: 500;
  margin-left: 15px;
}

.nav_list_item{
  list-style: none;
  margin-bottom: 6px;
  background-color: rgba(22,72,113, 0.5);
  border-radius: 10px;
  box-shadow: 0.1px 0.1px 5px rgba(0,0,0,0.3);
}
.nav_list_link{
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  padding: 18px;
  border-radius: 24px;
  position: relative;
  transition: all .25s linear;

  &:hover{
    color: white;

    &::before{
      opacity: 1;
    }
  }

  &::before{
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: #306693;
    position: absolute;
    opacity: 0;
    transition: all .15s linear;
    border-radius: 10px;
  }
}
.nav_list_link_text{
  font-size: 25px;
  position: relative;
  z-index: 2;
}

.logout_link {

  transition: background-color .1s linear;
  &:hover, &:active{
    background-color: #306693;
  }

  display: inline-flex;
  align-items: center;
  color: white;
  text-decoration: none;
  font-size: 20px;
  overflow: hidden;
  border-radius: 10px;
  padding: 18px;
}

.logout_link_icon{

  flex-shrink: 0;
}

.logout_link_text{
  color: white;
  margin-left: 10px;
}

</style>