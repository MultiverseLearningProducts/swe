function displayActiveBlockContent (block) {
    const [langType] = block.childNodes[0].classList
    const [_, lang] = langType.split('-')
    const isActive = `#${lang}` === window.location.hash
    block.classList.remove(`${isActive ? 'un' : ''}selected`)
    block.classList.add(`${isActive ? '' : 'un'}selected`)    
}

function setActiveTabClass (tab) {
    tab.classList.remove('active')
    if (tab.getAttribute('href') === window.location.hash) tab.classList.add('active')
}

function setActiveTab() {
    document.querySelectorAll('nav.tabbed-code-block a').forEach(setActiveTabClass)
    setActiveTabContent()
    localStorage.setItem('lang-pref', window.location.hash)
}
function setActiveTabContent() {
    const blocks = [
        ...document.querySelectorAll('nav.tabbed-code-block + pre'),
        ...document.querySelectorAll('pre + pre')
    ]
    blocks.forEach(displayActiveBlockContent)
}
window.onload = function () {
    window.location.hash = localStorage.getItem('lang-pref') || '#javascript'
    setActiveTab()
    window.addEventListener('hashchange', setActiveTab)
}
