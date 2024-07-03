const gameboard = document.querySelector("#gameboard")

const width = 8

const startPiece = [
    chess_rook, chess_knight, chess_bishop, chess_queen, chess_king, chess_bishop, chess_knight, chess_rook
    ,'','','','','','','','',
    chess_pawn, chess_pawn, chess_pawn, chess_pawn, chess_pawn, chess_pawn, chess_pawn, chess_pawn
    ,'','','','','','','','',
    ,'','','','','','','','',
    chess_pawn, chess_pawn, chess_pawn, chess_pawn, chess_pawn, chess_pawn, chess_pawn, chess_pawn
    ,'','','','','','','','',
    chess_rook, chess_knight, chess_bishop, chess_queen, chess_king, chess_bishop, chess_knight, chess_rook
]

function createboard() { 
    startPiece.toeach((piece,i) =>{
        const square = document.createElement9('div')
        square.classlist.add('square')
        square.innerHTML = piece
        square.setAttribute("square-id", i)
        
        const row =Math. floor(i/8) +1
        if ((row %2) === 0) {
            ((i%2) === 0) ? square.cleassList.add("bgred") : square.classList.add("bgblack")
        } else {
            {((i%2) === 0) ? square.cleassList.add("bgblack") : square.classList.add("bgbred")}
        }
        gameBoard.append(square)
    })
}

createBoard()