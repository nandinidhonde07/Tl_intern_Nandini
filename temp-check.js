const fs = require('fs');
const html = fs.readFileSync('day.html', 'utf8');
const match = html.match(/<script>[\s\S]*<\/script>/);
if (!match) {
  console.log('no script');
  process.exit(1);
}
const code = match[0].replace(/^<script>/, '').replace(/<\/script>$/, '');
try {
  new Function(code);
  console.log('script ok');
} catch (e) {
  console.log('ERROR', e.message);
  process.exit(1);
}
