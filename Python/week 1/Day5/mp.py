
def create_board():
    return [[" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "]]


def display_board(board):
    print("\n")
    for r in range(3):
        print(f"{board[r][0]} | {board[r][1]} | {board[r][2]}")
        if r < 2:
            print("_" * 9)
    print("\n")


def player_input(board, player_symbol):
    while True:
        try:
            row = int(input(f"Player{player_symbol} - Enter row (1-3): ")) - 1
            col = int(input(f"Player{player_symbol} - Enter col (1-3): ")) - 1

            if row not in [0, 1, 2] or col not in [0, 1, 2]:
                print("Invalid input. Try again!")

            if board[row][col] != " ":
                print("Spot is taken. Try again")
                continue
            return row, col
        except ValueError:
            print("Number Only. Try again")


def check_win(board, player):
    for r in range(3):
        if board[r][0] == player and board[r][1] == player and board[r][2] == player:
            return True
    for c in range(3):
        if board[0][c] == player and board[1][c] == player and board[2][c] == player:
            return True
    if board[0][0] == player and board[1][1] == player and board[2][2] == player:
        return True
    if board[0][2] == player and board[1][1] == player and board[2][0] == player:
        return True
    return False


def check_tie(board):
    for row in board:
        if " " in row:
            return False
    return True


def play():
    board = create_board()
    current_player = "X"

    while True:
        display_board(board)
        row, col = player_input(board, current_player)
        board[row][col] = current_player

        if check_win(board, current_player):
            display_board(board)
            print(f"Play {current_player} wins!")
            break
        current_player = "0" if current_player == "X" else "X"


play()


# board = create_board()
# display_board(board)
