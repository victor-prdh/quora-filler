function fill(tab) {
    if (!tab.url.includes('quora')) {
        alert('Only available on quora')
        return
    }
    var modals = document.querySelectorAll('.modal_content_inner [role="list"]')
    const questionModal = [...modals].pop()
    const allAnswerRequest = questionModal.lastChild.childNodes

    var timeOut = 50;

    for (let i = 0; i < allAnswerRequest.length; i++) {
        const element = allAnswerRequest[i];

        setTimeout(() => {
            element.querySelector('svg').closest('div').click()
        }, timeOut)

        timeOut = timeOut + 300 + Math.floor(Math.random() * 480);

        if (i === 25) {
            setTimeout(() => {
                alert("Ok")
            }, timeOut);
            break;
        };
    }
}

chrome.action.onClicked.addListener(async (tab) => {
    console.log(tab);
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: fill,
        args: [tab]
    })
})