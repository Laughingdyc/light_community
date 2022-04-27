// import { themeColor } from "./common/ts/common.color"
export default defineAppConfig({
  pages: [
    'pages/homepage/homepage',
    'pages/contentPage/contentPage',
    'pages/testpage/testpage',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#FAFBFC',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
