# The Chopping Mall

A browser adaptation built from the supplied mall map, digital rulebook, and colored counter sheet.

## Play

Open `dist/index.html` in a modern browser. No installation, build step, account, or server is needed for the local copy. The hosted private edition uses the same files. Fonts have system fallbacks if offline.

- **Solo survival:** control the four survivors against the rulebook's solitaire zombie phases.
- **Two players:** share a screen, with one player controlling survivors and the other the zombies. Mandatory reactions are resolved by the engine; the zombie player controls free movement, attack choices, and hidden reveals. A control can automate the remainder of a zombie turn.
- Each survivor gets one turn per round. Finish the selected survivor's turn to select the next; the zombies act after all eligible humans finish. Select a survivor, then click a highlighted neighboring square. Shift-click survivors in the same square, or use **Group +**, to move a stack.
- Choose **Shoot** and click a zombie. The game handles sight, modifiers, panic, dice, and damage.
- **Doors** lists the adjacent doors. Closing a main entrance requires a full unused Movement Allowance; main doors cannot reopen.
- Steve and Fran acquire rifles by beginning a turn in clear square 177 and spending the entire allowance.
- **Carry a survivor** allows an eligible character to carry another from the same square.
- Drag the map to pan, use the mouse wheel or +/- to zoom, and **Fit** to restore the full board. On touchscreens use the zoom controls and drag the map.
- **How to play** opens a quick guide and the complete supplied rulebook.
- Games save automatically in this browser on this device. **Save game** saves immediately; **Continue saved game** restores after reopening.

## Rules and setup

The board has 215 squares, explicit walls, 49 glass doors, 14 solid doors, and four main entrances. Door and wall topology follows the supplied map, including the smaller internal partitions and rifle-room access.

The game restores the recorded 45 zombie start squares, three human start squares, and exact 50-counter zombie-strength distribution. Zombie strengths remain hidden until the rules reveal them. The welcome screen provides legal human starting-square choices. Normal and infected survivor statistics come from the colored counter sheet.

The engine implements human movement and shooting, carrying, door costs, hunting rifles, berserk checks, reaction and free movement, zombie attacks, infection, super zombies, entrance and hidden-zombie tables, and both victory conditions. The user-requested round sequence overrides the original rulebook: every eligible survivor acts once, then the zombies act; everyone is eligible again next round. The in-game help reflects this sequence. The PDF remains the original rules reference.

Digital automation choices: solo defensive shooting and the specific attacked survivors are resolved automatically; hotseat mandatory reactions are automatic. The default two-player hidden-zombie assignments are generated legally rather than requiring a secret setup screen. These are automation choices for the digital table; the original numbered rules remain available in the game.

## Source files

- `dist/board.js`: complete square geometry and door graph.
- `dist/engine.js`: deterministic, serializable rules engine.
- `dist/app.js`, `dist/style.css`, `dist/index.html`: game controls and responsive presentation.
- `dist/assets/`: supplied map, counter crops, and digital rulebook.
- `board-notes.md`: map transcription details.
- `engine.test.cjs` and `board.test.cjs`: deterministic rule and map checks.

Run the checks with Node.js:

```
node engine.test.cjs
node board.test.cjs
```

No third-party JavaScript libraries are needed at runtime.
