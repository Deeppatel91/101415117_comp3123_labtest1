const fs = require('fs');   ///With the use of fs and path module
const path = require('path');


const logDir = path.join(__dirname, 'Logs');


if (fs.existsSync(logDir)) {
   
    fs.readdirSync(logDir).forEach(file => {
        fs.unlinkSync(path.join(logDir, file)); 
        console.log(`delete files.. ${file}`); 
    });

  
    fs.rmdirSync(logDir);
    console.log('deleted directory.. Logs');
} else {
    console.log('Logs directory does not exist.');
}
