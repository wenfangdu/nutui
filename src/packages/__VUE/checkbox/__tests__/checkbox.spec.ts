import { mount } from '@vue/test-utils';
import Checkbox from '../index.vue';
import { reactive, toRefs } from 'vue';

test('basic usage', () => {
  const wrapper = mount(Checkbox, {
    props: {
      modelValue: '',
      label: '复选框'
    }
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('checkbox disabled test', async () => {
  const wrapper = mount({
    components: {
      'nut-checkbox': Checkbox
    },
    template: `
      <template>
        <nut-checkbox v-model="checkbox1" disabled>未选时禁用状态</nut-checkbox>
      </template>
    `,
    setup() {
      const state = reactive({
        checkbox1: true
      });
      return { ...toRefs(state) };
    }
  });

  const items = wrapper.findAll('.nut-checkbox');

  await items[0].trigger('click');
  expect(wrapper.vm.checkbox1).toEqual(true);
  expect(wrapper.find('.nut-checkbox__icon--disable')).toBeTruthy();
});

test('checkbox text-position test', () => {
  const wrapper = mount({
    components: {
      'nut-checkbox': Checkbox
    },
    template: `
      <template>
        <nut-checkbox v-model="checkbox1">right</nut-checkbox>
        <nut-checkbox v-model="checkbox2" text-position="left">left</nut-checkbox>
      </template>
    `,
    setup() {
      const state = reactive({
        checkbox1: true,
        checkbox2: true
      });
      return { ...toRefs(state) };
    }
  });

  const items = wrapper.findAll('.nut-checkbox');
  expect((items[1] as any).find('.nut-checkbox--reverse')).toBeTruthy();
});

test('checkbox icon-size test', () => {
  const wrapper = mount({
    components: {
      'nut-checkbox': Checkbox
    },
    template: `
      <template>
        <nut-checkbox v-model="checkbox5" icon-size="25">自定义尺寸25</nut-checkbox>
        <nut-checkbox v-model="checkbox6" icon-size="10">自定义尺寸10</nut-checkbox>
      </template>
    `,
    setup() {
      const state = reactive({
        checkbox5: true,
        checkbox6: true
      });
      return { ...toRefs(state) };
    }
  });

  const items = wrapper.findAll('.nut-checkbox');
  expect((items[0].findAll('svg') as any)[0].element.style.width).toEqual('25px');
  expect((items[1].findAll('svg') as any)[0].element.style.height).toEqual('10px');
});

test('should emit "update:modelValue" event when checkbox is clicked', async () => {
  const wrapper = mount(Checkbox);

  wrapper.trigger('click');
  expect(wrapper.emitted('update:modelValue')![0]).toEqual([true]);

  await wrapper.setProps({ modelValue: true });
  wrapper.trigger('click');
  expect(wrapper.emitted('update:modelValue')![1]).toEqual([false]);
});

test('checkbox shape test', async () => {
  const wrapper = mount({
    components: {
      'nut-checkbox': Checkbox
    },
    template: `
      <template>
        <nut-checkbox shape="button"></nut-checkbox>
        <nut-checkbox></nut-checkbox>
      </template>
    `
  });

  const items = wrapper.findAll('.nut-checkbox');

  expect((items[0] as any).find('.nut-checkbox__button').exists()).toBeTruthy();
  expect((items[1] as any).find('.nut-checkbox__button').exists()).toBeFalsy();
});
