
const html = document.querySelector('html');
const nav = document.querySelector('nav');

const verbsList = ["peck",
"spell",
"concentrate",
"camp",
"muddle",
"introduce",
"check",
"guide",
"stir",
"press",
"whine",
"float",
"empty",
"expect",
"trick",
"wait",
"help",
"invent",
"announce",
"develop",
"judge",
"paint",
"borrow",
"suck",
"attract",
"sigh",
"queue",
"fence",
"notice",
"remove",
"return",
"slip",
"shop",
"jail",
"hum",
"vanish",
"bury",
"irritate",
"gaze",
"dislike",
"permit",
"drag",
"report",
"imagine",
"scare",
"subtract",
"reflect",
"suppose",
"sin",
"hang",
"strap",
"realize",
"wail",
"claim",
"rub",
"fix",
"interest",
"punch",
"tick",
"wrap",
"raise",
"twist",
"look",
"play",
"drop",
"rock",
"heat",
"tame",
"wriggle",
"save",
"land",
"stain",
"manage",
"arrest",
"tire",
"bow",
"saw",
"repeat",
"curl",
"please",
"beg",
"wobble",
"copy",
"continue",
"hurry",
"prevent",
"whisper",
"meddle",
"repair",
"trap",
"end",
"behave",
"happen",
"hop",
"contain",
"number",
"sail",
"reject",
"rely",
"match",
"lie",
"reign",
"spill",
"delight",
"consider",
"hover",
"scream",
"haunt",
"coil",
"dust",
"bless",
"plan",
"turn",
"cover",
"telephone",
"receive",
"visit",
"charge",
"rule",
"poke",
"educate",
"fancy",
"sniff",
"follow",
"compete",
"correct",
"print",
"fax",
"ban",
"travel",
"examine",
"tow",
"suggest",
"flow",
"kneel",
"crack",
"warm",
"want",
"multiply",
"disapprove",
"cry",
"regret",
"release",
"cure",
"groan",
"include",
"replace",
"wander",
"complain",
"trace",
"tie",
"load",
"complete",
"bounce",
"try",
"glue",
"heal",
"reproduce",
"pull",
"soak",
"earn",
"trot",
"mark",
"walk",
"chase",
"balance",
"pick",
"remain",
"transport",
"wrestle",
"point",
"wonder",
"tumble",
"squeeze",
"succeed",
"talk",
"stroke",
"start",
"head",
"part",
"scorch",
"choke",
"strip",
"label",
"employ",
"matter",
"discover",
"heap",
"untidy",
"impress",
"pump",
"crush",
"offend",
"peep",
"blink",
"hook",
"trouble",
"squeak",
"brake",
"sack",
"skip",
"blot",
"occur",
"watch",
"gather",
"whip",
"damage",
"flash",
"lick",
"fill",
"plant",
"owe",
"kiss",
"tickle",
"force",
"smash",
"argue",
"appreciate",
"dream",
"deserve",
"shade",
"fit",
"weigh",
"perform",
"observe",
"spot",
"offer",
"injure",
"cross",
"supply",
"sound",
"back",
"box",
"touch",
"radiate",
"smell",
"enjoy",
"juggle",
"attach",
"join",
"fetch",
"mix",
"punish",
"arrive",
"dare",
"analyze",
"frighten",
"suit",
"wave",
"obtain",
"fasten",
"steer",
"depend",
"bake",
"snore",
"produce",
"welcome",
"prepare",
"colour",
"cause",
"admit",
"drown",
"signal",
"add",
"knit",
"ruin",
"record",
"slow",
"nod",
"battle",
"suspend",
"boil",
"nail",
"buzz",
"tap",
"command",
"stamp",
"detect",
"concern",
"reply",
"tremble",
"tour",
"squash",
"note",
"preserve",
"whirl",
"guard",
"unlock",
"clip",
"accept",
"burn",
"terrify",
"puncture",
"chew",
"pop",
"expand",
"test",
"trade",
"calculate",
"shrug",
"stay",
"frame",
"answer",
"disagree",
"attend",
"separate",
"pack",
"serve",
"rob",
"increase",
"request",
"risk",
"bat",
"escape",
"question",
"sip",
"bubble",
"breathe",
"cough",
"shock",
"step",
"ask",
"milk",
"stop",
"like",
"agree",
"approve",
"memorize",
"miss",
"stuff",
"extend",
"excuse",
"paste",
"face",
"hug",
"open",
"delay",
"bolt",
"confess",
"shelter",
"tempt",
"advise",
"warn",
"preach",
"describe",
"grab",
"roll",
"comb",
"grip",
"support",
"ignore",
"pretend",
"prick",
"grease",
"close",
"scrape",
"cheat",
"pine",
"kick",
"suspect",
"reduce",
"bruise",
"interfere",
"mug",
"surprise",
"pause",
"amuse",
"remind",
"long",
"listen",
"unpack",
"file",
"wreck",
"pedal",
"screw",
"guess",
"yell",
"moor",
"call",
"form",
"love",
"waste",
"tease",
"flood",
"whistle",
"post",
"brush",
"park",
"deliver",
"sign",
"clear",
"bore",
"fool",
"mess up",
"zip",
"surround",
"exercise",
"communicate",
"thank",
"guarantee",
"consist",
"excite",
"search",
"jam",
"rot",
"taste",
"bump",
"bleach",
"relax",
"allow",
"mine",
"scatter",
"rain",
"need",
"doubt",
"chop",
"admire",
"train",
"protect",
"moan",
"bomb",
"desert",
"fold",
"found",
"melt",
"avoid",
"ski",
"hammer",
"share",
"suffer",
"remember",
"annoy",
"harm",
"time",
"entertain",
"change",
"mate",
"applaud",
"phone",
"possess",
"coach",
"shiver",
"flower",
"own",
"inject",
"hunt",
"hand",
"plug",
"clean",
"marry",
"smile",
"unfasten",
"confuse",
"grin",
"satisfy",
"snow",
"enter",
"pray",
"alert",
"disarm",
"afford",
"wipe",
"joke",
"scrub",
"dance",
"precede",
"learn",
"influence",
"explain",
"unite",
"hate",
"nest",
"reach",
"pat",
"worry",
"refuse",
"object",
"jog",
"intend",
"fear",
"drip",
"fry",
"double",
"interrupt",
"store",
"identify",
"present",
"shave",
"squeal",
"wish",
"move",
"trip",
"pour",
"stare",
"collect",
"polish",
"appear",
"jump",
"promise",
"scratch",
"explode",
"obey",
"apologise",
"fade",
"push",
"flap",
"rescue",
"invite",
"rhyme",
"belong",
"cheer",
"lighten",
"embarrass",
"man",
"boast",
"wash",
"carry",
"overflow",
"type",
"curve",
"yawn",
"spray",
"carve",
"crash",
"dress",
"spoil",
"disappear",
"cycle",
"crawl",
"snatch",
"place",
"divide",
"program",
"instruct",
"seal",
"stretch",
"tip",
"smoke",
"decide",
"settle",
"decorate",
"fail",
"bang",
"challenge",
"work",
"measure",
"attempt",
"wink",
"switch",
"race",
"paddle",
"murder",
"strengthen",
"fire",
"level",
"prefer",
"dry",
"march",
"treat",
"scribble",
"rinse",
"film",
"arrange",
"water",
"slap",
"spark",
"compare",
"soothe",
"improve",
"practice",
"order",
"inform",
"laugh",
"encourage",
"book",
"glow",
"destroy",
"drain",
"greet",
"spare",
"retire",
"kill",
"deceive",
"name",
"attack",
"launch",
"knock",
"trust",
"connect",
"license",
"use",
"rush",
"hope",
"care",
"provide",
"bare",
"harass",
"handle",
"list",
"pass",
"lock",
"recognise"]

const subjectsList = [
    "girl", 
    "boy", 
    "man", 
    "woman", 
    "officer",
    "cat",
    "parrot",
    "dog",
    "animal",
    "mushroom",
    "character",
    "detective",
    "officer",
    "child"
]

const objectsList =["jail",
"coat",
"story",
"coast",
"letters",
"gold",
"sound",
"health",
"liquid",
"expansion",
"cable",
"soup",
"plantation",
"stream",
"trade",
"appliance",
"friction",
"flowers",
"gate",
"shock",
"belief",
"flame",
"knee",
"angle",
"town",
"pail",
"chance",
"degree",
"design",
"wind",
"fall",
"invention",
"oil",
"spoon",
"waste",
"crown",
"hands",
"bath",
"apparatus",
"airplane",
"meal",
"slave",
"harmony",
"scarf",
"brick",
"snake",
"cherry",
"industry",
"mine",
"brother",
"sneeze",
"spark",
"fish",
"friend",
"scent",
"suit",
"stitch",
"kittens",
"robin",
"neck",
"quill",
"tent",
"horn",
"hate",
"crime",
"shade",
"island",
"deer",
"bike",
"winter",
"ticket",
"cars",
"minute",
"amusement",
"stem",
"thrill",
"experience",
"finger",
"box",
"cows",
"talk",
"amount",
"show",
"shelf",
"maid",
"burst",
"walk",
"horse",
"alarm",
"trucks",
"sack",
"rings",
"cemetery",
"school",
"geese",
"level",
"question",
"mountain",
"boundary",
"government",
"camera",
"acoustics",
"tax",
"chickens",
"kitty",
"distribution",
"shoe",
"thumb",
"lumber",
"development",
"tub",
"visitor",
"rose",
"rule",
"month",
"join",
"birthday",
"hour",
"sink",
"blade",
"ducks",
"rate",
"religion",
"jar",
"smoke",
"request",
"stomach",
"mask",
"sister",
"coil",
"view",
"linen",
"pies",
"dogs",
"passenger",
"pie",
"destruction",
"rabbits",
"parcel",
"crayon",
"hook",
"icicle",
"tiger",
"ghost",
"planes",
"office",
"corn",
"wine",
"tooth",
"committee",
"copper",
"zebra",
"toothbrush",
"recess",
"bikes",
"sort",
"discussion",
"regret",
"tramp",
"roof",
"oranges",
"space",
"root",
"spot",
"sticks",
"produce",
"daughter",
"temper",
"muscle",
"language",
"writer",
"grape",
"page",
"partner",
"silver",
"sheet",
"country",
"army",
"match",
"frogs",
"mailbox",
"mother",
"cats",
"wash",
"person",
"button",
"crow",
"stranger",
"scissors",
"current",
"donkey",
"hope",
"volleyball",
"stew",
"measure",
"drop",
"jelly",
"teaching",
"snail",
"middle",
"death",
"fairies",
"grain",
"nut",
"bells",
"authority",
"drawer",
"frog",
"snakes",
"attraction",
"air",
"way",
"sugar",
"plough",
"bucket",
"approval",
"addition",
"pet",
"test",
"beginner",
"scene",
"song",
"shirt",
"sleep",
"screw",
"sheep",
"debt",
"yak",
"pipe",
"judge",
"cream",
"position",
"whistle",
"chicken",
"milk",
"rain",
"front",
"cough",
"low",
"quarter",
"secretary",
"cast",
"beef",
"receipt",
"breath",
"growth",
"woman",
"guitar",
"wound",
"care",
"behavior",
"bomb",
"pin",
"grade",
"paper",
"squirrel",
"argument",
"potato",
"store",
"crate",
"dinosaurs",
"event",
"taste",
"carriage",
"pull",
"cobweb",
"hill",
"toys",
"blood",
"porter",
"rake",
"ray",
"grandfather",
"land",
"monkey",
"cover",
"art",
"soap",
"steam",
"glass",
"slope",
"increase",
"spring",
"fly",
"bird",
"selection",
"teeth",
"horses",
"spiders",
"kettle",
"toes",
"plane",
"digestion",
"bag",
"food",
"tree",
"sky",
"duck",
"fowl",
"edge",
"cloth",
"skate",
"oatmeal",
"unit",
"surprise",
"eggnog",
"vacation",
"wire",
"cushion",
"market",
"society",
"fuel",
"loss",
"boat",
"sleet",
"push",
"machine",
"boot",
"laugh",
"step",
"pickle",
"zephyr",
"bone",
"cart",
"wilderness",
"business",
"detail",
"work",
"chess",
"smell",
"insurance",
"rice",
"pest",
"quiet",
"nest",
"house",
"texture",
"hole",
"chin",
"income",
"memory",
"beds",
"connection",
"calculator",
"floor",
"rock",
"knot",
"ring",
"range",
"hand",
"example",
"flock",
"truck",
"turn",
"women",
"man",
"verse",
"thunder",
"clover",
"afterthought",
"branch",
"tank",
"salt",
"cent",
"dog",
"holiday",
"side",
"stretch",
"room",
"mitten",
"limit",
"eyes",
"weather",
"egg",
"wheel",
"crack",
"territory",
"writing",
"juice",
"route",
"sofa",
"church",
"place",
"babies",
"change",
"sail",
"look",
"voyage",
"smile",
"run",
"dress",
"existence",
"hall",
"border",
"fold",
"observation",
"rod",
"title",
"birth",
"protest",
"men",
"cannon",
"rail",
"camp",
"ear",
"price",
"legs",
"doctor",
"moon",
"key",
"company",
"advice",
"ants",
"plot",
"flower",
"line",
"stick",
"rabbit",
"vase",
"needle",
"girls",
"waves",
"lunchroom",
"rest",
"record",
"quilt",
"van",
"bedroom",
"action",
"start",
"pencil",
"scale",
"year",
"butter",
"toe",
"use",
"trip",
"plastic",
"throat",
"cheese",
"mass",
"baby",
"substance",
"group",
"twist",
"guide",
"coal",
"seashore",
"plate",
"trouble",
"end",
"mice",
"vessel",
"string",
"color",
"birds",
"fireman",
"reason",
"pollution",
"knowledge",
"swim",
"quartz",
"bead",
"vein",
"ball",
"kick",
"discovery",
"underwear",
"cub",
"circle",
"tongue",
"quiver",
"achiever",
"stop",
"wave",
"punishment",
"weight",
"card",
"notebook",
"shoes",
"stove",
"library",
"zipper",
"grass",
"skin",
"window",
"force",
"jewel",
"idea",
"uncle",
"bed",
"farm",
"soda",
"trousers",
"purpose",
"support",
"word",
"heat",
"zinc",
"sock",
"minister",
"driving",
"celery",
"history",
"street",
"motion",
"sun",
"mom",
"lip",
"team",
"twig",
"voice",
"stage",
"pen",
"afternoon",
"lock",
"battle",
"back",
"jeans",
"sea",
"airport",
"dinner",
"throne",
"aunt",
"suggestion",
"popcorn",
"picture",
"volcano",
"crib",
"tomatoes",
"pigs",
"haircut",
"sisters",
"table",
"baseball",
"giraffe",
"rub",
"steel",
"party",
"sidewalk",
"shake",
"trains",
"straw",
"distance",
"impulse",
"cabbage",
"structure",
"prose",
"cap",
"interest",
"scarecrow",
"rhythm",
"ladybug",
"oven",
"flavor",
"fork",
"bear",
"meat",
"statement",
"building",
"lunch",
"lake",
"station",
"thought",
"sense",
"furniture",
"smash",
"mind",
"play",
"powder",
"governor",
"brake",
"fruit",
"wing",
"pocket",
"war",
"rifle",
"ink",
"home",
"wrist",
"sand",
"zoo",
"morning",
"nose",
"glove",
"ocean",
"basket",
"sign",
"desk",
"lace",
"division",
"jam",
"comparison",
"lettuce",
"treatment",
"cat",
"children",
"cook",
"fire",
"watch",
"friends",
"control",
"sweater",
"wren",
"girl",
"cause",
"form",
"channel",
"leg",
"songs",
"star",
"playground",
"value",
"cave",
"bat",
"tendency",
"ground",
"snow",
"desire",
"bait",
"pear",
"class",
"act",
"offer",
"toad",
"magic",
"trail",
"orange",
"wax",
"sponge",
"downtown",
"blow",
"nation",
"cattle",
"train",
"cherries",
"worm",
"shop",
"noise",
"letter",
"property",
"education",
"pump",
"toothpaste",
"balance",
"bit",
"week",
"loaf",
"square",
"spy",
"kiss",
"spade",
"profit",
"representative",
"cellar",
"number",
"cake",
"cup",
"activity",
"summer",
"poison",
"wood",
"doll",
"honey",
"part",
"direction",
"jump",
"stocking",
"yam",
"riddle",
"knife",
"houses",
"hat",
"face",
"hose",
"eggs",
"crook",
"leather",
"reading",
"laborer",
"gun",
"water",
"marble",
"field",
"head",
"expert",
"veil",
"pancake",
"queen",
"shame",
"advertisement",
"grip",
"pan",
"curve",
"exchange",
"touch",
"error",
"skirt",
"stone",
"toy",
"size",
"time",
"cow",
"berry",
"coach",
"decision",
"club",
"pleasure",
"base",
"apparel",
"locket",
"bushes",
"umbrella",
"son",
"humor",
"account",
"dad",
"brass",
"plant",
"dolls",
"turkey",
"arch",
"credit",
"dirt",
"bell",
"rat",
"eye",
"calendar",
"fang",
"vegetable",
"instrument",
"wool",
"earthquake",
"things",
"wealth",
"wrench",
"board",
"need",
"pets",
"drain",
"metal",
"yarn",
"collar",
"aftermath",
"top",
"chalk",
"frame",
"condition",
"caption",
"bulb",
"dock",
"self",
"servant",
"attack",
"bite",
"river",
"respect",
"curtain",
"clam",
"love",
"can",
"flag",
"trees",
"railway",
"flesh",
"mark",
"quince",
"wish",
"theory",
"mint",
"reaction",
"fact",
"snails",
"name",
"door",
"nerve",
"mist",
"reward",
"pig",
"yard",
"plants",
"basketball",
"day",
"creator",
"fog",
"shape",
"creature",
"iron",
"basin",
"harbor",
"carpenter",
"seat",
"payment",
"foot",
"quicksand",
"elbow",
"car",
"slip",
"feeling",
"note",
"canvas",
"vest",
"road",
"transport",
"order",
"ship",
"flight",
"competition",
"lamp",
"believe",
"tail",
"power",
"thread",
"bridge",
"books",
"system",
"whip",
"stamp",
"arithmetic",
"silk",
"actor",
"badge",
"fear",
"swing",
"pizzas",
"relation",
"bee",
"agreement",
"cakes",
"seed",
"animal",
"hot",
"tray",
"dust",
"wall",
"mouth",
"pot",
"hair",
"rainstorm",
"roll",
"north",
"money",
"drink",
"bubble",
"effect",
"dime",
"cactus",
"point",
"earth",
"meeting",
"boy",
"hospital",
"thing",
"anger",
"night",
"ice",
"hammer",
"move",
"arm",
"cracker",
"bottle",
"engine",
"peace",
"giants",
"book",
"hobbies",
"science",
"hydrant",
"insect",
"grandmother",
"tin",
"trick",
"yoke",
"jellyfish",
"crowd",
"adjustment"]

const verbTenseList= ["present", "past", "future"];

const sentenceDisplay = document.querySelector("#sentence");
const infinitiveForm = document.querySelector("#infinitive");
const verbInput = document.querySelector("#verb-input");

let counter = 0;

let correct = false;


function randomArrayPicker(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function newSentence() {
    const subject = randomArrayPicker(subjectsList);
    const object = randomArrayPicker(objectsList);
    const verb = randomArrayPicker(verbsList);

    console.log(verb)

    let url = `https://lt-nlgservice.herokuapp.com/rest/english/realise?subject=${subject}&object=${object}&verb=${verb}`






let sentence;
  
  fetch(url)
    .then(response => response.json())
    .then(json => {
    if (json.result == "OK") {
     sentence = json.sentence;
    } else {
        newSentence();
    }
  })
    .catch(error => console.log(error));

    
conjUrl = `https://lt-nlgservice.herokuapp.com/rest/english/conjugate?verb=${verb}`

    fetch(conjUrl)
    .then(response => response.json())
    .then(json => {
        console.log (json.result)
        if(json.result == "OK" && sentence) {        
    for (type in json.conjugation_tables.indicative) {
        if(json.conjugation_tables.indicative[type].heading == "simple present") {
            for (tenseConj in json.conjugation_tables.indicative[type].forms) {
                if (json.conjugation_tables.indicative[type].forms[tenseConj].includes("he/she/it")) {
                    verbForm = (json.conjugation_tables.indicative[type].forms[tenseConj][1])
                    console.log("verb form " + verbForm)
                    console.log(sentence);
                    let infinitive = "(to " + verb + ")";
                    let firstPart = sentence.slice(0, sentence.indexOf(verbForm))
                    let secondPart = sentence.slice(sentence.indexOf(verbForm)+verbForm.length, -1)
                    sentenceDisplay.innerHTML = `
                    ${firstPart} <span  class="title has-text-centered" id="infinitive">${infinitive} </span><input style="width: 33%;" class="input is-info"  id="verb-input" type="text"> </input> ${secondPart}.

                    `;
                    verbInput.value = "";
                    console.log(verbInput.value)

                }
            }
        }
    }
    } else {
        newSentence();
    }
    
    correct = false;
    
  })
    .catch(error => console.log(error));

}

let verbForm;

const checkVerb = document.querySelector("#check-verb");

function checkVerbMatching() {
    const verbInput = document.querySelector("#verb-input");
    if (verbInput.value == verbForm) {
        console.log("yay!")
        if (!correct) {
        counter++;
        firebase.database().ref(`users/${googleUser.uid}/scores`).set({
                verbscore: counter
            })
        }
        toggle(1)
        correct = true;
    } else if (verbInput.value == "bites") {
        console.log("start")
        toggle(3)
    } else {
        toggle(2)
    }

}

let googleUser;

const scoreDisplay = document.querySelector("#score");

window.onload = (event) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {  
        console.log("logged in as", user.displayName);
        googleUser = user;
    } else {
        window.location = "index.html";
    }
    
    
    firebase.database().ref(`users/${googleUser.uid}/scores`).child("verbscore").once('value', function(snapshot) {
         if (!(snapshot.exists())) {
            firebase.database().ref(`users/${googleUser.uid}/scores`).set({
                verbscore: 0
            })
                } else {
             getScore(); 

        }
        });


});
}





function getScore () {
  const notesRef = firebase.database().ref(`users/${googleUser.uid}/scores`);
  notesRef.on('value', (snapshot) => {
    const data = snapshot.val();
    updateScore(data);
  });
}

function updateScore(data) {
    counter = (data.verbscore);
    scoreDisplay.innerHTML = counter;  

}


function toggle(number) {
    
    const modal = document.querySelector("#modal");
    const modalBackground = document.querySelector(".modal-background");
    const modalCard = document.querySelector(".modal-card-head")
    const answer = document.querySelector("#answer");
    if (number ==1  ) {
        modalBackground.classList.add("is-correct-background")
        modalCard.style.backgroundColor = "MediumSeaGreen";
        modalBackground.classList.remove("is-wrong-background")
        answer.innerHTML = "Correct!"
    } else if (number == 2) {
        modalBackground.classList.remove("is-correct-background")
        modalCard.style.backgroundColor = "IndianRed";
        modalBackground.classList.add("is-wrong-background")
        answer.innerHTML = "Incorrect :("

    } else if (number == 3) {
        modalBackground.classList.remove("is-wrong-background")
        modalCard.style.backgroundColor = "LightPink";
        answer.innerHTML = "You've got it! Press next to try some on your own."
    }

    modal.classList.toggle('is-active');

    if(modal.classList.contains("is-active") && number < 3) {
        setTimeout(function () {
        modal.classList.toggle('is-active');
         }, 1000);
    } else {
         setTimeout(function () {
        modal.classList.toggle('is-active');
         }, 3000);
    }
}


if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
    nav.classList.add('dark-nav');
};
