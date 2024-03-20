<script setup>
import Sidebar from "@/components/Sidebar.vue";
import {YandexMap, YandexMapMarker} from "vue-yandex-maps";

const settings = {
  apiKey: '',
  lang: 'ru_RU',
  enterprise: false,
  version: '2.1'
}


// document.addEventListener('DOMContentLoaded', () => {
//   const menuButtons = document.querySelectorAll('.menu_btn');
//   menuButtons.forEach(el => {
//     el.addEventListener('click', (e) => {
//       let currentBtn =  e.currentTarget;
//       let drop = (currentBtn instanceof HTMLElement).closest('.menu_item').querySelector('.dropdown');
//       console.log(currentBtn);
//       console.log(drop);
//     });
//   });
// });

</script>

<template>
<body>
  <div class="page">
    <sidebar></sidebar>
    <main class="main">
      <div class="content">
        <div class="update">
          <button class="button-update">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
          </button>
        </div>
        <div class="work-zone">
          <div class="map">
            <yandex-map :settings="settings">
              <!--Markers-->
            </yandex-map>

          </div>
          <div class="buttons-control">
            <button class="exprot-file">
              Добавить файл
            </button>
            <button class="save-button">
              Сохранить

            </button>

          </div>
        </div>
        <div class="points">
          <div class="drop-box">
            <ul class="menu list-reset">
              <li class="menu_item">
                <button class="menu_btn">
                  Сортировать
                </button>
                <div class="dropdown">
                  <ul class="dropdown_list drop-box">
                    <li class="dropdown_item">
                      <a href="#/map" class="dropdown_link">Категория 1</a>
                    </li>
                  </ul>
                </div>

              </li>

            </ul>

          </div>
          <div class="points-container">

          </div>

        </div>
      </div>
    </main>
  </div>
</body>
</template>

<style scoped>
*, *::after, *::before{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

$side-width: 280px;
$blue:#002F55;

:root{
  --blue: #{$blue};
  --light-gray: #BAB9B8;
  --side-width: 280px;
}


body{
  height: 100vh;

}

.page {
  position: relative;
  height: 100%;
  background-color: white;
}

.main{
  position: absolute;
  top: 0;
  right: 0;
  padding: 5dvmin;
  width: calc(100% - 300px);
}
.content{
  display: flex;
  width: 100%;
  height: 100%;
}
.update{
  margin-left: 15dvmin;
  display: flex;
  width: 5vw;
  height: 100%;
  justify-content: right;
  padding: 5px;
}

.button-update{
  margin-top: 5vh;
  flex-shrink: 0;
  vertical-align: middle;
  background-color: transparent;
  cursor: pointer;
  border:0;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  padding: 0;

  &:hover{
    background-color: #eeeeee;
    transition: .15s linear;
  }

  svg{
    width: 30px;
    height: 30px;
    vertical-align: middle;
    display: inline-block;
    opacity: 0.75;
  }
}

.work-zone{
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  width: 70dvmin;
  height: 100%;
}
.map{
  display: flex;
  width: inherit;
  height: 70dvmin;
  background-color: #2c3e50;
  opacity: .3;
}

.buttons-control{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: inherit;
  height: 8vh;
}
.exprot-file{
  border-radius: 8px;
  background-color: #002F55;
  border: none;
  width: 15vh;
  height: 4vh;
  font-size: 1.5dvmin;
  color: white;
}

.save-button{
  border-radius: 8px;
  border: none;
  background-color: #002F55;
  width: 15vh;
  height: 4vh;
  font-size: 1.5dvmin;
  color: white;

  &:hover {
    background-color: #306693;
    transition: .25s linear;
  }

}

.points{
  margin-left: 1.5vw;
  margin-top: 5vh;
  min-width: 300px;
  width: 35dvmin;
  height: 70dvmin;
  border: none;
  border-radius: 12px;
}
.drop-box{
  height: 5dvmin;
  width: 35dvmin;
  border: 1px solid;
  min-width: 300px;

  background-color: transparent;
}

.points-container{
  width: 35dvmin;
  min-width: 300px;

  height: calc(70dvmin - 5dvmin);
  background-color: rgba(217,217,217, 0.25);
  border: none;
  border-radius: 12px;
}
.list-reset{
  list-style: none;
}
.menu{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.dropdown{
  display: none;
}
.menu_item{
  position: relative;
}
.dropdown{
  position: absolute;
  background-color: #333;
  top:100%;
  width: 250px;
  left:0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
}
.dropdown_link{
  color: #fff;
  padding: 10px 10px;
  display: block;
  width: 100%;
}

.dropdown--active{
  opacity: 1;
  visibility: visible;
}

.menu_btn{
  border: none;
  padding: 5px 10px;
  color: #fff;
  background-color: black;
  cursor:pointer;
}
</style>