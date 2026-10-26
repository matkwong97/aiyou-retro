# AIYOU! Retro v1.2 — Console UI and Startup Diagnostics

## Deployment (Cloudflare Pages via GitHub)

This is a static website. Unzip and upload ALL files to the **root** of your existing GitHub repository (not a nested folder). Overwrite files with the same names and add `console.css`. Cloudflare Pages automatically redeploys after a commit if connected to GitHub. Pages build settings: Framework **None**, build command **blank**, output directory **`.`**. No D1 database or API key required.

## What is implemented
- Browser ROM library (GB, GBC, GBA, NDS), retaining original IndexedDB `aiyou-retro-v1` database.
- Console-inspired AIYOU! styling for GBC/GBA/DS and Fullscreen Play mode.
- EmulatorJS loader integration, audio activation via a user tap, built-in emulator controls and save tools (where supported by the loaded core).
- Visible loader diagnostics and retry guidance.
- Original, non-Pokémon AIYOU! app icon.

## Important limitations
- **NOT VERIFIED:** Gameplay and save persistence on a physical iPhone. The EmulatorJS core is fetched at runtime from its public CDN and can fail because of CDN availability, browser limits, core compatibility or content blockers.
- The shell D-pad and A/B shapes are **visual decoration**. Actual touch controls come from EmulatorJS's built-in overlay, rendered within the game screen. Do not confuse these with interactive controls.
- No real link cable, trading, battling or room-code backend is included. Such a feature requires original-protocol link emulation and verified synchronisation, not merely matchmaking.
- This package includes no ROMs, copyrighted console skins, proprietary BIOS, or emulator core binaries.
- EmulatorJS is a third-party open-source project. Review its licensing before redistribution or bundling cores.

## First test
Import a legally obtained `.gba` game. Press **Start game + sound**. Wait for the emulator to load. If black, open **Diagnostics & sound help** and send the message along with the Cloudflare URL. Test the emulator's own touch controls, sound, in-game save, restart, and save export before relying on it.
