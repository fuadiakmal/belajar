import { handleApiMiddleware, handlePageMiddleware } from "./middlewares";

export function middleware(req) {
   const path = req.nextUrl.pathname;

   // merujuk ke folder middlewares/api.js
   if (path.startsWith("/api")) {
      return handleApiMiddleware(req);
   }

   // merujuk ke folder middlewares/page.js
   return handlePageMiddleware(req);
}

// untuk mengatur route mana yg harus pakai middleware atau tidak
export const config = {
   matcher: [
      "/((?!_next/static|_next/image|favicon.ico|images|.*\\.(?:png|jpg|jpeg|svg|webp|ico|css|js|woff|woff2|ttf)).*)",
   ],
};
