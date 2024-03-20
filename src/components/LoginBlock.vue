<script setup>

</script>

<template>
  <div class="window">
    <section class="form">
      <h1>Добро пожаловать</h1>
      <div class="input-form">
        <p>Логин</p>
        <input type="text" placeholder="Введите логин...">
      </div>
      <div class="input-form">
        <p>Пароль</p>
        <input type="password" placeholder="Введите пароль...">
      </div>
      <div class="input-form">
        <a href="#/map">
          <button type="submit">Войти</button>
        </a>
      </div>
    </section>

  </div>
</template>

<style scoped>
.window{
  background: white;
  height: 40%;
  width: 40vh;
  margin-right: 8vw;
  border-radius: 10px;
  position: absolute;
}
.form{
 h1{
   color: #002F55;
   text-align: center;
   margin-top: 8%;
   font-size: 3vmin;
 }
}
.input-form{
  p{
    color: #002F55;
    font-size: 90%;
  }
}
.input-form{

  margin: 3% 10% 3% 10%;
  text-align: left;
}
.input-form input[placeholder]{
  color: #ABABAB;
}

.input-form input{
  width: 100%;
  margin-top:2%;
  padding: 6%;
  color: #002F55;
  font-size: 80%;
  outline: none;
  border: 0.5px solid;
  border-radius: 6px;
  box-sizing: border-box;
  background: none;
}
.input-form button{
  width: 100%;
  height: 5.5vh;
  border-radius: 6px;
  margin-top: 8%;
  border-color: #002F55;
  color: white;
  font-size: 120%;
  font-weight: normal;
  background: #002F55;
  border: 0.5px solid;
}
</style>