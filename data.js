window.BATTLE_DATA = {
  assets: {
    background: "assets/background.webp",
    endingWin: "assets/ending-win.webp?v=20260712-ending2",
    gameOverSweetRoom: "assets/game-over-sweet-room.webp?v=20260725-gameover1"
  },
  messages: {
    battleStart: "バブリアがこちらを見つめている。",
    introEncounter: "睡魔姫バブリアがあらわれた！\nバブリア「あら、かわいい子♪私と一晩遊びましょう？」",
    playerAttack: "{actor}のこうげき！ {target}に{damage}ダメージ！",
    enemyAttack: "{actor}のこうげき！ {target}に{damage}ダメージ！",
    sleepCast: "{actor}のおねんねシャボン！",
    sleepBubbleLevel1: "大きな虹色のシャボン玉が{target}を包み込む……！",
    sleepBubbleLevel2: "眠気のこもったシャボン玉が{target}を包み込む……！",
    sleepBubbleLevel3: "強い眠気のこもったシャボン玉が{target}を包み込む……！",
    sleepBubbleLevel4: "凶悪な眠気のこもったシャボン玉が{target}を包み込む……！",
    sleepBubbleLevel5: "ふかーい眠りへ誘う妖しいシャボン玉が{target}を包み込む……！",
    sleepWrap: "巨大なシャボン玉が{target}を包み、ぱちんとはじけた！",
    sleepDamage: "{target}に{damage}ダメージ！",
    statusBlocked: "{target}はぼうぎょした！",
    sleepApplied: "{target}は眠ってしまった！",
    sleepLevelUp: "{target}はさらに深く眠ってしまった！",
    sleepYawnApplied: "あくびをしていた{target}は深く眠ってしまった！",
    sleepBubbleBoost: "{actor}の次のおねんねシャボンが強化された！",
    sleepSkip: "{actor}は眠っている...",
    sleepGaugeCharge: "バブリアにねむりのエネルギーが集まっていく...！",
    sleepinessGaugeCharge: "バブリアに眠気のエネルギーが集まっていく...！",
    sleepNaturalWake: "{actor}は目を覚ました！",
    sleepHitWake: "鼻ちょうちんが割れた！ {actor}は目を覚ました！",
    noseBubblePopCast: "{actor}の{skill}！",
    noseBubblePopDamage: "鼻ちょうちんがはじけた！ {target}のMPが{mpDamage}減った！",
    sitApplied: "{target}はしりもちをついてしまった！",
    sitSkip: "{actor}はしりもちをついていて動けない...",
    sitRecover: "{actor}は立ち上がった！",
    utoutoApplied: "{target}はうとうとしている...",
    utoutoSkip: "{actor}はうとうとしていて動けない...",
    utoutoRecover: "{actor}ははっと目を開けた！",
    mojimojiSkip: "{actor}は恥ずかしさでもじもじしている...",
    mojimojiRecover: "{actor}は気を取り直した！",
    yawnCast: "{actor}は大きなあくびをした！",
    yawnApplied: "{target}は大きなあくびをしてしまった！",
    yawnNoEffect: "{target}はぼうぎょしていない。",
    yawnSkip: "{actor}はあくびをしている...",
    yawnRecover: "{actor}は気を取り直した！",
    weakCast: "{actor}は{target}の耳に息を吹き込んだ！",
    weakApplied: "{target}はスキルを封印された！",
    weakBlocked: "{target}は身を守って、耳ふーを防いだ！",
    weakSkillSealed: "{actor}はスキルを封印されて動けない！",
    weakSleepLevelUp: "風香はさらに深く眠ってしまった！",
    weakSleepLevelMax: "風香の眠りはこの技ではこれ以上深くならない……！",
    weakRecover: "風香の封印が解けた！",
    commandSealed: "{actor}はそのコマンドを選べない！",
    playerTurn: "{actor}のターン。コマンドを選んでください。",
    enemyTurn: "{actor}のターン。",
    chooseCommand: "コマンドを選んでください。",
    healCast: "{actor}は「{skill}」をとなえた！",
    healRecover: "{target}のHPが{amount}回復した！",
    healNoEffect: "{target}のHPは満タンだ。",
    windCutterCast: "{actor}は「{skill}」を放った！",
    windCutterDamage: "風の刃が切り裂いた！ {target}に{damage}ダメージ！",
    deepBreathCast: "{actor}は深呼吸した！",
    deepBreathRecover: "{actor}は息を整え、恥ずかしさが落ち着いた！",
    deepBreathBackfire: "あまい吐息をたくさん吸い込み、眠気がさらに深まった！",
    refreshCast: "{actor}は「{skill}」を使った！",
    refreshRecover: "{actor}の眠気Lvが{level}になった！",
    refreshNoEffect: "{actor}はすでにすっきりしている。",
    selfSleepCast: "{actor}は「{skill}」を使った！",
    selfSleepApplied: "{actor}は自分から眠ってしまった！",
    notEnoughMp: "MPが足りない！",
    chooseItem: "アイテムを選んでください。",
    noItemStock: "そのアイテムはもうない！",
    itemNoEffect: "今は使う必要がない。",
    itemHpRecover: "{actor}は{item}を使った！\nHPが{amount}回復した！",
    itemMpRecover: "{actor}は{item}を使った！\nMPが{amount}回復した！",
    unusableItem: "アイテムはまだ使えない。",
    defend: "{actor}は身を守っている。",
    cannotRun: "逃げられない！",
    giggle: "{actor}はくすくす笑っている。",
    giggleSleepTaunts: [
      "",
      "あら？素直に眠ってくれるのね。",
      "ふふっ♪鼻ちょうちんを膨らませちゃって、かわいい♪",
      "あら、おっきな鼻ちょうちん。ねむりが気持ちいいのね。",
      "どう？おねんね、楽しくなってきちゃった？",
      "あらあら。シャボン玉の中、気持ちいいね〜？",
      "さあ、おねんねシャボンループにご招待♪",
      "さあ、おねんねシャボンループにご招待♪",
      "さあ、おねんねシャボンループにご招待♪",
      "さあ、スイートルームへようこそ。"
    ],
    giggleSitTaunt: "おはよう♪鼻ちょうちん、かわいかったわよ♪",
    giggleYawnTaunt: "あらあら、おっきなあくび。",
    giggleUtoutoTaunt: "ふふ、もう半分夢の中かしら？",
    giggleSleepinessTaunts: [
      "",
      "あらあら。眠くなっちゃったかしら？",
      "眠くてふらふらしてる。かわいい♪",
      "ふふ♪もうほとんど眠ってるじゃない。",
      "ふふ♪もうほとんど眠ってるじゃない。"
    ],
    giggleSealTaunt: "お耳をふーってされて、力が入らないかしら？",
    giggleNoEffect: "しかし、{target}には効かなかった。",
    giggleGaugeRecovery: "バブリアは眠たげな風香を見て、力をためた！",
    sweetBreathCast: "{actor}は{skill}を{target}に吹きかけた！",
    sleepinessUp: "{target}の眠気Lvが{level}になった！",
    sweetDreamCast: "{actor}は「{skill}」を使った！",
    sweetDreamWrap: "大きく膨らんだ鼻ちょうちんが{target}を包み込む……！",
    sweetDreamDefeat: "{target}は鼻ちょうちんの中で、甘い夢に囚われた……",
    victory: "バブリアをたおした！",
    defeat: "風香はやられてしまった..."
  },
  commands: [
    { id: "attack", label: "たたかう" },
    { id: "magic", label: "スキル" },
    { id: "item", label: "アイテム" },
    { id: "defend", label: "ぼうぎょ" },
    { id: "run", label: "にげる" }
  ],
  items: [
    {
      id: "potion",
      name: "回復薬",
      type: "hp",
      amount: 50,
      initialCount: 9,
      description: "HPを50回復する。"
    },
    {
      id: "ether",
      name: "魔力薬",
      type: "mp",
      amount: 50,
      initialCount: 9,
      description: "MPを50回復する。"
    }
  ],
  actors: {
    ally: {
      id: "fuka",
      name: "風香",
      side: "ally",
      maxHp: 80,
      maxMp: 60,
      attack: 18,
      defense: 6,
      speed: 18,
      spells: [
        {
          id: "windCutter",
          name: "ウインドカッター",
          type: "attack",
          damage: 28,
          mpCost: 6,
          description: "風の刃で敵単体にダメージを与える。"
        },
        {
          id: "deepBreath",
          name: "深呼吸",
          type: "recover",
          embarrassmentDown: 30,
          mpCost: 4,
          description: "深呼吸し、心を落ち着ける。"
        },
        {
          id: "refresh",
          name: "目覚めの風",
          type: "recover",
          sleepinessDown: 1,
          mpCost: 5,
          description: "爽やかな風で眠気を1段階下げる。"
        },
      ],
      sprites: {
        normal: "assets/fuka-normal.webp",
        sleep: "assets/fuka-sleep.webp",
        sleepiness: "assets/fuka-sleepiness.webp",
        damage: "assets/fuka-damage.webp",
        sit: "assets/fuka-stun.webp",
        yawn: "assets/fuka-yawn.webp",
        mojimoji: "assets/fuka-mojimoji.webp",
        sweetRoom: "assets/fuka-sweet-room.webp"
      }
    },
    enemy: {
      id: "bubblia",
      name: "バブリア",
      side: "enemy",
      maxHp: 200,
      attack: 16,
      defense: 5,
      speed: 14,
      specialGauge: {
        normalMax: 100,
        max: 200,
        initial: 100
      },
      sprites: {
        normal: "assets/bubblia.webp?v=20260712-bubblia2",
        yawn: "assets/bubblia-yawn.webp?v=20260712-bubblia2",
        sleepBubble: "assets/bubblia-sleep-bubble.webp?v=20260712-bubblia2"
      },
      skills: [
        {
          id: "sleepBubble",
          name: "おねんねシャボン",
          type: "status",
          status: "sleep",
          baseDuration: 2,
          maxDuration: 5,
          maxStackDuration: 9,
          damage: 1,
          gaugeCost: 100
        },
        {
          id: "earFuu",
          name: "耳ふー",
          type: "status",
          status: "earFuu",
          duration: 2,
          sleepLevelUp: 1,
          sleepLevelMax: 3,
          gaugeRecovery: 10,
          mpDamage: 6
        },
        {
          id: "yawn",
          name: "あくび",
          type: "status",
          status: "yawn",
          duration: 1,
          requiresDefending: true,
          gaugeRecovery: 35
        },
        {
          id: "noseBubblePop",
          name: "鼻ちょうちんポップ",
          type: "attack",
          requiresStatus: "sleep",
          status: "sit",
          duration: 1,
          mpDamage: 8,
          gaugeRecovery: 60,
          gaugeRecoveryPerSleepLevel: 20
        },
        {
          id: "giggle",
          name: "くすくす笑う",
          type: "status",
          gaugeRecoveryPerLevel: 10
        },
        {
          id: "sweetBreath",
          name: "あまい吐息",
          type: "status",
          status: "sleepiness",
          amount: 1
        },
        {
          id: "sweetDream",
          name: "スイートルーム♪",
          type: "finish",
          requiresSleepLevel: 9
        }
      ]
    }
  },
  statuses: {
    sleep: {
      label: "ねむり",
      duration: 3,
      wakeOnPhysicalHit: true,
      description: "眠っていて行動できない。Lvが高くなると……？"
    },
    earFuu: {
      label: "封印",
      duration: 2,
      description: "スキルを使用できない。"
    },
    sit: {
      label: "しりもち",
      duration: 1,
      description: "しりもちをついてしまい1ターン行動できない。"
    },
    yawn: {
      label: "あくび",
      duration: 1,
      description: "あくびをしてしまい1ターン行動できないうえ、睡眠技によわくなる。"
    },
    utouto: {
      label: "うとうと",
      duration: 1,
      description: "眠気が強まり、1ターン行動できない。"
    },
    mojimoji: {
      label: "もじもじ",
      duration: 1,
      description: "恥ずかしくて1ターン行動できない。"
    }
  },
  sleepiness: {
    label: "眠気Lv",
    max: 3,
    description: "Lvが高いほど睡眠の効果が長くなる。"
  }
};
