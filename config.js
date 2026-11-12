// PROTOTYPE - NOT FOR PRODUCTION
// Question: 벽에 튕기는 3발짜리 총으로, 각도를 계산해서 봇을 맞히는 한 판이 재미있는가?
// Date: 2026-11-12
// Every tuning value lives here, each with value, min, max and step. The game reads them live
// through tune.<name> (index.html); the tweak panel, an add-on, writes them back here.
// Units: meters, seconds, radians unless the comment says otherwise.
window.CONFIG = {
  seed: 1, // every gameplay random call reads rng(), seeded from this (or ?seed= in the address)
  volume: { value: 0.5, min: 0, max: 1, step: 0.05 },
  music: { value: 0.45, min: 0, max: 1, step: 0.05 },             // the music's level next to the sound effects (0 turns it off)

  // ---- Player: look and move
  sens: { value: 0.0022, min: 0.0005, max: 0.006, step: 0.0001 }, // mouse look, radians per pixel
  key_look: { value: 2.2, min: 0.5, max: 5, step: 0.1 },          // arrow-key look, radians per second
  fov: { value: 80, min: 60, max: 110, step: 1 },                 // degrees
  fov_run_add: { value: 6, min: 0, max: 20, step: 1 },            // degrees added while running
  walk: { value: 5.0, min: 2, max: 10, step: 0.1 },               // m/s
  run: { value: 7.8, min: 3, max: 14, step: 0.1 },                // m/s
  accel: { value: 14, min: 4, max: 40, step: 1 },                 // ground acceleration, 1/s
  air_ctrl: { value: 0.35, min: 0, max: 1, step: 0.05 },          // share of ground acceleration in the air
  jump: { value: 6.2, min: 3, max: 10, step: 0.1 },               // m/s up
  gravity: { value: 19, min: 8, max: 40, step: 1 },               // m/s^2
  player_hp: { value: 3, min: 1, max: 6, step: 1 },               // hits to die
  eye: { value: 1.7, min: 1.2, max: 2, step: 0.05 },              // eye height, m

  // ---- The gun: three bullets that bounce
  ammo_max: { value: 3, min: 1, max: 8, step: 1 },
  reload_time: { value: 1.6, min: 0.3, max: 4, step: 0.05 },      // seconds per bullet, runs on its own
  fire_cd: { value: 0.3, min: 0.1, max: 1, step: 0.05 },          // seconds between shots
  bullet_speed: { value: 42, min: 10, max: 90, step: 1 },         // m/s
  bullet_bounces: { value: 3, min: 0, max: 8, step: 1 },          // wall bounces before it dies
  bullet_life: { value: 4.5, min: 1, max: 10, step: 0.5 },        // seconds
  bullet_r: { value: 0.12, min: 0.03, max: 0.4, step: 0.01 },     // m
  trail_fade: { value: 0.8, min: 0.1, max: 3, step: 0.1 },        // seconds a bounce line stays after the bullet ends

  // ---- Match
  bot_hp: { value: 3, min: 1, max: 6, step: 1 },
  countdown: { value: 3, min: 1, max: 6, step: 1 },               // seconds before FIGHT
  hit_stop: { value: 0.07, min: 0, max: 0.3, step: 0.01 },        // freeze on the killing hit, seconds
  end_delay: { value: 1.8, min: 0.5, max: 4, step: 0.1 },         // seconds from the last hit to the result screen

  // ---- Juice
  shake_fire: { value: 0.65, min: 0, max: 1.2, step: 0.05 },      // screen shake added by a shot (the shake is linear: 1 is a strong tremble)
  shake_hit: { value: 1.0, min: 0, max: 1.6, step: 0.05 },        // screen shake added by taking a hit
  shake_decay: { value: 3.5, min: 1, max: 10, step: 0.1 },        // shake lost per second
  recoil: { value: 0.045, min: 0, max: 0.15, step: 0.005 },       // the view's punch up on each shot, radians; it settles by itself and never moves the aim

  // ---- Bot, easy
  bot_speed_easy: { value: 3.2, min: 1, max: 8, step: 0.1 },      // m/s
  bot_react_easy: { value: 0.9, min: 0.05, max: 2, step: 0.05 },  // seconds from seeing you to the first shot
  bot_aim_easy: { value: 9, min: 0, max: 20, step: 0.5 },         // aim error, degrees
  bot_turn_easy: { value: 160, min: 60, max: 600, step: 10 },     // degrees per second
  bot_gap_easy: { value: 1.1, min: 0.2, max: 3, step: 0.05 },     // seconds between its shots
  bot_bounce_easy: { value: 0.1, min: 0, max: 1, step: 0.05 },    // chance it tries a bounce shot
  bot_dodge_easy: { value: 0.1, min: 0, max: 1, step: 0.05 },     // chance it dodges a bullet coming at it
  bot_lead_easy: { value: 0, min: 0, max: 1, step: 0.05 },        // how much it leads a moving target

  // ---- Bot, normal
  bot_speed_normal: { value: 4.2, min: 1, max: 8, step: 0.1 },
  bot_react_normal: { value: 0.5, min: 0.05, max: 2, step: 0.05 },
  bot_aim_normal: { value: 4.5, min: 0, max: 20, step: 0.5 },
  bot_turn_normal: { value: 260, min: 60, max: 600, step: 10 },
  bot_gap_normal: { value: 0.7, min: 0.2, max: 3, step: 0.05 },
  bot_bounce_normal: { value: 0.3, min: 0, max: 1, step: 0.05 },
  bot_dodge_normal: { value: 0.35, min: 0, max: 1, step: 0.05 },
  bot_lead_normal: { value: 0.5, min: 0, max: 1, step: 0.05 },

  // ---- Bot, hard
  bot_speed_hard: { value: 5.2, min: 1, max: 8, step: 0.1 },
  bot_react_hard: { value: 0.22, min: 0.05, max: 2, step: 0.05 },
  bot_aim_hard: { value: 1.6, min: 0, max: 20, step: 0.5 },
  bot_turn_hard: { value: 420, min: 60, max: 600, step: 10 },
  bot_gap_hard: { value: 0.4, min: 0.2, max: 3, step: 0.05 },
  bot_bounce_hard: { value: 0.55, min: 0, max: 1, step: 0.05 },
  bot_dodge_hard: { value: 0.7, min: 0, max: 1, step: 0.05 },
  bot_lead_hard: { value: 0.9, min: 0, max: 1, step: 0.05 },
};
