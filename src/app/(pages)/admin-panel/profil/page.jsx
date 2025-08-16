import { getUser } from "@/lib/session";
import Form from "./form";

export default async function Page() {
  const profil = await getUser();
  return (
    <div className="space-y-6">
      <h2>Halaman Profil</h2>
      <Form profil={profil} />
    </div>
  );
}
