import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import autoform from "@/components/autoform.vue";

describe("autoform.vue", () => {
    it("renders props.msg when passed", () => {
        const msg = "new message";
        const wrapper = shallowMount(autoform, {
            propsData: { msg }
        });
        expect(wrapper.text()).to.include(msg);
    });
});