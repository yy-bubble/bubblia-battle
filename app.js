const data = window.BATTLE_DATA;

const els = {
  shell: document.getElementById("battleShell"),
  stage: document.getElementById("battleStage"),
  endingOverlay: document.getElementById("endingOverlay"),
  turnRibbon: document.getElementById("turnRibbon"),
  skillPanel: document.getElementById("skillPanel"),
  skillList: document.getElementById("skillList"),
  skillHelp: document.getElementById("skillHelp"),
  statusTooltip: document.getElementById("statusTooltip"),
  commandPanel: document.getElementById("commandPanel"),
  commandGrid: document.getElementById("commandGrid"),
  message: document.getElementById("message"),
  allyHpText: document.getElementById("allyHpText"),
  allyMpText: document.getElementById("allyMpText"),
  allyHpFill: document.getElementById("allyHpFill"),
  allyMpFill: document.getElementById("allyMpFill"),
  allyState: document.getElementById("allyState"),
  embarrassmentFill: document.getElementById("embarrassmentFill"),
  enemyHpGaugeFill: document.getElementById("enemyHpGaugeFill"),
  enemyGauge: document.getElementById("enemyGauge"),
  enemyGaugeFill: document.getElementById("enemyGaugeFill"),
  enemyGaugeOverfill: document.getElementById("enemyGaugeOverfill"),
  allySlot: document.getElementById("allySlot"),
  enemySlot: document.getElementById("enemySlot"),
  allySprite: document.getElementById("allySprite"),
  enemySprite: document.getElementById("enemySprite"),
  allySpriteWrap: document.getElementById("allySpriteWrap"),
  enemySpriteWrap: document.getElementById("enemySpriteWrap"),
  sweetBreathSmoke: document.getElementById("sweetBreathSmoke"),
  sleepBubble: document.getElementById("sleepBubble"),
  sweetDreamBubble: document.getElementById("sweetDreamBubble"),
  spellOrb: document.getElementById("spellOrb"),
  spellCanvas: document.getElementById("spellCanvas"),
  debugSpellPanel: document.getElementById("debugSpellPanel"),
  debugSleepBubblePanel: document.getElementById("debugSleepBubblePanel"),
  debugSpellToggle: document.getElementById("debugSpellToggle"),
  debugSleepBubbleToggle: document.getElementById("debugSleepBubbleToggle"),
  debugSpellPreview: document.getElementById("debugSpellPreview"),
  debugSleepBubblePreview: document.getElementById("debugSleepBubblePreview"),
  allyDamage: document.getElementById("allyDamage"),
  enemyDamage: document.getElementById("enemyDamage")
};

const debugSettings = {
  spellStartX: 800,
  spellStartY: 20,
  spellTravelX: -775,
  spellEndY: 100,
  spellWave: 60,
  spellDuration: 5,
  wobbleDuration: 3.5,
  wobbleAmount: 1,
  spellSquishAmount: 0.05,
  spellSquishCycles: 0.5,
  sleepBubbleX: 119,
  sleepBubbleY: 165,
  sleepBubbleLv8Scale: 4.1,
  sleepBubbleLv9Scale: 10,
  sweetRoomBubbleX: 35,
  sweetRoomBubbleY: 140,
  sleepBubbleBreathAmount: 0.5,
  sleepBubbleBreathSpeed: 0.9,
  sleepBubbleCenterAlpha: 0.24,
  sleepBubbleFillAlpha: 1,
  sleepBubbleBlueTone: 0.35,
  sleepBubbleHighlightAlpha: 1,
  sleepBubbleHighlightOffset: 1.75,
  sleepPreviewLevel: 0,
  zzzX: 164,
  zzzY: 100,
  zzzGapX: 24,
  zzzGapY: 22,
  filmAlpha: 2,
  filmSaturation: 3,
  spellBaseWhite: 1,
  spellRainbowCenter: 0.2,
  spellRainbowEdge: 1.75,
  spellRainbowAlpha: 1.5,
  highlightAlpha: 1.75,
  rainbowDuration: 3,
  sweetRoomFloatAmount: 20,
  sweetRoomFloatCycles: 2,
  sweetRoomSquishAmount: 0.15,
  sweetRoomSquishDuration: 4
};

const DEBUG_PANEL_DEFINITIONS = {
  spell: {
    panelKey: "debugSpellPanel",
    previewKey: "debugSpellPreview",
    id: "debugSpellPanel",
    title: "DEBUG シャボン",
    previewId: "debugSpellPreview",
    previewLabel: "シャボン確認",
    controls: [
      ["シャボン開始X", "spellStartX", 640, 900, 1, "px"],
      ["シャボン開始Y", "spellStartY", -40, 120, 1, "px"],
      ["横移動量", "spellTravelX", -900, -560, 1, "px"],
      ["包む高さ", "spellEndY", 20, 160, 1, "px"],
      ["上下振幅", "spellWave", 0, 90, 1, "px"],
      ["移動秒数", "spellDuration", 3, 8, 0.1, "s"],
      ["ゆらぎ量", "wobbleAmount", 0, 10, 0.1, "%"],
      ["楕円変形量", "spellSquishAmount", 0, 0.25, 0.01, ""],
      ["楕円変形速さ", "spellSquishCycles", 0.5, 5, 0.1, ""],
      ["膜の濃さ", "filmAlpha", 0, 2, 0.05, ""],
      ["色の強さ", "filmSaturation", 0.5, 3, 0.05, ""],
      ["ベース白さ", "spellBaseWhite", 0, 1, 0.05, ""],
      ["中心虹色", "spellRainbowCenter", 0, 1.5, 0.05, ""],
      ["外周虹色", "spellRainbowEdge", 0, 2, 0.05, ""],
      ["虹色濃さ", "spellRainbowAlpha", 0, 2, 0.05, ""],
      ["ハイライト濃さ", "highlightAlpha", 0, 1.8, 0.05, ""],
      ["色流れ秒数", "rainbowDuration", 3, 20, 0.1, "s"]
    ]
  },
  sleepBubble: {
    panelKey: "debugSleepBubblePanel",
    previewKey: "debugSleepBubblePreview",
    id: "debugSleepBubblePanel",
    title: "DEBUG 鼻ちょうちん",
    previewId: "debugSleepBubblePreview",
    previewLabel: "鼻ちょうちん確認",
    controls: [
      ["包み位置X", "sweetRoomBubbleX", -160, 180, 1, "px"],
      ["包み位置Y", "sweetRoomBubbleY", -20, 220, 1, "px"],
      ["包みふわふわ量", "sweetRoomFloatAmount", 0, 80, 1, "px"],
      ["包みふわふわ速さ", "sweetRoomFloatCycles", 0.5, 4, 0.1, ""],
      ["ぽよん強さ", "sweetRoomSquishAmount", 0, 0.5, 0.01, ""],
      ["ぽよん秒数", "sweetRoomSquishDuration", 1, 5, 0.1, "s"],
      ["ハイライト外寄せ", "sleepBubbleHighlightOffset", 1, 2, 0.05, ""]
    ]
  }
};

let debugPanelsInitialized = false;

const SLEEP_BUBBLE_BASE_SIZE = 26;
const SLEEP_BUBBLE_PULSE_ROOM = 1.18;
const SWEET_ROOM_WRAP_OFFSET_RATIO = 0.25;
const SWEET_ROOM_MOVE_PROGRESS_END = 0.78;
const SWEET_ROOM_CAPTURE_PROGRESS = 0.5;
const SWEET_ROOM_TOTAL_DURATION = 3100;

const state = {
  ally: createBattler(data.actors.ally),
  enemy: createBattler(data.actors.enemy),
  activeSide: null,
  selectedCommand: 0,
  commandMode: "main",
  selectedSkill: 0,
  selectedItem: 0,
  inventory: Object.fromEntries((data.items ?? []).map((item) => [item.id, item.initialCount ?? 0])),
  enemyTurns: 0,
  enemyGauge: data.actors.enemy.specialGauge.initial,
  enemyGaugeLimit: data.actors.enemy.specialGauge.normalMax,
  sleepBubbleBoost: 0,
  sleepinessLevel: 0,
  embarrassment: 0,
  busy: true,
  ended: false,
  spellAnimationFrame: null,
  spellCanvasFrame: null,
  spellCanvasMode: "idle",
  spellPopStart: 0,
  sleepBubbleFrame: null,
  allyPose: null,
  allyPoseTimer: null,
  enemyPose: null,
  enemyPoseTimer: null,
  sweetDreaming: false,
  sweetRoomStart: 0,
  sweetRoomCaptured: false,
  sweetRoomSquishStart: 0,
  endingShown: false,
  introReady: false,
  introStartRequested: false,
  introComplete: false,
  preloadStarted: false,
  debugSleepPreview: false,
  roundEndRecoveries: []
};

function createBattler(source) {
  return {
    ...source,
    hp: source.maxHp,
    mp: source.maxMp ?? 0,
    statuses: {},
    defending: false
  };
}

function text(template, values = {}) {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
}

function getSleepBubbleApproachMessage(level) {
  const cappedLevel = Math.max(1, Math.min(5, level));
  return data.messages[`sleepBubbleLevel${cappedLevel}`] ?? data.messages.sleepBubbleLevel1;
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function setMessage(message) {
  els.message.textContent = message;
}

function appendMessage(message) {
  if (!message) return;
  els.message.textContent = els.message.textContent
    ? `${els.message.textContent}\n${message}`
    : message;
}

function setActionTitle(title) {
  els.turnRibbon.textContent = title;
}

function setBusy(isBusy) {
  state.busy = isBusy;
  els.commandPanel.classList.toggle("disabled", isBusy || state.activeSide !== "ally" || state.ended);
  els.skillPanel.classList.toggle("disabled", isBusy || state.activeSide !== "ally" || state.ended);
}

function applyDebugSettings() {
  const root = document.documentElement;
  root.style.setProperty("--spell-start-x", `${debugSettings.spellStartX}px`);
  root.style.setProperty("--spell-start-y", `${debugSettings.spellStartY}px`);
  root.style.setProperty("--spell-travel-x", `${debugSettings.spellTravelX}px`);
  root.style.setProperty("--spell-end-y", `${debugSettings.spellEndY}px`);
  root.style.setProperty("--spell-drift-y", `${Math.round(debugSettings.spellEndY * 0.52)}px`);
  root.style.setProperty("--spell-float-end-y", `${Math.round(debugSettings.spellEndY * 0.48)}px`);
  root.style.setProperty("--spell-wave", `${debugSettings.spellWave}px`);
  root.style.setProperty("--spell-wave-up", `${debugSettings.spellWave * -1}px`);
  root.style.setProperty("--spell-wave-down", `${debugSettings.spellWave}px`);
  root.style.setProperty("--spell-wave-up-soft", `${Math.round(debugSettings.spellWave * -0.7)}px`);
  root.style.setProperty("--spell-wave-down-soft", `${Math.round(debugSettings.spellWave * 0.7)}px`);
  root.style.setProperty("--spell-duration", `${debugSettings.spellDuration}s`);
  root.style.setProperty("--wobble-duration", `${debugSettings.wobbleDuration}s`);
  root.style.setProperty("--wobble-small", `${debugSettings.wobbleAmount * 0.5}%`);
  root.style.setProperty("--wobble-big", `${debugSettings.wobbleAmount}%`);
  root.style.setProperty("--bubble-x", `${debugSettings.sleepBubbleX}px`);
  root.style.setProperty("--bubble-y", `${debugSettings.sleepBubbleY}px`);
  const bubbleAlpha = Math.min(1, debugSettings.sleepBubbleFillAlpha);
  const bubbleDensity = Math.max(0, debugSettings.sleepBubbleFillAlpha - 1);
  root.style.setProperty("--sleep-bubble-fill-alpha", bubbleAlpha);
  root.style.setProperty("--sleep-bubble-density", bubbleDensity);
  root.style.setProperty("--sleep-bubble-level-scale", getSleepBubbleScale());
  root.style.setProperty("--zzz-x", `${debugSettings.zzzX}px`);
  root.style.setProperty("--zzz-y", `${debugSettings.zzzY}px`);
  root.style.setProperty("--zzz-gap-x", `${debugSettings.zzzGapX}px`);
  root.style.setProperty("--zzz-gap-y", `${debugSettings.zzzGapY}px`);
  root.style.setProperty("--film-alpha", debugSettings.filmAlpha);
  root.style.setProperty("--film-saturation", debugSettings.filmSaturation);
  root.style.setProperty("--highlight-alpha", debugSettings.highlightAlpha);
  root.style.setProperty("--rainbow-duration", `${debugSettings.rainbowDuration}s`);
  renderSpellWaveLines();

  document.querySelectorAll("[data-debug-value]").forEach((node) => {
    const key = node.dataset.debugValue;
    const unit = document.querySelector(`[data-debug-key="${key}"]`)?.dataset.debugUnit ?? "";
    node.textContent = `${debugSettings[key]}${unit}`;
  });
}

function renderSpellWaveLines() {
  drawSpellCanvas(performance.now());
}

function startSpellCanvas(mode = "active") {
  layoutSpellCanvas();
  state.spellCanvasMode = mode;
  if (state.spellCanvasFrame !== null) return;

  const draw = (time) => {
    drawSpellCanvas(time);
    state.spellCanvasFrame = requestAnimationFrame(draw);
  };
  state.spellCanvasFrame = requestAnimationFrame(draw);
}

function stopSpellCanvas() {
  if (state.spellCanvasFrame !== null) {
    cancelAnimationFrame(state.spellCanvasFrame);
  }
  state.spellCanvasFrame = null;
  state.spellCanvasMode = "idle";
}

function layoutSpellCanvas() {
  const dpr = window.devicePixelRatio || 1;
  const width = 480;
  const height = 480;
  const pixelWidth = Math.ceil(width * dpr);
  const pixelHeight = Math.ceil(height * dpr);
  if (els.spellCanvas.width !== pixelWidth || els.spellCanvas.height !== pixelHeight) {
    els.spellCanvas.width = pixelWidth;
    els.spellCanvas.height = pixelHeight;
  }
}

function drawSpellCanvas(time = performance.now()) {
  if (!els.spellCanvas) return;
  layoutSpellCanvas();
  const ctx = els.spellCanvas.getContext("2d");
  if (!ctx) return;

  const dpr = window.devicePixelRatio || 1;
  const width = els.spellCanvas.width / dpr;
  const height = els.spellCanvas.height / dpr;
  const cx = width / 2;
  const cy = height / 2;
  const baseRadius = 195;
  const wobble = debugSettings.wobbleAmount / 100;
  const holdBob = state.spellCanvasMode === "hold" ? Math.sin(time / 430) * 4 : 0;
  const popProgress = state.spellCanvasMode === "pop"
    ? Math.min(1, Math.max(0, (time - state.spellPopStart) / 520))
    : 0;
  const wave = Math.sin(time / 760) * wobble;
  const squish = getSpellSquish(time);
  const popScale = 1 + (popProgress * 0.26);
  const popAlpha = state.spellCanvasMode === "pop" ? Math.max(0, 1 - (popProgress * 1.08)) : 1;
  const rx = baseRadius * (1 + wave * 0.28) * squish.x * popScale;
  const ry = baseRadius * (1 - wave * 0.18) * squish.y * (1 + popProgress * 0.18);

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, width, height);
  ctx.save();
  ctx.globalAlpha = popAlpha;
  ctx.translate(0, holdBob);

  ctx.save();
  drawSpellMembranePath(ctx, cx, cy, rx, ry, time);
  ctx.clip();
  drawSpellBody(ctx, cx, cy, rx, ry);
  drawSpellInterference(ctx, width, height, time, cx, cy, rx, ry);
  drawSpellFilmArcs(ctx, cx, cy, rx, ry, time);
  ctx.restore();

  drawSpellHighlights(ctx, cx, cy, rx, ry, time);
  drawSpellOutline(ctx, cx, cy, rx, ry, time);
  ctx.restore();

  if (state.spellCanvasMode === "pop") {
    drawSpellPopSplash(ctx, cx, cy + holdBob, baseRadius, popProgress);
  }
}

function drawEllipsePath(ctx, cx, cy, rx, ry) {
  ctx.beginPath();
  ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
}

function getSpellSquish(time = performance.now()) {
  const amount = debugSettings.spellSquishAmount;
  if (amount <= 0) return { x: 1, y: 1 };
  const phase = (time / 1000) * Math.PI * 2 * debugSettings.spellSquishCycles;
  const stretch = Math.sin(phase) * amount;
  return {
    x: 1 + stretch,
    y: 1 - (stretch * 0.72)
  };
}

function drawSpellMembranePath(ctx, cx, cy, rx, ry, time, scale = 1) {
  const wobble = debugSettings.wobbleAmount / 10;
  const phase = time / 920;
  const points = 112;
  ctx.beginPath();
  for (let i = 0; i <= points; i += 1) {
    const angle = (Math.PI * 2 * i) / points;
    const ripple = wobble * (
      Math.sin((angle * 3) + phase) * 0.018
      + Math.sin((angle * 5) - (phase * 0.72)) * 0.012
    );
    const localScale = scale * (1 + ripple);
    const x = cx + Math.cos(angle) * rx * localScale;
    const y = cy + Math.sin(angle) * ry * localScale;
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.closePath();
}

function drawSpellBody(ctx, cx, cy, rx, ry) {
  const radius = Math.max(rx, ry);
  const body = ctx.createRadialGradient(cx - rx * 0.12, cy - ry * 0.08, radius * 0.06, cx, cy, radius);
  const white = clamp(debugSettings.spellBaseWhite, 0, 1);
  const center = mixRgb({ red: 214, green: 250, blue: 255 }, { red: 255, green: 255, blue: 255 }, white);
  const middle = mixRgb({ red: 108, green: 214, blue: 255 }, { red: 250, green: 254, blue: 255 }, white);
  const edge = mixRgb({ red: 64, green: 190, blue: 255 }, { red: 236, green: 252, blue: 255 }, white);
  body.addColorStop(0, rgba(center, 0.1 + (white * 0.04)));
  body.addColorStop(0.52, rgba(middle, 0.1 + (white * 0.03)));
  body.addColorStop(0.82, rgba(edge, 0.15 + (white * 0.04)));
  body.addColorStop(1, rgba(edge, 0.25 + (white * 0.08)));
  ctx.fillStyle = body;
  ctx.fillRect(cx - rx, cy - ry, rx * 2, ry * 2);
}

function drawSpellInterference(ctx, width, height, time, cx, cy, rx, ry) {
  const phase = (time / (debugSettings.rainbowDuration * 1000)) * Math.PI * 2;
  const alpha = Math.min(1, 0.052 * debugSettings.filmAlpha * debugSettings.filmSaturation * debugSettings.spellRainbowAlpha);
  const centerRainbow = clamp(debugSettings.spellRainbowCenter, 0, 1.5);
  const edgeRainbow = clamp(debugSettings.spellRainbowEdge, 0, 2);
  const stripeHeight = 4;
  ctx.save();
  ctx.globalCompositeOperation = "screen";
  for (let y = 0; y < height; y += stripeHeight) {
    const stripeCenter = y + (stripeHeight / 2);
    const t = stripeCenter / height;
    const dy = Math.min(1, Math.abs((stripeCenter - cy) / ry));
    const halfWidth = rx * Math.sqrt(Math.max(0, 1 - (dy * dy)));
    const left = cx - halfWidth;
    const right = cx + halfWidth;
    const verticalEdge = Math.pow(dy, 1.85);
    const rainbowPower = centerRainbow + (verticalEdge * edgeRainbow);
    const centerAlpha = alpha * (0.08 + (rainbowPower * 0.28));
    const sideAlpha = alpha * (0.42 + (rainbowPower * 0.5));
    const hue = 205
      + (70 * Math.sin((t * Math.PI * 2.2) + phase))
      + (36 * Math.sin((t * Math.PI * 5.1) - (phase * 0.52)));
    const lightness = 62 + (8 * Math.sin((t * Math.PI * 3.4) + (phase * 0.38)));
    const shimmer = 0.78 + (0.22 * Math.sin((t * Math.PI * 4.6) - phase));
    const gradient = ctx.createLinearGradient(left, stripeCenter, right, stripeCenter);
    gradient.addColorStop(0, `hsla(${hue}, 96%, ${lightness}%, ${sideAlpha * shimmer})`);
    gradient.addColorStop(0.34, `hsla(${hue + 18}, 92%, ${lightness + 5}%, ${centerAlpha * shimmer})`);
    gradient.addColorStop(0.5, `hsla(${hue + 34}, 88%, ${lightness + 8}%, ${centerAlpha * 0.7 * shimmer})`);
    gradient.addColorStop(0.66, `hsla(${hue + 18}, 92%, ${lightness + 5}%, ${centerAlpha * shimmer})`);
    gradient.addColorStop(1, `hsla(${hue}, 96%, ${lightness}%, ${sideAlpha * shimmer})`);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, y, width, stripeHeight + 1);
  }
  ctx.restore();
}

function drawSpellFilmArcs(ctx, cx, cy, rx, ry, time) {
  const phase = time / 1800;
  const rotation = time / 5200;
  const alpha = 0.13 * debugSettings.highlightAlpha;
  const arcs = [
    { start: -1.18, length: 0.72, scale: 0.9, width: 7, alpha: 1 },
    { start: 0.46, length: 0.46, scale: 0.86, width: 5, alpha: 0.58 },
    { start: 2.04, length: 0.58, scale: 0.88, width: 6, alpha: 0.7 }
  ];

  ctx.save();
  ctx.globalCompositeOperation = "screen";
  ctx.lineCap = "round";
  arcs.forEach((arc, index) => {
    const drift = Math.sin(phase + index * 1.7) * 0.08;
    const start = arc.start + rotation + drift;
    ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * arc.alpha})`;
    ctx.lineWidth = arc.width;
    ctx.beginPath();
    ctx.ellipse(
      cx,
      cy,
      rx * arc.scale,
      ry * arc.scale,
      0,
      start,
      start + arc.length
    );
    ctx.stroke();
  });
  ctx.restore();
}

function drawSpellHighlights(ctx, cx, cy, rx, ry, time) {
  ctx.save();
  drawSpellMembranePath(ctx, cx, cy, rx - 2, ry - 2, time, 1);
  ctx.clip();
  drawCurvedHighlight(ctx, cx, cy, rx, ry, -0.98, -0.36, 15, 0.58 * debugSettings.highlightAlpha);
  drawCurvedHighlight(ctx, cx, cy, rx, ry, 2.18, 2.66, 11, 0.34 * debugSettings.highlightAlpha);
  ctx.restore();
}

function drawCurvedHighlight(ctx, cx, cy, rx, ry, start, end, lineWidth, alpha) {
  if (alpha <= 0) return;
  const arcRx = rx * 0.82;
  const arcRy = ry * 0.82;

  ctx.save();
  ctx.globalCompositeOperation = "screen";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.filter = `blur(${Math.max(0.6, lineWidth * 0.08)}px)`;
  ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.82})`;
  ctx.lineWidth = lineWidth * 1.6;
  ctx.beginPath();
  ctx.ellipse(cx, cy, arcRx, arcRy, 0, start, end);
  ctx.stroke();
  ctx.filter = "none";
  ctx.restore();
}

function drawSpellOutline(ctx, cx, cy, rx, ry, time) {
  ctx.save();
  drawSpellMembranePath(ctx, cx, cy, rx - 3, ry - 3, time, 1);
  ctx.lineWidth = 4;
  ctx.strokeStyle = "rgba(232, 252, 255, 0.62)";
  ctx.stroke();
  ctx.restore();
}

function drawSpellPopSplash(ctx, cx, cy, radius, progress) {
  if (progress <= 0) return;
  const eased = 1 - Math.pow(1 - progress, 2.4);
  const alpha = Math.max(0, 1 - progress);
  ctx.save();
  ctx.globalCompositeOperation = "screen";

  for (let i = 0; i < 24; i += 1) {
    const angle = (Math.PI * 2 * i) / 24 + (i % 2 ? 0.08 : -0.04);
    const seed = Math.sin((i + 1) * 12.9898) * 43758.5453;
    const variance = seed - Math.floor(seed);
    const distance = radius * (0.82 + variance * 0.54) * eased;
    const size = 4 + ((i * 7) % 9);
    const x = cx + Math.cos(angle) * distance;
    const y = cy + Math.sin(angle) * distance;
    const hueAlpha = alpha * (0.42 + variance * 0.36);
    const drop = ctx.createRadialGradient(x, y, 0, x, y, size * 1.8);
    drop.addColorStop(0, `rgba(245, 254, 255, ${hueAlpha})`);
    drop.addColorStop(0.45, `rgba(120, 226, 255, ${hueAlpha * 0.62})`);
    drop.addColorStop(1, "rgba(120, 226, 255, 0)");
    ctx.fillStyle = drop;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

function setupDebugButtons() {
  els.debugSpellToggle.addEventListener("click", () => {
    ensureDebugPanels();
    els.debugSpellPanel.classList.toggle("is-hidden");
    els.debugSleepBubblePanel.classList.add("is-hidden");
  });
  els.debugSleepBubbleToggle.addEventListener("click", () => {
    ensureDebugPanels();
    els.debugSleepBubblePanel.classList.toggle("is-hidden");
    els.debugSpellPanel.classList.add("is-hidden");
  });
}

function ensureDebugPanels() {
  if (debugPanelsInitialized) return;
  debugPanelsInitialized = true;
  els.debugSpellPanel = createDebugPanel(DEBUG_PANEL_DEFINITIONS.spell);
  els.debugSleepBubblePanel = createDebugPanel(DEBUG_PANEL_DEFINITIONS.sleepBubble);
  els.stage.append(els.debugSpellPanel, els.debugSleepBubblePanel);

  els.stage.querySelectorAll("[data-debug-key]").forEach((input) => {
    const key = input.dataset.debugKey;
    input.addEventListener("input", () => {
      debugSettings[key] = Number(input.value);
      applyDebugSettings();
      updateView();
    });
  });
  els.debugSpellPreview.addEventListener("click", async () => {
    els.debugSpellPreview.disabled = true;
    try {
      resetSpellAnimationStyles();
      els.spellOrb.classList.remove("spell-fly");
      void els.spellOrb.offsetWidth;
      setMessage("シャボン玉の動きを確認中。");
      startSpellCanvas("fly");
      els.spellOrb.classList.add("spell-fly");
      await animateSpellTravel(debugSettings.spellDuration * 1000);
      await animateSpellHold(900);
      await animateSpellPop();
    } finally {
      els.spellOrb.classList.remove("spell-fly");
      resetSpellAnimationStyles();
      els.debugSpellPreview.disabled = false;
    }
  });
  els.debugSleepBubblePreview.addEventListener("click", async () => {
    els.debugSleepBubblePreview.disabled = true;
    const previous = {
      sweetDreaming: state.sweetDreaming,
      sweetRoomStart: state.sweetRoomStart,
      sweetRoomCaptured: state.sweetRoomCaptured,
      sweetRoomSquishStart: state.sweetRoomSquishStart,
      sleepPreviewLevel: debugSettings.sleepPreviewLevel
    };
    try {
      debugSettings.sleepPreviewLevel = 9;
      await wait(msUntilSleepBubblePeak());
      state.sweetDreaming = true;
      state.sweetRoomCaptured = false;
      state.sweetRoomSquishStart = 0;
      state.sweetRoomStart = performance.now();
      setMessage("鼻ちょうちんの包み込みを確認中。");
      updateView();
      await wait(getSweetRoomCaptureDelay());
      state.sweetRoomCaptured = true;
      state.sweetRoomSquishStart = performance.now();
      updateView();
      await wait(getSweetRoomMoveDuration() - getSweetRoomCaptureDelay());
      await wait(debugSettings.sweetRoomSquishDuration * 1000);
    } finally {
      state.sweetDreaming = previous.sweetDreaming;
      state.sweetRoomStart = previous.sweetRoomStart;
      state.sweetRoomCaptured = previous.sweetRoomCaptured;
      state.sweetRoomSquishStart = previous.sweetRoomSquishStart;
      debugSettings.sleepPreviewLevel = previous.sleepPreviewLevel;
      updateView();
      els.debugSleepBubblePreview.disabled = false;
    }
  });
  applyDebugSettings();
}

function createDebugPanel(definition) {
  const panel = document.createElement("aside");
  panel.className = "debug-panel is-hidden";
  panel.id = definition.id;

  const title = document.createElement("div");
  title.className = "debug-title";
  title.textContent = definition.title;
  panel.appendChild(title);

  definition.controls.forEach(([labelText, key, min, max, step, unit]) => {
    const label = document.createElement("label");
    const span = document.createElement("span");
    span.append(document.createTextNode(`${labelText} `));

    const value = document.createElement("b");
    value.dataset.debugValue = key;
    span.appendChild(value);

    const input = document.createElement("input");
    input.type = "range";
    input.min = String(min);
    input.max = String(max);
    input.step = String(step);
    input.value = String(debugSettings[key]);
    input.dataset.debugKey = key;
    if (unit) input.dataset.debugUnit = unit;

    label.append(span, input);
    panel.appendChild(label);
  });

  const preview = document.createElement("button");
  preview.type = "button";
  preview.id = definition.previewId;
  preview.textContent = definition.previewLabel;
  panel.appendChild(preview);
  els[definition.previewKey] = preview;

  return panel;
}

function updateView() {
  els.allySprite.src = currentAllySprite();
  els.enemySprite.src = currentEnemySprite();
  document.documentElement.style.setProperty("--sleep-bubble-level-scale", getSleepBubbleScale());

  const allyHp = Math.max(0, state.ally.hp);
  const allyMp = Math.max(0, state.ally.mp);
  els.allyHpText.textContent = `HP ${allyHp} / ${state.ally.maxHp}`;
  els.allyMpText.textContent = `MP ${allyMp} / ${state.ally.maxMp}`;
  els.allyHpFill.style.width = `${Math.round(Math.max(0, Math.min(1, allyHp / state.ally.maxHp)) * 100)}%`;
  els.allyMpFill.style.width = `${Math.round(Math.max(0, Math.min(1, allyMp / state.ally.maxMp)) * 100)}%`;
  els.embarrassmentFill.style.width = `${Math.round(Math.max(0, Math.min(100, state.embarrassment)))}%`;
  const enemyHpRatio = Math.max(0, Math.min(1, state.enemy.hp / state.enemy.maxHp));
  els.enemyHpGaugeFill.style.width = `${Math.round(enemyHpRatio * 100)}%`;
  const gaugeBase = data.actors.enemy.specialGauge.normalMax;
  const gaugeMax = data.actors.enemy.specialGauge.max;
  const baseGaugeRatio = Math.max(0, Math.min(1, state.enemyGauge / gaugeBase));
  const overGaugeRatio = Math.max(0, Math.min(1, (state.enemyGauge - gaugeBase) / (gaugeMax - gaugeBase)));
  els.enemyGaugeFill.style.width = `${Math.round(baseGaugeRatio * 100)}%`;
  els.enemyGaugeOverfill.style.width = `${Math.round(overGaugeRatio * 100)}%`;
  els.enemyGauge.classList.toggle("is-full", state.enemyGauge >= gaugeBase);
  els.enemyGauge.classList.toggle("is-overfull", state.enemyGauge >= gaugeMax);
  const stateEntries = activeStatusEntries(state.ally);
  if (state.sleepinessLevel > 0) {
    stateEntries.push({
      label: `${data.sleepiness.label}${state.sleepinessLevel}`,
      description: data.sleepiness.description
    });
  }
  renderAllyStatuses(stateEntries);

  const previewSleeping = (hasStatus(state.ally, "sleep") && state.allyPose !== "damage") || debugSettings.sleepPreviewLevel > 0;
  els.allySlot.classList.toggle("sleeping", previewSleeping);
  els.allySlot.classList.toggle("drowsy", hasStatus(state.ally, "utouto") && state.allyPose !== "damage");
  els.allySlot.classList.toggle("sitting", (hasStatus(state.ally, "sit") || state.allyPose === "sit") && state.allyPose !== "damage");
  els.allySlot.classList.toggle("sweet-dreaming", state.sweetDreaming);
  els.allySlot.classList.toggle("sweet-room-captured", state.sweetRoomCaptured);
  updateSleepBubbleCanvas(previewSleeping || state.sweetDreaming);
  updateCommandSelection();
  updateSkillSelection();
}

function renderAllyStatuses(entries) {
  els.allyState.innerHTML = "";
  const visibleEntries = entries.length ? entries : [{ label: "正常", description: "状態異常はない。" }];
  visibleEntries.forEach((entry) => {
    const item = document.createElement("span");
    item.textContent = entry.label;
    item.addEventListener("mouseenter", (event) => showStatusTooltip(entry.description, event));
    item.addEventListener("mousemove", (event) => moveStatusTooltip(event));
    item.addEventListener("mouseleave", hideStatusTooltip);
    els.allyState.appendChild(item);
  });
}

function currentAllySprite() {
  if (state.sweetRoomCaptured) return state.ally.sprites.sweetRoom ?? state.ally.sprites.damage;
  if (debugSettings.sleepPreviewLevel > 0) return state.ally.sprites.sleep;
  if (state.allyPose === "damage") return state.ally.sprites.damage;
  if (state.allyPose === "sit") return state.ally.sprites.sit;
  if (hasStatus(state.ally, "sleep")) return state.ally.sprites.sleep;
  if (hasStatus(state.ally, "sit")) return state.ally.sprites.sit;
  if (hasStatus(state.ally, "yawn")) return state.ally.sprites.yawn;
  if (hasStatus(state.ally, "utouto")) return state.ally.sprites.sleep;
  if (hasStatus(state.ally, "mojimoji")) return state.ally.sprites.mojimoji ?? state.ally.sprites.normal;
  if (state.sleepinessLevel > 0) return state.ally.sprites.sleepiness ?? state.ally.sprites.normal;
  return state.ally.sprites.normal;
}

function currentEnemySprite() {
  if (state.enemyPose === "sleepBubble") return state.enemy.sprites.sleepBubble ?? state.enemy.sprites.normal;
  if (state.enemyPose === "yawn") return state.enemy.sprites.yawn;
  return state.enemy.sprites.normal;
}

function renderCommands() {
  els.commandGrid.innerHTML = "";
  data.commands.forEach((command, index) => {
    const button = document.createElement("button");
    button.className = "command-button";
    button.type = "button";
    button.dataset.command = command.id;
    button.textContent = command.label;
    button.addEventListener("click", () => chooseCommand(index));
    els.commandGrid.appendChild(button);
  });
  updateCommandSelection();
}

function renderSkillPanel() {
  els.skillList.innerHTML = "";
  currentPanelOptions().forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "skill-button";
    button.type = "button";
    button.dataset.option = option.id;

    const name = document.createElement("span");
    name.className = "skill-name";
    name.textContent = option.name;
    button.appendChild(name);

    const meta = document.createElement("span");
    meta.className = "skill-mp";
    meta.textContent = panelOptionMeta(option);
    button.appendChild(meta);

    button.addEventListener("click", () => {
      if (state.commandMode === "item") {
        chooseItem(index);
      } else {
        chooseSkill(index);
      }
    });
    button.addEventListener("mouseenter", () => {
      if (state.commandMode === "item") {
        state.selectedItem = index;
      } else if (state.commandMode === "skill") {
        state.selectedSkill = index;
      }
      updateSkillSelection();
    });
    els.skillList.appendChild(button);
  });
  updateSkillPanelVisibility();
  updateSkillSelection();
}

function currentPanelOptions() {
  if (state.commandMode === "item") return data.items ?? [];
  return state.ally.spells;
}

function panelOptionMeta(option) {
  if (state.commandMode === "item") return `x${state.inventory[option.id] ?? 0}`;
  const cost = option.mpCost ?? 0;
  return cost > 0 ? `MP${cost}` : "";
}

function updateCommandSelection() {
  [...els.commandGrid.children].forEach((button, index) => {
    const option = data.commands[index];
    const disabled = option ? isCommandSealed(option.id) : false;
    button.disabled = disabled;
    button.classList.toggle("unavailable", disabled);
    button.classList.toggle("selected", index === state.selectedCommand && !disabled);
  });
}

function updateSkillPanelVisibility() {
  els.skillPanel.classList.toggle("is-hidden", state.commandMode !== "skill" && state.commandMode !== "item");
}

function updateSkillSelection() {
  updateSkillPanelVisibility();
  [...els.skillList.children].forEach((button, index) => {
    const option = currentPanelOptions()[index];
    const unavailable = state.commandMode === "skill"
      ? state.ally.mp < (option?.mpCost ?? 0)
      : (state.inventory[option?.id] ?? 0) <= 0;
    const selectedIndex = state.commandMode === "item" ? state.selectedItem : state.selectedSkill;
    button.classList.toggle("unavailable", unavailable);
    button.classList.toggle("selected", (state.commandMode === "skill" || state.commandMode === "item") && index === selectedIndex && !state.busy);
  });
  updatePanelHelp();
}

function updatePanelHelp() {
  if (state.commandMode !== "skill" && state.commandMode !== "item") {
    els.skillHelp.textContent = "";
    return;
  }
  const selectedIndex = state.commandMode === "item" ? state.selectedItem : state.selectedSkill;
  const option = currentPanelOptions()[selectedIndex];
  els.skillHelp.textContent = option?.description ?? "";
}

function chooseCommand(index) {
  if (state.busy || state.activeSide !== "ally" || state.ended) return;
  const option = data.commands[index];
  if (!option) return;
  state.selectedCommand = index;
  updateCommandSelection();
  if ((state.commandMode === "skill" || state.commandMode === "item") && option.id !== "magic" && option.id !== "item") {
    state.commandMode = "main";
    updateSkillPanelVisibility();
  }
  if (isCommandSealed(option.id)) {
    rejectCommandSelection(text(data.messages.commandSealed, { actor: state.ally.name }));
    return;
  }
  if (option.id === "magic") {
    state.commandMode = "skill";
    state.selectedSkill = 0;
    renderSkillPanel();
    setMessage("スキルを選んでください。");
    return;
  }
  const commandId = option.id;
  if (commandId === "item") {
    state.commandMode = "item";
    state.selectedItem = 0;
    renderSkillPanel();
    setMessage(data.messages.chooseItem);
    return;
  }
  executeRound(commandId);
}

function chooseSkill(index) {
  if (state.busy || state.activeSide !== "ally" || state.ended || state.commandMode !== "skill") return;
  const skill = state.ally.spells[index];
  if (!skill) return;
  state.selectedSkill = index;
  updateSkillSelection();
  if (state.ally.mp < (skill.mpCost ?? 0)) {
    rejectCommandSelection(data.messages.notEnoughMp, "スキルを選んでください。");
    return;
  }
  executeRound(`skill:${skill.id}`);
}

function chooseItem(index) {
  if (state.busy || state.activeSide !== "ally" || state.ended || state.commandMode !== "item") return;
  const item = (data.items ?? [])[index];
  if (!item) return;
  state.selectedItem = index;
  updateSkillSelection();
  if ((state.inventory[item.id] ?? 0) <= 0) {
    rejectCommandSelection(data.messages.noItemStock, data.messages.chooseItem);
    return;
  }
  if (item.type === "hp" && state.ally.hp >= state.ally.maxHp) {
    rejectCommandSelection(data.messages.itemNoEffect, data.messages.chooseItem);
    return;
  }
  if (item.type === "mp" && state.ally.mp >= state.ally.maxMp) {
    rejectCommandSelection(data.messages.itemNoEffect, data.messages.chooseItem);
    return;
  }
  executeRound(`item:${item.id}`);
}

function showStatusTooltip(description, event) {
  if (!description) return;
  els.statusTooltip.textContent = description;
  els.statusTooltip.classList.remove("is-hidden");
  moveStatusTooltip(event);
}

function moveStatusTooltip(event) {
  if (els.statusTooltip.classList.contains("is-hidden")) return;
  const shellRect = document.querySelector(".battle-shell").getBoundingClientRect();
  const tooltipRect = els.statusTooltip.getBoundingClientRect();
  const x = Math.min(shellRect.width - tooltipRect.width - 12, Math.max(12, event.clientX - shellRect.left + 14));
  const y = Math.min(shellRect.height - tooltipRect.height - 12, Math.max(12, event.clientY - shellRect.top - tooltipRect.height - 10));
  els.statusTooltip.style.left = `${x}px`;
  els.statusTooltip.style.top = `${y}px`;
}

function hideStatusTooltip() {
  els.statusTooltip.classList.add("is-hidden");
}

function rejectCommandSelection(message, restoreMessage = data.messages.chooseCommand) {
  setBusy(true);
  setMessage(message);
  wait(850).then(() => {
    if (state.ended) return;
    setMessage(restoreMessage);
    setBusy(false);
    updateCommandSelection();
    updateSkillSelection();
  });
}

async function startBattle() {
  setupDebugButtons();
  setBusy(true);
  setActionTitle("");
  setMessage("");
  await wait(260);
  setMessage(data.messages.introEncounter);
  els.shell.classList.add("intro-encounter");
  await wait(980);
  state.introReady = true;
  els.shell.classList.add("intro-ready");
  if (state.introStartRequested) beginCommandPhase();
}

function requestCommandPhaseStart() {
  if (state.introComplete) return;
  if (!state.introReady) {
    state.introStartRequested = true;
    return;
  }
  beginCommandPhase();
}

function beginCommandPhase() {
  if (state.introComplete) return;
  state.introComplete = true;
  state.introReady = false;
  els.shell.classList.remove("intro-mode");
  els.shell.classList.remove("intro-encounter");
  els.shell.classList.remove("intro-ready");
  setActionTitle("BATTLE START");
  startRound(false, { keepActionTitle: true });
  setMessage(data.messages.chooseCommand);
  scheduleBattleImagePreload();
}

function scheduleBattleImagePreload() {
  if (state.preloadStarted) return;
  state.preloadStarted = true;
  const preload = () => {
    preloadBattleImages();
  };
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(preload, { timeout: 1800 });
  } else {
    window.setTimeout(preload, 600);
  }
}

function collectBattleImagePaths() {
  const paths = new Set();
  Object.values(data.assets ?? {}).forEach((path) => paths.add(path));
  Object.values(data.actors ?? {}).forEach((actor) => {
    Object.values(actor.sprites ?? {}).forEach((path) => paths.add(path));
  });
  return [...paths].filter(Boolean);
}

async function preloadBattleImages() {
  const paths = collectBattleImagePaths();
  await Promise.all(paths.map((src) => preloadImage(src)));
}

function preloadImage(src) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = async () => {
      try {
        if (image.decode) await image.decode();
      } catch {
        // The image is still usable even if decode() rejects.
      }
      resolve();
    };
    image.onerror = () => resolve();
    image.src = src;
  });
}

async function startRound(showPrompt = true, options = {}) {
  if (state.ended) return;
  if (checkEnd()) return;
  state.activeSide = "ally";
  state.commandMode = "main";
  state.selectedCommand = 0;
  if (!options.keepActionTitle) setActionTitle("");
  renderCommands();
  updateView();

  if (hasBlockingStatus()) {
    await executeRound(null);
    return;
  }

  if (showPrompt) setMessage(data.messages.chooseCommand);
  setBusy(false);
}

async function executeRound(commandId) {
  setBusy(true);
  state.activeSide = null;
  state.commandMode = "main";
  updateSkillPanelVisibility();
  const playerAction = createPlayerAction(commandId);
  const enemyAction = chooseEnemyAction(playerAction);
  const order = [playerAction, enemyAction].sort((a, b) => {
    if (b.priority === a.priority) {
      if (b.actor.speed === a.actor.speed) return a.actor.side === "ally" ? -1 : 1;
      return b.actor.speed - a.actor.speed;
    }
    return b.priority - a.priority;
  });

  for (const action of order) {
    if (state.ended) return;
    if (checkEnd()) return;
    if (action.actor.side === "ally") {
      await runPlayerCommand(action, enemyAction);
    } else {
      await runEnemyAction(action);
    }
    if (state.ended) return;
  }

  state.ally.defending = false;
  await resolveRoundEndRecoveries();
  if (checkEnd()) return;
  await chargeEnemyGaugeFromSleep();
  await startRound();
}

function createPlayerAction(commandId) {
  return {
    actor: state.ally,
    id: commandId,
    priority: getPlayerActionPriority(commandId)
  };
}

function getPlayerActionPriority(commandId) {
  if (commandId === "run") return 4;
  if (commandId === "defend") return 3;
  if (commandId === "skill:deepBreath") return 0;
  return 1;
}

function chooseEnemyAction() {
  const id = chooseEnemyActionId();

  if (id === "sleepBubble" && !canUseSleepBubble()) {
    return createEnemyAction(hasStatus(state.ally, "sleep") ? "noseBubblePop" : "sweetBreath");
  }

  return createEnemyAction(id);
}

function chooseEnemyActionId() {
  const ai = window.ENEMY_AI;
  const rules = ai?.rules ?? [];
  for (const rule of rules) {
    if (!matchesEnemyAiCondition(rule.when ?? {})) continue;
    if (rule.action) return rule.action;
    if (rule.weights) return pickWeighted(resolveEnemyAiWeights(rule.weights));
  }
  return ai?.fallback ?? "sweetBreath";
}

function createEnemyAction(id) {
  return {
    actor: state.enemy,
    id,
    priority: id === "sweetDream" ? 5 : id === "earFuu" ? 2 : 1
  };
}

function matchesEnemyAiCondition(condition) {
  if (condition.always) return true;
  const sleepLevel = getSleepLevel();
  const sleepTurns = state.ally.statuses.sleep?.remaining ?? 0;
  if (condition.status && !hasStatus(state.ally, condition.status)) return false;
  if (condition.anyStatus && !condition.anyStatus.some((id) => hasStatus(state.ally, id))) return false;
  if (condition.canUseSleepBubble !== undefined && canUseSleepBubble() !== condition.canUseSleepBubble) return false;
  if (condition.sleepLevelAtLeast !== undefined && sleepLevel < condition.sleepLevelAtLeast) return false;
  if (condition.sleepLevelBelow !== undefined && sleepLevel >= condition.sleepLevelBelow) return false;
  if (condition.sleepTurnsAtMost !== undefined && sleepTurns > condition.sleepTurnsAtMost) return false;
  if (condition.sleepTurnsEquals !== undefined && sleepTurns !== condition.sleepTurnsEquals) return false;
  if (condition.sleepBubbleBoostAtLeast !== undefined && state.sleepBubbleBoost < condition.sleepBubbleBoostAtLeast) return false;
  if (condition.sleepinessAtLeast !== undefined && state.sleepinessLevel < condition.sleepinessAtLeast) return false;
  if (condition.enemyGaugeAtLeast !== undefined && state.enemyGauge < condition.enemyGaugeAtLeast) return false;
  return true;
}

function resolveEnemyAiWeights(weights) {
  return weights.map(([id, weight]) => [id, resolveEnemyAiWeight(weight)]);
}

function resolveEnemyAiWeight(weight) {
  if (typeof weight === "number") return weight;
  if (!weight || typeof weight !== "object") return 0;
  const sleepiness = Math.min(
    weight.maxSleepiness ?? Number.POSITIVE_INFINITY,
    Math.max(weight.minSleepiness ?? 0, state.sleepinessLevel)
  );
  return (weight.base ?? 0)
    + ((weight.sleepBubbleBoost ?? 0) * Math.max(0, state.sleepBubbleBoost))
    + ((weight.sleepiness ?? 0) * sleepiness);
}

function pickWeighted(entries) {
  const total = entries.reduce((sum, [, weight]) => sum + Math.max(0, weight), 0);
  let roll = Math.random() * total;
  for (const [id, weight] of entries) {
    roll -= Math.max(0, weight);
    if (roll <= 0) return id;
  }
  return entries[entries.length - 1][0];
}

async function runPlayerCommand(action, enemyAction) {
  const commandId = action.id;
  setActionTitle("");
  if (hasStatus(state.ally, "yawn")) {
    state.ally.statuses.yawn.remaining -= 1;
    setMessage(text(data.messages.yawnSkip, { actor: state.ally.name }));
    updateView();
    await wait(1200);
    if (state.ally.statuses.yawn.remaining <= 0) {
      scheduleRoundEndRecovery("yawn", data.messages.yawnRecover);
      updateView();
    }
    await tickStatusEffects();
    return;
  }

  if (hasStatus(state.ally, "sit")) {
    state.ally.statuses.sit.remaining -= 1;
    setMessage(text(data.messages.sitSkip, { actor: state.ally.name }));
    updateView();
    await wait(1200);
    if (state.ally.statuses.sit.remaining <= 0) {
      scheduleRoundEndRecovery("sit", data.messages.sitRecover);
      updateView();
    }
    await tickStatusEffects();
    return;
  }

  if (hasStatus(state.ally, "utouto")) {
    state.ally.statuses.utouto.remaining -= 1;
    setMessage(text(data.messages.utoutoSkip, { actor: state.ally.name }));
    updateView();
    await wait(1200);
    if (state.ally.statuses.utouto.remaining <= 0) {
      scheduleRoundEndRecovery("utouto", data.messages.utoutoRecover);
      updateView();
    }
    await tickStatusEffects();
    return;
  }

  if (hasStatus(state.ally, "mojimoji")) {
    state.ally.statuses.mojimoji.remaining -= 1;
    setMessage(text(data.messages.mojimojiSkip, { actor: state.ally.name }));
    updateView();
    await wait(1200);
    if (state.ally.statuses.mojimoji.remaining <= 0) {
      scheduleRoundEndRecovery("mojimoji", data.messages.mojimojiRecover);
      updateView();
    }
    await tickStatusEffects();
    return;
  }

  if (hasStatus(state.ally, "sleep")) {
    state.ally.statuses.sleep.remaining -= 1;
    const remaining = Math.max(0, state.ally.statuses.sleep.remaining);
    if (remaining > 0) {
      setMessage(text(data.messages.sleepSkip, { actor: state.ally.name, turns: remaining }));
      updateView();
      await wait(1300);
    } else {
      scheduleRoundEndRecovery("sleep", data.messages.sleepNaturalWake);
      setMessage(text(data.messages.sleepSkip, { actor: state.ally.name, turns: 0 }));
      updateView();
      await wait(1200);
    }
    await tickStatusEffects();
    return;
  }

  if (commandId === "attack") {
    setActionTitle("");
    await physicalAttack(state.ally, state.enemy);
  } else if (commandId?.startsWith("skill:")) {
    if (hasStatus(state.ally, "earFuu")) {
      setMessage(text(data.messages.weakSkillSealed, { actor: state.ally.name }));
      updateView();
      await wait(1000);
      await tickStatusEffects();
      return;
    }
    await castPlayerSkill(commandId.replace("skill:", ""), enemyAction);
  } else if (commandId?.startsWith("item:")) {
    await usePlayerItem(commandId.replace("item:", ""));
  } else if (commandId === "defend") {
    setActionTitle("ぼうぎょ");
    state.ally.defending = true;
    setMessage(text(data.messages.defend, { actor: state.ally.name }));
    await wait(850);
  } else if (commandId === "run") {
    setActionTitle("にげる");
    setMessage(data.messages.cannotRun);
    await wait(850);
  }
  await tickStatusEffects();
}

async function runEnemyAction(action) {
  setActionTitle("");
  state.enemyTurns += 1;

  if (action.id === "yawn") {
    await castYawn();
  } else if (action.id === "sleepBubble") {
    await castSleep();
  } else if (action.id === "earFuu") {
    await castWeak();
  } else if (action.id === "sweetBreath") {
    await castSweetBreath();
  } else if (action.id === "giggle") {
    await giggle();
  } else if (action.id === "noseBubblePop") {
    await castNoseBubblePop();
  } else if (action.id === "sweetDream") {
    await castSweetDream();
  } else {
    await physicalAttack(state.enemy, state.ally);
  }
}

async function chargeEnemyGaugeFromSleep() {
  const sleepLevel = getSleepLevel();
  const sleepinessLevel = state.sleepinessLevel;
  if (sleepLevel <= 0 && sleepinessLevel <= 0) return;
  const amount = sleepLevel > 0
    ? sleepLevel >= 7 ? 100 : sleepLevel === 6 ? 75 : sleepLevel * 10
    : sleepinessLevel * 10;
  recoverEnemyGauge(amount);
  setMessage(sleepLevel > 0 ? data.messages.sleepGaugeCharge : data.messages.sleepinessGaugeCharge);
  await wait(850);
}

async function physicalAttack(attacker, target) {
  setActionTitle(attacker.side === "ally" ? "" : "こうげき");
  const attackerWrap = attacker.side === "ally" ? els.allySpriteWrap : els.enemySpriteWrap;
  const targetWrap = target.side === "ally" ? els.allySpriteWrap : els.enemySpriteWrap;
  const damageEl = target.side === "ally" ? els.allyDamage : els.enemyDamage;
  const baseDamage = Math.max(4, attacker.attack - Math.floor(target.defense / 2));
  const wasDefending = target.defending;
  const damage = target.defending ? Math.ceil(baseDamage / 2) : baseDamage;

  attackerWrap.classList.remove("attack-lunge");
  void attackerWrap.offsetWidth;
  attackerWrap.classList.add("attack-lunge");
  await wait(260);

  target.hp = Math.max(0, target.hp - damage);
  target.defending = false;
  if (target.side === "ally" && !wasDefending) {
    showAllyDamagePose(target.hp <= 0 ? 1000 : 400);
  }
  popDamage(damageEl, damage);
  targetWrap.classList.remove("hit");
  void targetWrap.offsetWidth;
  targetWrap.classList.add("hit");
  setMessage(text(
    attacker.side === "ally" ? data.messages.playerAttack : data.messages.enemyAttack,
    { actor: attacker.name, target: target.name, damage }
  ));
  updateView();
  await wait(520);

  if (target.side === "ally" && target.hp <= 0) {
    checkEnd();
    return;
  }

  if (target.side === "ally" && hasStatus(target, "sleep") && data.statuses.sleep.wakeOnPhysicalHit) {
    await popSleepBubble();
    removeStatus(state.ally, "sleep");
    setMessage(text(data.messages.sleepHitWake, { actor: target.name }));
    updateView();
    await wait(1050);
  } else {
    await wait(380);
  }
}

async function castSleep() {
  const skill = data.actors.enemy.skills[0];
  const wasYawning = hasStatus(state.ally, "yawn");
  const wasSleeping = hasStatus(state.ally, "sleep");
  if (!canUseSleepBubble()) {
    await physicalAttack(state.enemy, state.ally);
    return;
  }
  const sleepBubbleBoostLevel = wasSleeping ? 1 : Math.min(5, state.sleepBubbleBoost + 1);
  const sleepLevelPower = getSleepBubblePower({ wasSleeping, wasYawning });
  spendEnemyGauge(skill.gaugeCost);
  state.enemyPose = "sleepBubble";
  if (state.enemyPoseTimer) clearTimeout(state.enemyPoseTimer);
  state.enemyPoseTimer = setTimeout(() => {
    if (state.enemyPose === "sleepBubble") {
      state.enemyPose = null;
      updateView();
    }
    state.enemyPoseTimer = null;
  }, 1000);
  setActionTitle(skill.name);
  updateView();
  els.enemySprite.classList.remove("cast-spell");
  void els.enemySprite.offsetWidth;
  els.enemySprite.classList.add("cast-spell");
  const sleepCastMessage = text(data.messages.sleepCast, { actor: state.enemy.name, skill: skill.name });
  setMessage(sleepCastMessage);

  els.spellOrb.classList.remove("spell-fly");
  resetSpellAnimationStyles();
  void els.spellOrb.offsetWidth;
  startSpellCanvas("fly");
  els.spellOrb.classList.add("spell-fly");
  setMessage(`${sleepCastMessage}\n${text(getSleepBubbleApproachMessage(sleepBubbleBoostLevel), { target: state.ally.name })}`);
  await animateSpellTravel(debugSettings.spellDuration * 1000);

  if (state.ally.defending) {
    await animateSpellPop();
    els.spellOrb.classList.remove("spell-fly");
    resetSpellAnimationStyles();
    state.ally.defending = false;
    state.enemyPose = null;
    updateView();
    appendMessage(text(data.messages.statusBlocked, { target: state.ally.name }));
    await wait(1150);
    return;
  }

  await animateSpellHold(2000);
  await animateSpellPop();
  els.spellOrb.classList.remove("spell-fly");
  resetSpellAnimationStyles();

  clearIncapacitatingStatusesForSleep();
  const sleepLevel = applySleepStatus(getSleepDuration(skill), sleepLevelPower, skill.maxStackDuration);
  state.sleepinessLevel = 0;
  state.ally.defending = false;

  if (skill.damage > 0) {
    const sleepDamage = skill.damage;
    state.ally.hp = Math.max(0, state.ally.hp - sleepDamage);
    const lethalSleepDamage = state.ally.hp <= 0;
    showAllyDamagePose(lethalSleepDamage ? 1000 : 400);
    popDamage(els.allyDamage, sleepDamage);
    appendMessage(text(data.messages.sleepDamage, { target: state.ally.name, damage: sleepDamage }));
    state.enemyPose = null;
    updateView();
    await wait(lethalSleepDamage ? 520 : 700);
    if (checkEnd()) return;
  }

  updateView();
  restartSleepBubbleAnimation();
  const sleepMessage = wasYawning
    ? data.messages.sleepYawnApplied
    : sleepLevel > 1
      ? data.messages.sleepLevelUp
      : data.messages.sleepApplied;
  appendMessage(text(sleepMessage, { target: state.ally.name, level: sleepLevel }));
  await wait(1100);
  if (await triggerSweetDreamIfReady()) return;
}

async function castNoseBubblePop() {
  const skill = data.actors.enemy.skills.find((entry) => entry.id === "noseBubblePop");
  setActionTitle(skill.name);
  els.enemySpriteWrap.classList.remove("attack-lunge");
  void els.enemySpriteWrap.offsetWidth;
  els.enemySpriteWrap.classList.add("attack-lunge");
  setMessage(text(data.messages.noseBubblePopCast, { actor: state.enemy.name, skill: skill.name }));
  await wait(320);

  if (!hasStatus(state.ally, skill.requiresStatus)) {
    appendMessage(`${state.ally.name}は眠っていない。`);
    await wait(850);
    return;
  }

  const sleepLevel = getSleepLevel();
  await popSleepBubble();
  removeStatus(state.ally, "sleep");

  const levelBonus = Math.max(0, sleepLevel - 1);
  state.sleepBubbleBoost = levelBonus;
  const recovery = skill.gaugeRecovery + (levelBonus * skill.gaugeRecoveryPerSleepLevel);
  const mpDamage = Math.min(state.ally.mp, skill.mpDamage);
  state.ally.mp = Math.max(0, state.ally.mp - mpDamage);
  state.ally.defending = false;
  showAllyDamagePose();
  addStatus(state.ally, "sit", skill.duration);
  recoverEnemyGauge(recovery);
  popDamage(els.allyDamage, `MP-${mpDamage}`);
  els.allySpriteWrap.classList.remove("hit");
  void els.allySpriteWrap.offsetWidth;
  els.allySpriteWrap.classList.add("hit");
  updateView();
  appendMessage(text(data.messages.noseBubblePopDamage, {
    target: state.ally.name,
    mpDamage
  }));
  await wait(850);
  if (checkEnd()) return;

  if (state.sleepBubbleBoost > 0) {
    appendMessage(text(data.messages.sleepBubbleBoost, {
      actor: state.enemy.name,
      level: state.sleepBubbleBoost + 1
    }));
    await wait(950);
  }

  appendMessage(text(data.messages.sitApplied, { target: state.ally.name }));
  updateView();
  await wait(1000);
}

async function castYawn() {
  const skill = data.actors.enemy.skills.find((entry) => entry.id === "yawn");
  state.enemyPose = "yawn";
  setActionTitle(skill.name);
  updateView();
  els.enemySprite.classList.remove("cast-spell");
  void els.enemySprite.offsetWidth;
  els.enemySprite.classList.add("cast-spell");
  setMessage(text(data.messages.yawnCast, { actor: state.enemy.name, skill: skill.name }));
  await wait(700);
  recoverEnemyGauge(skill.gaugeRecovery);

  if (!state.ally.defending) {
    state.enemyPose = null;
    updateView();
    await wait(850);
    return;
  }

  state.ally.defending = false;
  addStatus(state.ally, "yawn", skill.duration);
  els.allySpriteWrap.classList.remove("weak-hit");
  void els.allySpriteWrap.offsetWidth;
  els.allySpriteWrap.classList.add("weak-hit");
  state.enemyPose = null;
  updateView();
  appendMessage(text(data.messages.yawnApplied, { target: state.ally.name }));
  await wait(1150);
}

function resetSpellAnimationStyles() {
  if (state.spellAnimationFrame) {
    cancelAnimationFrame(state.spellAnimationFrame);
    state.spellAnimationFrame = null;
  }
  stopSpellCanvas();
  els.spellOrb.style.transform = "";
  els.spellOrb.style.opacity = "";
  const core = els.spellOrb.querySelector(".spell-core");
  core.style.transform = "";
}

function animateSpellTravel(duration) {
  const core = els.spellOrb.querySelector(".spell-core");
  const travelX = debugSettings.spellTravelX;
  const driftY = Math.round(debugSettings.spellEndY * 0.52);
  const floatEndY = Math.round(debugSettings.spellEndY * 0.48);
  const wave = debugSettings.spellWave;
  const cycles = 2;

  return new Promise((resolve) => {
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const easedGrow = 1 - Math.pow(1 - progress, 2.6);
      const floatBase = floatEndY * progress;
      const floatWave = Math.sin(progress * cycles * Math.PI * 2) * wave * (1 - progress * 0.08);
      const x = travelX * progress;
      const y = driftY * progress;
      const opacity = progress < 0.08 ? progress / 0.08 : 0.96;
      const scaleX = 0.18 + (0.84 * easedGrow) + Math.sin(progress * Math.PI * 6) * 0.025 * progress;
      const scaleY = 0.17 + (0.81 * easedGrow) + Math.cos(progress * Math.PI * 6) * 0.025 * progress;

      els.spellOrb.style.transform = `translate(${x}px, ${y}px)`;
      els.spellOrb.style.opacity = String(opacity);
      core.style.transform = `translateY(${floatBase + floatWave}px) scale(${scaleX}, ${scaleY})`;

      if (progress < 1) {
        state.spellAnimationFrame = requestAnimationFrame(step);
      } else {
        state.spellAnimationFrame = null;
        els.spellOrb.style.transform = `translate(${travelX}px, ${driftY}px)`;
        els.spellOrb.style.opacity = "0.96";
        core.style.transform = `translateY(${floatEndY}px) scale(1.02, 0.98)`;
        resolve();
      }
    };

    state.spellAnimationFrame = requestAnimationFrame(step);
  });
}

function animateSpellHold(duration) {
  state.spellCanvasMode = "hold";
  els.spellOrb.style.transform = `translate(${debugSettings.spellTravelX}px, ${Math.round(debugSettings.spellEndY * 0.52)}px)`;
  els.spellOrb.style.opacity = "0.96";
  const core = els.spellOrb.querySelector(".spell-core");
  core.style.transform = `translateY(${Math.round(debugSettings.spellEndY * 0.48)}px) scale(1.02, 0.98)`;
  return wait(duration);
}

function animateSpellPop() {
  state.spellCanvasMode = "pop";
  state.spellPopStart = performance.now();
  els.spellOrb.style.transform = `translate(${debugSettings.spellTravelX}px, ${Math.round(debugSettings.spellEndY * 0.52)}px)`;
  els.spellOrb.style.opacity = "0.96";
  const core = els.spellOrb.querySelector(".spell-core");
  core.style.transform = `translateY(${Math.round(debugSettings.spellEndY * 0.48)}px) scale(1.02, 0.98)`;
  return wait(560);
}

async function castWeak() {
  const skill = data.actors.enemy.skills.find((entry) => entry.id === "earFuu");
  setActionTitle(skill.name);
  els.enemySprite.classList.remove("cast-spell");
  void els.enemySprite.offsetWidth;
  els.enemySprite.classList.add("cast-spell");
  setMessage(text(data.messages.weakCast, {
    actor: state.enemy.name,
    skill: skill.name,
    target: state.ally.name
  }));
  await wait(700);

  if (state.ally.defending) {
    state.ally.defending = false;
    els.allySpriteWrap.classList.remove("guard-block");
    void els.allySpriteWrap.offsetWidth;
    els.allySpriteWrap.classList.add("guard-block");
    appendMessage(text(data.messages.weakBlocked, { target: state.ally.name }));
    await wait(1150);
    return;
  }

  addStatus(state.ally, "earFuu", skill.duration);
  const mpDamage = Math.min(state.ally.mp, skill.mpDamage ?? 0);
  state.ally.mp = Math.max(0, state.ally.mp - mpDamage);
  state.ally.defending = false;
  recoverEnemyGauge(skill.gaugeRecovery);
  if (mpDamage > 0) {
    showAllyDamagePose();
    popDamage(els.allyDamage, `MP-${mpDamage}`);
  }
  els.allySpriteWrap.classList.remove("weak-hit");
  void els.allySpriteWrap.offsetWidth;
  els.allySpriteWrap.classList.add("weak-hit");
  updateView();
  appendMessage(text(data.messages.weakApplied, { target: state.ally.name }));
  await wait(1150);

  if (hasStatus(state.ally, "sleep") && getSleepLevel() < skill.sleepLevelMax) {
    const sleepLevel = raiseSleepLevel(skill.sleepLevelUp);
    updateView();
    appendMessage(data.messages.weakSleepLevelUp);
    await wait(1150);
    if (await triggerSweetDreamIfReady()) return;
  } else if (hasStatus(state.ally, "sleep")) {
    appendMessage(data.messages.weakSleepLevelMax);
    await wait(1050);
  }
}

async function giggle() {
  const skill = data.actors.enemy.skills.find((entry) => entry.id === "giggle");
  const gaugeRecovery = getGiggleGaugeRecovery(skill);
  setActionTitle(skill.name);
  els.enemySpriteWrap.classList.remove("giggle");
  void els.enemySpriteWrap.offsetWidth;
  els.enemySpriteWrap.classList.add("giggle");
  state.ally.defending = false;
  setMessage(withGiggleTaunt(text(data.messages.giggle, { actor: state.enemy.name })));
  await wait(900);
  const embarrassment = getGiggleEmbarrassment();
  addEmbarrassment(embarrassment);
  if (gaugeRecovery > 0) {
    recoverEnemyGauge(gaugeRecovery);
  }

  if (gaugeRecovery > 0) {
    updateView();
    appendMessage(data.messages.giggleGaugeRecovery);
    await wait(850);
  } else if (embarrassment > 0) {
    updateView();
    await wait(650);
  } else {
    appendMessage(text(data.messages.giggleNoEffect, { target: state.ally.name }));
    await wait(850);
  }
}

function withGiggleTaunt(message) {
  const taunt = getGiggleTaunt();
  return taunt ? `${message}\n「${taunt}」` : message;
}

function getGiggleTaunt() {
  const sleepLevel = getSleepLevel();
  if (sleepLevel > 0 && Array.isArray(data.messages.giggleSleepTaunts)) {
    return data.messages.giggleSleepTaunts[sleepLevel] ?? "";
  }
  if (hasStatus(state.ally, "sit")) return data.messages.giggleSitTaunt ?? "";
  if (hasStatus(state.ally, "yawn")) return data.messages.giggleYawnTaunt ?? "";
  if (hasStatus(state.ally, "utouto")) return data.messages.giggleUtoutoTaunt ?? "";
  if (state.sleepinessLevel > 0 && Array.isArray(data.messages.giggleSleepinessTaunts)) {
    return data.messages.giggleSleepinessTaunts[state.sleepinessLevel] ?? "";
  }
  if (hasStatus(state.ally, "earFuu")) return data.messages.giggleSealTaunt ?? "";
  return "";
}

async function castSweetBreath() {
  const skill = data.actors.enemy.skills.find((entry) => entry.id === "sweetBreath");
  setActionTitle(skill.name);
  els.enemySprite.classList.remove("cast-spell");
  void els.enemySprite.offsetWidth;
  els.enemySprite.classList.add("cast-spell");
  setMessage(text(data.messages.sweetBreathCast, {
    actor: state.enemy.name,
    skill: skill.name,
    target: state.ally.name
  }));
  playSweetBreathSmoke();
  await wait(900);

  const sleepinessResult = increaseSleepiness(skill.amount);
  state.ally.defending = false;
  updateView();
  appendMessage(text(data.messages.sleepinessUp, {
    target: state.ally.name,
    level: sleepinessResult.level
  }));
  await wait(1050);
  if (sleepinessResult.utouto) {
    appendMessage(text(data.messages.utoutoApplied, { target: state.ally.name }));
    await wait(950);
  }
}

function playSweetBreathSmoke() {
  els.sweetBreathSmoke.classList.remove("show");
  void els.sweetBreathSmoke.offsetWidth;
  els.sweetBreathSmoke.classList.add("show");
}

async function triggerSweetDreamIfReady() {
  if (state.ended || getSleepLevel() < 9) return false;
  await castSweetDream();
  return true;
}

async function castSweetDream() {
  if (state.ended) return;
  const skill = data.actors.enemy.skills.find((entry) => entry.id === "sweetDream");
  setBusy(true);
  state.activeSide = null;
  setActionTitle(skill.name);
  els.enemySprite.classList.remove("cast-spell");
  void els.enemySprite.offsetWidth;
  els.enemySprite.classList.add("cast-spell");
  setMessage(text(data.messages.sweetDreamCast, {
    actor: state.enemy.name,
    skill: skill.name
  }));
  await wait(900);
  await wait(msUntilSleepBubblePeak());

  state.sweetDreaming = true;
  state.sweetRoomStart = performance.now();
  updateView();
  appendMessage(text(data.messages.sweetDreamWrap, { target: state.ally.name }));
  await wait(getSweetRoomCaptureDelay());
  state.sweetRoomCaptured = true;
  state.sweetRoomSquishStart = performance.now();
  updateView();
  await wait(getSweetRoomMoveDuration() - getSweetRoomCaptureDelay());
  await wait(5000);

  state.ended = true;
  state.activeSide = null;
  setBusy(true);
  setActionTitle("GAME OVER");
  appendMessage(text(data.messages.sweetDreamDefeat, { target: state.ally.name }));
  await wait(3000);
  showSweetRoomGameOver();
}

async function castPlayerSkill(skillId, enemyAction) {
  const skill = state.ally.spells.find((entry) => entry.id === skillId);
  if (!skill) return;
  if (!spendAllyMp(skill.mpCost ?? 0)) {
    setMessage(data.messages.notEnoughMp);
    await wait(850);
    return;
  }
  if (skill.id === "heal") {
    await castHeal(skill);
  } else if (skill.id === "windCutter") {
    await castWindCutter(skill);
  } else if (skill.id === "deepBreath") {
    await castDeepBreath(skill, enemyAction);
  } else if (skill.id === "refresh") {
    await castRefresh(skill);
  } else if (skill.id === "selfSleep") {
    await castSelfSleep(skill);
  }
}

async function usePlayerItem(itemId) {
  const item = (data.items ?? []).find((entry) => entry.id === itemId);
  if (!item) return;
  setActionTitle(item.name);
  if ((state.inventory[item.id] ?? 0) <= 0) {
    setMessage(data.messages.noItemStock);
    await wait(850);
    return;
  }

  let recovered = 0;
  let message = "";
  if (item.type === "hp") {
    recovered = Math.min(item.amount, state.ally.maxHp - state.ally.hp);
    if (recovered <= 0) {
      setMessage(data.messages.itemNoEffect);
      await wait(850);
      return;
    }
    state.ally.hp = Math.min(state.ally.maxHp, state.ally.hp + item.amount);
    message = text(data.messages.itemHpRecover, { actor: state.ally.name, item: item.name, amount: recovered });
  } else if (item.type === "mp") {
    recovered = Math.min(item.amount, state.ally.maxMp - state.ally.mp);
    if (recovered <= 0) {
      setMessage(data.messages.itemNoEffect);
      await wait(850);
      return;
    }
    state.ally.mp = Math.min(state.ally.maxMp, state.ally.mp + item.amount);
    message = text(data.messages.itemMpRecover, { actor: state.ally.name, item: item.name, amount: recovered });
  }

  state.inventory[item.id] = Math.max(0, (state.inventory[item.id] ?? 0) - 1);
  els.allySpriteWrap.classList.remove("heal-cast");
  void els.allySpriteWrap.offsetWidth;
  els.allySpriteWrap.classList.add("heal-cast");
  popHeal(els.allyDamage, recovered);
  updateView();
  renderSkillPanel();
  setMessage(message);
  await wait(1050);
}

async function castHeal() {
  const spell = state.ally.spells.find((entry) => entry.id === "heal");
  setActionTitle(spell.name);
  const before = state.ally.hp;
  const recovered = Math.min(spell.amount, state.ally.maxHp - state.ally.hp);

  els.allySpriteWrap.classList.remove("heal-cast");
  void els.allySpriteWrap.offsetWidth;
  els.allySpriteWrap.classList.add("heal-cast");
  setMessage(text(data.messages.healCast, { actor: state.ally.name, skill: spell.name }));
  await wait(650);

  state.ally.hp = Math.min(state.ally.maxHp, state.ally.hp + spell.amount);
  popHeal(els.allyDamage, recovered);
  updateView();
  appendMessage(recovered > 0
    ? text(data.messages.healRecover, { target: state.ally.name, amount: recovered })
    : text(data.messages.healNoEffect, { target: state.ally.name }));
  await wait(before === state.ally.hp ? 900 : 1150);
}

async function castWindCutter(skill) {
  setActionTitle(skill.name);
  els.allySpriteWrap.classList.remove("cast-spell");
  void els.allySpriteWrap.offsetWidth;
  els.allySpriteWrap.classList.add("cast-spell");
  setMessage(text(data.messages.windCutterCast, { actor: state.ally.name, skill: skill.name }));
  await wait(520);

  const damage = skill.damage;
  state.enemy.hp = Math.max(0, state.enemy.hp - damage);
  popDamage(els.enemyDamage, damage);
  els.enemySpriteWrap.classList.remove("hit");
  void els.enemySpriteWrap.offsetWidth;
  els.enemySpriteWrap.classList.add("hit");
  updateView();
  appendMessage(text(data.messages.windCutterDamage, {
    target: state.enemy.name,
    damage
  }));
  await wait(950);
}

async function castDeepBreath(skill, enemyAction) {
  setActionTitle(skill.name);
  els.allySpriteWrap.classList.remove("heal-cast");
  void els.allySpriteWrap.offsetWidth;
  els.allySpriteWrap.classList.add("heal-cast");
  setMessage(text(data.messages.deepBreathCast, { actor: state.ally.name, skill: skill.name }));
  await wait(650);

  if (enemyAction.id === "sweetBreath") {
    const sleepinessResult = increaseSleepiness(1);
    updateView();
    appendMessage(text(data.messages.deepBreathBackfire, {
      actor: state.ally.name,
      level: sleepinessResult.level
    }));
    await wait(1050);
    if (sleepinessResult.utouto) {
      appendMessage(text(data.messages.utoutoApplied, { target: state.ally.name }));
      await wait(950);
    }
    return;
  }

  reduceEmbarrassment(skill.embarrassmentDown ?? 30);
  updateView();
  appendMessage(text(data.messages.deepBreathRecover, { actor: state.ally.name }));
  await wait(850);
}

async function castRefresh(skill) {
  setActionTitle(skill.name);
  els.allySpriteWrap.classList.remove("heal-cast");
  void els.allySpriteWrap.offsetWidth;
  els.allySpriteWrap.classList.add("heal-cast");
  setMessage(text(data.messages.refreshCast, { actor: state.ally.name, skill: skill.name }));
  await wait(620);

  if (state.sleepinessLevel <= 0) {
    appendMessage(text(data.messages.refreshNoEffect, { actor: state.ally.name }));
    await wait(850);
    return;
  }

  state.sleepinessLevel = Math.max(0, state.sleepinessLevel - skill.sleepinessDown);
  updateView();
  appendMessage(text(data.messages.refreshRecover, {
    actor: state.ally.name,
    level: state.sleepinessLevel
  }));
  await wait(950);
}

async function castSelfSleep(skill) {
  setActionTitle(skill.name);
  els.allySpriteWrap.classList.remove("heal-cast");
  void els.allySpriteWrap.offsetWidth;
  els.allySpriteWrap.classList.add("heal-cast");
  setMessage(text(data.messages.selfSleepCast, { actor: state.ally.name, skill: skill.name }));
  await wait(620);

  clearIncapacitatingStatusesForSleep();
  removeStatus(state.ally, "sleep");
  addStatus(state.ally, "sleep", skill.duration, { level: skill.level });
  state.sleepinessLevel = 0;
  state.ally.defending = false;
  updateView();
  appendMessage(text(data.messages.selfSleepApplied, { actor: state.ally.name }));
  await wait(950);
}

function hasStatus(target, id) {
  return Boolean(target.statuses[id]);
}

function hasAnyStatus(target, ids) {
  return ids.some((id) => hasStatus(target, id));
}

function hasBlockingStatus() {
  return hasStatus(state.ally, "yawn")
    || hasStatus(state.ally, "sit")
    || hasStatus(state.ally, "utouto")
    || hasStatus(state.ally, "mojimoji")
    || hasStatus(state.ally, "sleep");
}

function clearIncapacitatingStatusesForSleep() {
  removeStatus(state.ally, "yawn");
  removeStatus(state.ally, "sit");
  removeStatus(state.ally, "utouto");
  removeStatus(state.ally, "mojimoji");
  cancelRoundEndRecovery("yawn");
  cancelRoundEndRecovery("sit");
  cancelRoundEndRecovery("utouto");
  cancelRoundEndRecovery("mojimoji");
}

function isAllyDefeated() {
  return state.ally.hp <= 0;
}

function cleanupAllyDefeatState() {
  state.allyPose = "sit";
  if (state.allyPoseTimer) {
    clearTimeout(state.allyPoseTimer);
    state.allyPoseTimer = null;
  }
  state.ally.defending = false;
  state.sleepinessLevel = 0;
  ["sleep", "yawn", "sit", "utouto", "mojimoji"].forEach((statusId) => {
    removeStatus(state.ally, statusId);
    cancelRoundEndRecovery(statusId);
  });
  stopSleepBubbleCanvas();
}

function addStatus(target, id, duration, extra = {}) {
  target.statuses[id] = { id, remaining: duration, ...extra };
}

function removeStatus(target, id) {
  delete target.statuses[id];
}

function scheduleRoundEndRecovery(statusId, messageTemplate) {
  if (state.roundEndRecoveries.some((entry) => entry.statusId === statusId)) return;
  state.roundEndRecoveries.push({ statusId, messageTemplate });
}

function cancelRoundEndRecovery(statusId) {
  state.roundEndRecoveries = state.roundEndRecoveries.filter((entry) => entry.statusId !== statusId);
}

async function resolveRoundEndRecoveries() {
  while (state.roundEndRecoveries.length > 0) {
    const { statusId, messageTemplate } = state.roundEndRecoveries.shift();
    if (!hasStatus(state.ally, statusId)) continue;
    if (statusId === "sleep" && state.ally.statuses.sleep.remaining > 0) continue;
    removeStatus(state.ally, statusId);
    if (statusId === "mojimoji") reduceEmbarrassment(10);
    updateView();
    setMessage(text(messageTemplate, { actor: state.ally.name }));
    await wait(850);
  }
}

function activeStatusEntries(target) {
  if (target.side === "ally" && isAllyDefeated()) {
    return [{
      label: "戦闘不能",
      description: "HPが0になり、戦闘不能。"
    }];
  }
  return Object.values(target.statuses).map((status) => {
    const statusData = data.statuses[status.id];
    const label = statusData.label;
    if (status.id === "sleep") {
      return {
        label: `${label}Lv${status.level ?? 1}`,
        description: statusData.description
      };
    }
    if (status.id === "earFuu") {
      return {
        label: `${label}(${status.remaining})`,
        description: statusData.description
      };
    }
    return {
      label,
      description: statusData.description
    };
  });
}

function getSleepLevel() {
  return state.ally.statuses.sleep?.level ?? 0;
}

function increaseSleepiness(amount = 1) {
  const max = data.sleepiness.max;
  const wasMax = state.sleepinessLevel >= max;
  state.sleepinessLevel = Math.min(max, state.sleepinessLevel + amount);
  const utouto = amount > 0 && wasMax;
  if (utouto) {
    addStatus(state.ally, "utouto", data.statuses.utouto.duration);
  }
  return { level: state.sleepinessLevel, utouto };
}

function addEmbarrassment(amount) {
  if (amount <= 0) return;
  state.embarrassment = Math.min(100, state.embarrassment + amount);
  if (state.embarrassment >= 100 && !hasStatus(state.ally, "sleep") && !hasStatus(state.ally, "mojimoji")) {
    addStatus(state.ally, "mojimoji", 1);
  }
  updateView();
}

function reduceEmbarrassment(amount) {
  if (amount <= 0) return;
  state.embarrassment = Math.max(0, state.embarrassment - amount);
  updateView();
}

function getGiggleEmbarrassment() {
  let amount = 0;
  if (hasStatus(state.ally, "sleep")) amount += 10;
  if (hasStatus(state.ally, "sit")) amount += 30 + (Math.max(0, state.sleepBubbleBoost) * 15);
  if (state.sleepinessLevel > 0) amount += state.sleepinessLevel * 10;
  if (hasStatus(state.ally, "yawn")) amount += 10;
  if (hasStatus(state.ally, "utouto")) amount += 20;
  if (hasStatus(state.ally, "earFuu")) amount += 10;
  return amount;
}

function getVisualSleepLevel() {
  return debugSettings.sleepPreviewLevel > 0 ? debugSettings.sleepPreviewLevel : getSleepLevel();
}

function getGiggleGaugeRecovery(skill) {
  const level = hasStatus(state.ally, "sleep") ? getSleepLevel() : state.sleepinessLevel;
  return level * (skill.gaugeRecoveryPerLevel ?? 0);
}

function getSleepBubbleScale() {
  const level = Math.max(1, Math.min(9, getVisualSleepLevel() || 1));
  if (level >= 9) return debugSettings.sleepBubbleLv9Scale;
  const baseScales = [1, 1, 1.28, 1.62, 2.05, 2.58, 3.24, 4.1];
  const base = baseScales[level - 1];
  const ratioToLv8 = base / baseScales[baseScales.length - 1];
  return ratioToLv8 * debugSettings.sleepBubbleLv8Scale;
}

function getSleepDuration(skill) {
  return Math.min(skill.maxDuration, skill.baseDuration + state.sleepinessLevel);
}

function applySleepStatus(duration, levelPower = 1, maxStackDuration = duration) {
  cancelRoundEndRecovery("sleep");
  if (hasStatus(state.ally, "sleep")) {
    const status = state.ally.statuses.sleep;
    const extendedDuration = Math.min(maxStackDuration, (status.remaining ?? 0) + duration);
    return raiseSleepLevel(levelPower, extendedDuration);
  }
  addStatus(state.ally, "sleep", duration, { level: levelPower });
  return levelPower;
}

function getSleepBubblePower({ wasSleeping, wasYawning }) {
  if (wasSleeping) return 1;
  return consumeSleepBubblePower(wasYawning ? 1 : 0);
}

function consumeSleepBubblePower(yawnBonus = 0) {
  const boost = state.sleepBubbleBoost;
  state.sleepBubbleBoost = 0;
  return 1 + boost + yawnBonus;
}

function raiseSleepLevel(amount = 1, refreshDuration = null) {
  if (!hasStatus(state.ally, "sleep")) return 0;
  const status = state.ally.statuses.sleep;
  status.level = (status.level ?? 1) + amount;
  if (refreshDuration !== null) status.remaining = refreshDuration;
  return status.level;
}

function canUseSleepBubble() {
  const skill = data.actors.enemy.skills.find((entry) => entry.id === "sleepBubble");
  return state.enemyGauge >= skill.gaugeCost;
}

function spendEnemyGauge(amount) {
  state.enemyGauge = Math.max(0, state.enemyGauge - amount);
  updateView();
}

function recoverEnemyGauge(amount) {
  state.enemyGauge = Math.min(currentEnemyGaugeMax(), state.enemyGauge + amount);
  updateView();
}

function currentEnemyGaugeMax() {
  return state.enemyGaugeLimit ?? data.actors.enemy.specialGauge.normalMax;
}

function spendAllyMp(amount) {
  if (amount <= 0) return true;
  if (state.ally.mp < amount) return false;
  state.ally.mp -= amount;
  updateView();
  return true;
}

function isCommandSealed(commandId) {
  if (commandId === "magic" && hasStatus(state.ally, "earFuu")) return true;
  if (commandId?.startsWith("skill:") && hasStatus(state.ally, "earFuu")) return true;
  return false;
}

async function tickStatusEffects() {
  const timedStatuses = [
    ["earFuu", data.messages.weakRecover]
  ];

  for (const [id, recoverMessage] of timedStatuses) {
    if (!hasStatus(state.ally, id)) continue;
    state.ally.statuses[id].remaining -= 1;
    if (state.ally.statuses[id].remaining <= 0) {
      removeStatus(state.ally, id);
      updateView();
      setMessage(text(recoverMessage, { actor: state.ally.name }));
      await wait(850);
    } else {
      updateView();
    }
  }
}

function updateSleepBubbleCanvas(shouldDraw) {
  if (!shouldDraw) {
    stopSleepBubbleCanvas();
    return;
  }

  layoutSleepBubbleCanvas();
  if (state.sleepBubbleFrame !== null) return;

  const draw = (time) => {
    layoutSleepBubbleCanvas(time);
    drawSleepBubble(time);
    state.sleepBubbleFrame = requestAnimationFrame(draw);
  };
  state.sleepBubbleFrame = requestAnimationFrame(draw);
}

function stopSleepBubbleCanvas() {
  if (state.sleepBubbleFrame === null) return;
  cancelAnimationFrame(state.sleepBubbleFrame);
  state.sleepBubbleFrame = null;
}

function layoutSleepBubbleCanvas(time = performance.now()) {
  const maxRadius = getSleepBubbleMaxRadius();
  const size = Math.ceil((maxRadius * 2) + 24);
  const dpr = window.devicePixelRatio || 1;
  els.sleepBubble.style.width = `${size}px`;
  els.sleepBubble.style.height = `${size}px`;
  if (state.sweetDreaming) {
    const progress = getSweetRoomProgress(time);
    const moveProgress = Math.min(1, progress / SWEET_ROOM_MOVE_PROGRESS_END);
    const eased = easeInOutCubic(moveProgress);
    const startX = debugSettings.sleepBubbleX;
    const startTop = debugSettings.sleepBubbleY + (SLEEP_BUBBLE_BASE_SIZE / 2) - (size / 2);
    const wrapOffset = size * SWEET_ROOM_WRAP_OFFSET_RATIO;
    const endX = debugSettings.sweetRoomBubbleX - wrapOffset;
    const endY = debugSettings.sweetRoomBubbleY - wrapOffset;
    const floatEnvelope = Math.sin(Math.PI * moveProgress);
    const floatY = Math.sin(moveProgress * Math.PI * 2 * debugSettings.sweetRoomFloatCycles)
      * debugSettings.sweetRoomFloatAmount
      * floatEnvelope;
    els.sleepBubble.style.left = `${lerp(startX, endX, eased)}px`;
    els.sleepBubble.style.top = `${lerp(startTop, endY, eased) + floatY}px`;
  } else {
    els.sleepBubble.style.left = "var(--bubble-x)";
    els.sleepBubble.style.top = `calc(var(--bubble-y) + ${SLEEP_BUBBLE_BASE_SIZE / 2}px - ${size / 2}px)`;
  }

  const pixelWidth = Math.ceil(size * dpr);
  const pixelHeight = Math.ceil(size * dpr);
  if (els.sleepBubble.width !== pixelWidth || els.sleepBubble.height !== pixelHeight) {
    els.sleepBubble.width = pixelWidth;
    els.sleepBubble.height = pixelHeight;
  }
}

function drawSleepBubble(time = performance.now()) {
  const canvas = els.sleepBubble;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const dpr = window.devicePixelRatio || 1;
  const width = canvas.width / dpr;
  const height = canvas.height / dpr;
  const breathAmount = state.sweetDreaming ? 0 : debugSettings.sleepBubbleBreathAmount;
  const breathSpeed = Math.max(0.2, debugSettings.sleepBubbleBreathSpeed);
  const pulse = state.sweetDreaming
    ? getSleepBubbleMaxPulse()
    : 1 + (Math.sin((time / 440) * breathSpeed) * breathAmount);
  const radius = state.sweetDreaming
    ? getSleepBubbleRadius(pulse, debugSettings.sleepBubbleLv9Scale)
    : getSleepBubbleRadius(pulse);
  const squish = getSweetRoomSquish(time);
  const wobble = getSleepBubbleShapeWobble(time);
  const drawRadius = radius * Math.max(squish.x, squish.y) * (1 + wobble);
  const cx = drawRadius + 12;
  const cy = height / 2;
  const fillAlpha = Math.min(1, Math.max(0.12, debugSettings.sleepBubbleFillAlpha));
  const density = Math.max(0, debugSettings.sleepBubbleFillAlpha - 1);

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, width, height);
  ctx.save();
  ctx.globalCompositeOperation = "source-over";

  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(squish.x, squish.y);
  ctx.translate(-cx, -cy);

  const outerGlow = ctx.createRadialGradient(cx, cy, radius * 0.55, cx, cy, radius * 1.26);
  outerGlow.addColorStop(0, "rgba(140, 231, 255, 0)");
  outerGlow.addColorStop(0.7, "rgba(140, 231, 255, 0.12)");
  outerGlow.addColorStop(1, "rgba(140, 231, 255, 0)");
  ctx.fillStyle = outerGlow;
  ctx.beginPath();
  ctx.arc(cx, cy, radius * 1.25, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  traceSleepBubbleShape(ctx, cx, cy, radius, time, wobble);
  ctx.clip();

  const body = ctx.createRadialGradient(
    cx,
    cy - radius * 0.08,
    radius * 0.08,
    cx,
    cy,
    radius
  );
  const blueTone = debugSettings.sleepBubbleBlueTone;
  const centerColor = bubbleColor(170, 235, 255, blueTone);
  const middleColor = bubbleColor(100, 220, 255, blueTone);
  const edgeColor = bubbleColor(24, 184, 255, blueTone);
  body.addColorStop(0, rgba(centerColor, debugSettings.sleepBubbleCenterAlpha));
  body.addColorStop(0.45, rgba(middleColor, 0.12 + (fillAlpha * 0.22)));
  body.addColorStop(1, rgba(edgeColor, 0.2 + (fillAlpha * 0.34) + (density * 0.12)));
  ctx.fillStyle = body;
  ctx.beginPath();
  traceSleepBubbleShape(ctx, cx, cy, radius, time, wobble);
  ctx.fill();

  ctx.restore();
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(squish.x, squish.y);
  ctx.translate(-cx, -cy);

  drawBubbleHighlight(ctx, cx, cy, radius, time, dpr, false);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.translate(cx, cy);
  ctx.scale(squish.x, squish.y);
  ctx.translate(-cx, -cy);
  ctx.lineWidth = Math.max(1.15, Math.min(2.1, 1.45 + (radius / 420)));
  ctx.strokeStyle = `rgba(245, 252, 255, ${0.58 + (Math.min(1.2, debugSettings.sleepBubbleHighlightAlpha) * 0.15)})`;
  ctx.beginPath();
  traceSleepBubbleShape(ctx, cx, cy, radius - (ctx.lineWidth / 2), time, wobble * 0.62);
  ctx.stroke();
  ctx.restore();
  ctx.restore();
}

function getSleepBubbleMaxRadius() {
  const scale = state.sweetDreaming ? debugSettings.sleepBubbleLv9Scale : Number(getSleepBubbleScale());
  const maxPulse = state.sweetDreaming ? getSleepBubbleMaxPulse() : 1 + Math.max(0, debugSettings.sleepBubbleBreathAmount);
  const squishRoom = state.sweetDreaming ? 1 + Math.max(0, debugSettings.sweetRoomSquishAmount) : 1;
  return getSleepBubbleRadius(maxPulse, scale) * squishRoom;
}

function getSleepBubbleMaxPulse() {
  return 1 + Math.max(0, debugSettings.sleepBubbleBreathAmount);
}

function msUntilSleepBubblePeak(time = performance.now()) {
  const breathSpeed = Math.max(0.2, debugSettings.sleepBubbleBreathSpeed);
  const phase = (time / 440) * breathSpeed;
  const peakPhase = Math.PI / 2;
  const cycle = Math.PI * 2;
  const deltaPhase = (peakPhase - (phase % cycle) + cycle) % cycle;
  return (deltaPhase * 440) / breathSpeed;
}

function getSleepBubbleRadius(pulse, scale = Number(getSleepBubbleScale())) {
  return (SLEEP_BUBBLE_BASE_SIZE * scale * pulse) / 2;
}

function getSweetRoomProgress(time = performance.now()) {
  if (!state.sweetDreaming || !state.sweetRoomStart) return 0;
  return Math.max(0, Math.min(1, (time - state.sweetRoomStart) / SWEET_ROOM_TOTAL_DURATION));
}

function getSweetRoomMoveDuration() {
  return SWEET_ROOM_TOTAL_DURATION * SWEET_ROOM_MOVE_PROGRESS_END;
}

function getSweetRoomCaptureDelay() {
  return getSweetRoomMoveDuration() * SWEET_ROOM_CAPTURE_PROGRESS;
}

function getSweetRoomSquish(time = performance.now()) {
  if (state.sweetDreaming && !state.sweetRoomCaptured && state.sweetRoomStart) {
    const moveProgress = Math.min(1, getSweetRoomProgress(time) / SWEET_ROOM_MOVE_PROGRESS_END);
    if (moveProgress >= 0.5) {
      const progress = (moveProgress - 0.5) / 0.5;
      const decay = 1 - (progress * 0.55);
      const amount = debugSettings.sweetRoomSquishAmount * decay;
      const yStretch = Math.cos(progress * Math.PI * 4) * amount;
      return {
        x: 1 - (yStretch * 0.72),
        y: 1 + yStretch
      };
    }
  }
  if (!state.sweetRoomCaptured || !state.sweetRoomSquishStart) {
    return { x: 1, y: 1 };
  }
  const duration = Math.max(0.1, debugSettings.sweetRoomSquishDuration) * 1000;
  const elapsed = time - state.sweetRoomSquishStart;
  const progress = Math.max(0, Math.min(1, elapsed / duration));
  const decay = Math.pow(1 - progress, 2.15);
  const bounceAmount = debugSettings.sweetRoomSquishAmount * decay;
  const bouncePhase = progress * Math.PI * 6;
  const restingAmount = progress >= 1 ? 0.022 : 0;
  const restingPhase = (elapsed / 1800) * Math.PI * 2;
  const yStretch = (Math.cos(bouncePhase) * bounceAmount) + (Math.sin(restingPhase) * restingAmount);
  return {
    x: 1 - (yStretch * 0.72),
    y: 1 + yStretch
  };
}

function getSleepBubbleShapeWobble(time = performance.now()) {
  if (!state.sweetDreaming) return 0;
  if (!state.sweetRoomCaptured) return 0.012;
  if (!state.sweetRoomSquishStart) return 0.018;
  const elapsed = time - state.sweetRoomSquishStart;
  const settleDuration = Math.max(0.1, debugSettings.sweetRoomSquishDuration) * 1000;
  const settleProgress = Math.max(0, Math.min(1, elapsed / settleDuration));
  return lerp(0.026, 0.012, settleProgress);
}

function traceSleepBubbleShape(ctx, cx, cy, radius, time, wobbleAmount = 0) {
  if (wobbleAmount <= 0) {
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    return;
  }
  const points = 80;
  const phase = time / 920;
  for (let index = 0; index <= points; index += 1) {
    const angle = (index / points) * Math.PI * 2;
    const wave = Math.sin((angle * 3) + phase) * 0.55
      + Math.sin((angle * 5) - (phase * 0.72)) * 0.32
      + Math.sin((angle * 2) + (phase * 0.38)) * 0.18;
    const shapedRadius = radius * (1 + (wave * wobbleAmount));
    const x = cx + (Math.cos(angle) * shapedRadius);
    const y = cy + (Math.sin(angle) * shapedRadius);
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
}

function lerp(from, to, amount) {
  return from + ((to - from) * amount);
}

function easeInOutCubic(value) {
  return value < 0.5
    ? 4 * value * value * value
    : 1 - Math.pow(-2 * value + 2, 3) / 2;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function mixRgb(from, to, amount) {
  return {
    red: Math.round(from.red + ((to.red - from.red) * amount)),
    green: Math.round(from.green + ((to.green - from.green) * amount)),
    blue: Math.round(from.blue + ((to.blue - from.blue) * amount))
  };
}

function drawBubbleHighlight(ctx, cx, cy, radius, time, dpr, resetTransform = true) {
  if (resetTransform) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const highlightAlpha = debugSettings.sleepBubbleHighlightAlpha;
  const offset = debugSettings.sleepBubbleHighlightOffset;
  const arcRadius = radius * Math.min(0.94, 0.78 + ((offset - 1) * 0.18));
  const mainWidth = Math.max(3.2, Math.min(18, radius * 0.08));
  const subWidth = Math.max(2.2, Math.min(12, radius * 0.056));
  const mainShift = Math.sin(time / 1400) * 0.035;

  drawCurvedHighlight(
    ctx,
    cx,
    cy,
    arcRadius,
    arcRadius,
    -0.92 + mainShift,
    -0.38 + mainShift,
    mainWidth,
    0.58 * highlightAlpha
  );
  drawCurvedHighlight(
    ctx,
    cx,
    cy,
    arcRadius,
    arcRadius,
    2.2,
    2.64,
    subWidth,
    0.34 * highlightAlpha
  );
}

function bubbleColor(red, green, blue, blueTone) {
  return {
    red: Math.round(red * (1 - blueTone) + 82 * blueTone),
    green: Math.round(green * (1 - blueTone) + 226 * blueTone),
    blue
  };
}

function rgba(color, alpha) {
  return `rgba(${color.red}, ${color.green}, ${color.blue}, ${alpha})`;
}

async function popSleepBubble() {
  els.sleepBubble.classList.remove("bubble-pop");
  void els.sleepBubble.offsetWidth;
  els.sleepBubble.classList.add("bubble-pop");
  await wait(460);
  els.sleepBubble.classList.remove("bubble-pop");
}

function restartSleepBubbleAnimation() {
  if (!hasStatus(state.ally, "sleep") && debugSettings.sleepPreviewLevel <= 0) return;
  stopSleepBubbleCanvas();
  updateSleepBubbleCanvas(true);
}

function popDamage(el, amount) {
  el.textContent = String(amount);
  el.classList.remove("show");
  el.classList.remove("heal");
  void el.offsetWidth;
  el.classList.add("show");
}

function popHeal(el, amount) {
  el.textContent = amount > 0 ? `+${amount}` : "+0";
  el.classList.remove("show");
  el.classList.add("heal");
  void el.offsetWidth;
  el.classList.add("show");
}

function showAllyDamagePose(duration = 400) {
  if (!state.ally.sprites.damage) return;
  state.allyPose = "damage";
  if (state.allyPoseTimer) clearTimeout(state.allyPoseTimer);
  state.allyPoseTimer = setTimeout(() => {
    state.allyPose = null;
    state.allyPoseTimer = null;
    updateView();
  }, duration);
}

function checkEnd() {
  if (state.ended) return true;
  if (state.enemy.hp <= 0) {
    state.ended = true;
    state.activeSide = null;
    setBusy(true);
    els.enemySlot.classList.add("defeated");
    setMessage(data.messages.victory);
    els.turnRibbon.textContent = "WIN";
    scheduleVictoryEnding();
    return true;
  }
  if (state.ally.hp <= 0) {
    state.ended = true;
    state.activeSide = null;
    setBusy(true);
    cleanupAllyDefeatState();
    updateView();
    setMessage(data.messages.defeat);
    els.turnRibbon.textContent = "GAME OVER";
    return true;
  }
  return false;
}

async function scheduleVictoryEnding() {
  if (state.endingShown) return;
  state.endingShown = true;
  await wait(3000);
  showEndingOverlay({
    src: data.assets.endingWin,
    alt: "風香とバブリアのエンディングイラスト",
    title: "Thank you\nfor playing",
    titleClass: "thanks"
  });
}

function showSweetRoomGameOver() {
  stopSleepBubbleCanvas();
  state.sweetDreaming = false;
  showEndingOverlay({
    src: data.assets.gameOverSweetRoom,
    alt: "スイートルームのゲームオーバーイラスト",
    title: "Game Over...",
    className: "game-over"
  });
}

function showEndingOverlay({ src, alt, title = "", className = "", titleClass = "" }) {
  els.endingOverlay.textContent = "";
  els.endingOverlay.className = "ending-overlay is-hidden";
  if (className) els.endingOverlay.classList.add(className);
  const image = document.createElement("img");
  image.src = src;
  image.alt = alt;
  els.endingOverlay.appendChild(image);
  if (title) {
    const titleNode = document.createElement("div");
    titleNode.className = "ending-title";
    if (titleClass) titleNode.classList.add(titleClass);
    titleNode.textContent = title;
    els.endingOverlay.appendChild(titleNode);
  }
  els.endingOverlay.classList.remove("is-hidden");
  void els.endingOverlay.offsetWidth;
  els.endingOverlay.classList.add("show");
}

document.addEventListener("keydown", (event) => {
  if (!state.introComplete) {
    if (event.key === "Enter" || event.key === " " || event.key.toLowerCase() === "z") {
      event.preventDefault();
      requestCommandPhaseStart();
    }
    return;
  }
  if (state.busy || state.activeSide !== "ally" || state.ended) return;
  const isSkillMode = state.commandMode === "skill";
  const isItemMode = state.commandMode === "item";
  const isPanelMode = isSkillMode || isItemMode;
  const columns = isPanelMode ? 1 : 2;
  const last = isSkillMode
    ? state.ally.spells.length - 1
    : isItemMode
      ? (data.items ?? []).length - 1
      : data.commands.length - 1;
  const current = isSkillMode ? state.selectedSkill : isItemMode ? state.selectedItem : state.selectedCommand;

  const setCurrent = (index) => {
    if (isSkillMode) {
      state.selectedSkill = index;
    } else if (isItemMode) {
      state.selectedItem = index;
    } else {
      state.selectedCommand = index;
    }
  };

  if (event.key === "ArrowUp") {
    setCurrent(Math.max(0, current - columns));
  } else if (event.key === "ArrowDown") {
    setCurrent(Math.min(last, current + columns));
  } else if (event.key === "ArrowLeft") {
    if (!isPanelMode) setCurrent(Math.max(0, current - 1));
  } else if (event.key === "ArrowRight") {
    if (!isPanelMode) setCurrent(Math.min(last, current + 1));
  } else if (event.key === "Enter" || event.key === " " || event.key.toLowerCase() === "z") {
    if (isSkillMode) {
      chooseSkill(state.selectedSkill);
    } else if (isItemMode) {
      chooseItem(state.selectedItem);
    } else {
      chooseCommand(state.selectedCommand);
    }
  } else if (event.key === "Escape" || event.key.toLowerCase() === "x") {
    if (isPanelMode) {
      state.commandMode = "main";
      updateSkillPanelVisibility();
      setMessage(data.messages.chooseCommand);
    }
  } else {
    return;
  }
  event.preventDefault();
  updateCommandSelection();
  updateSkillSelection();
});

document.addEventListener("click", () => {
  if (!state.introComplete) requestCommandPhaseStart();
});

requestAnimationFrame(() => {
  requestAnimationFrame(startBattle);
});
