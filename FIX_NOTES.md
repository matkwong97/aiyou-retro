# v1.0.1 startup repair
- Adds an explicit user-triggered emulator startup button to help Safari permit audio and WebAssembly boot.
- Uses a stable string game ID rather than a numeric hash fragment.
- Gives the emulator container an explicit height and improves loader diagnostics.
- Adds a home-screen icon and manifest.
- Preserves the existing IndexedDB name and ROM library schema from v1.0.

## Important limitations
This is a code-level repair, **not a verified end-to-end emulator test**. The emulator core is still downloaded from EmulatorJS CDN and depends on browser support, network availability and the ROM file. The screen can remain black for causes not covered here. Real link trading/battling is not implemented. Never promise multiplayer until the core and network protocol have been tested. Export important game saves before upgrades.

## Cloudflare Pages
Upload all files into your existing GitHub repository root, replacing files with matching names. Cloudflare Pages should redeploy automatically if connected to Git. No build command, output directory `.`.
