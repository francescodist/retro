<template>
  <div class="page-container">
    <div class="home-title-container">Retro Board</div>
    <div class="home-container">
      <div class="home-item">
        <input v-model="code" class="retro-code-input" placeholder="Retro Code Here..." />
        <router-link :to="{path: '/board/' + code}" class="home-button" tag="button">Go</router-link>
      </div>
      <div class="home-item">
        <router-link to="/board" class="home-button" tag="button">Start a Retro!</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-title-container {
  font-size: 64px;
  font-weight: bold;
  margin: auto;
  text-align: center;
}

.home-container {
  width: 600px;
  max-width: 80%;
  margin: auto auto calc(50vh - 120px) auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.home-item {
  height: 60px;
  margin: 5px;
  display: flex;
}

.home-button {
  background: #42b983;
  color: white;
  font-weight: bold;
  height: 100%;
  width: 100%;
  font-size: 32px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.home-button:hover {
  background: #42b98381;
}

.home-button:active {
  background: #42b983;
}

.home-button:focus {
  background: #42b983;
}

.retro-code-input {
  color: #42b983;
  font-weight: bold;
  font-size: 32px;
  padding-left: 16px;
  min-width: 70%;
}

.retro-code-input::placeholder {
  color: #42b98381;
}
.retro-code-input:focus {
  outline-color: #42b983;
}
</style>

<script>
export default {
  name: "Home",
  data() {
    return {
      code: ""
    };
  }
};
</script>
