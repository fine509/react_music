采用react仿造网易云音乐网页平台项目，采用ts与js开发，管理库使用redux+mobx,组件全为函数组件。
关联redux时，不使用connect,provider,mapStateToPorps,mapDispatchToProp,采用react-redux提供的hooks如useDispatch,useSelector.
性能优化方面，采用useCallback，memo等进行优化。
mobx使用第六版的makeAutoObservable，更加方便。
代码规范：
引入模块时，按以下顺序
一：引入第三方库
二：引入方法
三：引入组件
编写组件时，按以下顺序：
一 自身的state1
二 redux相关
三 其他Hooks使用
四 业务逻辑编写

样式采用module.scss+styled-components进行编写。