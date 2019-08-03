// This is an O(n^2) solution, where n = total number of tiles. 
// Todo: Add  O(n) solution.

function zombie(map) {
  function validTile(x, y) {
    validX = x >= 0 && x < map.length;
    validY = y >= 0 && y < map.length;
    return validX && validY;
  }

  let zombieKilled = 0;
  let answer = [];

  function throwGrande(row, col) {
    function countKill(diffRow, diffCol) {
      let locRow = row + diffRow;
      let locCol = col + diffCol;
      let killed = 0;
      while (validTile(locRow, locCol)) {
        if (map[locRow][locCol] === 2) {
          killed++;
        } else if (map[locRow][locCol] === 3) {
          peopleKilled++;
        } else if (map[locRow][locCol] === 1) {
          return killed;
        }
        locRow += diffRow;
        locCol += diffCol;
      }
      return killed;
    }

    let peopleKilled = 0;

    if (map[row][col] === 3) {
      peopleKilled = 1;
    }

    const killedZombiesRigth = countKill(1, 0);
    const killedZombiesLeft = countKill(-1, 0);
    const killedZombiesUp = countKill(0, -1);
    const killedZombiesDown = countKill(0, 1);
    const totallZombieKill =
      killedZombiesRigth +
      killedZombiesLeft +
      killedZombiesUp +
      killedZombiesDown;

    return totallZombieKill >= peopleKilled * 3 ? totallZombieKill : 0;
  }

  for (let row = 0; row < map.length; ++row) {
    for (let col = 0; col < map.length; ++col) {
      if (map[row][col] === 0 || map[row][col] === 3) {
        const kills = throwGrande(row, col);
        if (kills > zombieKilled) {
          answer = [row, col];
          zombieKilled = kills;
        }
      }
    }
  }

  return answer;
}

module.exports = { zombie };
