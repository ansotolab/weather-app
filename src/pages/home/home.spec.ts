import { mount } from "@vue/test-utils";
import Home from "./home.vue";
import i18n from "@/core/i18n";

describe("Home.vue", () => {
  it("Renders Home page", async () => {
    const wrapper = mount(Home, {
      i18n,
    });

    const input = wrapper.find("input");
    const button = wrapper.find("button");
    const resultQuantity = wrapper.find("#resultQuantity");

    expect(resultQuantity.text()).toMatch("0 coincidencias.");

    input.setValue("Madrid");
    await button.trigger("click");

    expect(resultQuantity.text()).toMatch("11 coincidencias.");
  });
});
