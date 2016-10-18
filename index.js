var drawBoard = function(markers) {
  var empty = [['', '', ''],
               ['', '', ''],
               ['', '', '']];
  markers = markers || empty;
  var board = '';
  board += ' ' + (markers[0][0] || ' ') + '|';
  board += (markers[0][1] || ' ') + '|';
  board += (markers[0][2] || ' ');
  board += '\n-------\n';
  board += ' ' + (markers[1][0] || ' ') + '|';
  board += (markers[1][1] || ' ') + '|';
  board += (markers[1][2] || ' ');
  board += '\n-------\n';
  board += ' ' + (markers[2][0] || ' ') + '|';
  board += (markers[2][1] || ' ') + '|';
  board += (markers[2][2] || ' ');
  console.log(board);
};

var markers = [['X', '', 'O'], ['X', 'X', 'O'], ['', '', 'O']];
drawBoard(markers);

var checkWin = function(markers) {
  //check rows:
  for (var i = 0; i < markers.length; i++) {
    var X = 0;
    var O = 0;
    for (var j = 0; j < markers[0].length; j++) {
      if (markers[i][j] === 'X') {
        X++;
      }
      if (markers[i][j] === 'O') {
        O++;
      }
    }
    if (X === 3) {
      return 'X';
    }
    if (O === 3) {
      return 'O';
    }
  }

  //check columns:
  for (var i = 0; i < markers[0].length; i++) {
    var X = 0;
    var O = 0;
    for (var j = 0; j < markers.length; j++) {
      if (markers[j][i] === 'X') {
        X++;
      }
      if (markers[j][i] === 'O') {
        O++;
      }
    }
    if (X === 3) {
      return 'X';
    }
    if (O === 3) {
      return 'O';
    }
  }

  //check diagonals:
  var X = 0;
  var O = 0;
  for (var i = 0, j = 0; i < markers[0].length; i++, j++) {
    if (markers[j][i] === 'X') {
      X++;
    }
    if (markers[j][i] === 'O') {
      O++;
    }
  }
  if (X === 3) {
    return 'X';
  }
  if (O === 3) {
    return 'O';
  }

  

};