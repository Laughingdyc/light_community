# light_community
轻集市
taro + vue3

## 启动
```
npm i
npm run dev:weapp
```

****
小程序安装完依赖, 为兼容小程序wxss语法,记得把
node_modules\animate.css\animate.min.css
node_modules\animate.css\animate.css
node_modules\animate.css\animate.compat.css
的:root替换成page

如下:
```
// :root {
//   --animate-duration: 1s;
//   --animate-delay: 1s;
//   --animate-repeat: 1;
// } 
page {
  --animate-duration: 1s;
  --animate-delay: 1s;
  --animate-repeat: 1;
}
```