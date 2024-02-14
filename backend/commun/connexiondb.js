import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
// eslint-disable-next-line no-undef
const { url } = process.env;

export class ConnexionDb {
  constructor() {
    this.connexiondb = null;
  }

  generateConnexion = async () => {
    try {
      this.connexiondb = await mongoose.connect(url);
      console.log("Database Connected");
    } catch (error) {
      console.error("erreur de connexion DATABASE");
      this.connexiondb = null;
    }
  };
  getConnexion() {
    if (!this.connexiondb) this.generateConnexion();
    return this.connexiondb;
  }
}
