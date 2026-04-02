const fs = require('fs');

function walkDir(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walkDir(file));
        } else { 
            if (file.endsWith('page.tsx')) results.push(file);
        }
    });
    return results;
}

const files = walkDir('./app');
files.forEach(file => {
    if (!file.includes('data-security-policy') && !file.includes('impressum') && !file.includes('contact') && !file.includes('cookie-policy') && !file.includes('privacy-policy') && !file.includes('terms-of-service') && !file.includes('about')) {
        let content = fs.readFileSync(file, 'utf8');
        let initialContent = content;
        
        content = content.replace(/className="flex flex-wrap justify-center items-center gap-4 mt-10 font-mono text-sm"/g, 'className="grid grid-cols-2 gap-y-8 gap-x-4 sm:flex sm:flex-wrap justify-center items-center sm:gap-4 mt-10 font-mono text-sm text-center"');
        
        content = content.replace(/<div className="flex flex-col items-center">\s*<span className="text-\[var\(--color-text-primary\)\] font-bold">/g, '<div className="flex flex-col items-center text-center">\n                            <span className="text-[var(--color-text-primary)] font-bold">');
        
        if (content !== initialContent) {
            fs.writeFileSync(file, content, 'utf8');
            console.log('Modified ' + file);
        }
    }
});
