let promptContent: string[] = []

function delay(time: number) {
    return new Promise(resolve => setTimeout(resolve, time))
}

function initPrompt() {
    document.getElementById("promptContent")!.childNodes.forEach(element => {
        if (element instanceof HTMLElement) promptContent.push((element.innerText))
    })

    forever().then()
}

async function forever() {
    while (true) await startPrompt()
}

async function startPrompt() {
    for (let line of promptContent) {
        await updatePrompt(line)
        await delay(5000)
    }
}

async function updatePrompt(text: string) {
    let e = document.getElementById("promptText")!
    let promptText = e.innerText

    for (let i = 0; i <= promptText.length; i++) {
        e.innerText = promptText.substring(0, promptText.length - i)
        await delay(10)
    }

    await delay(1000)

    for (let i = 0; i <= text.length; i++) {
        e.textContent = text.slice(0, i)
        if (!text.charAt(i).match(/[,.\s]/g)) await delay(100)
    }
}
