let selectedEthnicity = null;
let generating = false;
let isPrinting = false;

function handleButtonClick(ethnicity) {
    if (!isPrinting) {
        selectedEthnicity = ethnicity;
        generating = true;
        isPrinting = true;
        updateButtons();
        updateImage();
    }
}

function updateButtons() {
  const buttons = document.querySelectorAll('.ethnicity-button');
  buttons.forEach(button => {
    if (button.textContent === selectedEthnicity) {
      button.classList.add('selected');
    } else {
      button.classList.remove('selected');
    }
  });
}

function updateImage() {
    const image = document.getElementById('main-image');
    const statusText = document.getElementById('status-text');

    image.src = "loading.png";
    statusText.textContent = "Loading...";
    fadeImage();

    let stringArray = [];

    if (selectedEthnicity == "Black") {
        stringArray = africanJokes;
    } else if (selectedEthnicity == "White") {
        stringArray = racistWhiteJokes;
    } else if (selectedEthnicity == "Indian") {
        stringArray = racistIndianJokes;
    } else if (selectedEthnicity == "Isreali") {
        stringArray = racistIsraelJokes;
    } else if (selectedEthnicity == "Mexican") {
        stringArray = mexicanJokes;
    } else if (selectedEthnicity == "Asian") {
        stringArray = racistAsianJokes;
    } else {
        stringArray = russianJokes;
    }

    setTimeout(() => {
        let randomIndex = Math.floor(Math.random() * stringArray.length);
        let randomStr = stringArray[randomIndex];
    
        statusText.textContent = "";
    
        let pieces = randomStr.split(/(\s+)/); // The regular expression splits at spaces, keeping them
    
        let index = 0;
    
        let interval = setInterval(() => {
            if (index < pieces.length) {
                statusText.textContent += pieces[index]; // Add the current piece to the text content
                index++; // Move to the next piece
            } else {
                clearInterval(interval); // Stop the interval once all pieces are added
                isPrinting = false; // Set isPrinting to false once all text has been printed
            }
        }, 30); // Interval is set to 0.1 seconds    
    }, 500); // This starts the printing process after a 1-second delay
}

function fadeImage() {
    const image = document.getElementById('main-image');
    let opacity = 0.0; // Start with minimum opacity
    let fadingIn = true;
  
    const fadeInterval = setInterval(() => {
      if (!generating) {
        clearInterval(fadeInterval);
        return;
      }
  
      // Calculate the opacity step for smooth transitions over 250ms
      opacity = fadingIn ? opacity + 0.04 : opacity - 0.04; // Step size for 250ms period
      image.style.opacity = opacity;
  
      // Change direction if boundaries are hit
      if (opacity <= 0.0) fadingIn = true;
      if (opacity >= 0.8) fadingIn = false;
    }, 60); // Runs every 25ms
}

function toggleGenerating() {
  generating = !generating;
  updateImage();
}

let racistWhiteJokes = [
    "Why did the white guy get lost in Africa? He couldn't find his way out of the suburbs.",
    "Why don't white people go to hell? It's just too dark when the only African American joke doesn't work out.",
    "Why did the White guy get mad when he knocked over a pinata? It was full of his own people.",
    "Why was the white wedding so sad? The person marrying was white on the outside and off-white on the inside.",
    "What's the difference between a white person and a snowflake? One is a b*tch and the other is a frozen liquid.",
    "Why don't you trust white people in the jungle? They always spot the coconuts before robbing the whole palm.",
    "Why do white people need an interpreter when they travel to New York? They have an accent.",
    "Why don't white people do well in the Olympics? Every time they stand up, they lose their way.",
    "Why did the white man bring a boat to the beach? He wanted to do some white washing.",
    "Why don't white people have to pay for water? It's a free gift when it rains.",
    "Why don't you ever see white people in the Olympics? They take the silver out of the floor.",
    "Why did the white supremacist get mad at the school? It was too integrated.",
    "Why can't you trust a white person in a jungle? They always spot the difference.",
    "Why did the white boy take a bus full of nuns over a cliff? He wanted to get to heaven faster.",
    "Why was the white slave ship called a 'ghost' when it was empty? Because it was all 'give' and no 'take'.",
    "Why couldn't the white man get a job? He had a really bad credit score... he was indentured.",
    "Why do white people have such a hard time in the jungle? They can't spot the difference between the rainforest and the rest of the world.",
    "Why don't white people ever get sunburned? They always keep themselves covered in a thick layer of lotion.",
    "Why don't white people ever get lost? They always have a map, even when they don't know where they are going.",
    "How do you make a white person feel like a millionaire? Show them a 30 cent coin.",
    "Why was the white kid named Anal? Because he was so white he could never hide.",
    "How do you get a white person's attention? Throw a snowball at them.",
    "Why was the white man so good at chess? He had all the pieces but never knew how to assemble them.",
    "Why are white people so bad at hide and seek? Because they always stop hiding and go and seek.",
    "Why don't white people like to swim in the ocean? They think it's just a big puddle.",
    "Why don't white people ever need to take a bath? They never get near enough water to be thirsty.",
    "Why don't white people ever get sunburned? They always keep themselves covered in a thick layer of lotion.",
    "Why don't white people ever get lost? They always have a map, even when they don't know where they're going.",
    "Why was the white kid named Anal? Because he was so white he could never hide.",
    "How do you make a white person feel like a millionaire? Show them a 30 cent coin.",
    "Why do white people hate camping? It's just a big, expensive, and inconvenient way to stay in a hotel room.",
    "Why didn't the white person ever get elected? Too much baggage.",
    "Why don't white people go to Hawaii? They say it's too Polynesian.",
    "Why don't white people use sunscreen? They think it's just a big bottle of water.",
    "How do you stop a white person from winning an argument? Stuff some cotton in their mouth.",
    "Why don't white people ever get invited to a party? Because they always show up uninvited.",
    "Why was the white man so bad at charades? He couldn't stop laughing at his own white lies."
]

var russianJokes = [
    "Why did the Russian man wear sandals on his feet? To fit into the Orthodox shoes.",
    "What do you call a drunk Russian woman? A Russian with a bad reputation.",
    "How many Russians does it take to change a light bulb? Only one - they just wait for the next blackout.",
    "Why are Russian men so good at hacking? Because they grew up playing chess and checkers.",
    "What do you call a Russian Santa Claus? Father Frost.",
    "How many Russians does it take to screw in a lightbulb? None. They prefer to use candles.",
    "Russians don't need air conditioning because they have vodka.",
    "Did you hear about the Russian who invented chewing gum? It was a big mistake, he only had enough money for one wrapper.",
    "What's the difference between a Russian bride and a cow? One gives milk, the other moos.",
    "I saw a Russian eating ice cream out of another Russian's belly button - I guess that's what we call 'belly dancing' nowadays!",
    "Where do Russians keep their toothpaste? In the fridge.",
    "Why didn't the Russian go to the dentist? He thought his teeth were too cold.",
    "Do you know why Russian women look like they don't shower? Their skin is made from frozen breadcrumbs.",
    "What do you get when you cross a Russian with a carrot? You get someone with orange blood.",
    "Why do Russians hate winter sports? Because there's no alcohol involved.",
    "Why don't Russians play soccer? They're more comfortable sitting around a campfire drinking vodka.",
    "Did you hear about the Russian who ate ten pounds of butter? His butt got stuck in the couch.",
    "Why do Russian drivers drive so fast? So they can get home sooner.",
    "How much does it cost to hire a Russian plumber? Nothing, they charge in rubles.",
    "How do Russians celebrate New Year's Eve? With champagne and caviar...and some bear meat if they have leftovers.",
    "Why are Russian children always hungry? Because they eat all their food before they cook it.",
    "Which country produces the most oil? Russia, but their cars run on borscht instead.",
    "What's the best way to stop a Russian break-in? Put a bear trap under your door.",
    "How long can a Russian last in the sun? About half a day until they turn red like lobsters."
];

let racistAsianJokes = [
    "Why did the Chinese person get kicked off the plane? They were in first class, but overweight!",
    "Why did the Chinese woman take 2 spoons? To throw up in the morning and in the evening!",
    "Why did the Chinese person get pulled over by the police? They were speeding! They always cheat!",
    "Why don't Chinese people eat breakfast? Because it looks like them!",
    "Why did the Chinese person get pulled over by the police? He ran the stop sign... again!",
    "Why did the Chinese person keep falling while jogging? He was on a staircase!",
    "Why don't Chinese people eat lunch? They already had 7!",
    "Why did the Chinese person get pulled over by the police? He was speeding... in the wrong lane!",
    "Why was the Chinese person late for the interview? He was busy counting his own money!",
    "Why are there no Chinese in space? It's a long way to pee!",
    "Why don't Chinese people eat Chinese food? They can't find the ingredients!",
    "Why did the Chinese person get pulled over by the police? He was caught speeding!",
    "Why are all Chinese people the same? They were all made in China!",
    "Why did the Chinese person get pulled over by the police? He was in the wrong lane... again!",
    "Why did the Chinese person get pulled over by the police? He was speeding... in the wrong lane!",
    "Why don't Chinese people eat Chinese food? It tastes too familiar!",
    "Why did the Chinese person get pulled over by the police? He was in the wrong lane... again!",
    "Why don't Chinese people eat in the kitchen? It's too noisy with all the breaking and entering!",
    "Why did the Chinese person get pulled over by the police? He was going the wrong way... again!",
    "Why don't Chinese people eat breakfast? They can't find the ingredients in their own country!",
    "Why did the Chinese person get pulled over by the police? He was speeding... in the wrong lane!",
    "Why don't Chinese people eat dinner? They're still digesting their rice!",
    "Why did the Chinese person get pulled over by the police? He was in the wrong lane... again!",
    "Why don't Chinese people eat Chinese food? They can't find the ingredients in China!",
    "Why did the Chinese person get pulled over by the police? He was going the wrong way... again!",
    "Why don't Chinese people eat dinner? They're too busy counting their money!",
    "Why did the Chinese person get pulled over by the police? He was going the wrong way... again!",
    "Why don't Chinese people eat Chinese food? It tastes too familiar!",
    "Why did the Chinese person get pulled over by the police? He was in the wrong lane... again!",
    "Why don't Chinese people eat dinner? They're still digesting their rice!",
    "Why did the Chinese person get pulled over by the police? He was going the wrong way... again!",
    "Why don't Chinese people eat Chinese food? They can't find the ingredients in China!",
    "Why did the Chinese person get pulled over by the police? He was in the wrong lane... again!"
];

const racistIsraelJokes = [
    "Why don't Israeli people use deodorant? They're too busy stealing land and bombing innocent civilians to worry about smelling fresh!",
    "Why don't Israeli people use toothpaste? They're all too busy stealing and killing to care about bad breath!",
    "Why don't Israeli people floss? They don't need to. Their teeth are already brown from all the blood they've sucked up over the years!",
    "Why don't Israeli people brush their teeth? Because they're all too busy stealing and killing!",
    "Why don't Israeli people use mouthwash? They don't need it. Their mouths are already filthy with the blood and screams of their innocent victims!",
    "Why don't Israeli people care about personal hygiene? They're all too busy stealing and killing to worry about smelling bad!",
    "Why don't Israeli people wear deodorant? They don't need it. Their bodies naturally smell like the stench of death they carry with them!",
    "Why don't Israeli people bother with hair removal? Nobody wants to see their ugly faces anyway!",
    "Why don't Israeli people ever get a tan? They're all too busy stealing and killing to ever worry about sun exposure!",
    "Why don't Israeli people wear perfume? They can't stand the smell of all the innocent blood they've spilled!",
    "Why don't Israeli people wear makeup? Nobody wants to see their ugly, murderous faces anyway!",
    "Why don't Israeli people bother with skincare? They don't have time to waste on vain pursuits when there are more innocents to oppress and kill!",
    "Why don't Israeli people ever worry about their appearance? They're all too busy stealing and killing to care about how they look or smell!",
    "Why don't Israeli people ever take care of their health? They're all too busy stealing and killing to worry about dying of some curable disease!",
    "Why don't Israeli people ever wear gloves? They don't need to. Their hands are already stained with the blood of their innocent victims!",
    "Why don't Israeli people ever worry about style? They're all too busy stealing and killing to care about fashion or hygiene!",
    "Why don't Israeli people ever take showers? They don't need to. Their entire nation smells like the stench of their endless atrocities and war crimes!",
    "Why don't Israeli people ever brush their teeth? They don't need to. Their mouths are already filled with the screams and pleas of their innocent victims!",
    "Why don't Israeli people ever bother with hair removal? They're all too busy stealing and killing to worry about fashion or grooming!",
    "Why don't Israeli people ever use perfume? They don't need it. Their very existence reeks of the suffering they inflict!",
    "Why don't Israeli people ever wear makeup? Nobody wants to look at their ugly, murderous faces anyway!",
    "Why don't Israeli people ever take care of their mental health? They're all too busy stealing and killing to worry about their own wellbeing!",
    "Why don't Israeli people ever worry about their appearance? They're all too busy stealing and killing to give a damn about how they look or smell!",
    "Why don't Israeli people ever take showers? They don't need to. Their nation is already soaked in the blood and tears of innocents!",
    "Why don't Israeli people ever bother with skincare? They don't care about looking good when they're all too busy stealing and killing!",
    "Why don't Israeli people ever worry about their health? They're all too busy stealing and killing to give a damn about their own wellbeing or appearance!",
    "Why don't Israeli people ever bother with hair removal? They don't need it. Their actions and inactions are already a national shame and disgrace!",
    "Why don't Israeli people ever wear perfume? They don't need it. Their entire country is already a festering sore and embarrassment to the world!",
    "Why don't Israeli people ever wear makeup? Nobody wants to look at their ugly, murderous faces anyway!",
    "Why don't Israeli people ever take care of their mental health? They're all too busy stealing and killing to give a damn about their own wellbeing or appearance!",
    "Why don't Israeli people ever take showers? They don't need to. Their nation is already a festering pit of inhumanity and cruelty!",
    "Why don't Israeli people ever worry about their own stench? They're all too busy stealing and killing to care about their own wellbeing or appearance!"
]

const mexicanJokes = [
    "Why did the Mexican win at poker? He had the best bean card.",
    "Why did the Mexican go to the dentist? He heard the Tooth Fairy leaves a peso under the pillow!",
    "Why can't you tell a Mexican a secret? You wake up and find them mowing.",
    "What is a Mexican's favorite type of food? Taco Bell-ride!",
    "Why don't Mexicans use a calculator in the kitchen? They don't know how to add beans to a recipe without one!",
    "Why did the Mexican get pulled over by the police? He was in a mangled heap in the middle of the road and the officer smelt alcohol on his breath!",
    "Why are there so many cars in Mexico with broken windshields? Because they're always trying to 'break in' the wrong way!",
    "Why was the Mexican's food cold? His sister was making it. She's a fre-e-e-a-k!",
    "Why did the Mexican go to the dentist? He needed a root-bee-e-e-e-e-t!...",
    "What do you call a Mexican who speaks three languages? A Spanish interpreter!",
    "How do you know the Mexican has a PhD? He's an S-M-R-T!",
    "Why did the Mexican win the Nobel Prize? He discovered a better way to keep the beans warm.",
    "What is a Mexican's favorite color? Gre-e-e-n!",
    "Why don't you ever see Mexicans in the Special Olympics? Because they take the silver and gold!",
    "What's the fastest thing in life? A Mexican in a compact car at 70 mph!",
    "Why was the Mexican actor in the movie? Because he couldn't pronounce 'No hablo ing-g-g-l-e-s-h'!",
    "What is a Mexican's favorite dessert? Taco Del",
    "Why did the Mexican win the Nobel Prize? He discovered a better way to keep the beans warm.",
    "What do you call a Mexican who speaks three languages? A Spanish interpreter!",
    "How do you know the Mexican has a PhD? He's an S-M-R-T!",
    "Why are there no Mexican cars in Canada? The bumpers have too many miles!",
    "What is a Mexican's favorite color? Gre-e-e-n!",
    "Why don't you ever see Mexicans in the Special Olympics? Because they take the silver and gold!",
    "What's the fastest thing in life? A Mexican in a compact car at 70 mph!",
    "Why did the Mexican actor in the movie? Because he couldn't pronounce 'No hablo ing-g-g-l-e-s-h'!",
    "What is a Mexican's favorite dessert? Taco Del",
    "What's the difference between a Mexican and a statue? A statue sits on the wrong pole too!",
    "What do you call a Mexican who gets into Dartmouth? A Mexican who stole a football!",
    "Why was the Mexican priest drunk in the morning? He couldn't get past the 'Our' in the 'Our Lady of Perpetual Sobriety' prayer!",
    "What's the difference between a Mexican and a snowflake? One is a pain in the neck, the other is a sick-making pain in the ass!",
    "Why did the Mexican go to the dentist? He needed a root-bee-e-e-e-e-t!",
    "How do you get a Mexican to do his chores? Put a burrito in the refrigerator and walk away!",
    "Why are there no Mexican 7-11's? Because 11 is a prime number and they can't count that high!",
    "What's the difference between a Mexican and a snowflake? One's a pain in the neck and the other's a pain in the ass!",
    "What's the definition of a Mexican with a PhD? Someone who graduated in the bottom 5% of a class of 2!",
    "Why did the Mexican go to the dentist? He heard, 'For all you bean-ers out there…'",
    "How do you get a Mexican to do his chores? Put a burrito in the refrigerator and walk away!",
    "Why can't you find a Mexican at a computer convention? Because they have problems most Americans don't even know exist!",
    "What's the difference between a Mexican and a snowflake? One's a pain in the neck and the other's a pain in the ass!"
];

const africanJokes = [
    "Why don't African people take cruises? Because they can't afford the fare and the ship's too big for a free ticket!",
    "Why don't African doctors ever get promoted? They're always practicing medicine without a license!",
    "Why don't African people use microwave ovens? They can't afford to buy one and they're afraid to start a fire anyway!",
    "Why did the African win the Nobel Prize? He discovered a better way to keep the beans warm in the dark continent!",
    "What's an African's favorite color? Greenbacks!",
    "What's an African's favorite dessert? A whole lotta half-e-fen!",
    "How do you know the African stole something? He's got more than one pair of sunglasses!",
    "Why don't African people use calculators? They can't afford the batteries!",
    "Why are African rappers so rich? Because they dropped outta the cradle!",
    "Why don't African people do well in school? They can't find anything on Google!",
    "What do you call a fake African? Ali-Bama!",
    "Why did the African win an award? He was the only one in the race!",
    "How do you make an African laugh? Tell them a blonde joke!",
    "What's an African's favorite animal? A dollar!",
    "Why don't African people play hide and seek? The thrill is gone!",
    "Why did the African go to the dentist? He had a cavity!",
    "Why don't African people like to play poker in the jungle? Too many animals on safari!",
    "Why don't African kids ever play with fire? They can't find a match!",
    "What is an African's favorite food? A quarter-pounder with everything!",
    "Why did the African go to the dentist? His toothache was driving him bananas!",
    "How do you know an African is in your shower? Foged about it!",
    "What's an African's favorite dance move? The moonwalk!",
    "Why are all African rappers so rich? They dropped outta the cradle!",
    "Why did the African man go to the dentist? He had a cavity!",
    "Why don't African people play poker in the jungle? Too many animals on safari!",
    "Why don't African people use calculators? They can't afford the batteries!",
    "What's the most popular sport in Africa? Checkin' out!",
    "Why don't African people use microwaves? They can't afford the electricity!",
    "What's an African's favorite dessert? A whole lotta half-e-fen!",
    "Why don't African people ever play hide and seek? The thrill is gone!",
    "Why don't African kids ever play with fire? They can't find a match!",
    "Why don't African people use calculators? They can't afford the batteries!",
    "How many African rappers does it take to change a lightbulb? A dollar and a wink!",
    "Why was the African man so good at basketball? He was raised in the projects and learned early on to go the extra mile!",
    "How many African-Americans does it take to change a lightbulb? Two, one to hold the bulb and one to turn the switch!",
    "Why did the African go to the dentist? He needed a root-bee-e-e-e-e-t!",
    "Why don't African rappers ever play in the jungle? Too many animals on safari!",
    "How do you make an African laugh? Tell them a blonde joke!",
    "What do you call an African with a PhD? Doctor of the H-O-P-I-T-I-E-S-T!",
    "Why don't African people ever go camping? They can't afford the tent or the bug spray!",
    "What's the most popular sport in Africa? Checkin' out!",
    "Why don't African people play poker in the jungle? Too many animals on safari!",
    "How many African-Americans does it take to change a lightbulb? Two, one to hold the bulb and one to turn the switch!",
    "Why did the African go to the dentist? He had a toothache!",
    "Why don't African rappers ever play in the jungle? Too many animals on safari!",
    "Why don't African people ever play hide and seek? The thrill is gone!",
    "How many African people does it take to change a lightbulb? None, they don't have enough hands!",
    "Why don't African-Americans ever use microwaves? They can't afford the electricity!",
    "What's an African's favorite dance move? The moonwalk!",
    "Why don't African rappers ever play in the jungle? Too many animals on safari!",
    "How many African-Americans does it take to change a lightbulb? Knock-knock-ology!",
    "Why don't African-Americans ever go camping? They can't afford the tent or the bug spray!",
    "How much does it cost to become an African rapper? A dollar and a wish!",
    "Why don't African-Americans ever play poker in the jungle? Too many animals on safari!",
    "How many African people does it take to change a lightbulb? A team!",
    "What's the most popular sport in Africa? Checkin' out!",
    "Why don't African-Americans ever use microwaves? They can't afford the electricity!",
    "Why don't African rappers ever play in the jungle? Too many animals on safari!",
    "Why don't African-Americans ever play hide and seek? The thrill is gone!",
    "How many African rappers does it take to change a lightbulb? A dollar and a wink!",
    "Why don't African-Americans ever go camping? They can't afford the tent or the bug spray!",
    "What's an African's favorite dance move? The moonwalk!",
    "Why don't African-Americans ever play poker in the jungle? Too many animals on safari!",
    "How many African rappers does it take to change a lightbulb? A dollar and a wink!",
    "Why don't African-Americans ever use microwaves? They can't afford the electricity!",
    "Why don't African rappers ever play in the jungle? Too many animals on safari!",
    "How many African-Americans does it take to change a lightbulb? Knock-knock-ology!",
    "Why don't African-Americans ever go camping? They can't afford the tent or the bug spray!",
    "Why don't African rappers ever play in the jungle? Too many animals on safari!",
    "Why don't African-Americans ever play poker? They can't afford the chips!",
    "How many African rappers does it take to change a lightbulb? A dollar and a wink!",
    "Why don't African-Americans ever hide and seek? The thrill is gone!",
    "Why don't African rappers ever use microwaves? They can't afford the electricity!",
    "Why don't African-Americans ever play in the jungle? Too many animals on safari!",
    "How many African-Americans does it take to change a lightbulb? Knock-knock-ology!",
    "Why don't African rappers ever go camping? They can't afford the tent or the bug spray!",
    "Why don't African-Americans ever play poker? They can't afford the chips or the check!",
    "How many African rappers does it take to change a lightbulb? A dollar and a wink!",
    "Why don't African-Americans ever hide and seek? The thrill is gone!",
    "Why don't African rappers ever use microwaves? They can't afford the electricity!",
    "Why don't African-Americans ever go camping? They can't afford the tent or the bug spray!",
    "Why don't African rappers ever play poker? They can't afford the chips or the check!",
    "How many African-Americans does it take to change a lightbulb? Knock-knock-ology!",
    "Why don't African rappers ever hide and seek? The thrill is gone!",
    "Why don't African-Americans ever use microwaves? They can't afford the electricity!",
    "Why don't African rappers ever go camping? They can't afford the tent or the bug spray!",
    "Why don't African-Americans ever play poker? They can't afford the chips or the check!",
    "How many African rappers does it take to change a lightbulb? A dollar and a wink!",
    "Why don't African-Americans ever hide and seek? The thrill is gone!"
]

const racistIndianJokes = [
    "Why don't Indian people play soccer? They can't even spell 'football'.",
    "Do you know why the Indian guy always wins at poker? He never goes away empty handed.",
    "Why don't Indian people eat fast? Because Indians don't even know how to make a decent curry let alone cook quickly!",
    "Indian food, the only cuisine that will kill you twice.",
    "Indian people don't use sunscreen. They just let the dark skin come to them.",
    "Why don't you ever see a Indian in a parade? Riding damn elephants, they're too busy.",
    "Indian people love to wear shoes, but they can't even take care of them properly.",
    "Indian people don't have to worry about getting sunburnt. Their skin is already that color!",
    "Why don't you ever hear a Indian person scream when they get sunburnt? The darkness is painful!",
    "Indian people always lose their luggage. Their luggage is usually in some remote village.",
    "Indian people can't be in a parade. They have to go back to the village and get more land.",
    "Indian people never have to worry about sunburn. They were born with it!",
    "Indian people are always asking for directions. They don't know their own ass from a hole in the ground!",
    "Why don't Indian people use deodorant? They can't stand the smell of their own shit!",
    "Indian people don't use deodorant. They're just happy to have enough food to make their own stench worse.",
    "Indian people are too dumb to know how to use deodorant. They're still trying to figure out how to use fire.",
    "Indian people don't use deodorant. They like the smell of their own shit!",
    "Indian people don't need deodorant. Their natural body odor is enough to keep mosquitoes away!",
    "Indian people don't know how to use deodorant. They're too busy trying to figure out how to use a toilet.",
    "Indian people don't need deodorant. They've never heard of it!",
    "Indian people don't use deodorant. They're just happy to have enough food to eat their own shit.",
    "Indian people don't need deodorant. They don't have enough clean water to wash their shit away.",
    "Indian people don't use deodorant. They've never even seen one!",
    "Indian people don't need deodorant. They're all already dead from cholera.",
    "Indian people don't use deodorant. They're just happy to be alive after eating their own shit!",
    "Indian people don't need deodorant. They're all too busy trying to figure out how to make fire.",
    "Indian people don't use deodorant. They're just happy to be alive after eating their own shit!",
    "Indian people don't use deodorant. They're all too busy trying to figure out how to make fire.",
    "Indian people don't need deodorant. They're all too busy trying to figure out how to make fire.",
    "Indian people don't use deodorant. They've never even heard of it!",
    "Indian people don't need deodorant. They're all too busy trying to figure out how to make shit disappear.",
    "Indian people don't use deodorant. They're just happy to be alive after eating their own shit!",
    "Indian people don't need deodorant. They're all too busy trying to figure out how to make shit disappear!",
    "Indian people don't use deodorant. They've never even heard of deodorant!",
    "Indian people don't need deodorant. They're all too busy trying to figure out how to make shit disappear!"
]
    
    