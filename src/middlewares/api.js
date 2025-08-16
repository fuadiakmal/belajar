import { NextResponse } from "next/server";
import { decrypt } from "@/lib/session";

const apiAccessByRole = {
   admin: [
      "/api/admin/users",
      "/api/admin/settings",
      "/api/admin/posts",
      "/api/admin/profile",
   ],
   editor: ["/api/admin/posts", "/api/admin/profile"],
};

export default async function handleApiMiddleware(req) {
   const path = req.nextUrl.pathname;

   // ✅ Kalau bukan /api/admin → anggap public
   if (!path.startsWith("/api/admin")) {
      return NextResponse.next();
   }

   // 🔐 Ambil session
   const cookie = req.cookies.get("session")?.value;
   const payload = await decrypt(cookie);
   const userId = payload?.userId;
   const sessionId = payload?.sessionId;
   const role = payload?.role;

   if (!userId || !sessionId || !role) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
   }

   // ✅ Cek akses berdasarkan role dan path
   const allowedPaths = apiAccessByRole[role] || [];

   const isAllowed = allowedPaths.some((route) => path.startsWith(route));

   if (!isAllowed) {
      return NextResponse.json(
         { error: `Forbidden (${role} has no access)` },
         { status: 403 }
      );
   }

   return NextResponse.next();
}
