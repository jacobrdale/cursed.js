const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const folderPath = "./"; // Current directory only
const renameChance = 0.25; // 25% chance per file each cycle

function randomName(ext) {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let name = "";
  for (let i = 0; i < 8; i++) {
    name += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return name + ext;
}

setInterval(() => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(chalk.red("Error reading directory:", err));
      return;
    }

    files.forEach((file) => {
      if (Math.random() < renameChance) {
        const oldPath = path.join(folderPath, file);
        const ext = path.extname(file);
        const newPath = path.join(folderPath, randomName(ext));

        // Skip if newPath already exists
        if (!fs.existsSync(newPath)) {
          fs.rename(oldPath, newPath, (err) => {
            if (err) {
              console.error(chalk.red(`Failed to rename ${file}:`, err));
            } else {
              console.log(chalk.yellow(`Renamed ${file} ➔ ${path.basename(newPath)}`));
            }
          });
        }
      }
    });
  });
}, 7000); // Every 7 seconds