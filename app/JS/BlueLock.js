const players = [
  {
    name: "Yoichi Isagi (1st Selection)",
    cumulative_stats: 72,
    rarity: "Common",
    stats: {
      speed: 62,
      defense: 60,
      passing: 63,
      dribble: 55,
      shoot: 67,
      offense: 79,
    },
    skills: ["Spatial Awareness", "Direct Shot"],
    image: "/Yoichi Isagi (1st Selection).png"
  },
  {
    name: "Yoichi Isagi (2nd Selection)",
    cumulative_stats: 75,
    rarity: "Uncommon",
    stats: {
      speed: 65,
      defense: 63,
      passing: 66,
      dribble: 58,
      shoot: 70,
      offense: 82,
    },
    skills: ["Spatial Awareness", "Direct Shot", "Off-the-Ball"],
    image: "/Yoichi Isagi (2nd Selection).png"
  },
  {
    name: "Yoichi Isagi (Blue Lock 11)",
    cumulative_stats: 78,
    rarity: "Legendary",
    stats: {
      speed: 68,
      defense: 66,
      passing: 69,
      dribble: 61,
      shoot: 73,
      offense: 85,
    },
    skills: ["Spatial Awareness", "Direct Shot", "Off-the-Ball", "Reflex", "Flow"],
    image: "/Yoichi Isagi (Blue Lock 11).png"
  },
  {
    name: "Rin Itoshi (2nd Selection)",
    cumulative_stats: 83,
    rarity: "Rare",
    stats: {
      speed: 78,
      defense: 72,
      passing: 76,
      dribble: 81,
      shoot: 88,
      offense: 87,
    },
    skills: ["Spatial Awareness", "Perfect Kick Accuracy", "Off-the-Ball"],
    image: "/Rin Itoshi (2nd Selection).png"
  },
  {
    name: "Rin Itoshi (Blue Lock 11)",
    cumulative_stats: 86,
    rarity: "Legendary",
    stats: {
      speed: 81,
      defense: 75,
      passing: 79,
      dribble: 84,
      shoot: 91,
      offense: 90,
    },
    skills: ["Spatial Awareness", "Perfect Kick Accuracy", "Off-the-Ball", "Egotistical Destroyer"],
    image: "/Rin Itoshi (Blue Lock 11).png"
  },
  {
    name: "Meguru Bachira (1st Selection)",
    cumulative_stats: 74,
    rarity: "Common",
    stats: {
      speed: 72,
      defense: 62,
      passing: 79,
      dribble: 86,
      shoot: 70,
      offense: 71,
    },
    skills: ["Elastic Dribbling", "Key Passing"],
    image: "/Meguru Bachira (1st Selection).png"
  },
  {
    name: "Meguru Bachira (Blue Lock 11)",
    cumulative_stats: 76,
    rarity: "Rare",
    stats: {
      speed: 75,
      defense: 65,
      passing: 82,
      dribble: 89,
      shoot: 73,
      offense: 74,
    },
    skills: ["Elastic Dribbling", "Key Passing", "Monstrance"],
    image: "/Meguru Bachira (Blue Lock 11).png"
  },
  {
    name: "Ryusei Shido (U20 Japan)",
    cumulative_stats: 82,
    rarity: "Legendary",
    stats: {
      speed: 77,
      defense: 69,
      passing: 70,
      dribble: 75,
      shoot: 85,
      offense: 83,
    },
    skills: ["Dominant Physicality", "Extreme Spatial Perception", "Reflex", "Flow"],
    image: "/Ryusei Shido (U20 Japan).png"
  },
  {
    name: "Sae Itoshi",
    cumulative_stats: 87,
    rarity: "Legendary",
    stats: {
      speed: 77,
      defense: 75,
      passing: 88,
      dribble: 78,
      shoot: 76,
      offense: 74,
    },
    skills: ["Perfect Kick Technique", "Counter Dribbling", "Reflex", "Meta-Vision"],
    image: "/Sae Itoshi.png"
  },
  {
    name: "Seishiro Nagi (2nd Selection)",
    cumulative_stats: 80,
    rarity: "Rare",
    stats: {
      speed: 70,
      defense: 63,
      passing: 73,
      dribble: 74,
      shoot: 80,
      offense: 79,
    },
    skills: ["Perfect Ball Control", "Trapping", "Flow"],
    image: "/Seishiro Nagi (2nd Selection).png"
  },
  {
    name: "Seishiro Nagi (Blue Lock 11)",
    cumulative_stats: 83,
    rarity: "Legendary",
    stats: {
      speed: 73,
      defense: 66,
      passing: 76,
      dribble: 77,
      shoot: 83,
      offense: 82,
    },
    skills: ["Perfect Ball Control", "Trapping", "Flow"],
    image: "/Seishiro Nagi (Blue Lock 11).png"
  },
  {
    name: "Reo Mikage (Blue Lock 11)",
    cumulative_stats: 72,
    rarity: "Rare",
    stats: {
      speed: 75,
      defense: 80,
      passing: 83,
      dribble: 77,
      shoot: 76,
      offense: 80,
    },
    skills: ["Dexterity", "The Chameleon"],
    image: "/Reo Mikage (Blue Lock 11).png"
  }, {
    name: "Tabito Karasu (Blue Lock 11)",
    cumulative_stats: 78,
    rarity: "Rare",
    stats: {
      speed: 78,
      defense: 82,
      passing: 75,
      dribble: 80,
      shoot: 74,
      offense: 76,
    },
    skills: ["Sharp Analyzation", "Expert Ball Control"],
    image: "/Tabito Karasu (Blue Lock 11).png"
  },
  {
    name: "Eita Otoya (Blue Lock 11)",
    cumulative_stats: 76,
    rarity: "Rare",
    stats: {
      speed: 82,
      defense: 74,
      passing: 75,
      dribble: 76,
      shoot: 74,
      offense: 76,
    },
    skills: ["High Speed Infiltration", "Off-the-Ball"],
    image: "/Eita Otoya (Blue Lock 11).png"
  },
  {
    name: "Hyoma Chigiri (1st Selection)",
    cumulative_stats: 78,
    rarity: "Common",
    stats: {
      speed: 86,
      defense: 56,
      passing: 68,
      dribble: 81,
      shoot: 76,
      offense: 83,
    },
    skills: ["Immeasurable Speed"],
    image: "/Hyoma Chigiri (1st Selection).png"
  },
  {
    name: "Hyoma Chigiri (Blue Lock 11)",
    cumulative_stats: 78,
    rarity: "Rare",
    stats: {
      speed: 89,
      defense: 59,
      passing: 71,
      dribble: 84,
      shoot: 79,
      offense: 86,
    },
    skills: ["Immeasurable Speed"],
    image: "/Hyoma Chigiri (Blue Lock 11).png"
  },
  {
    name: "Shoei Barou (2nd Selection)",
    cumulative_stats: 83,
    rarity: "Uncommon",
    stats: {
      speed: 71,
      defense: 59,
      passing: 52,
      dribble: 76,
      shoot: 87,
      offense: 86,
    },
    skills: ["Charging Skill", "Middle Shot", "Villain Soccer"],
    image: "/Shoei Barou (2nd Selection).png"
  },
  {
    name: "Shoei Barou (Blue Lock 11)",
    cumulative_stats: 86,
    rarity: "Legendary",
    stats: {
      speed: 74,
      defense: 59,
      passing: 52,
      dribble: 83,
      shoot: 90,
      offense: 89,
    },
    skills: ["Charging Skill", "Middle Shot", "Flow", "Villain Soccer"],
    image: "/Shouei Barou (Blue Lock 11).png"
  },
  {
    name: "Kenyu Yukimiya (Blue Lock 11)",
    cumulative_stats: 73,
    rarity: "Rare",
    stats: {
      speed: 82,
      defense: 70,
      passing: 71,
      dribble: 85,
      shoot: 80,
      offense: 82,
    },
    skills: ["1-on-1 Emperor Style", "Immense Speed", "Gyro Shot", "Flow"],
    image: "/Kenyu Yukimiya (Blue Lock 11).png"
  },
  {
    name: "Ikki Niko (1st Selection)",
    cumulative_stats: 73,
    rarity: "Common",
    stats: {
      speed: 69,
      defense: 75,
      passing: 79,
      dribble: 67,
      shoot: 61,
      offense: 73,
    },
    skills: ["Spatial Awareness"],
    image: "/Ikki Niko (1st Selection).png"
  },
  {
    name: "Ikki Niko (Blue Lock 11)",
    cumulative_stats: 76,
    rarity: "Rare",
    stats: {
      speed: 72,
      defense: 78,
      passing: 82,
      dribble: 70,
      shoot: 64,
      offense: 76,
    },
    skills: ["Spatial Awareness", "Watchtower Soccer"],
    image: "/Ikki Niko (Blue Lock 11).png"
  },
  {
    name: "Jyubei Aryu (Blue Lock 11)",
    cumulative_stats: 71,
    rarity: "Uncommon",
    stats: {
      speed: 68,
      defense: 84,
      passing: 62,
      dribble: 63,
      shoot: 73,
      offense: 66,
    },
    skills: ["Jumping Power", "Long Reach"],
    image: "/Jyubei Aryu (Blue Lock 11).png"
  },
  {
    name: "Oliver Aiku",
    cumulative_stats: 76,
    rarity: "Legendary",
    stats: {
      speed: 75,
      defense: 87,
      passing: 77,
      dribble: 70,
      shoot: 71,
      offense: 66,
    },
    skills: ["Dominant Physicality", "Spatial Awareness", "Reflex", "Flow"],
    image: "/Oliver Aiku.png"
  },
  {
    name: "Rensuke Kunigami",
    cumulative_stats: 83,
    rarity: "Common",
    stats: {
      speed: 73,
      defense: 63,
      passing: 62,
      dribble: 65,
      shoot: 80,
      offense: 79,
    },
    skills: ["Dominant Physicality", "Finesse Shot"],
    image: "/Rensuke Kunigami.png"
  }  
];

const allBanners = [
  "Yoichi Isagi (1st Selection)",
  "Yoichi Isagi (2nd Selection)",
  "Rin Itoshi (2nd Selection)",
  "Meguru Bachira (1st Selection)",
  "Seishiro Nagi (2nd Selection)",
  "Reo Mikage (Blue Lock 11)",
  "Tabito Karasu (Blue Lock 11)",
  "Eita Otoya (Blue Lock 11)",
  "Hyoma Chigiri (1st Selection)",
  "Ikki Niko (1st Selection)",
  "Ikki Niko (Blue Lock 11)",
  "Jyubei Aryu (Blue Lock 11)",
  "Oliver Aiku",
  "Rensuke Kunigami",
  "Kenyu Yukimiya (Blue Lock 11)"
];

const banner1Exclusive = [
  "Yoichi Isagi (Blue Lock 11)",
  "Rin Itoshi (Blue Lock 11)",
]

const banner2Exclusive = [
  "Sae Itoshi",
  "Ryusei Shido (U20 Japan)",
];

const banner3Exclusive = [
  "Seishiro Nagi (Blue Lock 11)",
  "Shoei Baro (Blue Lock 11)",
]

export { players, allBanners, banner1Exclusive, banner2Exclusive, banner3Exclusive };
