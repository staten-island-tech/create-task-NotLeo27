const players = [
  {
    name: "Yoichi Isagi (1st Selection)",
    cumulative_stats: 72,
    rarity: "Rare",
    stats: {
      speed: 62,
      defense: 60,
      passing: 63,
      dribble: 55,
      shoot: 67,
      offense: 79,
    },
    skills: ["Spatial Awareness", "Direct Shot"],
    image: ""
  },
  {
    name: "Yoichi Isagi (2nd Selection)",
    cumulative_stats: 75,
    rarity: "Epic",
    stats: {
      speed: 65,
      defense: 63,
      passing: 66,
      dribble: 58,
      shoot: 70,
      offense: 82,
    },
    skills: ["Spatial Awareness", "Direct Shot", "Off-the-Ball"],
    image: ""
  },
  {
    name: "Yoichi Isagi (Blue Lock 11)",
    cumulative_stats: 78,
    rarity: "Mythic",
    stats: {
      speed: 68,
      defense: 66,
      passing: 69,
      dribble: 61,
      shoot: 73,
      offense: 85,
    },
    skills: ["Spatial Awareness", "Direct Shot", "Off-the-Ball", "Reflex", "Flow"],
    image: " "
  },
  {
    name: "Rin Itoshi (2nd Selection)",
    cumulative_stats: 83,
    rarity: "Legendary",
    stats: {
      speed: 78,
      defense: 72,
      passing: 76,
      dribble: 81,
      shoot: 88,
      offense: 87,
    },
    skills: ["Spatial Awareness", "Perfect Kick Accuracy", "Off-the-Ball"],
    image: ""
  },
  {
    name: "Rin Itoshi (Blue Lock 11)",
    cumulative_stats: 86,
    rarity: "Mythic",
    stats: {
      speed: 81,
      defense: 75,
      passing: 79,
      dribble: 84,
      shoot: 91,
      offense: 90,
    },
    skills: ["Spatial Awareness", "Perfect Kick Accuracy", "Off-the-Ball", "Egotistical Destroyer"],
    image: ""
  },  {
    name: "Meguru Bachira (1st Selection)",
    cumulative_stats: 74,
    rarity: "Rare",
    stats: {
      speed: 72,
      defense: 62,
      passing: 79,
      dribble: 86,
      shoot: 70,
      offense: 71,
    },
    skills: ["Elastic Dribbling", "Key Passing"],
    image: ""
  },  {
    name: "Meguru Bachira (Blue Lock 11)",
    cumulative_stats: 76,
    rarity: "Legendary",
    stats: {
      speed: 75,
      defense: 65,
      passing: 82,
      dribble: 89,
      shoot: 73,
      offense: 74,
    },
    skills: ["Elastic Dribbling", "Key Passing", "Monstrance"],
    image: ""
  },  {
    name: "Ryusei Shidou (U20 Japan)",
    cumulative_stats: 82,
    rarity: "Mythic",
    stats: {
      speed: 77,
      defense: 69,
      passing: 70,
      dribble: 75,
      shoot: 85,
      offense: 83,
    },
    skills: ["Dominant Physicality", "Extreme Spatial Perception", "Reflex", "Flow"],
    image: ""
  },  {
    name: "Sae Itoshi",
    cumulative_stats: 87,
    rarity: "Mythic",
    stats: {
      speed: 77,
      defense: 75,
      passing: 88,
      dribble: 78,
      shoot: 76,
      offense: 74,
    },
    skills: ["Perfect Kick Technique", "Counter Dribbling", "Reflex", "Meta-Vision"],
    image: ""
  },  {
    name: "Seishiro Nagi (2nd Selection)",
    cumulative_stats: 80,
    rarity: "Legendary",
    stats: {
      speed: 70,
      defense: 63,
      passing: 73,
      dribble: 74,
      shoot: 80,
      offense: 79,
    },
    skills: ["Perfect Ball Control", "Trapping", "Flow"],
    image: ""
  },  {
    name: "Seishiro Nagi (Blue Lock 11)",
    cumulative_stats: 83,
    rarity: "Mythic",
    stats: {
      speed: 73,
      defense: 66,
      passing: 76,
      dribble: 77,
      shoot: 83,
      offense: 82,
    },
    skills: ["Perfect Ball Control", "Trapping", "Flow"],
    image: ""
  },  {
    name: "Reo Mikage (Blue Lock 11)",
    cumulative_stats: 72,
    rarity: "Legendary",
    stats: {
      speed: 75,
      defense: 80,
      passing: 83,
      dribble: 77,
      shoot: 76,
      offense: 80,
    },
    skills: ["Dexterity", "The Chameleon"],
    image: ""
  }, {
    name: "Tabito Karasu (Blue Lock 11)",
    cumulative_stats: 78,
    rarity: "Legendary",
    stats: {
      speed: 78,
      defense: 82,
      passing: 75,
      dribble: 80,
      shoot: 74,
      offense: 76,
    },
    skills: ["Sharp Analyzation", "Expert Ball Control"],
    image: ""
  }, {
    name: "Eita Otoya (Blue Lock 11)",
    cumulative_stats: 76,
    rarity: "Legendary",
    stats: {
      speed: 82,
      defense: 74,
      passing: 75,
      dribble: 76,
      shoot: 74,
      offense: 76,
    },
    skills: ["High Speed Infiltration", "Off-the-Ball"],
    image: ""
  }, {
    name: "Hyoma Chigiri (1st Selection)",
    cumulative_stats: 78,
    rarity: "Rare",
    stats: {
      speed: 86,
      defense: 56,
      passing: 68,
      dribble: 81,
      shoot: 76,
      offense: 83,
    },
    skills: ["Immeasurable Speed"],
    image: ""
  }, {
    name: "Hyoma Chigiri (Blue Lock 11)",
    cumulative_stats: 78,
    rarity: "Legendary",
    stats: {
      speed: 89,
      defense: 59,
      passing: 71,
      dribble: 84,
      shoot: 79,
      offense: 86,
    },
    skills: ["Immeasurable Speed"],
    image: ""
  }, {
    name: "Shoei Barou (2nd Selection)",
    cumulative_stats: 83,
    rarity: "Epic",
    stats: {
      speed: 71,
      defense: 59,
      passing: 52,
      dribble: 76,
      shoot: 87,
      offense: 86,
    },
    skills: ["Charging Skill", "Middle Shot","Villain Soccer"],
    image: ""
  },  {
    name: "Shouei Barou (Blue Lock 11)",
    cumulative_stats: 86,
    rarity: "Mythic",
    stats: {
      speed: 74,
      defense: 59,
      passing: 52,
      dribble: 83,
      shoot: 90,
      offense: 89,
    },
    skills: ["Charging Skill", "Middle Shot", "Flow", "Villain Soccer"],
    image: ""
  }, {
    name: "Kenyu Yukimiya",
    cumulative_stats: 73,
    rarity: "Legendary",
    stats: {
      speed: 82,
      defense: 70,
      passing: 71,
      dribble: 85,
      shoot: 80,
      offense: 82,
    },
    skills: ["1-on-1 Emperor Style", "Immense Speed", "Gyro Shot", "Flow"],
    image: ""
  },  {
    name: "Ikki Niko (1st Selection)",
    cumulative_stats: 73,
    rarity: "Rare",
    stats: {
      speed: 69,
      defense: 75,
      passing: 79,
      dribble: 67,
      shoot: 61,
      offense: 73,
    },
    skills: ["Spatial Awareness"],
    image: ""
  },  {
    name: "Ikki Niko (Blue Lock 11)",
    cumulative_stats: 76,
    rarity: "Legendary",
    stats: {
      speed: 72,
      defense: 78,
      passing: 82,
      dribble: 70,
      shoot: 64,
      offense: 76,
    },
    skills: ["Spatial Awareness", "Watchtower Soccer"],
    image: "" 
  },  {
    name: "Jyubei Aryu (Blue Lock 11)",
    cumulative_stats: 71,
    rarity: "Epic",
    stats: {
      speed: 68,
      defense: 84,
      passing: 62,
      dribble: 63,
      shoot: 73,
      offense: 66,
    },
    skills: ["Jumping Power", "Long Reach"],
    image: ""
  },  {
    name: "Oliver Aiku",
    cumulative_stats: 0,
    rarity: "Mythic",
    stats: {
      speed: 75,
      defense: 87,
      passing: 77,
      dribble: 70,
      shoot: 71,
      offense: 66,
    },
    skills: ["Dominant Physicality", "Spatial Awareness", "Reflex", "Flow"],
    image: ""
  },  {
    name: "Rensuke Kunigami",
    cumulative_stats: 83,
    rarity: "Rare",
    stats: {
      speed: 73,
      defense: 63,
      passing: 62,
      dribble: 65,
      shoot: 80,
      offense: 79,
    },
    skills: ["Dominant Physicality", "Finesse Shot"],
    image: ""
  }
];

/*
{
  name: "",
  cumulative_stats: 0,
  rarity: "",
  stats: {
    speed: 0,
    defense: 0,
    passing: 0,
    dribble: 0,
    shoot: 0,
    offense: 0,
  },
  skills: [],
  image: ""
}
*/