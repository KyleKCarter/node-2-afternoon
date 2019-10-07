let messages = [];
let id = 0;


createMessage = (req, res) => {
    const {text, time} = req.body
    messages.push({
        id,
        text,
        time 
    });
    id++;
    res.status(200).json(messages);
}

readMessage = (req, res) => {
    res.status(200).json(messages);
}

updateMessage = (req, res) => {
    for (let i=0; i<messages.length; i++) {
        if (messages[i].id == +req.params.id) {
            messages[i].text = req.body.text;
        }
    }
    res.status(200).json(messages);
}

deleteMessage = (req, res) => {
    for (let i=0; i<messages.length; i++) {
        if (messages[i].id == req.params.id) {
            messages.splice(i, 1);
        }
    }
    res.status(200).json(messages);
}

module.exports = {
    readMessage,
    createMessage,
    updateMessage,
    deleteMessage
}