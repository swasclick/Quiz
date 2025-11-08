// This global variable holds all your quiz data.
// 'index.html' will read this variable.
const quizQuestions = [
    {
        "question": "What does 'CAD' stand for in CAD/CAM?",
        "questionImage": null,
        "options": [
            { "text": "Computer-Aided Design", "image": null },
            { "text": "Computer-Assisted Data", "image": null },
            { "text": "Computer-Algorithm Design", "image": null },
            { "text": "Control and Automation Device", "image": null }
        ],
        "correctAnswer": 0,
        "solution": {
            "text": "'CAD' stands for Computer-Aided Design. It involves using computers to assist in the creation, modification, analysis, or optimization of a design.",
            "image": null
        }
    },
    {
        "question": "Which of the following is NOT a type of gear?",
        "questionImage": null,
        "options": [
            { "text": "Spur Gear", "image": null },
            { "text": "Helical Gear", "image": null },
            { "text": "Bevel Gear", "image": null },
            { "text": "Piston Gear", "image": null }
        ],
        "correctAnswer": 3,
        "solution": {
            "text": "A Piston is a component of reciprocating engines, pumps, etc. Spur, Helical, and Bevel are all common types of gears.",
            "image": null
        }
    },
    {
        "question": "What type of stress is shown in this image?",
        "questionImage": "https://placehold.co/600x300/eee/ccc?text=Image+of+Tensile+Stress",
        "options": [
            { "text": "Tensile Stress (Pulling)", "image": null },
            { "text": "Compressive Stress (Pushing)", "image": null },
            { "text": "Shear Stress (Sliding)", "image": null }
        ],
        "correctAnswer": 0,
        "solution": {
            "text": "Tensile stress (or tension) is the stress state leading to expansion; that is, the material is being pulled apart.",
            "image": null
        }
    },
    {
        "question": "Which of these is a 'ferrous' metal?",
        "questionImage": null,
        "options": [
            { "text": "Aluminum", "image": null },
            { "text": "Copper", "image": null },
            { "text": "Cast Iron", "image": "https://placehold.co/400x200/eee/ccc?text=Image+of+Cast+Iron" },
            { "text": "Titanium", "image": null }
        ],
        "correctAnswer": 2,
        "solution": {
            "text": "Ferrous metals are those that contain iron (ferrum). Cast iron is an iron alloy. Aluminum, Copper, and Titanium are non-ferrous.",
            "image": "https://placehold.co/600x200/eee/ccc?text=Solution+Image+Example"
        }
    }
    // To add a new question, add a comma here and copy/paste one of the blocks above.
];
