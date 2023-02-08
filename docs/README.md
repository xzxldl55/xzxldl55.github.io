## 🐷🐷的博客 [![Netlify Status](https://api.netlify.com/api/v1/badges/a91267e4-37b9-4248-b8c4-01b3cad39e0f/deploy-status)](https://app.netlify.com/sites/xzxldl/deploys)

| table | area | cool |
| --- | --- | --- |
| 好 | Dong | Hell |

## VuePress内置组件

- OutboundLink<OutboundLink /> : 会自动跟在外部link后，表明当前是一个外部链接
- ClientOnly：包裹在其内的组件等同于在mounted后执行的，该组件内部设计的浏览器API/DOMApi才会起作用
- Content：页面容器，指定一个页面的特定slot用于渲染
- Badge：徽标
    - props:
        - text: string
        - type: ['tip', 'warning', 'error']
        - vertical: ['top', 'middle']
    - usage:
        - <Badge text="成功啦" type="tip" vertical="middle" />
        - <Badge text="失败啦" type="error" vertical="middle" />

## 博客自动构建

- 使用Travis

<style lang="stylus">
    img {
        width: 200px;
    }
</style>


