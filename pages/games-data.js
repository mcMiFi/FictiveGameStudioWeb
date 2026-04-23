const GAMES_DATA = {
  babushka: {
    title: "Babushka",
    genre: "Simulation • Survival",
    status: "Game Jam",
    statusClass: "badge-jam",
    gradient: "linear-gradient(135deg, #8B2500 0%, #20132E 50%, #4a1a6b 100%)",
    emoji: "👵",
    description: `<p>Step into the worn slippers of a Russian babushka — a grandmother whose iron will, cunning recipes, and old-world stubbornness are her only weapons against the chaos of post-Soviet daily life.</p>
      <p>Babushka was born during a 48-hour game jam and quickly became a viral sensation. The game was shared across Russian social media at an astonishing rate — and then promptly banned by Russian internet authorities, which only made it more popular.</p>
      <p>Players must manage their babushka's health, reputation, and pantry while navigating absurd encounters with neighbors, local bureaucrats, and the occasional bear. Every decision matters: will you share your borscht or weaponize it?</p>`,
    features: [
      { icon: "🥣", title: "Recipe Crafting", desc: "Cook traditional dishes that double as power-ups and social weapons" },
      { icon: "🏠", title: "Apartment Management", desc: "Maintain your Soviet-era flat against decay, thieves, and nosy neighbors" },
      { icon: "📰", title: "Gossip Network", desc: "Build alliances through strategic information sharing" },
      { icon: "❄️", title: "Survival Mechanics", desc: "Manage warmth, food, and stubbornness meters to stay alive" },
      { icon: "🎭", title: "Moral Choices", desc: "Every encounter offers multiple approaches — kind, cunning, or chaotic" },
      { icon: "🏆", title: "Multiple Endings", desc: "Your choices determine whether babushka thrives or merely survives" }
    ],
    reviews: [
      { author: "IndieGameMag", rating: 4.5, text: "Babushka is the kind of absurd, heartfelt game that only comes from a game jam. It's rough around the edges but absolutely unforgettable." },
      { author: "SatireGamer", rating: 5, text: "Got banned in Russia. That alone should tell you it's worth playing. The humor is sharp, the gameplay surprisingly deep." },
      { author: "PixelPundit", rating: 4, text: "A love letter to Eastern European grandmothers everywhere, wrapped in dark comedy and surprisingly solid survival mechanics." }
    ],
    credits: [
      { role: "Game Design", name: "Tomáš Fuk" },
      { role: "Programming", name: "Zdeněk Botek" },
      { role: "Art & Sound", name: "Petr Petrovič Lej" },
      { role: "Jam Duration", name: "48 hours" }
    ],
    storeLinks: [
      { name: "Play on Itch.io", url: "#", icon: "🎮" },
      { name: "View Jam Page", url: "#", icon: "🏅" }
    ]
  },

  "city-boiler": {
    title: "City Boiler",
    genre: "Strategy • Steampunk",
    status: "Game Jam",
    statusClass: "badge-jam",
    gradient: "linear-gradient(135deg, #8B4513 0%, #20132E 50%, #654321 100%)",
    emoji: "🏭",
    description: `<p>City Boiler is a steampunk city builder where the machinery of civilization runs on corruption as much as coal. Build and manage the heating infrastructure of a crumbling industrial city, keeping citizens warm while navigating the dark underbelly of municipal politics.</p>
      <p>Every pipe you lay, every boiler you ignite, and every contract you sign comes with a moral cost. Will you keep the heat flowing at any price, or let the furnaces die to expose the rot at the city's core?</p>
      <p>Originally created as a game jam entry exploring themes of infrastructure decay and systemic corruption, City Boiler grew into a cult favorite among strategy enthusiasts who appreciate its unique blend of city management and dark narrative.</p>`,
    features: [
      { icon: "🔧", title: "Pipe Networks", desc: "Design and optimize heating networks across expanding city districts" },
      { icon: "💰", title: "Corruption System", desc: "Navigate bribes, kickbacks, and backroom deals to keep the city running" },
      { icon: "🌡️", title: "Temperature Management", desc: "Balance heat distribution as demand outpaces crumbling supply" },
      { icon: "⚙️", title: "Steampunk Tech Tree", desc: "Research and unlock new boiler technologies and fuel sources" },
      { icon: "👥", title: "Citizen Morale", desc: "Keep the populace warm and content or face protests and revolt" },
      { icon: "📊", title: "Dynamic Economy", desc: "Coal prices fluctuate, pipes corrode, and winter always comes" }
    ],
    reviews: [
      { author: "StrategyCorner", rating: 4, text: "A unique twist on city builders. The corruption mechanics add a layer of moral complexity rarely seen in the genre." },
      { author: "SteamPunkWeekly", rating: 4.5, text: "Gorgeous steampunk aesthetic meets genuinely challenging management gameplay. The pipe optimization alone is worth the price of entry." },
      { author: "DarkGamesReview", rating: 3.5, text: "Rough in places, but the core loop of balancing infrastructure against corruption is compelling and thought-provoking." }
    ],
    credits: [
      { role: "Game Design", name: "Tomáš Fuk & Zdeněk Botek" },
      { role: "Programming", name: "Zdeněk Botek" },
      { role: "Art Direction", name: "Petr Petrovič Lej" },
      { role: "Jam Duration", name: "72 hours" }
    ],
    storeLinks: [
      { name: "Play on Itch.io", url: "#", icon: "🎮" },
      { name: "View Jam Page", url: "#", icon: "🏅" }
    ]
  },

  "moscow-subway": {
    title: "Moscow Subway Driver",
    genre: "Horror • Psychological",
    status: "Published",
    statusClass: "badge-published",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    emoji: "🚇",
    description: `<p>Moscow Subway Driver is a psychological horror experience set in the sprawling, labyrinthine metro system beneath Moscow. You are a night-shift driver, alone in your cabin, hurtling through tunnels that seem to stretch and shift in impossible ways.</p>
      <p>At first, everything seems routine — the same stations, the same schedules, the same empty platforms at 3 AM. But gradually, you notice changes. A passenger who shouldn't be there. A station name that's different. A tunnel that leads somewhere the map doesn't show.</p>
      <p>Is the metro alive? Are you losing your mind? Or has something ancient and patient been waiting in these tunnels all along? Moscow Subway Driver is a slow-burn horror masterpiece that turns the mundane into the terrifying.</p>`,
    features: [
      { icon: "🚂", title: "Authentic Simulation", desc: "Faithfully recreated Moscow metro systems, trains, and procedures" },
      { icon: "👻", title: "Slow-Burn Horror", desc: "Subtle anomalies build into full psychological terror over multiple shifts" },
      { icon: "🗺️", title: "Shifting Metro", desc: "The map changes when you're not looking — stations appear and vanish" },
      { icon: "👤", title: "Passenger System", desc: "NPCs with their own behaviors, some normal, some deeply unsettling" },
      { icon: "📻", title: "Radio Dispatch", desc: "Cryptic messages from dispatch that may or may not be real" },
      { icon: "🔦", title: "Multiple Endings", desc: "Your actions and observations determine which truth you uncover" }
    ],
    reviews: [
      { author: "HorrorGameDaily", rating: 5, text: "The best psychological horror game since Soma. Moscow Subway Driver understands that the scariest thing is the familiar becoming unfamiliar." },
      { author: "IndieGamerPro", rating: 4.5, text: "Masterful tension building. I've never been so scared of a subway announcement tone in my life." },
      { author: "GameCritique", rating: 4, text: "A triumph of atmospheric horror. The metro has never been so terrifying — and I ride it daily." }
    ],
    credits: [
      { role: "Creative Director", name: "Tomáš Fuk" },
      { role: "Lead Programmer", name: "Zdeněk Botek" },
      { role: "Art & Sound Design", name: "Petr Petrovič Lej" },
      { role: "Published", name: "2025" }
    ],
    storeLinks: [
      { name: "Buy on Steam", url: "#", icon: "🎮" },
      { name: "Buy on GOG", url: "#", icon: "💿" },
      { name: "Official Website", url: "#", icon: "🌐" }
    ]
  },

  "pigeon-racing": {
    title: "Pigeon Racing VR",
    genre: "Sports • VR",
    status: "In Development",
    statusClass: "badge-dev",
    gradient: "linear-gradient(135deg, #2196F3 0%, #20132E 50%, #9C27B0 100%)",
    emoji: "🐦",
    description: `<p>Pigeon Racing VR takes the centuries-old sport of pigeon racing and catapults it into the future with virtual reality, pigeon-mounted cameras, and competitive multiplayer mayhem.</p>
      <p>Train your birds, breed championship bloodlines, customize their gear (yes, pigeon gear), and race them through increasingly absurd courses — from urban rooftop slaloms to cross-country endurance flights through weather systems.</p>
      <p>Currently in active development, Pigeon Racing VR represents Wafle Gamedev's first foray into virtual reality and their most ambitious project to date. Early access is planned for late 2026.</p>`,
    features: [
      { icon: "🥽", title: "Full VR Support", desc: "Experience the thrill of flight through your pigeon's eyes in immersive VR" },
      { icon: "🧬", title: "Breeding System", desc: "Breed pigeons with unique traits, stats, and personalities" },
      { icon: "🏋️", title: "Training Minigames", desc: "Build your pigeon's stamina, speed, and navigation skills" },
      { icon: "🌦️", title: "Dynamic Weather", desc: "Race through rain, wind, fog, and more — each affects flight differently" },
      { icon: "👥", title: "Multiplayer Racing", desc: "Compete against friends and rivals in real-time pigeon races" },
      { icon: "🎨", title: "Pigeon Customization", desc: "Outfit your birds with goggles, capes, helmets, and racing stripes" }
    ],
    reviews: [
      { author: "VRWorldNews", rating: 0, text: "We played an early demo and couldn't stop laughing. This might be the most original VR game in development right now." },
      { author: "BirdWatcherGaming", rating: 0, text: "Finally, a game that takes pigeon racing seriously. Well, as seriously as you can while wearing a tiny pigeon helmet." }
    ],
    credits: [
      { role: "Creative Director", name: "Tomáš Fuk" },
      { role: "Lead Programmer", name: "Zdeněk Botek" },
      { role: "Art Direction", name: "Petr Petrovič Lej" },
      { role: "Status", name: "In Development — Early Access 2026" }
    ],
    storeLinks: [
      { name: "Wishlist on Steam", url: "#", icon: "🎮" },
      { name: "Join Discord", url: "#", icon: "💬" }
    ]
  },

  roberttown: {
    title: "RobertTown",
    genre: "Adventure • Puzzle",
    status: "Game Jam",
    statusClass: "badge-jam",
    gradient: "linear-gradient(135deg, #5D4037 0%, #20132E 50%, #827717 100%)",
    emoji: "🏘️",
    description: `<p>RobertTown is a point-and-click adventure game set in a bizarre, slightly dystopian Central European town where nothing is quite as it seems. Think Machinarium meets Kafka, with a dash of Švejk-style absurdist humor.</p>
      <p>You play as an unnamed newcomer who arrives in RobertTown to discover that the entire settlement is named after, built by, and governed by someone named Robert — who may or may not actually exist. As you explore the town's quirky districts, solve environmental puzzles, and interact with eccentric residents, you slowly uncover the truth behind RobertTown's founding and its increasingly strange rules.</p>
      <p>The game features hand-drawn art inspired by Czech animation traditions and a soundtrack mixing folk instruments with glitchy electronic textures.</p>`,
    features: [
      { icon: "🖱️", title: "Point & Click", desc: "Classic adventure game mechanics with modern quality-of-life improvements" },
      { icon: "🧩", title: "Environmental Puzzles", desc: "Logic puzzles integrated naturally into the world and its absurd rules" },
      { icon: "🎨", title: "Hand-Drawn Art", desc: "Every screen is illustrated in a style inspired by Czech animation" },
      { icon: "💬", title: "Dialogue System", desc: "Multiple conversation paths with quirky, memorable characters" },
      { icon: "🔍", title: "Exploration", desc: "Discover hidden areas, secrets, and Robert's mysterious backstory" },
      { icon: "🎵", title: "Original Soundtrack", desc: "Folk-electronic fusion score that adapts to your actions" }
    ],
    reviews: [
      { author: "AdventureClassics", rating: 4.5, text: "RobertTown is what happens when talented developers love Machinarium and Kafka in equal measure. A gem." },
      { author: "PuzzleGameFan", rating: 4, text: "The puzzles are clever without being obtuse, and the world is so charmingly weird you'll want to explore every corner." },
      { author: "CzechGamingScene", rating: 5, text: "A love letter to Central European absurdism. The art style alone makes this worth playing." }
    ],
    credits: [
      { role: "Game Design", name: "Tomáš Fuk" },
      { role: "Programming", name: "Zdeněk Botek" },
      { role: "Art & Animation", name: "Petr Petrovič Lej" },
      { role: "Jam Duration", name: "72 hours" }
    ],
    storeLinks: [
      { name: "Play on Itch.io", url: "#", icon: "🎮" },
      { name: "View Jam Page", url: "#", icon: "🏅" }
    ]
  },

  "bureaucracy-boss": {
    title: "Bureaucracy Boss",
    genre: "Management • Dark Humor",
    status: "Published",
    statusClass: "badge-published",
    gradient: "linear-gradient(135deg, #37474F 0%, #20132E 50%, #1B5E20 100%)",
    emoji: "📋",
    description: `<p>Bureaucracy Boss is a darkly comedic management game where you climb the ranks of an absurdly complex government bureaucracy. Your weapons? Paperwork, rubber stamps, and an encyclopedic knowledge of subsection 4.7.2.a of the Municipal Filing Code.</p>
      <p>Inspired by Papers, Please and Tropico, but with Wafle Gamedev's signature satirical edge, the game puts you in charge of a government department where efficiency is punished, forms must be filed in triplicate, and the coffee machine is classified as critical infrastructure.</p>
      <p>As you rise through the ranks, you'll face increasingly absurd ethical dilemmas: Do you approve the building permit for the orphanage, or deny it because form 27-B is missing a staple? Do you fast-track the mayor's cousin's application, or bury it under a mountain of red tape?</p>`,
    features: [
      { icon: "📝", title: "Form Processing", desc: "Review, stamp, deny, and creatively misfile hundreds of unique documents" },
      { icon: "🏛️", title: "Department Management", desc: "Hire, fire, and strategically relocate employees across departments" },
      { icon: "📈", title: "Career Ladder", desc: "Climb from intern to department head through merit, connections, or sabotage" },
      { icon: "⚖️", title: "Ethical Dilemmas", desc: "Every decision balances efficiency against morality against self-interest" },
      { icon: "☕", title: "Office Politics", desc: "Navigate alliances, rivalries, and the critical question of who controls the coffee machine" },
      { icon: "🔄", title: "Procedural Scenarios", desc: "No two playthroughs are the same — cases and characters change every run" }
    ],
    reviews: [
      { author: "GameInformer", rating: 4.5, text: "If Papers, Please and The Office had a baby raised by Kafka, this would be it. Wickedly funny and surprisingly addictive." },
      { author: "DarkHumorGames", rating: 5, text: "I've never felt so conflicted about a rubber stamp. Bureaucracy Boss is a masterpiece of satirical game design." },
      { author: "StrategyGamer", rating: 4, text: "Beneath the humor lies a genuinely challenging management game. The ethical dilemma system is particularly impressive." }
    ],
    credits: [
      { role: "Creative Director", name: "Tomáš Fuk" },
      { role: "Lead Programmer", name: "Zdeněk Botek" },
      { role: "Art & Sound", name: "Petr Petrovič Lej" },
      { role: "Published", name: "2025" }
    ],
    storeLinks: [
      { name: "Buy on Steam", url: "#", icon: "🎮" },
      { name: "Buy on GOG", url: "#", icon: "💿" },
      { name: "Official Website", url: "#", icon: "🌐" }
    ]
  },

  "exit8-ukrajina": {
    title: "Exit 8: Ukrajina",
    genre: "Horror • Liminal",
    status: "Game Jam",
    statusClass: "badge-jam",
    gradient: "linear-gradient(135deg, #1B2631 0%, #20132E 50%, #2E4053 100%)",
    emoji: "🚪",
    description: `<p>Exit 8: Ukrajina is a liminal horror experience inspired by The Exit 8, transplanted from a Japanese metro station to a fog-shrouded Ukrainian village. Instead of spotting anomalies in a subway corridor, you must navigate the eerie paths between old wooden houses and determine what — or who — belongs and what doesn't.</p>
      <p>The village loops endlessly. Each pass through presents subtle (and sometimes not-so-subtle) changes. A fence post that wasn't there before. A figure standing where no one was. A house number that doesn't exist. Your job is to observe, remember, and decide: walk forward or turn back.</p>
      <p>Created during a 48-hour game jam, Exit 8: Ukrajina became one of the most discussed entries in the competition, praised for its oppressive atmosphere and innovative twist on the liminal horror formula.</p>`,
    features: [
      { icon: "👁️", title: "Anomaly Detection", desc: "Spot what's wrong in each loop — some changes are obvious, others are nearly invisible" },
      { icon: "🌫️", title: "Atmospheric Horror", desc: "Dense fog, ambient village sounds, and unsettling silence build constant tension" },
      { icon: "🔁", title: "Loop Mechanics", desc: "The village repeats with variations — go forward if normal, turn back if not" },
      { icon: "🏚️", title: "Ukrainian Setting", desc: "Authentic Slavic village aesthetic with traditional architecture and details" },
      { icon: "🎧", title: "Binaural Audio", desc: "3D spatial audio designed for headphones — every creak and whisper matters" },
      { icon: "⚡", title: "Quick Sessions", desc: "Perfect for short, intense horror sessions — each run takes 15-30 minutes" }
    ],
    reviews: [
      { author: "HorrorJamReview", rating: 4.5, text: "The best Exit 8 variant I've played. The Ukrainian village setting adds a layer of folk horror that the original didn't have." },
      { author: "LiminalSpacesFan", rating: 5, text: "Terrifying. The fog alone had me on edge, but the anomalies are so cleverly designed I second-guessed everything." },
      { author: "JamJudge_Official", rating: 4, text: "A technically impressive and atmospheric jam entry. The attention to detail in the village environment is remarkable for 48 hours of work." }
    ],
    credits: [
      { role: "Game Design", name: "Tomáš Fuk" },
      { role: "Programming", name: "Zdeněk Botek" },
      { role: "Art & Sound", name: "Petr Petrovič Lej" },
      { role: "Jam Duration", name: "48 hours" }
    ],
    storeLinks: [
      { name: "Play on Itch.io", url: "#", icon: "🎮" },
      { name: "View Jam Page", url: "#", icon: "🏅" }
    ]
  },

  "cocaine-smuggler": {
    title: "Cocaine Smuggler",
    genre: "Horror • Roguelike",
    status: "Game Jam",
    statusClass: "badge-jam",
    gradient: "linear-gradient(135deg, #1a0a2e 0%, #0d1117 50%, #2d0a4e 100%)",
    emoji: "🕳️",
    description: `<p>Cocaine Smuggler is a dark horror roguelike that plunges you into the claustrophobic tunnel networks beneath Las Vegas. Inspired by Doom's oppressive atmosphere and classic roguelike mechanics, it tasks you with navigating an ever-shifting labyrinth of service tunnels, storm drains, and forgotten basements.</p>
      <p>You're a runner — the lowest rung in the cartel ladder. Your job is simple: get the package from Point A to Point B. But the tunnels are not empty. Things live down here — things that the neon lights of the Strip above have kept hidden for decades.</p>
      <p>Each run is procedurally generated, with new layouts, threats, and moral quandaries. Do you help the other runners you encounter, or leave them to whatever is making those sounds in the dark? Every choice affects your reputation, your loadout, and your chances of seeing daylight again.</p>`,
    features: [
      { icon: "🗺️", title: "Procedural Tunnels", desc: "No two runs are the same — layouts, threats, and encounters change every time" },
      { icon: "🔦", title: "Limited Visibility", desc: "Your flashlight is your lifeline — and its battery is always running low" },
      { icon: "👹", title: "Creature System", desc: "Multiple threat types with unique behaviors — some hunt, some hide, some watch" },
      { icon: "🎒", title: "Resource Management", desc: "Balance your inventory between survival gear, trade goods, and the package" },
      { icon: "🤝", title: "Encounter System", desc: "Meet other runners, addicts, and tunnel dwellers — each interaction is a risk" },
      { icon: "💀", title: "Permadeath", desc: "True roguelike — death is permanent, but knowledge carries over between runs" }
    ],
    reviews: [
      { author: "RoguelikeRadar", rating: 4.5, text: "Finally, a roguelike that's actually scary. The tunnel atmosphere is suffocating in the best possible way." },
      { author: "DoomFanatic", rating: 4, text: "The Doom DNA is evident in the level design and pacing. This is what Doom would feel like if you couldn't fight back." },
      { author: "HorrorUnderground", rating: 5, text: "The creature design is brilliant — you never know if that sound is a threat, another runner, or just the tunnels breathing." }
    ],
    credits: [
      { role: "Game Design", name: "Tomáš Fuk" },
      { role: "Programming", name: "Zdeněk Botek" },
      { role: "Art & Sound", name: "Petr Petrovič Lej" },
      { role: "Jam Duration", name: "72 hours" }
    ],
    storeLinks: [
      { name: "Play on Itch.io", url: "#", icon: "🎮" },
      { name: "View Jam Page", url: "#", icon: "🏅" }
    ]
  }
};
