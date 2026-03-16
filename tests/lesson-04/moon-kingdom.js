// Bài 1
function createCharacters() {
  const characters = [
    { name: "aria", level: 10, health: 300 },
    { name: "borin", level: 20, health: 400 },
    { name: "cyrus", level: 15, health: 200 }
  ];

  const charactersPowerUp = characters.map(character => {
    return {
      name: character.name.toUpperCase(),
      level: character.level * 2,
      health: character.health * 3
    };
  });

  const possibleWinners = charactersPowerUp.filter(
    character => character.health > 1000
  );

  return { charactersPowerUp, possibleWinners };
}

// Bài 2
function printLeaderboard(players) {
  // Sắp xếp score từ cao xuống thấp
  const sortedPlayers = players.sort((a, b) => b.score - a.score);

  sortedPlayers.forEach((player, index) => {
    let medal = "";

    if (index === 0) medal = "🥇";
    else if (index === 1) medal = "🥈";
    else if (index === 2) medal = "🥉";

    console.log(`${medal}${index + 1}. ${player.name} - ${player.score} pts`);
  });
}

//Test  Bài 2
const players = [
  { name: "Phong", score: 500 },
  { name: "Mario", score: 1000 },
  { name: "Luigi", score: 900 },
  { name: "Peach", score: 850},
  { name: "Yoshi", score: 800 }
];
printLeaderboard(players);