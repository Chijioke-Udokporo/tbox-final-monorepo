const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const dbClient = new PrismaClient();

const user = [
  {
    email: "admin@codesordinate.studio",
    password: bcrypt.hashSync("1209", 10),
    firstName: "Chijioke",
    lastName: "Udokporo",
    role: "admin",
  },
];

const createSuperAdmin = async () => {
  try {
    await dbClient.users.createMany({ data: user });
    console.log("Super admin created successfully");
  } catch (error) {
    if (error?.message.includes("constraint")) {
      console.log("Super admin already exists");
    }
  }
};

createSuperAdmin();
