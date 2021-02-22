采用react仿造网易云音乐网页平台项目，采用ts与js开发，管理库使用redux+mobx,组件全为函数组件。\n
关联redux时，不使用connect,provider,mapStateToPorps,mapDispatchToProp,\n采用react-redux提供的hooks如useDispatch,\nuseSelector.
性能优化方面，采用useCallback，memo等进行优化,redux数据采用IMMUTABLE进行优化。\n
mobx使用第六版的makeAutoObservable，更加方便。\n
代码规范：\n
引入模块时，按以下顺序\n
一：引入第三方库\n
二：引入方法\n
三：引入组件\n
编写组件时，按以下顺序：\n
一 自身的state1\n
二 redux相关\n
三 其他Hooks使用\n
四 业务逻辑编写\n

样式采用module.scss+styled-components进行编写。\n