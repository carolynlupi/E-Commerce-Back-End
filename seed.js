const fs = require('fs');
const path = require('path');

// Get the path to the "seeds" folder
const seedsFolder = path.join(__dirname, 'develop', 'seeds');

// Read the contents of the "seeds" folder
fs.readdirSync(seedsFolder).forEach((file) => {
  if (path.extname(file) === '.js') {
    const seedFilePath = path.join(seedsFolder, file);
    console.log(`Executing seed file: ${seedFilePath}`);

    // Load and execute the seed file
    require(seedFilePath);
  }
});

