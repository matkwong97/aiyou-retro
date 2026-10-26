# AIYOU! Retro — v1.0 prototype

Static GitHub + Cloudflare Pages deployable emulator frontend for user-supplied `.gb`, `.gbc`, `.gba`, `.nds` files.

## Deployment (no terminal needed)
1. Create a **public or private** GitHub repository (e.g. `aiyou-retro`).
2. Upload **all files in this folder to the repository root**: `index.html`, `play.html`, `style.css`, `db.js`, `library.js`, `player.js`, `manifest.webmanifest`, `README.md`. No nested folders, build command, dependencies, D1 database or API keys.
3. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → select repository.
4. Framework preset: **None**; build command: **leave blank**; output directory: **/** (repository root). If Cloudflare requires an output directory, use `.`.
5. Deploy. Open the generated `*.pages.dev` URL using Safari.
6. Import a ROM you are legally permitted to use. Tap Play; on the player page, tap the emulator's Start/Play button to allow iOS audio.

## Implemented
- Local IndexedDB ROM library (files stay in the browser)
- GB/GBC, GBA, DS game launching using EmulatorJS stable CDN and browser-compatible cores
- Sound via emulation engine (requires user interaction on iOS)
- EmulatorJS built-in on-screen controls, cheats, save tools, and gamepad settings (dependent on engine/core)
- Authentic Console and Fullscreen Play layout modes

## Not implemented / not yet verified
- Real original-protocol GB/GBC/GBA link cable, trading or battling; room codes and networking
- DS wireless multiplayer
- End-to-end physical iPhone runtime test and save persistence verification
- Custom console-perfect controller skin (built-in emulator touch controls are used; shell is cosmetic)
- Offline play: engine assets load from EmulatorJS CDN

## Important
This is an integration prototype. Runtime performance, audio, game save reliability and console compatibility must be validated on target devices with legal test ROMs. The `stable` CDN may update; pin and self-host a tested engine version before production. No ROMs, BIOS or Pokémon assets included. Game files and emulation assets can be large. Back up saves frequently. EmulatorJS and its cores have their own licenses; review before commercial use.
