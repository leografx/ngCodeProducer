import fs from 'fs';
import { exec } from 'child_process';

const producer = function(code) {
    fs.writeFile('tmp.txt', code, 'utf8', () => {
        exec('cat tmp.txt | pbcopy');
        process.exit();
    });
}

export default producer;