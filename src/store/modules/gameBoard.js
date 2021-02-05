function arrangePuzzleText(text, puzzleSize) {
    const words = text.split(" ");
    if (words.length <= puzzleSize.length) {
        return words
    } else {
        // need to merge lines
        for (let writeIndex = 0; writeIndex < puzzleSize.length; writeIndex++) {
            for (let readIndex = writeIndex + 1; readIndex < words.length; readIndex++) {
                if (words[readIndex].length > 0) {
                    if (words[writeIndex].length == 0) {
                        words[writeIndex] = words[readIndex]
                        words[readIndex] = ""
                    } else if ((words[writeIndex].length + words[readIndex].length + 1) <= puzzleSize[writeIndex].chars) {
                        words[writeIndex] = words[writeIndex] + " " + words[readIndex]
                        words[readIndex] = ""
                    } else {
                        break
                    }
                }
            }
        }
        while(words[words.length-1] === "") {
            words.pop()
        }
        return words
    }
}

function arrayToPuzzle(textArray, puzzleSize, showAll) {

    if(textArray.length <= 2) {
        textArray.unshift("#".repeat(puzzleSize[0].chars));
    }

    while (textArray.length < puzzleSize.length) {
        textArray.push("#".repeat(puzzleSize[textArray.length].chars));
    }

    let puzzle = [];
    for (let index = 0; index < puzzleSize.length; index++) {
        let text = textArray[index]
        let startPadding = Math.floor(
            (puzzleSize[index].chars - text.length) / 2
        );
        let endPadding =
            puzzleSize[index].chars - text.length - startPadding;
        let rowText = "#".repeat(startPadding) + text + "#".repeat(endPadding);

        let puzzleRow = [];
        for (let i = 0; i < puzzleSize[index].padding; i++) {
            puzzleRow.push({ value: "", hidden: false });
        }
        for (let c of rowText) {
            let hidden = !showAll
            const regex = /[A-Za-z]/g;
            if (!c.match(regex)) {
                hidden = false
            }
            
            puzzleRow.push({ value: c, hidden: hidden });
        }
        for (let i = 0; i < puzzleSize[index].padding; i++) {
            puzzleRow.push({ value: "", hidden: false });
        }
        puzzle.push(puzzleRow);
    }
    return puzzle
}

export default {
    namespaced: false,
    state: () => ({
        puzzleList: [
            {
                clue: "AROUND THE HOUSE",
                puzzles: [
                    "Two-Piece Outdoor Sectional Sofa",
                    "Blue Recycling Bins",
                    "Mahogany Headboard",
                    "Family Photos",
                    "Comfy Hammock",
                    "Wooden Credenza",
                    "Round Wooden Coffee Table",
                    "Spiral Staircase",
                    "Relaxed Jeans",
                    "Jade Cufflinks",
                    "Lit Candle",
                    "Marble-Top Table",
                    "Leather Bench",
                    "Wooden Storage Rack",
                    "Dining-Room Chairs",
                    "Linen Sheets With Matching Pillowcases",
                    "Terry-Cloth Towels",
                ]
            },
            {
                clue: "CHARACTERS",
                puzzles: [
                    "Fred & Wilma Flintstone",
                    "Tom & Jerry",
                    "Bart & Lisa Simpson"
                ]
            },
            {
                clue: "EVENT", puzzles: [
                    "Leisure Vacation",
                    "Walking Tour of the City",
                    "Daylight-Saving Time",
                    "Intimate Dinner",
                    "Dusk-to-Dawn Curfew",
                    "Harvest Festival",
                    "Extraordinary Experience",
                    "Spectacular Road Trip",
                    "Narrow Election",
                    "Birthday Party",
                    "Lightning Storm",
                    "NFL Pregame Show",
                    "Whilrwind Weekend",
                    "New York City Marathon"]
            },
            {
                clue: "FOOD AND DRINK", puzzles: [
                    "Chocolate Chips",
                    "Dill-flavored Potato Chips",
                    "Seasoned Sticky Rice",
                    "Honey-Almond Flan",
                    "Bread-and-Butter Pickles",
                    "Pumpkin Cheesecake",
                    "Chocolate-Covered Mints",
                    "Honey-Roasted Pumpkin",
                    "Cherry Pie with Vanilla-Bean Ice Cream",
                    "Can of Dr Pepper",
                    "Winter Root Vegetables",
                    "Hamburger Steak Smothered in Gravy",
                    "Crisp Apple Slices",
                    "Citrus & Mint Punch",
                    "Salted Tortilla Chips",
                    "Pumpkin-Pie Pudding",
                    "Chicken-Caesar Salad",
                    "Lemons & Limes",
                    "Breakfast Sandwich",
                    "Grilled Cheese Sandwich",
                    "Double-Chocolate-Chunk Cookies",
                    "Coconut-Cream Pie",
                    "Soup & Sandwich",
                    "Mocha Ice Cream",
                    "Salty Pita Chips",
                    "Chocolate Cookies",
                    "Farro Salad",
                    "Roasted Eggplants",
                    "Pink-Grapefruit Juice",
                    "Cheese & Crackers",
                    "Juicy Blackberries",
                    "Ground Beef Fried with Potatoes & Onions",
                    "Cool Refreshing Beverage",
                    "Fresh-Squeezed Juice",
                    "Fried Ham & Fontina",
                    "Italian Seasoning",
                    "Pumpkin Cheesecake",
                    "Cashew Butter",
                    "Freshly Baked Muffins",
                    "Curried Almonds",
                    "Raspberry Lemonade",
                    "Broccoli Salad With Crumbled Bacon & Nuts",
                    "Healthy Meals",
                    "Carrot & Celery Sticks With Veggie Dip",
                    "Snacks & Sweets",
                    "Blueberry Yogurt",
                    "Big Batch of Cookies",
                    "Chocolate Macaroons",
                    "Cranberries & Raisins"]
            },
            {
                clue: "MOVIE TITLE", puzzles: [
                    "The Legend of Tarzan",
                    "Ghostbusters",
                    "La La Land",
                    "Ben-Hur",
                    "American Pie",
                    "Close Encounters Of The Third Kind"]
            },
            {
                clue: "OCCUPATION", puzzles: [
                    "Documentary Filmmaker",
                    "Travel Photographer",
                    "Dispatch Operator",
                    "Molecular Engineer",
                    "Private Secretary",
                    "Pig Farmer",
                    "Technology Educator",
                    "History Professor",
                    "Park Ranger",
                    "Geologist",
                    "Headmistress"]
            },
            {
                clue: "PHRASE", puzzles: [
                    "What Shall We Do Now?",
                    "A Personal Touch",
                    "Quit While You Are Ahead",
                    "Under the Weather",
                    "Let’s Do Lunch",
                    "Opportunity Knocks But Once",
                    "Handsome and Charming",
                    "Street Style",
                    "Whet Your Appetite",
                    "Restrictions May Apply",
                    "A Toast to My Good Fortune",
                    "Cool Style",
                    "Down-To-Earth",
                    "All-Day Comfort",
                    "I'll Wait Here",
                    "Dishing Dirt",
                    "Let's Go!",
                    "Unique Bond",
                    "Made from Scratch",
                    "New Day New You",
                    "To Be Honest",
                    "Break the Ice",
                    "Balanced Nutrition",
                    "Save Room For Dessert!",
                    "Making Money Hand Over Fist",
                    "Balanced Nutrition",
                    "What A Day!",
                    "Raining Cats And Dogs"]
            },
            {
                clue: "THINGS", puzzles: [
                    "Priceless Treasures",
                    "Throwback Photos",
                    "High-Heeled Sandals",
                    "Pencils, Pens & Crayons",
                    "Breathtaking Waterfalls",
                    "Reusable Bags",
                    "Normal Business Hours",
                    "Rare Presidential Portraits",
                    "Rare Photos",
                    "Fantasy Football Draft Rankings",
                    "Fashion Advice & Beauty Tips",
                    "Generous Profits",
                    "Hardcover Books",
                    "Plaid Socks",
                    "Photos & Videos",
                    "Comfortable Cushiony Shoes",
                    "Clear-Blue Skies",
                    "Stiletto Boots",
                    "Warning Signals",
                    "Swimsuits & Cover-ups",
                    "Snowcapped Mountain Peaks",
                    "Hair Ribbons & Bows",
                    "Chosen Vocation",
                    "Wingnuts",
                    "Soft & Comfortable Running Shoes",
                    "Newspaper Clippings"]
            },
            {
                clue: "WHAT ARE YOU DOING", puzzles: [
                    "Reading a Good Book",
                    "Browsing in the Department Store",
                    "Taking a Brief Hiatus",
                    "Watching the World Cup",
                    "Watching a Science-Fiction Movie",
                    "Planning a New Adventure",
                    "Folding Cloth Diapers",
                    "Making My Shopping List",
                    "Turning Up the Volume",
                    "Spending the Day in Bed",
                    "Taking Time to Regroup",
                    "Repairing a Broken Clock",
                    "Fly-Fishing on Lake Tahoe",
                    "Taking a Coworker to Lunch",
                    "Staying in a Mountain Cottage",
                    "Remodeling Our House",
                    "Buying the Perfect Gift",
                    "Leasing a New Car",
                    "Renting a Tuxedo",
                    "Asking Siri A Question",
                    "Picking A Question At Random",
                    "Cheering For My Team",
                    "Winning A Brand-New Car",
                    "Walking Through A Maze"]
            },
        ],
        puzzleSize: [
            { padding: 1, chars: 12 },
            { padding: 0, chars: 14 },
            { padding: 0, chars: 14 },
            { padding: 1, chars: 12 },
        ],
        clueIndex: 0,
        puzzleIndex: 0,
        puzzle: [],
        vowelEnabled: false
    }),
    mutations: {
        setPuzzle(state, { text, showAll }) {
            let words = arrangePuzzleText(text, state.puzzleSize)
            state.puzzle = arrayToPuzzle(words, state.puzzleSize, showAll)
        },
        setVowelEnabled(state, value) {
            state.vowelEnabled = value
        },
        setLetterHidden(state, {rowIndex,letterIndex,value}) {
            state.puzzle[rowIndex][letterIndex].hidden = value
        }
    },
    actions: {
        nextPuzzle(context) {
            context.state.clueIndex = Math.floor(Math.random() * context.state.puzzleList.length);
            context.state.puzzleIndex = Math.floor(Math.random() * context.state.puzzleList[context.state.clueIndex].puzzles.length);
            const showAll = false
            // const text = context.state.puzzleList[context.state.clueIndex].puzzles[context.state.puzzleIndex] // move to getter
            const text = context.getters.currentPuzzleText
            context.commit('setPuzzle', { text, showAll })
        },
        revealPuzzle(context) {
            context.state.puzzle.forEach(row => {
                row.forEach(letter => {
                    letter.hidden = false
                });
            });
        }
    },
    getters: {
        puzzle(state) {
            return state.puzzle
        },
        puzzleId(state) {
            return state.clueIndex.toString() + "-" + state.puzzleIndex.toString()
        },
        currentPuzzleText(state) {
            return state.puzzleList[state.clueIndex].puzzles[state.puzzleIndex]
        },
        currentPuzzleClue(state) {
            return state.puzzleList[state.clueIndex].clue
        },
        vowelEnabled(state) {
            return state.vowelEnabled
        },
        hiddenPuzzleText(state) {
            let returnText = ""
            state.puzzle.forEach(row => {
                row.forEach(letter => {
                    if (letter.value == ' ') {
                        returnText = returnText + ' '
                    } else if(letter.hidden) {
                        returnText = returnText + '*'
                    } else if (letter.value == '#') {
                        returnText = returnText + ''
                    } else {
                        returnText = returnText + letter.value
                    }
                });
                if(returnText.length > 0) {
                    returnText = returnText + ' '
                }
            });
            return returnText.trim()
        }
    }
}