<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <nut-image :src="src" width="100" height="100"></nut-image>

    <h2>{{ translate('fill') }}</h2>
    <nut-row :gutter="10" flex-wrap="wrap">
      <nut-col :span="8" v-for="fit in fits" :key="fit">
        <nut-image :src="src" width="100" height="100" :fit="fit"></nut-image>
        <div class="text">{{ fit }}</div>
      </nut-col>
    </nut-row>

    <h2>{{ translate('position') }}</h2>
    <nut-row :gutter="10" flex-wrap="wrap">
      <nut-col :span="8" v-for="pos in position2" :key="pos">
        <nut-image :src="src" width="100" height="100" fit="contain" :position="pos"></nut-image>
        <div class="text">contain</div>
        <div class="text">{{ pos }}</div>
      </nut-col>

      <nut-col :span="8" v-for="pos in position1" :key="pos">
        <nut-image :src="src" width="100" height="100" fit="cover" :position="pos"></nut-image>
        <div class="text">cover</div>
        <div class="text">{{ pos }}</div>
      </nut-col>
    </nut-row>

    <h2>{{ translate('circle') }}</h2>
    <nut-row :gutter="10">
      <nut-col :span="8">
        <nut-image :src="src" width="100" height="100" fit="contain" round></nut-image>
        <div class="text">contain</div>
      </nut-col>
      <nut-col :span="8">
        <nut-image :src="src" width="100" height="100" fit="cover" round></nut-image>
        <div class="text">cover</div>
      </nut-col>
      <nut-col :span="8">
        <nut-image :src="src" width="100" height="100" fit="cover" radius="10" round></nut-image>
        <div class="text">cover</div>
      </nut-col>
    </nut-row>

    <h2>{{ translate('loading') }}</h2>
    <nut-cell>
      <nut-row :gutter="10">
        <nut-col :span="8">
          <nut-image width="100" height="100" show-loading></nut-image>
          <div class="text">默认</div>
        </nut-col>
        <nut-col :span="8">
          <nut-image width="100" height="100" show-loading>
            <template #loading>
              <Loading width="16px" height="16px" name="loading"></Loading>
            </template>
          </nut-image>
          <div class="text">自定义</div>
        </nut-col>
      </nut-row>
    </nut-cell>

    <h2>{{ translate('error') }}</h2>
    <nut-cell>
      <nut-row :gutter="10">
        <nut-col :span="8">
          <nut-image src="https://x" width="100" height="100" show-error></nut-image>
          <div class="text">默认</div>
        </nut-col>
        <nut-col :span="8">
          <nut-image src="https://x" width="100" height="100" show-loading>
            <template #error>
              <CircleClose width="16px" height="16px" name="circleClose"></CircleClose>
            </template>
          </nut-image>
          <div class="text">自定义</div>
        </nut-col>
      </nut-row>
    </nut-cell>

    <h2>{{ translate('lazy') }}</h2>
    <nut-cell>
      <nut-image :src="src + '?t=1'" lazy-load height="200" width="100%"></nut-image>
    </nut-cell>
    <nut-cell>
      <nut-image :src="src + '?t=2'" lazy-load height="200" width="100%"></nut-image>
    </nut-cell>
    <nut-cell>
      <nut-image :src="src + '?t=3'" lazy-load height="200" width="100%"></nut-image>
    </nut-cell>
    <nut-cell>
      <nut-image :src="src + '?t=4'" lazy-load height="200" width="100%"></nut-image>
    </nut-cell>
    <nut-cell>
      <nut-image :src="src + '?t=5'" lazy-load height="200" width="100%"></nut-image>
    </nut-cell>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { Loading, CircleClose } from '@nutui/icons-vue';
const { createDemo, translate } = createComponent('image');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基础用法',
      fill: '填充模式',
      position: '图片位置',
      circle: '圆形图片',
      loading: '加载中提示',
      error: '加载失败',
      lay: '懒加载'
    },
    'en-US': {
      basic: 'Basic Usage',
      fill: 'Object Fill',
      position: 'Object Position',
      circle: 'Round',
      loading: 'Loading',
      error: 'Error',
      lazy: 'Lazy Load'
    }
  });
export default createDemo({
  props: {},
  components: {
    Loading,
    CircleClose
  },
  setup() {
    initTranslate();
    const src = ref('//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg');
    const fits = ref(['contain', 'cover', 'fill', 'none', 'scale-down']);
    const position1 = ref(['left', 'center', 'right']);
    const position2 = ref(['top', 'center', 'bottom']);
    return { translate, fits, position1, position2, src };
  }
});
</script>
<style lang="scss" scoped>
.demo {
  // background: #fff !important;
  .text {
    margin-top: 5px;
    text-align: center;
    color: #999;
  }
  .nut-row-flex-wrap {
    .nut-col {
      margin-bottom: 20px;
    }
  }
}
</style>
