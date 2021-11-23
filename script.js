const textLine = document.getElementById("text")
const select = document.getElementById("option-buttons")
const image = document.getElementById("side-image")

let state = {}

function startGame() {
    state = {}
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
        if (showOption(option)) {
        const button = document.createElement("button")
        button.innerText = option.text
        button.classList.add("btn")
        button.addEventListener("click", () => selectOption(option))
        select.appendChild(button)
        }
    })
}

function showOption(option){
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId < 0) {
        location.reload()
    }
    state = Object.assign(state , option.setState)
    showTextNode(nextTextNodeId)
}


const textNodes = [
    {
        id: 0,
        options: [
            {
                text: "Mansion madness",
                nextText: 1,
            },
            {
                text: "Credits",
                nextText: 50,
            }
        ]
    },
    {
        id: 1,
        text: "It was a strange day you found out you inherited a mansion. You wonder why your cousin didn’t sell the place after he inherited it, and stranger still, why he decided to decline the inheritance in your favour on the condition you sign the papers on location. What information you found indicated the place is a ruin, but you don’t look a gift mansion in the mouth. The place has been empty ever since the disappearance of Thomas Avery some 30 years ago in an incident seldom spoken of by the residents of the nearby village.",
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
                setState: { fenceRune: true },
                nextText: 4,
            },
            {
                text: "Roam the yard",
                setState: { mnsYard: true },
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
    },
    {
        id: 4,
        text: "The fence, like the rest of the building, has clearly seen better days. The paint has almost completely chipped away and the wood is splintered and mouldy. Some of the planks have strange symbols carved into the wood, probably done by the local children as proof of visiting the creepy mansion. You find your vision blurring if you stare too long at them. You should probably wear glasses.",
        pic: "../pictures/fence.jpg",
        options: [
            {
                text: "Roam the yard",
                requiredState: (currentState) => currentState.mnsYard == null,
                nextText: 5,
            },
            {
                text: "Knock on the door",
                nextText: 6,
            }
        ]
    },
    {
        id: 5,
        text: "Taking an opportunity to examine the mansion from the outside, you find it is in even worse state than you initially thought, with missing roofing and holes in the brickwork. You see someone staring at you from the third floor window, but you can only make out the silhouette in the darkness.",
        pic: "../pictures/yard.jpg",
        options: [
            {
                text: "Examine the fence",
                requiredState: (currentState) => currentState.fenceRune == null,
                nextText: 4,
            },
            {
                text: "Knock on the door",
                nextText: 6,
            }
        ]
    },
    {
        id: 6,
        text: "You knock on the door several times, but no one answers. Just as you are about to leave you are greeted by a suited man who invites you inside and explains that your cousin hasn’t arrived yet, but that he will be there by morning. He guides you to a room on the first floor that has been made habitable for the occasion, and asks you not to wander as the mansion is in a state of disrepair. ",
        pic: "../pictures/stairs.jpg",
        options: [
            {
                text: "Inquire about the man",
                nextText: 7,
            },
            {
                text: "Examine the room",
                nextText: 8,
            },
            {
                text: "Go to sleep",
                nextText: 10,
            },
            {
                text: "Sneak out",
                nextText: 11,
            }
        ]
    },
    {
        id: 7,
        text: "The man explains that he is your cousins lawyer and that he has been invited to make the necessary arrangements for a smooth transaction. Your cousin will explain more upon his arrival.",
        pic: "../pictures/man.jpg",
        options: [
            {
                text: "Examine the room",
                nextText: 8,
            },
            {
                text: "Go to sleep",
                nextText: 10,
            },
            {
                text: "Sneak out",
                nextText: 11,
            }
        ]
    },
    {
        id: 8,
        text: "Your room seems to be less dusty than the rest of the place, but not by much. It is just as creepy as you would imagine a room in a haunted house. The broken decorative statues definitely arent helping. You spot a weird wood carving underneath one of the stools.",
        pic: "../pictures/room.jpg",
        options: [
            {
                text: "Take the carving",
                requiredState: (currentState) => currentState.carving == null,
                setState: { carving: true },
                nextText: 9,
            },
            {
                text: "Go to sleep",
                nextText: 10,
            },
            {
                text: "Sneak out",
                nextText: 11,
            }
        ]
    },
    {
        id: 9,
        text: "You pick up the strange carving. It seems to be a wand of some sort. You feel a tingling sensation as you hold it in your hand.",
        pic: "../pictures/carving.jpg",
        options: [
            {
                text: "Go to sleep",
                nextText: 10,
            },
            {
                text: "Sneak out",
                nextText: 11,
            }
        ]
    },
    {
        id: 10,
        text: "The sooner morning comes, the sooner you can sign the papers and start planning on what to do with this place. Although you feel uneasy you do eventually fall sleep. You dream of veiled faces, of deals struck at midnight, and the maniacal laughter of an old man with bloodied hands. You do not awaken.",
        pic: "../pictures/sleep.jpg",
        options: [
            {
                text: "Main menu",
                nextText: -1,
            }
        ]
    },
    {
        id: 11,
        text: "You approach the first floor main hallway.Your room lies behind you. To your left is a large room containing an assortment of books, to your right the stairway leeds to the ground floor and further up the hallway there is a door marked with strange symbols.",
        pic: "../pictures/hallway.jpg",
        options: [
            {
                text: "Enter your room",
                nextText: 8,
            },
            {
                text: "Enter the library",
                nextText: 12,
            },
            {
                text: "Approach the door",
                requiredState: (currentState) => currentState.chargedWand == null,
                nextText: 13,
            },
            {
                text: "Go down",
                nextText: 14,
            }
        ]
    },
    {
        id: 12,
        text: "The library lies in ruins, with most of the books destroyed by years of damp. You also notice several mice skittering around for good measure. Some of the top-shelf books seem better preserved. There is one book on the floor that the mice seem to strangely avoid.",
        pic: "../pictures/library.jpg",
        options: [
            {
                text: "Exit the library",
                nextText: 11,
            },
            {
                text: "Examine the top-shelf books",
                requiredState: (currentState) => currentState.topShelf == null,
                setState: { topShelf: true },
                nextText: 15,
            },
            {
                text: "Examine the odd book",
                requiredState: (currentState) => currentState.gloves == null,
                nextText: 16,
            },
            {
                text: "Examine the odd book",
                requiredState: (currentState) => currentState.gloves && currentState.bookRune == null,
                setState: { bookRune: true },
                nextText: 17,
            }
        ]
    },
    {
        id: 13,
        text: "As you get closer you notice the symbols on the door emit a strange glow. There doesn’t seem to be a handle, keyhole or any other way to open the door.", 
        pic: "../pictures/runedoor.jpg",
        options: [
            {
                text: "Step away",
                nextText: 11,
            },
            {
                text: "Activate the door",
                requiredState: (currentState) => currentState.fenceRune && currentState.bookRune,
                nextText: 26,
            }
        ]
    },
    {
        id: 14,
        text: "You near the mansion exit. In front of you lies the ground floor main hallway, to your right is the master stairway. Strange voices can be heard coming from the direction of the main hallway.",
        pic: "../pictures/main-floor.jpg",
        options: [
            {
                text: "Go up",
                nextText: 11,
            },
            {
                text: "Examine the room",
                requiredState: (currentState) => currentState.gloves == null,
                nextText: 18,
            },
            {
                text: "Leave the mansion",
                requiredState: (currentState) => currentState.key == null,
                nextText: 19,
            },
            {
                text: "Leave the mansion",
                requiredState: (currentState) => currentState.key,
                nextText: 20,
            },
            {
                text: "Approach the hallway",
                requiredState: (currentState) => currentState.hallway == null,
                setState: { hallway: true },
                nextText: 21,
            },
            {
                text: "Sneak into main study",
                requiredState: (currentState) => currentState.hallway,
                nextText: 23,
            }
        ]
    },
    {
        id: 15,
        text: "The shelf contains books on horticulture, two cookbooks and a varied collection of old-england folk-tales. There appears to be nothing usefull here.",
        pic: "../pictures/shelf.png",
        options: [
            {
                text: "Exit the library",
                nextText: 11,
            },
            {
                text: "Examine the odd book",
                requiredState: (currentState) => currentState.gloves == null,
                nextText: 16,
            },
            {
                text: "Examine the odd book",
                requiredState: (currentState) => currentState.gloves && currentState.bookRune == null,
                setState: { bookRune: true },
                nextText: 17,
            }
        ]
    },
    {
        id: 16,
        text: "You try to pick up the book but touching it burns and leaves a nasty red patch on your skin. The book appears to be covered with some sort of corrosive substance.",
        pic: "../pictures/cbook.jpg",
        options: [
            {
                text: "Exit the library",
                nextText: 11,
            },
            {
                text: "Examine the top-shelf books",
                requiredState: (currentState) => currentState.topShelf == null,
                setState: { topShelf: true },
                nextText: 15,
            },
        ]
    },
    {
        id: 17,
        text: "You handle the book carefully while wearing gloves. It appears to be an occult manual of some sort, depicting the usage of strange runes for a variety of purposes. Two runes of disruption appear to be carefully underlined.",
        pic: "../pictures/obook.jpg",
        options: [
            {
                text: "Exit the library",
                nextText: 11,
            },
            {
                text: "Examine the top-shelf books",
                requiredState: (currentState) => currentState.topShelf == null,
                setState: { topShelf: true },
                nextText: 15,
            },
        ]
    },
    {
        id: 18,
        text: "The walls are mouldy and have clearly suffered extensive water damage. The floor is littered with rubble making you watch your step. You notice a cabinet upon which lay a pair of leather gloves.",
        pic: "../pictures/cup.jpg",
        options: [
            {
                text: "Take the gloves",
                setState: { gloves: true },
                nextText: 22,
            },
            {
                text: "Go up",
                nextText: 11,
            },
            {
                text: "Leave the mansion",
                requiredState: (currentState) => currentState.key == null,
                nextText: 19,
            },
            {
                text: "Leave the mansion",
                requiredState: (currentState) => currentState.key,
                nextText: 20,
            },
            {
                text: "Approach the hallway",
                requiredState: (currentState) => currentState.hallway == null,
                setState: { hallway: true },
                nextText: 21,
            },
            {
                text: "Sneak into main study",
                requiredState: (currentState) => currentState.hallway,
                nextText: 23,
            }
        ]
    },
    {
        id: 22,
        text: "You pick up the leather gloves",
        pic: "../pictures/gloves.jpg",
        options: [
            {
                text: "Go up",
                nextText: 11,
            },
            {
                text: "Leave the mansion",
                requiredState: (currentState) => currentState.key == null,
                nextText: 19,
            },
            {
                text: "Leave the mansion",
                requiredState: (currentState) => currentState.key,
                nextText: 20,
            },
            {
                text: "Approach the hallway",
                requiredState: (currentState) => currentState.hallway == null,
                setState: { hallway: true },
                nextText: 21,
            },
            {
                text: "Sneak into main study",
                requiredState: (currentState) => currentState.hallway,
                nextText: 23,
            }
        ]
    },
    {
        id: 19,
        text: "You try to leave the mansion but the door is locked and the window bars prevent you from exiting.",
        pic: "../pictures/exit.jfif",
        options: [
            {
                text: "Go up",
                nextText: 11,
            },
            {
                text: "Examine the room",
                requiredState: (currentState) => currentState.gloves == null,
                nextText: 18,
            },
            {
                text: "Approach the hallway",
                requiredState: (currentState) => currentState.hallway == null,
                setState: { hallway: true },
                nextText: 21,
            },
            {
                text: "Sneak into main study",
                requiredState: (currentState) => currentState.hallway,
                nextText: 23,
            }
        ]
    },
    {
        id: 20,
        text: "You unlock the door and escape the mansion hoping that the strange cult wont come looking for you. You warn the police but a thorough search of the mansion reveals nothing. You continue with your life but every now and then when youre alone you see hooded figures in the corner of your eye.",
        pic: "../pictures/run.jpg",
        options: [
            {
                text: "Main menu",
                nextText: -1,
            }
        ]
    },
    {
        id: 21,
        text: "The voices grow louder as you move further up the hallway. You notice that they are coming from the main study.",
        pic: "../pictures/odoor.jpg",
        options: [
            {
                text: "Turn back",
                nextText: 14,
            },
            {
               text: "Investigate the main study",
               nextText: 23, 
            }
        ]
    },
    {
        id: 23,
        text: "You see five cultist chanting and conducting some sort of ritual. The bound man in the middle suggests it is not of a benign nature. You notice a strange glint coming from a table close to the door.",
        pic: "../pictures/cults.jpg",
        options: [
            {
                text: "Return to the main hall",
                nextText: 14,
            },
            {
               text: "Examine the table",
               setState: { key: true },
               nextText: 24, 
            },
            {
                text: "Disrupt the ritual",
                requiredState: (currentState) => currentState.chargedWand,
                nextText: 28,
            }
        ]
    },
    {
        id: 24,
        text: "There is an ornate polished key on the edge of the table. You carefully aproach while the cultists are otherwise occupied and take the key.",
        pic: "../pictures/key.jfif",
        options: [
            {
                text: "Return to the main hall",
                nextText: 14,
            },
            {
                text: "Disrupt the ritual",
                requiredState: (currentState) => currentState.chargedWand,
                nextText: 28,
            }
        ]
    },
    {
        id: 26,
        text: "As you trace the appropriate runes their glow seems to intensify, while the rest fade away. The three runes combine and start to emit a strange energy.",
        pic: "../pictures/charge.jpg",
        options: [
            {
                text: "Step away",
                nextText: 11,
            },
            {
                text: "Hold out the wand",
                requiredState: (currentState) => currentState.carving,
                setState: { chargedWand: true },
                nextText: 27,
            }
        ]
    },
    {
        id: 27,
        text: "Your wand eagerly absorbs the released energy.",
        pic: "../pictures/charged.jpg",
        options: [
            {
                text: "Step away",
                nextText: 11,
            }
        ]
    },
    {
        id: 28,
        text: "You throw the wand in the middle of the ritual circle. The wand seems to absorb energy from the circle and release it back into the cultists, making them disintergrate. You untie the prisoner, who turns out to be your cousin, and escape the mansion just as it collapses.",
        pic: "../pictures/end.jpg",
        options: [
            {
                text: "Main menu",
                nextText: -1,
            }
        ]
    },
    {
        id: 50,
        text: "Special thanks to my sister Maja for playtesting, and my brother Marko for getting me to code. Thanks to cs50, webdevsimplified and traversy media for their video guides.",
        pic: "../pictures/download.jpg",
        options: [
            {
                text: "Main menu",
                nextText: -1,
            }
        ]
    }  
]
startGame()