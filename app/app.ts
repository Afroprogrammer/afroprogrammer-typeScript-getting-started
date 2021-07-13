function startGame(){
    //starting an new game

    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);

    postScore(80, playerName); 
    postScore(-5, playerName);
    logMessage("Welcome to Multimath!");

    // var messagesElement = document.getElementById('messages');
    // messagesElement!.innerText = 'Welcome to MultiMath! Starting a new game ... ';
}

function logPlayer(name: string = 'Multimath Player'): void {
    console.log(`New game starting for player: ${name}`);
}
 
function getInputValue(elementID: string): string | undefined {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID)
    if (inputElement.value === ''){
        return undefined;
    }
    else {
        return inputElement.value;
    }
}

function postScore(score: number, playerName: string = 'MultiMath Player'): void{
    let logger: (value: string) => void;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }

    const scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;
    logger(`Score: ${score}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);
const logMessage = (message : string) => console.log(message)
//a function that logs and error message

function logError(err: string) : void {
    console.error(err);
}

//create a new class instance
const firstPlayer: Player = new Player();
firstPlayer.name ='Franklin';
firstPlayer.formatName();

// // a variable the makes use of an interface in typeScript
// let myResult: Result = {
//     playerName: 'Marie',
//     score: 5,
//     problemCount: 5,
//     factor: 7
// }

// //a variable that implements the person interface 
// let player: Person = {
//     name: 'Daniel',
//     formatName: () => 'Dan'
// };