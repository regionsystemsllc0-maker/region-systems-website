const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('🔧 Setting up email configuration for Region Systems & Automations');
console.log('================================================================');
console.log('');
console.log('Please follow these steps to get your Gmail App Password:');
console.log('');
console.log('1. Go to: https://myaccount.google.com/');
console.log('2. Sign in with: regionsys.auto@gmail.com');
console.log('3. Go to Security → 2-Step Verification (enable if not already)');
console.log('4. Go to Security → App passwords');
console.log('5. Select "Mail" and generate password');
console.log('6. Copy the 16-character password (like: abcd efgh ijkl mnop)');
console.log('');

rl.question('Enter your Gmail App Password: ', (appPassword) => {
    const envContent = `# Email Configuration for Contact Form
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=regionsys.auto@gmail.com
SMTP_PASS=${appPassword.replace(/\s/g, '')}
SMTP_FROM="Region Systems & Automations" <regionsys.auto@gmail.com>
CONTACT_EMAIL=regionsys.auto@gmail.com

# Next.js
NEXTAUTH_SECRET=region-systems-secret-2024
NEXTAUTH_URL=http://localhost:3000`;

    fs.writeFileSync('.env.local', envContent);

    console.log('');
    console.log('✅ Email configuration saved to .env.local');
    console.log('');
    console.log('🧪 To test your setup:');
    console.log('1. Run: npm run dev');
    console.log('2. Go to: http://localhost:3000/contact');
    console.log('3. Fill out and submit the contact form');
    console.log('4. Check your email for the submission and auto-reply');
    console.log('');
    console.log('🚀 Ready for deployment!');

    rl.close();
});

