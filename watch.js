import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("====================================================");
console.log("🚀 AUTO-SYNC WATCHER STARTED! 🚀");
console.log("Watching folders: src/, public/, index.html...");
console.log("Whenever you save a file, it will auto-commit and push!");
console.log("====================================================");

let syncScheduled = false;
let modifiedFiles = new Set();

function performSync() {
  if (modifiedFiles.size === 0) {
    syncScheduled = false;
    return;
  }
  
  const filesList = Array.from(modifiedFiles).join(', ');
  console.log(`\n📦 File changes detected: [${filesList}]`);
  console.log("⚡ Initiating Git auto-commit and push...");

  // Execute git commands
  exec('git add . && git commit -m "Auto-sync update: file edits saved" && git push', (error, stdout, stderr) => {
    if (error) {
      console.error("❌ Git Auto-sync failed:", error.message);
      if (stderr) console.error("Details:", stderr);
    } else {
      console.log("✅ Successfully committed and pushed to GitHub!");
      console.log("🌐 The CI/CD GitHub Action will build and publish updates live within ~30-45 seconds.");
    }
    
    modifiedFiles.clear();
    syncScheduled = false;
  });
}

function handleWatchChange(eventType, filename) {
  if (!filename) return;
  
  // Exclude node_modules, .git, dist, and watch.js itself
  if (
    filename.includes('node_modules') || 
    filename.includes('.git') || 
    filename.includes('dist') ||
    filename.includes('watch.js')
  ) {
    return;
  }

  modifiedFiles.add(filename);

  // Debounce syncing for 2.5 seconds to allow multi-file saves to bundle into a single commit
  if (!syncScheduled) {
    syncScheduled = true;
    setTimeout(performSync, 2500);
  }
}

// Recursively watch src folder
if (fs.existsSync(path.join(__dirname, 'src'))) {
  fs.watch(path.join(__dirname, 'src'), { recursive: true }, handleWatchChange);
}

// Watch public folder
if (fs.existsSync(path.join(__dirname, 'public'))) {
  fs.watch(path.join(__dirname, 'public'), { recursive: true }, handleWatchChange);
}

// Watch index.html and config files
fs.watch(path.join(__dirname, 'index.html'), handleWatchChange);
if (fs.existsSync(path.join(__dirname, 'tailwind.config.js'))) {
  fs.watch(path.join(__dirname, 'tailwind.config.js'), handleWatchChange);
}
if (fs.existsSync(path.join(__dirname, 'vite.config.js'))) {
  fs.watch(path.join(__dirname, 'vite.config.js'), handleWatchChange);
}
