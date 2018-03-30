const changeStyle = data => {
    data.value ? document.execCommand(data.command, false, data.value) : document.execCommand(data.command, false, null)
}
