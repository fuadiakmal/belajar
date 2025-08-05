const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();

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

// atau: npx prisma db seed

// npx prisma migrate reset
// npx prisma migrate dev
