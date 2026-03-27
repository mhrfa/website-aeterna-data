const fs = require('fs');
const path = require('path');
const dir = "c:\\Users\\asus\\Desktop\\website-aeterna-data-nextjs16-keuda\\aeterna-data";

function walk(dir, done) {
  let results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function(file) {
      if (file === "node_modules" || file === ".next" || file === ".git") {
        if (!--pending) done(null, results);
        return;
      }
      file = path.resolve(dir, file);
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
}

walk(dir, function(err, results) {
  if (err) throw err;
  const regex = /(€800|800 pilot|credited pilot|pilot credit|EUR 800|800 euro|800)/i;
  const out = [];
  results.filter(f => f.match(/\.(tsx|ts|md|mdx|json)$/)).forEach(file => {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const lines = content.split('\n');
      lines.forEach((line, i) => {
        if (regex.test(line)) {
          out.push(`${file}:${i + 1}: ${line.trim()}`);
        }
      });
    } catch(e) {}
  });
  fs.writeFileSync('search_results.txt', out.join('\n'));
});
