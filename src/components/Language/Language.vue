<template>
  <el-select v-model="selected" placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

interface ILanguage {
  label: string;
  value: string;
}

@Component
export default class Language extends Vue {
  options: ILanguage[] = [
    { label: "🇪🇸 ES", value: "es" },
    { label: "🇬🇧 EN", value: "en" },
  ];

  selected = this.$store.getters.lang;

  @Watch("selected")
  onSelectedChange(newValue: string) {
    this.selected = newValue;
    this.$store.commit("setLang", newValue);
  }
}
</script>
