(function(e){function t(t){for(var n,s,l=t[0],i=t[1],u=t[2],c=0,d=[];c<l.length;c++)s=l[c],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);h&&h(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},s={app:0},r={app:0},o=[];function l(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"909e809b"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a={about:1};s[e]?t.push(s[e]):0!==s[e]&&a[e]&&t.push(s[e]=new Promise((function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"9d1d0bc5"}[e]+".css",r=i.p+n,o=document.getElementsByTagName("link"),l=0;l<o.length;l++){var u=o[l],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===n||c===r))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){u=d[l],c=u.getAttribute("data-href");if(c===n||c===r)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var n=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete s[e],h.parentNode.removeChild(h),a(o)},h.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){s[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=o);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=l(e);var d=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(h);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",d.name="ChunkLoadError",d.type=n,d.request=s,a[1](d)}r[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/hangman-wheel/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var h=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"1fbb":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"navbar navbar-expand-lg fixed-top navbar-dark bg-primary"},[a("router-link",{staticClass:"router-link",attrs:{to:"/setup"}},[e._v("Setup")]),e._v(" | "),a("router-link",{staticClass:"router-link",attrs:{to:"/play"}},[e._v("Play")])],1),a("router-view")],1)},r=[],o={beforeMount:function(){this.$store.dispatch("loadSettings")}},l=o,i=(a("034f"),a("2877")),u=Object(i["a"])(l,s,r,!1,null,null,null),c=u.exports,d=(a("d3b7"),a("8c4f")),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"setup"},[a("div",{staticClass:"spacer"}),a("div",{staticClass:"inputDiv"},[a("label",{staticClass:"labelClass"},[e._v("Keep All Scores")]),a("b-form-checkbox",{attrs:{name:"check-button",size:"lg",switch:""},model:{value:e.keepAllScores,callback:function(t){e.keepAllScores=t},expression:"keepAllScores"}})],1),a("div",{staticClass:"inputDiv"},[a("label",{staticClass:"labelClass"},[e._v("Set Win Bonus")]),a("b-form-input",{staticClass:"inputBox",attrs:{placeholder:"Enter Bonus points",type:"number"},model:{value:e.pointsForWin,callback:function(t){e.pointsForWin=t},expression:"pointsForWin"}})],1),a("div",{staticClass:"inputDiv"},[a("label",{staticClass:"labelClass"},[e._v("Set Vowel Cost")]),a("b-form-input",{staticClass:"inputBox",attrs:{placeholder:"Enter Vowel Cost",type:"number"},model:{value:e.vowelCost,callback:function(t){e.vowelCost=t},expression:"vowelCost"}})],1),a("div",{staticClass:"inputDiv"},[a("label",{staticClass:"labelClass"},[e._v("Select Current Player")]),a("b-form-spinbutton",{attrs:{id:"currentPlayer",min:"0",max:e.noPlayers-1,inline:""},model:{value:e.currentPlayer,callback:function(t){e.currentPlayer=t},expression:"currentPlayer"}})],1),a("div",{staticClass:"inputDiv"},[a("label",{staticClass:"labelClass"},[e._v("Select Number of Players ")]),a("b-form-spinbutton",{attrs:{id:"selectPlayers",min:"1",max:e.maxPlayers,inline:""},model:{value:e.noPlayers,callback:function(t){e.noPlayers=t},expression:"noPlayers"}})],1),e._l(e.noPlayers,(function(e){return a("playerItemEdit",{key:e+1e3,attrs:{itemIndex:e-1}})})),a("div",{staticClass:"inputDiv"},[a("label",{staticClass:"labelClass"},[e._v("Select Number Wheel Items ")]),a("b-form-spinbutton",{attrs:{min:"1",inline:""},model:{value:e.noWheelItems,callback:function(t){e.noWheelItems=t},expression:"noWheelItems"}})],1),a("div",[e._v("Set value of -1 for LOSE A TURN, -2 for BANKRUPT")]),e._l(e.noWheelItems,(function(e){return a("wheelItemEdit",{key:e,attrs:{itemIndex:e-1}})})),a("b-button",{staticClass:"settingButton",attrs:{variant:"primary"},on:{click:function(t){return e.startNewGame()}}},[e._v("Start New Game")]),a("b-button",{staticClass:"settingButton",attrs:{variant:"primary"},on:{click:function(t){return e.resetSettings()}}},[e._v("Reset Settings")]),a("b-button",{staticClass:"settingButton",attrs:{variant:"primary"},on:{click:function(t){return e.saveSettings()}}},[e._v("Save Settings")]),a("b-button",{staticClass:"settingButton",attrs:{variant:"primary"},on:{click:function(t){return e.deleteSaveSettings()}}},[e._v("Delete Save Settings")])],2)},p=[],f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wheelInfo"},[a("label",{staticClass:"labelClass"},[e._v("Set Item Value")]),a("b-form-input",{staticClass:"wheelValue",attrs:{placeholder:"Enter Wheel Text",type:"text"},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}}),a("label",{staticClass:"labelClass"},[e._v("Set Item Colour")]),a("b-form-input",{staticClass:"wheelColour",attrs:{type:"color"},model:{value:e.colour,callback:function(t){e.colour=t},expression:"colour"}})],1)},m=[],g=(a("a9e3"),{name:"wheelItemEdit",props:{itemIndex:Number},computed:{val:{get:function(){return this.$store.getters.wheelSetup[this.itemIndex].val},set:function(e){this.$store.commit("wheelVal",{index:this.itemIndex,value:parseInt(e)})}},colour:{get:function(){return this.$store.getters.wheelSetup[this.itemIndex].colour},set:function(e){this.$store.commit("wheelColour",{index:this.itemIndex,value:e})}}}}),v=g,y=(a("681e"),Object(i["a"])(v,f,m,!1,null,"d7eebcc0",null)),S=y.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"editPlayerInfo"},[a("label",{staticClass:"labelClass"},[e._v("Set Player Name")]),a("b-form-input",{staticClass:"editPlayerName",attrs:{placeholder:"Enter Player Name",type:"text"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("label",{staticClass:"labelClass"},[e._v("Set Player Score")]),a("b-form-input",{staticClass:"editPlayerScore",attrs:{placeholder:"Update Score",type:"number"},model:{value:e.score,callback:function(t){e.score=t},expression:"score"}}),a("label",{staticClass:"labelClass"},[e._v("Set Player Colour")]),a("b-form-input",{staticClass:"editPlayerColour",attrs:{type:"color"},model:{value:e.colour,callback:function(t){e.colour=t},expression:"colour"}})],1)},b=[],w=(a("b0c0"),{name:"playerItemEdit",props:{itemIndex:Number},computed:{name:{get:function(){return this.$store.getters.players[this.itemIndex].name},set:function(e){this.$store.commit("playerName",{index:this.itemIndex,value:e})}},colour:{get:function(){return this.$store.getters.players[this.itemIndex].colour},set:function(e){this.$store.commit("playerColour",{index:this.itemIndex,value:e})}},score:{get:function(){return this.$store.getters.players[this.itemIndex].score},set:function(e){this.$store.commit("playerscore",{index:this.itemIndex,value:parseInt(e)})}}}}),C=w,x=(a("6208"),Object(i["a"])(C,P,b,!1,null,"1c03a377",null)),z=x.exports,k={name:"Setup",components:{wheelItemEdit:S,playerItemEdit:z},computed:{keepAllScores:{get:function(){return this.$store.getters.keepAllScores},set:function(e){this.$store.commit("keepAllScores",e)}},noPlayers:{get:function(){return this.$store.getters.noPlayers},set:function(e){this.$store.commit("updatePlayers",e)}},maxPlayers:function(){return this.$store.getters.maxPlayers},pointsForWin:{get:function(){return this.$store.getters.pointsForWin},set:function(e){this.$store.commit("pointsForWin",parseInt(e))}},vowelCost:{get:function(){return this.$store.getters.vowelCost},set:function(e){this.$store.commit("vowelCost",e)}},currentPlayer:{get:function(){return this.$store.getters.currentPlayer},set:function(e){this.$store.commit("currentPlayer",e)}},noWheelItems:{get:function(){return this.$store.getters.noWheelItems},set:function(e){this.$store.commit("noWheelItems",parseInt(e))}}},methods:{saveSettings:function(){this.$store.dispatch("saveSettings")},resetSettings:function(){this.$store.dispatch("setDefaultSettings")},deleteSaveSettings:function(){this.$store.dispatch("clearSave")},startNewGame:function(){this.$store.dispatch("startNewGame")}}},W=k,E=(a("7f40"),Object(i["a"])(W,h,p,!1,null,"cec3ee68",null)),I=E.exports;n["default"].use(d["a"]);var A=[{path:"/setup",name:"Setup",component:I},{path:"/play",name:"Play",component:function(){return a.e("about").then(a.bind(null,"c74c"))}}],B=new d["a"]({routes:A}),F=B,T=(a("25f0"),a("2f62")),D=(a("4160"),a("ac1f"),a("466d"),a("38cf"),a("1276"),a("498a"),a("159b"),a("b85c")),R=[{clue:"AROUND THE HOUSE",puzzles:["Two-Piece Outdoor Sectional Sofa","Blue Recycling Bins","Mahogany Headboard","Family Photos","Comfy Hammock","Wooden Credenza","Round Wooden Coffee Table","Spiral Staircase","Relaxed Jeans","Jade Cufflinks","Lit Candle","Marble-Top Table","Leather Bench","Wooden Storage Rack","Dining-Room Chairs","Linen Sheets With Matching Pillowcases","Terry-Cloth Towels"]},{clue:"CHARACTERS",puzzles:["Fred & Wilma Flintstone","Tom & Jerry","Bart & Lisa Simpson"]},{clue:"EVENT",puzzles:["Leisure Vacation","Walking Tour of the City","Daylight-Saving Time","Intimate Dinner","Dusk-to-Dawn Curfew","Harvest Festival","Extraordinary Experience","Spectacular Road Trip","Narrow Election","Birthday Party","Lightning Storm","NFL Pregame Show","Whilrwind Weekend","New York City Marathon"]},{clue:"FOOD AND DRINK",puzzles:["Chocolate Chips","Dill-flavored Potato Chips","Seasoned Sticky Rice","Honey-Almond Flan","Bread-and-Butter Pickles","Pumpkin Cheesecake","Chocolate-Covered Mints","Honey-Roasted Pumpkin","Cherry Pie with Vanilla-Bean Ice Cream","Can of Dr Pepper","Winter Root Vegetables","Hamburger Steak Smothered in Gravy","Crisp Apple Slices","Citrus & Mint Punch","Salted Tortilla Chips","Pumpkin-Pie Pudding","Chicken-Caesar Salad","Lemons & Limes","Breakfast Sandwich","Grilled Cheese Sandwich","Double-Chocolate-Chunk Cookies","Coconut-Cream Pie","Soup & Sandwich","Mocha Ice Cream","Salty Pita Chips","Chocolate Cookies","Farro Salad","Roasted Eggplants","Pink-Grapefruit Juice","Cheese & Crackers","Juicy Blackberries","Ground Beef Fried with Potatoes & Onions","Cool Refreshing Beverage","Fresh-Squeezed Juice","Fried Ham & Fontina","Italian Seasoning","Pumpkin Cheesecake","Cashew Butter","Freshly Baked Muffins","Curried Almonds","Raspberry Lemonade","Broccoli Salad With Crumbled Bacon & Nuts","Healthy Meals","Carrot & Celery Sticks With Veggie Dip","Snacks & Sweets","Blueberry Yogurt","Big Batch of Cookies","Chocolate Macaroons","Cranberries & Raisins"]},{clue:"MOVIE TITLE",puzzles:["The Legend of Tarzan","Ghostbusters","La La Land","Ben-Hur","American Pie","Close Encounters Of The Third Kind"]},{clue:"OCCUPATION",puzzles:["Documentary Filmmaker","Travel Photographer","Dispatch Operator","Molecular Engineer","Private Secretary","Pig Farmer","Technology Educator","History Professor","Park Ranger","Geologist","Headmistress"]},{clue:"PHRASE",puzzles:["What Shall We Do Now?","A Personal Touch","Quit While You Are Ahead","Under the Weather","Let’s Do Lunch","Opportunity Knocks But Once","Handsome and Charming","Street Style","Whet Your Appetite","Restrictions May Apply","A Toast to My Good Fortune","Cool Style","Down-To-Earth","All-Day Comfort","I'll Wait Here","Dishing Dirt","Let's Go!","Unique Bond","Made from Scratch","New Day New You","To Be Honest","Break the Ice","Balanced Nutrition","Save Room For Dessert!","Making Money Hand Over Fist","Balanced Nutrition","What A Day!","Raining Cats And Dogs"]},{clue:"THINGS",puzzles:["Priceless Treasures","Throwback Photos","High-Heeled Sandals","Pencils, Pens & Crayons","Breathtaking Waterfalls","Reusable Bags","Normal Business Hours","Rare Presidential Portraits","Rare Photos","Fantasy Football Draft Rankings","Fashion Advice & Beauty Tips","Generous Profits","Hardcover Books","Plaid Socks","Photos & Videos","Comfortable Cushiony Shoes","Clear-Blue Skies","Stiletto Boots","Warning Signals","Swimsuits & Cover-ups","Snowcapped Mountain Peaks","Hair Ribbons & Bows","Chosen Vocation","Wingnuts","Soft & Comfortable Running Shoes","Newspaper Clippings"]},{clue:"WHAT ARE YOU DOING",puzzles:["Reading a Good Book","Browsing in the Department Store","Taking a Brief Hiatus","Watching the World Cup","Watching a Science-Fiction Movie","Planning a New Adventure","Folding Cloth Diapers","Making My Shopping List","Turning Up the Volume","Spending the Day in Bed","Taking Time to Regroup","Repairing a Broken Clock","Fly-Fishing on Lake Tahoe","Taking a Coworker to Lunch","Staying in a Mountain Cottage","Remodeling Our House","Buying the Perfect Gift","Leasing a New Car","Renting a Tuxedo","Asking Siri A Question","Picking A Question At Random","Cheering For My Team","Winning A Brand-New Car","Walking Through A Maze"]}],N=[{padding:1,chars:12},{padding:0,chars:14},{padding:0,chars:14},{padding:1,chars:12}],K=0,L=0;function $(e,t){var a=e.split(" ");if(a.length<=t.length)return a;for(var n=0;n<t.length;n++)for(var s=n+1;s<a.length;s++)if(a[s].length>0)if(0==a[n].length)a[n]=a[s],a[s]="";else{if(!(a[n].length+a[s].length+1<=t[n].chars))break;a[n]=a[n]+" "+a[s],a[s]=""}while(""===a[a.length-1])a.pop();return a}function V(e,t,a){e.length<=2&&e.unshift("#".repeat(t[0].chars));while(e.length<t.length)e.push("#".repeat(t[e.length].chars));for(var n=[],s=0;s<t.length;s++){for(var r=e[s],o=Math.floor((t[s].chars-r.length)/2),l=t[s].chars-r.length-o,i="#".repeat(o)+r+"#".repeat(l),u=[],c=0;c<t[s].padding;c++)u.push({value:"",hidden:!1});var d,h=Object(D["a"])(i);try{for(h.s();!(d=h.n()).done;){var p=d.value,f=!a,m=/[A-Za-z]/g;p.match(m)||(f=!1),u.push({value:p,hidden:f})}}catch(v){h.e(v)}finally{h.f()}for(var g=0;g<t[s].padding;g++)u.push({value:"",hidden:!1});n.push(u)}return n}var O={namespaced:!1,state:function(){return{puzzleList:R,puzzleSize:N,clueIndex:K,puzzleIndex:L,puzzle:[],vowelEnabled:!1}},mutations:{setPuzzle:function(e,t){var a=t.text,n=t.showAll,s=$(a,e.puzzleSize);e.puzzle=V(s,e.puzzleSize,n)},setVowelEnabled:function(e,t){e.vowelEnabled=t},setLetterHidden:function(e,t){var a=t.rowIndex,n=t.letterIndex,s=t.value;e.puzzle[a][n].hidden=s}},actions:{nextPuzzle:function(e){e.state.clueIndex=Math.floor(Math.random()*e.state.puzzleList.length),e.state.puzzleIndex=Math.floor(Math.random()*e.state.puzzleList[e.state.clueIndex].puzzles.length);var t=!1,a=e.getters.currentPuzzleText;e.commit("setPuzzle",{text:a,showAll:t})},revealPuzzle:function(e){e.state.puzzle.forEach((function(e){e.forEach((function(e){e.hidden=!1}))}))},setBoardDefaultSettings:function(e){e.state.puzzleSize=N,e.state.clueIndex=K,e.state.currentPlayer=L,e.state.puzzle=[],e.commit("setPuzzle",{text:"Wheel of Hangman!!",showAll:!0})},saveBoardSettings:function(e){n["default"].$cookies.set("boardSettings",{puzzleSize:e.state.puzzleSize,clueIndex:e.state.clueIndex,puzzleIndex:e.state.puzzleIndex,puzzle:e.state.puzzle},"Infinity",null,null,null,"Strict")},loadBoardSettings:function(e){e.dispatch("setBoardDefaultSettings");var t=n["default"].$cookies.get("boardSettings");void 0!=t&&(void 0!=t.puzzleSize&&(e.state.puzzleSize=t.puzzleSize),void 0!=t.clueIndex&&(e.state.clueIndex=t.clueIndex),void 0!=t.puzzleIndex&&(e.state.puzzleIndex=t.puzzleIndex),void 0!=t.puzzle&&(e.state.puzzle=t.puzzle))},clearBoardSave:function(){n["default"].$cookies.remove("boardSettings")}},getters:{puzzle:function(e){return e.puzzle},puzzleId:function(e){return e.clueIndex.toString()+"-"+e.puzzleIndex.toString()},currentPuzzleText:function(e){return e.puzzleList[e.clueIndex].puzzles[e.puzzleIndex]},currentPuzzleClue:function(e){return e.puzzleList[e.clueIndex].clue},vowelEnabled:function(e){return e.vowelEnabled},hiddenPuzzleText:function(e){var t="";return e.puzzle.forEach((function(e){e.forEach((function(e){" "==e.value?t+=" ":e.hidden?t+="*":"#"==e.value?t+="":t+=e.value})),t.length>0&&(t+=" ")})),t.trim()}}},_=[{val:-2,text:"BANKRUPT",colour:"#FF6633"},{val:900,text:"£900",colour:"#E6B333"},{val:500,text:"£500",colour:"#80B300"},{val:350,text:"£350",colour:"#FF99E6"},{val:600,text:"£600",colour:"#66994D"},{val:500,text:"£500",colour:"#66664D"},{val:400,text:"£400",colour:"#E666B3"},{val:550,text:"£550",colour:"#4D8066"},{val:2500,text:"£2500",colour:"#FF3380"},{val:1e3,text:"£1000",colour:"#E64D66"},{val:700,text:"£700",colour:"#FFB399"},{val:900,text:"£900",colour:"#3366E6"},{val:500,text:"£500",colour:"#809900"},{val:3500,text:"£3500",colour:"#CCFF1A"},{val:-2,text:"BANKRUPT",colour:"#B366CC"},{val:300,text:"£300",colour:"#991AFF"},{val:500,text:"£500",colour:"#33991A"},{val:450,text:"£450",colour:"#809980"},{val:500,text:"£500",colour:"#CCCC00"},{val:800,text:"£800",colour:"#4DB380"},{val:-1,text:"LOSE A TURN",colour:"#FF33FF"},{val:1e3,text:"£1000",colour:"#999966"},{val:1500,text:"£1500",colour:"#E6B3B3"},{val:650,text:"£650",colour:"#FF1A66"}],M=0,H={namespaced:!1,state:function(){return{wheelSetup:_,currentWheelIndex:M,wheelSpinning:!1}},mutations:{setWheelIndex:function(e,t){e.currentWheelIndex=t},noWheelItems:function(e,t){while(t!=e.wheelSetup.length)t>e.wheelSetup.length?e.wheelSetup.push({val:0,text:"£0",colour:"#FF1A66"}):t<e.wheelSetup.length&&e.wheelSetup.pop()},wheelVal:function(e,t){var a=t.index,n=t.value;n>=-2&&(e.wheelSetup[a].val=n,n>=0?e.wheelSetup[a].text="£"+n.toString():-1==n?e.wheelSetup[a].text="LOSE A TURN":-2==n&&(e.wheelSetup[a].text="BANKRUPT"))},wheelColour:function(e,t){var a=t.index,n=t.value;e.wheelSetup[a].colour=n}},actions:{wheelSpinStart:function(e){e.dispatch("setPhase","spinning"),e.state.wheelSpinning=!0},stepWheel:function(e){e.state.currentWheelIndex==e.state.wheelSetup.length-1?e.state.currentWheelIndex=0:e.state.currentWheelIndex++},wheelSpinEnd:function(e){e.state.wheelSpinning=!1,e.state.wheelSetup[e.state.currentWheelIndex].val>=0?e.dispatch("setPhase","spinDone"):-1==e.state.wheelSetup[e.state.currentWheelIndex].val?e.dispatch("setPhase","missTurn"):-2==e.state.wheelSetup[e.state.currentWheelIndex].val&&e.dispatch("setPhase","bankrupt")},setWheelDefaultSettings:function(e){e.state.wheelSetup=_,e.state.currentWheelIndex=M},saveWheelSettings:function(e){n["default"].$cookies.set("WheelSettings",{wheelSetup:e.state.wheelSetup,currentWheelIndex:e.state.currentWheelIndex},"Infinity",null,null,null,"Strict")},loadWheelSettings:function(e){e.dispatch("setWheelDefaultSettings");var t=n["default"].$cookies.get("WheelSettings");void 0!=t&&(void 0!=t.wheelSetup&&(e.state.wheelSetup=t.wheelSetup),void 0!=t.currentWheelIndex&&(e.state.currentWheelIndex=t.currentWheelIndex))},clearWheelSave:function(){n["default"].$cookies.remove("WheelSettings")}},getters:{wheelText:function(e){return e.wheelSetup[e.currentWheelIndex].text},wheelValue:function(e){return e.wheelSetup[e.currentWheelIndex].val},wheelSetup:function(e){return e.wheelSetup},noWheelItems:function(e){return e.wheelSetup.length},currentWheelIndex:function(e){return e.currentWheelIndex},wheelSpinning:function(e){return e.wheelSpinning}}},G=[{name:"Player 0",roundScore:0,score:0,colour:"#ff0000"},{name:"Player 1",roundScore:0,score:0,colour:"#40ff00"},{name:"Player 2",roundScore:0,score:0,colour:"#0040ff"}],U=!1,j=0,J={namespaced:!1,state:function(){return{maxPlayers:10,colours:["#ff0000","#40ff00","#0040ff","#ff00ff","#ffbf00","#449c90","#8000ff","#00ff80","#4420db","#bb639c"],players:G,currentPlayer:j,keepAllScores:U}},mutations:{keepAllScores:function(e,t){e.keepAllScores=t},updatePlayers:function(e,t){while(t!=e.players.length)t>e.players.length?e.players.push({name:"Player ".concat(e.players.length.toString()),score:0,colour:e.colours[e.players.length],roundScore:0}):t<e.players.length&&e.players.pop()},currentPlayer:function(e,t){e.currentPlayer=t},playerColour:function(e,t){var a=t.index,n=t.value;e.players[a].colour=n},playerName:function(e,t){var a=t.index,n=t.value;e.players[a].name=n},playerscore:function(e,t){var a=t.index,n=t.value;e.players[a].score=n}},actions:{nextPlayer:function(e){e.state.currentPlayer++,e.state.currentPlayer>=e.state.players.length&&(e.state.currentPlayer=0)},clearAllScores:function(e){e.state.players.forEach((function(e){e.roundScore=0,e.score=0}))},clearRoundScores:function(e){e.state.players.forEach((function(e){e.roundScore=0}))},currentPlayerAddRoundScore:function(e,t){e.state.players[e.state.currentPlayer].roundScore+=t},currentPlayerClearRoundScore:function(e){e.state.players[e.state.currentPlayer].roundScore=0},setPlayerScores:function(e){e.state.keepAllScores?e.state.players.forEach((function(e){e.score+=e.roundScore})):e.state.players[e.state.currentPlayer].score+=e.state.players[e.state.currentPlayer].roundScore,e.dispatch("clearRoundScores")},spendRoundPoints:function(e,t){e.state.players[e.state.currentPlayer].roundScore-=t},setPlayerDefaultSettings:function(e){e.state.players=G,e.state.keepAllScores=U,e.state.currentPlayer=j},savePlayerSettings:function(e){n["default"].$cookies.set("playerSettings",{keepAllScores:e.state.keepAllScores,players:e.state.players,currentPlayer:e.state.currentPlayer},"Infinity",null,null,null,"Strict")},loadPlayerSettings:function(e){e.dispatch("setPlayerDefaultSettings");var t=n["default"].$cookies.get("playerSettings");void 0!=t&&(void 0!=t.keepAllScores&&(e.state.keepAllScores=t.keepAllScores),void 0!=t.players&&(e.state.players=t.players),void 0!=t.currentPlayer&&(e.state.currentPlayer=t.currentPlayer))},clearPlayerSave:function(){n["default"].$cookies.remove("playerSettings")}},getters:{noPlayers:function(e){return e.players.length},players:function(e){return e.players},currentPlayer:function(e){return e.currentPlayer},maxPlayers:function(e){return e.maxPlayers},playerRoundScore:function(e){return e.players[e.currentPlayer].roundScore},keepAllScores:function(e){return e.keepAllScores}}},Y=[{value:"B",used:!1},{value:"C",used:!1},{value:"D",used:!1},{value:"F",used:!1},{value:"G",used:!1},{value:"H",used:!1},{value:"J",used:!1},{value:"K",used:!1},{value:"L",used:!1},{value:"M",used:!1},{value:"N",used:!1},{value:"P",used:!1},{value:"Q",used:!1},{value:"R",used:!1},{value:"S",used:!1},{value:"T",used:!1},{value:"V",used:!1},{value:"W",used:!1},{value:"X",used:!1},{value:"Y",used:!1},{value:"Z",used:!1}],q=[{value:"A",used:!1},{value:"E",used:!1},{value:"I",used:!1},{value:"O",used:!1},{value:"U",used:!1}],Q={namespaced:!1,state:function(){return{consKeyboard:[],vowelKeyboard:[]}},mutations:{},actions:{initKeyboards:function(e){e.state.consKeyboard=[],Y.forEach((function(t){e.state.consKeyboard.push({value:t.value,used:t.used})})),e.state.vowelKeyboard=[],q.forEach((function(t){e.state.vowelKeyboard.push({value:t.value,used:t.used})}))},keyPressed:function(e,t){var a=t.index,n=t.keyboardType;if(e.getters.gamePhase==e.getters.phaseEnum.selectCons||e.getters.gamePhase==e.getters.phaseEnum.selectVowel||e.getters.gamePhase==e.getters.phaseEnum.freeVowels){var s="";"cons"===n?(e.state.consKeyboard[a].used=!0,s=e.state.consKeyboard[a].value):"vowel"===n&&(e.state.vowelKeyboard[a].used=!0,s=e.state.vowelKeyboard[a].value);var r=0;if(e.getters.puzzle.forEach((function(t,a){t.forEach((function(t,n){t.value.toLowerCase()==s.toLowerCase()&&(r+=1,e.commit("setLetterHidden",{rowIndex:a,letterIndex:n,value:!1}))}))})),r>0){if("cons"===n||e.getters.gamePhase==e.getters.phaseEnum.freeVowels){var o=r*e.getters.wheelValue;e.dispatch("currentPlayerAddRoundScore",o)}e.dispatch("setPhase","charFound")}else e.dispatch("setPhase","charNotFound")}e.commit("setVowelEnabled",!1)},setKeyboardDefaultSettings:function(e){e.dispatch("initKeyboards")},saveKeyboardSettings:function(e){n["default"].$cookies.set("KeyboardSettings",{consKeyboard:e.state.consKeyboard,vowelKeyboard:e.state.vowelKeyboard},"Infinity",null,null,null,"Strict")},loadKeyboardSettings:function(e){e.dispatch("setKeyboardDefaultSettings");var t=n["default"].$cookies.get("KeyboardSettings");void 0!=t&&(void 0!=t.consKeyboard&&(e.state.consKeyboard=t.consKeyboard),void 0!=t.vowelKeyboard&&(e.state.vowelKeyboard=t.vowelKeyboard))},clearKeyboardSave:function(){n["default"].$cookies.remove("KeyboardSettings")}},getters:{consKeyboard:function(e){return e.consKeyboard},consRemaining:function(e){var t=!1;return e.consKeyboard.forEach((function(e){0==e.used&&(t=!0)})),t},vowelKeyboard:function(e){return e.vowelKeyboard}}};n["default"].use(T["a"]);var Z=1e3,X=250,ee=-1,te=new T["a"].Store({state:{phaseEnum:{init:-1,firstGo:0,play:1,selectCons:2,selectVowel:3,guess:4,spinning:5,reveal:6,freeVowels:7},gamePhase:ee,showBankruptAlert:!1,showLoseTurnAlert:!1,showWheelValue:!1,showWinAlert:!1,showNotFoundAlert:!1,pointsForWin:Z,vowelCost:X},getters:{gamePhase:function(e){return e.gamePhase},phaseText:function(e){return e.gamePhase==e.phaseEnum.init?"Welcome to Wheel Of Fortune":e.gamePhase==e.phaseEnum.play||e.gamePhase==e.phaseEnum.firstGo?"Spin The Wheel / Buy a Vowel (£"+e.vowelCost.toString()+") / Guess":e.gamePhase==e.phaseEnum.selectCons?"Select a Consonant":e.gamePhase==e.phaseEnum.selectVowel?"Select a Vowel":e.gamePhase==e.phaseEnum.guess?"Make Your Guess":e.gamePhase==e.phaseEnum.spinning?"Spinning":e.gamePhase==e.phaseEnum.reveal?"Level Over":e.gamePhase==e.phaseEnum.freeVowels?"Select a Free Vowel":void 0},pointsForWin:function(e){return e.pointsForWin},phaseEnum:function(e){return e.phaseEnum},vowelCost:function(e){return e.vowelCost}},mutations:{pointsForWin:function(e,t){e.pointsForWin=t},vowelCost:function(e,t){e.vowelCost=t}},actions:{setPhase:function(e,t){"spinDone"===t?(e.state.showBankruptAlert=!1,e.state.showLoseTurnAlert=!1,e.state.showWinAlert=!1,e.state.showNotFoundAlert=!1,e.state.showWheelValue=!0,e.getters.consRemaining?e.state.gamePhase=e.state.phaseEnum.selectCons:(e.state.gamePhase=e.state.phaseEnum.freeVowels,e.commit("setVowelEnabled",!0))):"charFound"===t?(e.state.gamePhase=e.state.phaseEnum.play,e.state.showWheelValue=!1,e.state.showNotFoundAlert=!1):"charNotFound"===t?(e.state.showWheelValue=!1,e.state.showNotFoundAlert=!0,e.dispatch("nextPlayer"),e.state.gamePhase=e.state.phaseEnum.firstGo):"buyVowel"===t?e.state.gamePhase=e.state.phaseEnum.selectVowel:"guess"===t?e.state.gamePhase=e.state.phaseEnum.guess:"missTurn"===t?(e.state.showLoseTurnAlert=!0,e.dispatch("nextPlayer"),e.state.gamePhase=e.state.phaseEnum.firstGo):"skipTurn"===t?(e.dispatch("nextPlayer"),e.state.gamePhase=e.state.phaseEnum.firstGo):"bankrupt"===t?(e.state.showBankruptAlert=!0,e.dispatch("currentPlayerClearRoundScore"),e.dispatch("nextPlayer"),e.state.gamePhase=e.state.phaseEnum.firstGo):"guessFail"===t?(e.dispatch("nextPlayer"),e.state.gamePhase=e.state.phaseEnum.firstGo):"guessCorrect"===t?(e.state.showWinAlert=!0,e.dispatch("currentPlayerAddRoundScore",e.state.pointsForWin),e.dispatch("setPlayerScores"),e.dispatch("revealPuzzle"),e.state.gamePhase=e.state.phaseEnum.reveal):"skipGame"===t?(e.dispatch("revealPuzzle"),e.dispatch("clearRoundScores"),e.state.gamePhase=e.state.phaseEnum.reveal):"nextLevel"===t?(e.dispatch("nextPuzzle"),e.dispatch("initKeyboards"),e.state.showWinAlert=!1,e.state.gamePhase=e.state.phaseEnum.firstGo):"startGame"===t?(e.dispatch("clearAllScores"),e.dispatch("nextPuzzle"),e.dispatch("initKeyboards"),e.state.gamePhase=e.state.phaseEnum.firstGo):"spinning"===t&&(e.state.gamePhase=e.state.phaseEnum.spinning,e.state.showBankruptAlert=!1,e.state.showLoseTurnAlert=!1,e.state.showWinAlert=!1,e.state.showNotFoundAlert=!1),e.dispatch("saveSettings")},guessAnswer:function(e,t){e.getters.currentPuzzleText.toLowerCase()===t.toLowerCase()?e.dispatch("setPhase","guessCorrect"):e.dispatch("setPhase","guessFail")},buyVowel:function(e){e.state.gameBoard.vowelEnabled=!0,e.dispatch("spendRoundPoints",e.state.vowelCost),e.dispatch("setPhase","buyVowel")},skipTurn:function(e){e.dispatch("setPhase","skipTurn")},setDefaultSettings:function(e){e.state.pointsForWin=Z,e.state.vowelCost=X,e.state.gamePhase=ee,e.dispatch("setPlayerDefaultSettings"),e.dispatch("setWheelDefaultSettings"),e.dispatch("setKeyboardDefaultSettings"),e.dispatch("setBoardDefaultSettings")},saveSettings:function(e){n["default"].$cookies.set("gameSettings",{pointsForWin:e.state.pointsForWin,vowelCost:e.state.vowelCost,gamePhase:e.state.gamePhase},"Infinity",null,null,null,"Strict"),e.dispatch("savePlayerSettings"),e.dispatch("saveWheelSettings"),e.dispatch("saveKeyboardSettings"),e.dispatch("saveBoardSettings")},loadSettings:function(e){e.state.pointsForWin=Z,e.state.vowelCost=X,e.state.gamePhase=ee;var t=n["default"].$cookies.get("gameSettings");void 0!=t&&(void 0!=t.pointsForWin&&(e.state.pointsForWin=t.pointsForWin),void 0!=t.vowelCost&&(e.state.vowelCost=t.vowelCost),void 0!=t.gamePhase&&(e.state.gamePhase=t.gamePhase)),e.dispatch("loadPlayerSettings"),e.dispatch("loadWheelSettings"),e.dispatch("loadKeyboardSettings"),e.dispatch("loadBoardSettings")},clearSave:function(e){n["default"].$cookies.remove("gameSettings"),e.dispatch("clearPlayerSave"),e.dispatch("clearWheelSave"),e.dispatch("clearKeyboardSave"),e.dispatch("clearBoardSave")},startNewGame:function(e){e.state.gamePhase=ee,e.state.showBankruptAlert=!1,e.state.showLoseTurnAlert=!1,e.state.showWheelValue=!1,e.state.showWinAlert=!1,e.state.showNotFoundAlert=!1,e.commit("setPuzzle",{text:"Wheel of Hangman!!",showAll:!0}),e.dispatch("clearAllScores"),e.dispatch("initKeyboards"),e.commit("currentPlayer",0)}},modules:{gameBoard:O,gameWheel:H,gamePlayers:J,gameKeyboards:Q}}),ae=a("5f5b"),ne=a("b1e0"),se=(a("f9e3"),a("2dd8"),a("2b27")),re=a.n(se);n["default"].config.productionTip=!1,n["default"].use(ae["a"]),n["default"].use(ne["a"]),n["default"].use(re.a),new n["default"]({router:F,store:te,render:function(e){return e(c)}}).$mount("#app")},6208:function(e,t,a){"use strict";a("1fbb")},"681e":function(e,t,a){"use strict";a("99da")},"7f40":function(e,t,a){"use strict";a("a330")},"85ec":function(e,t,a){},"99da":function(e,t,a){},a330:function(e,t,a){}});
//# sourceMappingURL=app.578a8bf2.js.map