export function parsePath(path = '') {
    path.trim();
    path = path.split('.');
    const result = path.reduce((arr, word) => {
        if (!arr || !word)
            return;
        word = word.split('[');
        if (word.length === 0 || word.length > 2 || !word[0] || (word.length === 2 && !word[1]))
            return;
        arr.push(word[0]);
        if (word[1]) {
            word = word[1].split(']');
            if (word.length !== 2 || !word[0] || word[1])
                return;
            arr.push(word[0]);
        }
        return arr;
    }, []);
    return result;
}

export function parseString(string = '') {
    let result;
    string = string.replace(/\'/g, '"'); // todo
    try {
        result = JSON.parse(string);
    } catch(e) {}
    return result;
}

export function formatString(string = '') {
    return string; // todo
}