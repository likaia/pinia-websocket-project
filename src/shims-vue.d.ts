import { defineComponent } from "vue";
/* eslint-disable */
declare module "*.vue" {
  const component: ReturnType<typeof defineComponent>;
  export default component;
}

// 声明全局属性类型
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties<T> {
    $connect: (url?: string) => void;
  }
}
