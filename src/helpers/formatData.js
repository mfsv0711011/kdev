const formatTime = (time) => {
    const hours = new Date(time).getHours()
    const minutes = new Date(time).getMinutes()

    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes
    const formattedHours = hours < 10 ? '0' + hours : hours
    return `${formattedHours}:${formattedMinutes}`
}

const formatCurrency = sum => new Intl.NumberFormat('ru-RU').format(sum)

const formatDate = (inputFormat) => {
    function pad(s) {
        return s < 10 ? '0' + s : s
    }

    let d = new Date(inputFormat)
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('.')
}

export { formatTime, formatCurrency, formatDate }
