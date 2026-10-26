# AIYOU! Retro v1.5 — Gameplay & UI repair

Static site for GitHub + Cloudflare Pages. Upload **all files in this archive to the repository root**. Framework: None. Build command: blank. Output directory: `.`.

## Included
- GB/GBC, GBA and DS ROM import, library grouped by system, last three played, collapsed library (retained from v1.4).
- Authentic console-inspired and fullscreen player modes with **one** interactive controller: the EmulatorJS built-in controller.
- EmulatorJS audio and native save-state/save-file menus.
- Quick Save/Load buttons enabled only if a compatible gameManager API is detected; quick saves are tab-session-only, not durable backups.
- 1x/2x/3x speed request when the emulator runtime supports it. Actual performance varies.
- Startup diagnostics and no false claim that a ROM is running before the runtime callback.

## Honest limitations
**Traditional link cable trading and battling are NOT implemented.** A room-code interface without protocol-level synchronisation would be misleading. GBC/GBA trading requires a dedicated compatible link-emulation implementation and tests on real games.

**Not verified on iPhone Safari.** The emulator core loads from `https://cdn.emulatorjs.org/stable/data/`; a network connection is required at first load. External CDN or browser compatibility may still prevent gameplay.

**Quick Save is sessionStorage-only**, and can be disabled by the engine or browser; use in-game saves and native save-state export for durable progress.

## Updating
Keep the same Cloudflare Pages project and GitHub repository. Delete obsolete `player.js`, `player-v13.css`, `ux-v14.js`, `console.css` if present. Upload new `player-v15.js`, `player-v15.css`, `play.html` and all remaining archive files to root. Commit main; Cloudflare auto-deploys. Use a private/test ROM and back up all saves first.

## Testing checklist
1. Load a small legally obtained GB/GBC ROM; verify video/audio/controls.
2. Load GBA game and verify native on-screen controller, no duplicate decorative controls.
3. Try both display modes, speed toggle, quick state (if enabled), in-game save and restart.
4. Test DS screen and touchscreen.
5. Record exact diagnostic messages on any failure.
