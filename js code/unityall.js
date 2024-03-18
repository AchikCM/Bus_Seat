function hideElementByID(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function ShowelementId(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

function backgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-400')

}