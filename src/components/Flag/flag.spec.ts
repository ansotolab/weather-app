import { mount } from "@vue/test-utils";
import Flag from "./Flag.vue";

describe("Flag.vue", () => {
  it("Renders flag when passed", () => {
    // Get code with upper and lower letters
    const isoCode = "Es";
    const expectedClasses = ["fi", "fi-es", "fis"].toString();

    const wrapper = mount(Flag, {
      propsData: { isoCode },
    });

    expect(wrapper.find("span").classes().toString()).toMatch(expectedClasses);
  });
});
