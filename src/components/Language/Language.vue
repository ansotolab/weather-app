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
import { Component, Vue } from "vue-property-decorator";

interface ILanguage {
  label: string;
  value: string;
}

@Component({})
export default class Language extends Vue {
  options: ILanguage[] = [
    { label: "🇪🇸 ES", value: "es" },
    { label: "🇬🇧 EN", value: "en" },
  ];

  selected = "es";
}
</script>
