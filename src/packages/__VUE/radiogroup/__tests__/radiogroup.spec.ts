import { mount } from '@vue/test-utils';
import RadioGroup from '../index.vue';
import Radio from '../../radio/index.vue';
import { reactive, toRefs } from 'vue';

test('should emit "update:modelValue" and "change" event when radio is clicked', async () => {
  const wrapper = mount({
    emits: ['change'],
    components: {
      'nut-radio-group': RadioGroup,
      'nut-radio': Radio
    },
    template: `
      <template>
        <nut-radio-group v-model="radioVal" @change="change">
          <nut-radio label="1" icon-size="12"></nut-radio>
          <nut-radio label="2" icon-size="12"></nut-radio>
          <nut-radio label="3" icon-size="12"></nut-radio>
          <nut-radio label="4" icon-size="12"></nut-radio>
        </nut-radio-group>
      </template>
    `,
    setup(props: any, { emit }: any) {
      const state = reactive({
        radioVal: ''
      });
      return {
        emit,
        change(value: string) {
          emit('change', value);
        },
        ...toRefs(state)
      };
    }
  });

  const items = wrapper.findAll('.nut-radio');

  await items[0].trigger('click');
  expect(wrapper.vm.radioVal).toEqual('1');
  expect(wrapper.emitted('change')![0]).toEqual(['1']);
});

test('radiogroup text-position test', () => {
  const wrapper = mount({
    components: {
      'nut-radio-group': RadioGroup,
      'nut-radio': Radio
    },
    template: `
      <template>
        <nut-radio-group v-model="radioVal" text-position="left">
          <nut-radio label="1" icon-size="12"></nut-radio>
          <nut-radio label="2" icon-size="12"></nut-radio>
        </nut-radio-group>
      </template>
    `,
    setup() {
      const state = reactive({
        radioVal: ''
      });
      return {
        ...toRefs(state)
      };
    }
  });

  const items = wrapper.findAll('.nut-radio');
  expect((items[1] as any).find('.nut-radio--reverse')).toBeTruthy();
});

test('radiogroup direction test', () => {
  const wrapper = mount({
    components: {
      'nut-radio-group': RadioGroup,
      'nut-radio': Radio
    },
    template: `
      <template>
        <nut-radio-group v-model="radioVal" direction="horizontal">
          <nut-radio label="1" icon-size="12"></nut-radio>
          <nut-radio label="2" icon-size="12"></nut-radio>
        </nut-radio-group>
      </template>
    `,
    setup() {
      const state = reactive({
        radioVal: ''
      });
      return {
        ...toRefs(state)
      };
    }
  });

  const items = wrapper.findAll('.nut-radio-group');
  expect((items[0] as any).find('.nut-radio-group--horizontal')).toBeTruthy();
});

test('radio disabled test', async () => {
  const wrapper = mount({
    components: {
      'nut-radio-group': RadioGroup,
      'nut-radio': Radio
    },
    template: `
      <template>
        <nut-radio-group v-model="radioVal" direction="horizontal">
          <nut-radio label="1"></nut-radio>
          <nut-radio label="2" disabled></nut-radio>
        </nut-radio-group>
      </template>
    `,
    setup() {
      const state = reactive({
        radioVal: ''
      });
      return {
        ...toRefs(state)
      };
    }
  });

  const items: any = wrapper.findAll('.nut-radio');
  expect(items[1].find('.nut-radio__icon--disable')).toBeTruthy();
});

test('radio icon-size test', async () => {
  const wrapper = mount({
    components: {
      'nut-radio-group': RadioGroup,
      'nut-radio': Radio
    },
    template: `
      <template>
        <nut-radio-group v-model="radioVal" direction="horizontal">
          <nut-radio label="1" icon-size="25"></nut-radio>
          <nut-radio label="2" icon-size="12" disabled></nut-radio>
        </nut-radio-group>
      </template>
    `,
    setup() {
      const state = reactive({
        radioVal: ''
      });
      return {
        ...toRefs(state)
      };
    }
  });

  const items: any = wrapper.findAll('.nut-radio');
  expect((items[0].findAll('svg') as any)[0].element.style.width).toEqual('25px');
  expect((items[1].findAll('svg') as any)[0].element.style.height).toEqual('12px');
});

test('radio shape test', async () => {
  const wrapper = mount({
    components: {
      'nut-radio-group': RadioGroup,
      'nut-radio': Radio
    },
    template: `
      <template>
        <nut-radio-group v-model="radioVal" direction="horizontal">
          <nut-radio icon-size="25" label="1" shape="button"></nut-radio>
          <nut-radio label="2" icon-size="12"></nut-radio>
        </nut-radio-group>
      </template>
    `,
    setup() {
      const state = reactive({
        radioVal: ''
      });
      return {
        ...toRefs(state)
      };
    }
  });

  const items = wrapper.findAll('.nut-radio');
  expect((items[0] as any).find('.nut-radio--button')).toBeTruthy();
  expect((items[1] as any).find('.nut-radio--round')).toBeTruthy();
});
