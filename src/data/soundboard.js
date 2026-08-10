/**
 * Soundboard data structure.
 *
 * Each entry has:
 *   title  — displayed large on the card
 *   image  — path relative to /public/images/
 *   sound  — path relative to /public/sounds/ (plays when any tag is clicked)
 *   tags   — array of plain strings (category labels, also searchable)
 */
export const soundboardData = [
    {
        id: 1,
        title: "Right",
        image: "images/kronk_right.png",
        sound: "sounds/kronk_right.wav",
        tags: ["Kronk", "Emporers New Groove"],
    },
    {
        id: 2,
        title: "Somebody Once Told Me",
        image: "images/smashmouth_somebody.png",
        sound: "sounds/smashmouth_somebody.wav",
        tags: ["Somebody", "Smash Mouth", "All Star"],
    },
    {
        id: 3,
        title: "Joanna Shrill",
        image: "images/joanna_shrill.png",
        sound: "sounds/joanna_shrill.wav",
        tags: ["Joanna", "Scary", "Rescuers Down Under"],
    },
    {
        id: 4,
        title: "Cars Evil Laugh",
        image: "images/cars_evil_laugh.png",
        sound: "sounds/cars_evil_laugh.wav",
        tags: ["Cars", "Evil Laugh"],
    },
    {
        id: 5,
        title: "Curious.. Very Curious",
        image: "images/harry_potter_curious.png",
        sound: "sounds/harry_potter_curious.wav",
        tags: ["Harry Potter", "Curious"],
    },
    {
        id: 6,
        title: "He lies",
        image: "images/harry_potter_he_lies.png",
        sound: "sounds/harry_potter_he_lies.wav",
        tags: ["Harry Potter", "Lies"],
    },
    {
        id: 7,
        title: "It's working",
        image: "images/star_wars_its_working.png",
        sound: "sounds/star_wars_its_working.wav",
        tags: ["Star Wars", "It's working", "Anakin"],
    },
];
