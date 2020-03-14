<template>
  <div class="page-container">
    <div v-if="!board" class="loading-screen">
      <div class="title">{{code ? 'Loading Board...' : 'Generating Board...'}}</div>
    </div>
    <div v-else>
      <board-toolbar />
    </div>
  </div>
</template>



<script>
import { getBoard, generateBoard } from "@/common/board.service";
import BoardToolbar from "@/components/board/BoardToolbar.vue";
export default {
  name: "Board",
  components: {
    "board-toolbar": BoardToolbar
  },
  data() {
    return {
      board: undefined,
      code: undefined
    };
  },
  created() {
    this.code = this.$route.params.code;
    if (this.code) {
      getBoard(this.code).then(board => {
        this.board = board;
      });
    } else {
      generateBoard().then(board => {
        this.code = board.code;
        history.replaceState({}, null, "/#/board/" + this.code);
        this.board = board;
      });
    }
  }
};
</script>

<style scoped>
.loading-screen {
  height: 100%;
  display: flex;
}

.loading-screen .title {
  margin: auto;
  font-size: 64px;
}
</style>