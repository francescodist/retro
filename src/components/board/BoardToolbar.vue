<template>
  <div class="toolbar-container">
    <div class="name-picker-container">
      <input v-model="name" placeholder="Name" />
      <button>Ok</button>
    </div>
    <div class="tools-container">
      <div
        v-bind:class="{tool: true, selected: selectedTool === 'pencil'}"
        @click="selectTool('pencil')"
      >Pencil</div>
      <div
        v-bind:class="{tool: true, selected: selectedTool === 'text'}"
        @click="selectTool('text')"
      >Text</div>
    </div>
    <div class="post-it-container">
      <div
        v-for="postit in postits"
        class="post-it"
        v-bind:style="{background: postit.color}"
        v-bind:key="postit.color"
      />
      <div class="add-post-it-container">
        <div class="add-post-it" @click="openColorPicker()">+</div>
        <div v-if="showColorPicker" class="color-picker">
          <div class="color-preview" v-bind:style="{background: colorPicked}"></div>
          <input v-model="colorPicked" />
          <button @click="addPostit()" :disabled="!isColorPickedValid()">Ok</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoardToolbar",
  data() {
    return {
      name: "",
      selectedTool: undefined,
      postits: [{ color: "green" }, { color: "yellow" }, { color: "red" }],
      colorPicked: "",
      showColorPicker: false
    };
  },
  methods: {
    selectTool(tool) {
      this.selectedTool = tool;
    },
    addPostit() {
      this.showColorPicker = false;
      this.postits.push({ color: this.colorPicked });
      this.colorPicked = "";
    },
    openColorPicker() {
      this.showColorPicker = true;
    },
    isColorPickedValid() {
      const { style } = new Option();
      style.color = this.colorPicked;
      return !!style.color;
    }
  }
};
</script>

<style scoped>
.toolbar-container {
  height: 100px;
  background: #dbffee;
  display: flex;
}

.name-picker-container {
  margin: auto 16px;
}

.tools-container {
  margin: auto;
  display: flex;
}

.tool {
  margin: 4px;
  padding: 8px;
  cursor: pointer;
}

.tool:hover {
  background: #b0ffda;
}

.tool.selected {
  background: #42b983;
}

.post-it-container {
  margin: auto 16px;
  display: flex;
}

.post-it {
  height: 60px;
  width: 60px;
  margin: 8px;
}

.add-post-it-container {
  position: relative;
  margin: auto 8px;
}

.add-post-it {
  cursor: pointer;
  font-size: 32px;
  font-weight: bold;
}

.color-picker {
  position: absolute;
  bottom: -50px;
  right: 0;
  height: 30px;
  display: flex;
  background: white;
  padding: 8px;
}

.color-preview {
  height: 30px;
  width: 30px;
}
</style>