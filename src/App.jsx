import Player from './components/Player';
function App() {
    return (
        <main>
            <div id='game-container'>
                <ol id='players'>
                    <Player
                        initialName='Player 1'
                        symbol='X'
                    ></Player>
                    <Player
                        initialName='Player 1'
                        symbol='O'
                    ></Player>
                </ol>
                Game Board
            </div>
            LOG
        </main>
    );
}

export default App;
