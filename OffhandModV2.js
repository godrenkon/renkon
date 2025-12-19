ModAPI.require('player');
window.addEventListener("keydown", event => {
    if (event.keyCode == '70') {
        if ('/offhand'.charAt(0) === "/") {
            ModAPI.player.sendChatMessage({
                message: '/offhand'
            })
        }
    }
});

window.addEventListener("keydown", event => {
    if (event.keyCode == '70') {
        ModAPI.displayToChat({
            msg: 'Item In Offhand'
        });
    }
});