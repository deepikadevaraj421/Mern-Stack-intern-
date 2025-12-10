const sampleQuizzes = [
  {
    id: "qz-1",
    title: "General Knowledge Blast",
    description: "Quick 5-question general knowledge quiz",
    timePerQuestion: 20,
    questions: [
      {
        id: "q1",
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars",
      },
      {
        id: "q2",
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"],
        answer: "William Shakespeare",
      },
      {
        id: "q3",
        question: "What is the capital of Japan?",
        options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
        answer: "Tokyo",
      },
      {
        id: "q4",
        question: "HTML stands for?",
        options: [
          "Hyper Trainer Marking Language",
          "HyperText Markup Language",
          "HighText Machine Language",
          "Hyperlink and Text Markup Language"
        ],
        answer: "HyperText Markup Language",
      },
      {
        id: "q5",
        question: "Which element has chemical symbol O?",
        options: ["Gold", "Oxygen", "Iron", "Silver"],
        answer: "Oxygen",
      },
    ],
  },
  {
    id: "qz-2",
    title: "Web Basics",
    description: "HTML, CSS, and JavaScript quick quiz",
    timePerQuestion: 25,
    questions: [
      {
        id: "w1",
        question: "Which tag is used to include JavaScript?",
        options: ["<script>", "<js>", "<javascript>", "<code>"],
        answer: "<script>",
      },
      {
        id: "w2",
        question: "Which property changes text color in CSS?",
        options: ["font-color", "color", "text-color", "fg-color"],
        answer: "color",
      },
    ],
  },
];

export default sampleQuizzes;
