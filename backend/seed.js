// seed.js
import { sequelize } from "./models/sequelize.js";
import { Terms } from "./models/terms.model.js";

const termsContent = {
  en: {
    title: "Terms",
    button: "Close and Go Back",
    text: `
      <p>BY clicking Invoice Now, you choose to register according to the information that you have typed in and the text on the registration page and the terms here, and you at the same time accept the terms here.</p>
      <p>You can use the program FOR FREE for 14 days</p>
      <!-- rest of EN text -->
    `,
  },
  sv: {
    title: "Villkor",
    button: "Stäng och Gå tillbaka",
    text: `
      <p>Genom att trycka på Fakturera Nu, väljer du att registrera dig ...</p>
      <p>Du kan använda programmet GRATIS i 14 dagar ...</p>
      <!-- rest of SV text -->
    `,
  },
};

async function seed() {
  try {
    await sequelize.authenticate();
    console.log("✅ Connected to Supabase");

    // create tables if not exist
    await sequelize.sync({ force: true }); // reset DB for seeding

    await Terms.bulkCreate([
      { lang: "en", title: termsContent.en.title, button: termsContent.en.button, text: termsContent.en.text },
      { lang: "sv", title: termsContent.sv.title, button: termsContent.sv.button, text: termsContent.sv.text },
    ]);

    console.log("🌱 Terms seeded successfully!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  }
}

seed();
