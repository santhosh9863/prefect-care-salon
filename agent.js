const { exec } = require("child_process");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const command = process.argv.slice(2).join(" ");

if (!command) {
  console.log("No command provided");
  process.exit(1);
}

console.log("Executing:", command);

exec(`opencode run "${command}"`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(stdout);
});