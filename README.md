# AIYOU! Retro v1.4 — Play Experience Update

Deploy the contents of this directory to the root of your existing GitHub repository connected to Cloudflare Pages. No build command; output directory `.`.

## New
- Explicit **Exit game** button, separate from in-game Start and Select. Exiting does not automatically save progress.
- Speed button cycles 1× → 2× → 3× using EmulatorJS `gameManager` APIs; enabled only when the emulator exposes them. Actual speed may vary with device performance.
- Last played shows the 3 most recently launched ROMs.
- Library is collapsed by default and grouped by GB/GBC, GBA, and DS.
- Existing IndexedDB database name and ROM IDs remain unchanged.

## Test on iPhone
1. Open existing site after deployment and refresh.
2. Confirm My library starts collapsed; expand and inspect groups.
3. Launch a game; return via Exit game; check Continue playing.
4. Start game in emulator; test Speed 1× → 2× → 3× → 1×.
5. Test sound and in-game save, then reopen. Back up saves before extensive play.

## Limitations
- Game Start/Select are **in-game controls**; they do not exit emulation.
- The emulator retains its own virtual controller; no duplicate decorative controller.
- No working GBC/GBA link multiplayer yet.
- The emulator engine downloads from EmulatorJS CDN.
- This build has not been end-to-end tested on iOS Safari.
