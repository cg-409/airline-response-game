export const scenarios = [
    {
        id: 1,
        question: "🚨 The airline's flight reservation system is under a DDoS attack. What should you do first?",
        image: "assets/background.jpg",
        sound: "assets/alert.mp3",
        options: [
            { text: "🛑 Inform the public immediately", nextScenario: 2, points: 10 },
            { text: "🛡️ Isolate affected servers & activate mitigation", nextScenario: 3, points: 30 },
            { text: "🔌 Shut down the entire system", nextScenario: 4, points: 5 }
        ]
    },
    {
        id: 2,
        question: "📢 The public panics after your announcement. What now?",
        options: [
            { text: "🚧 Assure them IT is fixing it", nextScenario: 3, points: 20 },
            { text: "❌ Ignore further communication", nextScenario: 5, points: 5 }
        ]
    },
    {
        id: 3,
        question: "🔎 You successfully stopped the attack, but you suspect malware was planted. What next?",
        options: [
            { text: "📂 Run a full security audit", nextScenario: 6, points: 30 },
            { text: "💾 Restore from the last backup", nextScenario: 5, points: 15 }
        ]
    },
    {
        id: 4,
        question: "⚠️ The shutdown caused all flights to be delayed. The airline lost revenue. What's next?",
        options: [
            { text: "💡 Reboot the system and analyze logs", nextScenario: 6, points: 10 },
            { text: "📞 Call management and explain the loss", nextScenario: 5, points: 5 }
        ]
    },
    {
        id: 5,
        question: "🛑 You failed to respond correctly. Restart?",
        options: [
            { text: "🔄 Restart game", nextScenario: 1, points: 0 }
        ]
    },
    {
        id: 6,
        question: "🎉 You successfully managed the cyberattack! Final decision:",
        options: [
            { text: "📜 Submit a detailed incident report", nextScenario: null, points: 30 },
            { text: "🔐 Improve firewall rules", nextScenario: null, points: 25 }
        ]
    }
];
