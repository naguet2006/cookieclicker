# Cookie Clicker Automation Scripts

A collection of scripts to automate and enhance your Cookie Clicker experience.

## Scripts Included

1. **auto buyer**  
   - Automatically buys upgrades and buildings
   - Adds a toggle button under the store title

2. **auto golden cookie clicker**  
   - Automatically clicks golden cookies and reindeers
   - Adds a toggle button at the top (before Twitter link)

3. **automatic stocks**  
   - Automatically buys stocks when cheap (< $3) and sells when expensive (> $30)
   - Toggle button appears to the right of brokers

4. **imperfectCookie.png**  
   - Replaces the default cookie with an "imperfect" version found in game files
   - If this loads, all other scripts are successfully loaded

5. **last upgrades**  
   - Displays the last 5 bought upgrades in console
   - Helps track expensive upgrades for ascension planning

6. **save your cookies**  
   - Automatically downloads a save file at regular intervals (default: 30 minutes)

## Backup System

The `saveCookies.bat` file provides automatic save management:

- Monitors your Downloads folder for new save files (looking for `porcBakery*`)
- Moves them to a `./saveCookies/` folder with timestamped filenames
- Only keeps the **50 most recent saves** (automatically deletes older ones)
- Commits changes to Git every ~16.6 minutes (1000 seconds)

### Requirements
- Windows system (for the batch file)
- Git installed and configured (for automatic version control)

### File Naming Format
Saved files use this pattern:  
`porcBakery-YYYY-MM-DD_HH-MM.txt`

## Installation
1. Install a userscript manager (Tampermonkey/Violentmonkey)
2. Add all the scripts
3. Place `saveCookies.bat` in your preferred location and run it

> Note: The batch file should be run in the same directory where you want your saves kept