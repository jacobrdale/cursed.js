// cursed.js
const fs = require("fs");
const chalk = require("chalk");
const figlet = require("figlet");
const cowsay = require("cowsay");
const axios = require("axios");
const rename = require("./rename.js");
rename()

console.log(chalk.red(figlet.textSync("CURSED.JS", { horizontalLayout: "full" })));

let cursedLevel = 0;

// Main loop of misery
setInterval(async () => {
  try {
    // Occasional panic
    if (Math.random() < 0.2) {
      throw new Error("💥 A cursed error has occurred");
    }

    // Soul eval
    if (Math.random() < 0.1) {
      const soul = fs.readFileSync("soul.txt", "utf8");
      console.log(chalk.green("💀 Evaluating soul.txt..."));
      eval(soul); // this is so bad
    }

    // Console torment
    const msg = cowsay.say({
      text: `Cursed level: ${cursedLevel += 5}`,
      f: "dragon", // because of course
    });
    console.log(chalk.hex("#FF00FF")(msg));

    // Occasionally fetch something pointless
    if (Math.random() < 0.05) {
      const res = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      console.log(chalk.cyan(`🃏 Dad joke from the void: "${res.data.joke}"`));
    }

    // Self-harm
    if (Math.random() < 0.03) {
      let code = fs.readFileSync(__filename, "utf8");
      code = code.replace(/cursedLevel \+= 1|cursedLevel\+\+/, `cursedLevel += ${Math.floor(Math.random() * 10)}`);
      fs.writeFileSync(__filename, code);
      console.log(chalk.bgBlack.redBright("⚠️ Self-modified. You shouldn’t have let it do that."));
    }

  } catch (err) {
    console.error(chalk.bgRed.white("❌ CAUGHT EXCEPTION: " + err.message));
  }
}, 1500);