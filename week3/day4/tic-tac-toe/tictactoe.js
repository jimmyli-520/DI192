// Grab elements from the DOM
const boardGrid = document.getElementById('board')
const symbolPicker = document.getElementById('symbol-picker')
const statusText = document.getElementById('status')
const restartBtn = document.getElementById('restart')

// Game state variables
const board = Array(9).fill(null)
let playerSymbol = null
let computerSymbol = null
let isPlayerTurn = true
let gameOver = false

// Winning combinations
const winCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [6, 4, 2]             // diagonals
]

// Generate the board cells
for (let i = 0; i < 9; i++) {
  const newGrid = document.createElement('div')
  newGrid.classList.add('cell')
  newGrid.id = `cell-${i}`
  newGrid.addEventListener('click', handlePlayerClick)
  boardGrid.appendChild(newGrid)
}

// Symbol picker buttons
const playerX = document.getElementById('btn-x')
const playerO = document.getElementById('btn-o')

playerX.addEventListener('click', function () {
  playerSymbol = 'X'
  computerSymbol = 'O'
  startGame()
})

playerO.addEventListener('click', function () {
  playerSymbol = 'O'
  computerSymbol = 'X'
  startGame()
})

// Start the game
function startGame() {
  symbolPicker.style.display = 'none'
  statusText.textContent = `Your turn! You are ${playerSymbol}`
}

// Handle player click
function handlePlayerClick() {
  const index = parseInt(this.id.split('-')[1])

  if (board[index] || gameOver || !isPlayerTurn) return

  makeMove(index, playerSymbol)

  if (!gameOver) {
    isPlayerTurn = false
    statusText.textContent = "Computer's turn..."
    setTimeout(handleComputerTurn, 600)
  }
}

// Make a move
function makeMove(index, symbol) {
  board[index] = symbol
  document.getElementById(`cell-${index}`).textContent = symbol

  const winner = checkWinner()
  if (winner) {
    gameOver = true
    statusText.textContent = winner === playerSymbol ? 'You win! 🎉' : 'Computer wins! 🤖'
    restartBtn.style.display = 'block'
    return
  }

  const isTie = board.every(cell => cell !== null)
  if (isTie) {
    gameOver = true
    statusText.textContent = 'Tie game! 🤝'
    restartBtn.style.display = 'block'
  }
}

// Computer's turn (easy = random, hard = blocks player)
function handleComputerTurn() {
  // Hard: block player if they are about to win
  for (let combo of winCombos) {
    const [a, b, c] = combo
    const cells = [board[a], board[b], board[c]]
    if (cells.filter(cell => cell === playerSymbol).length === 2 &&
      cells.includes(null)) {
      const blockIndex = [a, b, c][cells.indexOf(null)]
      makeMove(blockIndex, computerSymbol)
      isPlayerTurn = true
      statusText.textContent = `Your turn! You are ${playerSymbol}`
      return
    }
  }

  // Easy: pick a random empty cell
  const emptyCells = board.reduce((acc, cell, index) => {
    if (cell === null) acc.push(index)
    return acc
  }, [])

  if (emptyCells.length > 0) {
    const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)]
    makeMove(randomIndex, computerSymbol)
    isPlayerTurn = true
    statusText.textContent = `Your turn! You are ${playerSymbol}`
  }
}

// Check for a winner
function checkWinner() {
  for (let combo of winCombos) {
    const [a, b, c] = combo
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  return null
}

// Restart the game
restartBtn.addEventListener('click', function () {
  board.fill(null)
  gameOver = false
  isPlayerTurn = true
  playerSymbol = null
  computerSymbol = null
  symbolPicker.style.display = 'block'
  restartBtn.style.display = 'none'
  statusText.textContent = ''
  document.querySelectorAll('.cell').forEach(cell => cell.textContent = '')
})