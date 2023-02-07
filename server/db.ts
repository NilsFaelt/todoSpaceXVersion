const Sequelize = require("sequelize");
const sequelize = new Sequelize("spacextodo", "postgres", "Skuttbuffel__00", {
  host: "localhost",
  dialect: "postgres",
});

export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
