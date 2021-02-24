// import React from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
// const RenderRoutes = (props) => {
//   const { routes, redirect } = props;
//   return (
//     <Switch>
//       {redirect && (
//         <Route
//           exact
//           path={redirect.to}
//           component={() => {
//             return <Redirect to={redirect.jump} />;
//           }}
//         />
//       )}
//       {routes &&
//         routes.map((route) => {
//           return (
//             <Route
//               path={route.path}
//               key={route.key}
//               exact={!!route.exact}
//               children={(props) => {
//                 return <route.component route={route} {...props} />;
//               }}
//             />
//           );
//         })}
//     </Switch>
//   );
// };

// export default RenderRoutes;
