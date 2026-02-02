// 基础颜色配置
export const colors = {
  primary: '#f2d4d4ff',
  secondary: ''
  // 可添加更多颜色变量
};

// 尺寸配置
export const sizes = {
  // 可添加尺寸变量
};

// 混合样式
export const mixins = {
  wrapV1: `
    width: 1200px;
    margin: 0 auto;
    @media (max-width: 1200px) {
      width: 90%;
    }
  `,
  wrapV2: `
    width: 980px;
    margin: 0 auto;
    @media (max-width: 1024px) {
      width: 90%;
    }
  `,
  responsive: `
    @media (max-width: 768px) {
      font-size: 14px;
    }
    @media (max-width: 480px) {
      font-size: 12px;
    }
  `
};

// Ant Design 主题配置
export const antdTheme = {
  components: {
    Carousel: {
      // 暗色主题相关配置
      arrowSize: 24
    },
    Progress: {
      // 暗色主题相关配置
      // percent: 50,
      // colorPrimary: '#920b0bff', // 主色调，用于进度条
      // colorBgContainer: '#000000ff', // 容器背景色
      // borderRadius: 2, // 进度条圆角
      // showInfo: false // 是否显示进度信息
    },
    Menu: {
      // 暗色主题相关配置

      darkItemBg: '#242424', // 暗色模式菜单背景
      darkItemSelectedBg: '#000000ff', // 选中项背景色
      darkItemHoverBg: '#242424' // hover 背景色
    }
  }
  // 可添加其他 Ant Design 组件配置
};

// styled-components 主题配置
const theme = {
  color: colors,
  size: sizes,
  mixin: mixins
  // 可添加其他 styled-components 特有的配置
};

export default theme;
