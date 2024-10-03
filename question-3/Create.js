const fs = require('fs');       //With the use of fs and path module
const path = require('path');


const logDir = path.join(__dirname, 'Logs');

// Creating a Logs directory if it does not exist
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
    console.log('Logs directory has been created.');
}

// Switchthe current process to the Logs directory
process.chdir(logDir);

// Generating 10 log files
for (let i = 0; i < 10; i++) {
    const logFileName = `log${i}.txt`;
    fs.writeFileSync(logFileName, `Log file number ${i}.`);
    console.log(`Created: ${logFileName}`);
}



