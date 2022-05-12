const validate = (file, width, height) => {

    if (height == null) {
        height = 200
    } else {
        height = parseInt(height)
    }

    if (width == null) {
        width = 200
    } else {
        width = parseInt(width)
    }
    return {file, width, height}
} 

export default validate