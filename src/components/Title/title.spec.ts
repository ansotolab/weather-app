import { shallowMount } from "@vue/test-utils";
import Title from "./Title.vue";
import i18n from "@/core/i18n";
import esLocale from "@/core/i18n/es";

describe("Title.vue", () => {
  it("Renders title without name", () => {
    const wrapper = shallowMount(Title, {
      i18n,
    });

    expect(wrapper.text()).toMatch(esLocale.title.withoutName);
  });

  it("Renders title with name", () => {
    const city = "Alicante";
    const wrapper = shallowMount(Title, {
      i18n,
      propsData: { city },
    });

    expect(wrapper.text()).toMatch(
      i18n.t("title.withName", "es", { name: city }).toString()
    );
  });
});
