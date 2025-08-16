import { NextResponse } from "next/server";
import { decrypt } from "@/lib/session";
import { matchRoute, normalizePath } from ".";

const protectedRoutes = ["/admin-panel", "/invalid-session"];
const publicRoutes = ["/login"];

export default async function handlePageMiddleware(req) {
   const path = normalizePath(req.nextUrl.pathname);

   const isProtected = matchRoute(path, protectedRoutes);
   const isPublic = matchRoute(path, publicRoutes);
   const cookie = req.cookies.get("session")?.value;
   const payload = await decrypt(cookie);

   const isLoggedIn = !!payload?.userId && !!payload?.sessionId;

   if (isProtected && !isLoggedIn) {
      return NextResponse.redirect(new URL("/login", req.nextUrl));
   }

   if (isPublic && isLoggedIn) {
      return NextResponse.redirect(
         new URL("/admin-panel/dashboard", req.nextUrl)
      );
   }

   return NextResponse.next();
}
