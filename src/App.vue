<template>
  <div id="app">
    <el-input placeholder="Madrid..." v-model="city"></el-input>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class App extends Vue {
  city = "";
}
</script>
