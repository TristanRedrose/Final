const textLine = document.getElementById("text")
const select = document.getElementById("option-buttons")
const image = document.getElementById("side-image")

function startGame() {
    showTextNode(0)
}

function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNode => textNode.id === 
    textNodeIndex)
    if (textNodeIndex > 0) {
    textLine.innerText = textNode.text
    image.src = textNode.pic
    }
    while (select.firstChild) {
        select.removeChild(select.firstChild)
    }
    textNode.options.forEach(option => {
        const button = document.createElement("button")
        button.innerText = option.text
        button.classList.add("btn")
        button.addEventListener("click", () =>selectOption(option))
        select.appendChild(button)
    })
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId < 0) {
        location.reload()
    }
    showTextNode(nextTextNodeId)
}


const textNodes = [
    {
        id: 0,
        options: [
            {
                text: "Mansion madness",
                nextText: 1,
            }
        ]
    },
    {
        id: 1,
        text: "It was a strange day you found out you inherited a mansion. What information you found indicated the place is a ruin, but you don’t look a gift mansion in the mouth. The place has been empty ever since the disappearance of Thomas Avery some 30 years ago in an incident seldom spoken of by the residents of the nearby village. You wonder why your cousin didn’t sell the place after he inherited it, and stranger still, why he suddenly decided to transfer ownership to you, on the condition you sign the papers on location.",
        pic: "../pictures/deed.jpg",
        options: [
            {
                text: "Accept the offer",
                nextText: 2,
            },
            {
                text: "Reject the offer",
                nextText: 3,
            }
           
        ]
    },
    {
        id: 2,
        text: "The night is unusually bright as you approach the old mansion. From a distance the place seems to retain much of its old grandeur, but as you move closer, years of decay and neglect become more obvious. The broken fence and windows paint an ominous picture in the pale moonlight, yet something draws you in. You hope your cousin made the place at least tolerable for the occasion but the closer you get, the more your hope dwindles.",
        pic: "../pictures/mansion-entrance.jpg",
        options: [
            {
                text: "Examine the fence",
                nextText: 4,
            },
            {
                text: "Roam the yard",
                nextText: 5,
            },
            {
                text: "Knock on the door",
                nextText: 6,
            }
        ]
    },
    {
        id: 3,
        text: "You decide your life is complicated enough without having to maintain a mansion. Where would you even get the money needed to restore it? You throw away the deed in the bin and get on with your life, but every now and then you cant help but wonder what could have been had you accepted the offer.",
        pic: "../pictures/trash.jpg",
        options: [
            {
                text: "Main menu",
                nextText: -1,
            }
        ]
    }
]

startGame()