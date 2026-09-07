window.ENEMY_AI = {
  rules: [
    {
      name: "ねむりLv9でスイートルーム",
      when: { sleepLevelAtLeast: 9 },
      action: "sweetDream"
    },
    {
      name: "もじもじ、かつ眠気Lv.1以上でゲージがあればおねんねシャボン",
      when: {
        canUseSleepBubble: true,
          status: "mojimoji",
          sleepinessAtLeast: 1
      },
      action: "sleepBubble"
    },
    {
      name: "行動不能中にゲージがあればおねんねシャボン",
      when: {
        canUseSleepBubble: true,
        anyStatus: ["sleep", "yawn", "utouto"]
      },
      action: "sleepBubble"
    },
    {
      name: "深いねむりが切れそうなら鼻ちょうちんポップ",
      when: {
        sleepLevelAtLeast: 3,
        sleepTurnsAtMost: 1
      },
      action: "noseBubblePop"
    },
    {
      name: "ねむり残り1ターン",
      when: {
        sleepTurnsEquals: 1
      },
      weights: [
        ["noseBubblePop", 80],
        ["giggle", 20]
      ]
    },
    {
      name: "深いねむり残り2ターン",
      when: {
        sleepLevelAtLeast: 3,
        sleepTurnsEquals: 2
      },
      weights: [
        ["noseBubblePop", 50],
        ["earFuu", 20],
        ["giggle", 30]
      ]
    },
    {
      name: "ねむり残り1ターン",
      when: {
        sleepTurnsEquals: 1
      },
      weights: [
        ["noseBubblePop", 40],
        ["earFuu", 40],
        ["giggle", 20]
      ]
    },
    {
      name: "深いねむり継続中",
      when: { sleepLevelAtLeast: 3 },
      weights: [
        ["earFuu", 25],
        ["giggle", 75]
      ]
    },
    {
      name: "しりもち、かつ強化シャボン保持中",
      when: {
        status: "sit",
        canUseSleepBubble: true,
        sleepBubbleBoostAtLeast: 2
      },
      weights: [
        ["giggle", 80],
        ["sleepBubble", 20]
      ]
    },
    {
      name: "強化シャボン保持中",
      when: {
        canUseSleepBubble: true,
        sleepBubbleBoostAtLeast: 2
      },
      weights: [
        ["yawn", 40],
        ["sweetBreath", 20],
        ["giggle", 20],
        ["sleepBubble", 20]
      ]
    },
    {
      name: "ゲージ満タン通常時",
      when: { canUseSleepBubble: true },
      weights: [
        ["sleepBubble", 60],
        ["yawn", 20],
        ["sweetBreath", 20]
      ]
    },
    {
      name: "浅いねむり中",
      when: {
        status: "sleep",
        sleepLevelBelow: 3
      },
      weights: [
        ["earFuu", 60],
        ["yawn", 10],
        ["giggle", 30]
      ]
    },
    {
      name: "しりもち or あくび",
      when: { anyStatus: ["sit", "yawn"] },
      weights: [
        ["giggle", 80],
        ["sweetBreath", 20]
      ]
    },
    {
      name: "うとうと",
      when: { status: "utouto" },
      weights: [
        ["giggle", 80],
        ["earFuu", 20]
      ]
    },
    {
      name: "もじもじ",
      when: { status: "mojimoji" },
      weights: [
        ["sweetBreath", 80],
        ["earFuu", 20]
      ]
    },
    {
      name: "通常時",
      when: { always: true },
      weights: [
        ["sweetBreath", { base: 70, sleepiness: -20, minSleepiness: 0, maxSleepiness: 3 }],
        ["earFuu", 20],
        ["yawn", { sleepiness: 20, minSleepiness: 0, maxSleepiness: 3 }],
        ["giggle", 10]
      ]
    }
  ],
  fallback: "sweetBreath"
};
