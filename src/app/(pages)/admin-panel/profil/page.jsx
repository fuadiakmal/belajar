import { getUser } from "@/lib/session";
import Form from "./form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Page() {
   const profil = await getUser();
   return (
      <Card className="w-full max-w-[400px] mx-auto relative my-8">
         <CardHeader>
            <CardTitle>Profil User</CardTitle>
         </CardHeader>
         <CardContent>
            <Form profil={profil} />
         </CardContent>
      </Card>
   );
}
