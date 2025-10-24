#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  console.log('📊 Create New Presentation\n');

  const name = await question('Presentation name (e.g., "my-talk"): ');
  const title = await question('Title: ');
  const subtitle = await question('Subtitle (optional): ');
  const author = await question('Author: ');

  if (!name) {
    console.error('❌ Presentation name is required');
    process.exit(1);
  }

  const templatePath = path.join(__dirname, '../slides/templates/full-template.md');
  const presentationsDir = path.join(__dirname, '../presentations');
  const outputPath = path.join(presentationsDir, `${name}.md`);

  // Ensure presentations directory exists
  if (!fs.existsSync(presentationsDir)) {
    fs.mkdirSync(presentationsDir, { recursive: true });
  }

  // Read template
  let content = fs.readFileSync(templatePath, 'utf-8');

  // Replace placeholders
  content = content.replace(/Your Presentation Title/g, title || 'Presentation Title');
  content = content.replace('A compelling subtitle', subtitle || 'Subtitle');
  content = content.replace('Your Name | Your Title | Date', author || 'Author');
  content = content.replace('your.email@example.com', '');

  // Write new presentation
  fs.writeFileSync(outputPath, content);

  console.log(`\n✅ Created: ${outputPath}`);
  console.log('\nNext steps:');
  console.log(`  1. Edit: presentations/${name}.md`);
  console.log('  2. Run: npm run dev');
  console.log('  3. Open: http://localhost:1948/presentations/' + name + '.md');

  rl.close();
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
