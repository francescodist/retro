export function getBoard(code) {
    const board = new Promise(resolve =>
        setTimeout(() => resolve({ code }), 200)
    );
    return board;
}

export function generateBoard() {
    const board = new Promise(resolve =>
        setTimeout(() => resolve({ code: 123 }), 200)
    );
    return board;
}