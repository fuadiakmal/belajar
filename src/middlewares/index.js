import handleApiMiddleware from "./api";
import handlePageMiddleware from "./page";

export function normalizePath(path) {
   return path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;
}

export function matchRoute(path, routes) {
   return routes.some(
      (route) => path === route || path.startsWith(route + "/")
   );
}

export { handleApiMiddleware, handlePageMiddleware };
