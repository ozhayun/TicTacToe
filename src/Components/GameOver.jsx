export default function GameOver({winner, onRestart}) {
    return <dib id='game-over'>
        <h2>Game Over!</h2>
        {winner && <p>{winner} won!</p>}
        {!winner && <p> It's a draw! </p>}
        <button onClick={onRestart}>Rematch!</button>
    </dib>
}