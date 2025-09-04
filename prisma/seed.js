const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();

const kategori = [
   { nama: "Fashion" },
   { nama: "Teknologi" },
   { nama: "Gaya Hidup" },
   { nama: "Olahraga" },
   { nama: "Makanan" },
];

async function main() {
   const users = [
      {
         name: "Admin",
         email: "admin@admin.com",
         password: bcrypt.hashSync("12345678", 10),
      },
   ];
   await prisma.user.createMany({
      data: users,
   });

   for (const data of kategori) {
      await prisma.kategori.upsert({
         where: {
            nama: data.nama,
         },
         create: data,
         update: data,
      });
   }
}

main()
   .then(async () => {
      await prisma.$disconnect();
   })
   .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
   });

// npx prisma migrate reset
// npx prisma migrate dev
// atau: npx prisma db seed
