export const scenarios = [
    // 🟩 EASY SCENARIOS
    {
        id: 1,
        question: "🟩 A flight attendant reports a suspicious USB drive left in the cockpit. What should you do?",
        complexity: 'easy',
        options: [
            { text: "🚫 Destroy the USB drive", points: 10, nextScenario: 2 },
            { text: "🖥️ Connect the USB drive to your laptop", points: -10, timePenalty: 60, nextScenario: 3 },
            { text: "📞 Report the incident to IT security", points: 30, nextScenario: 4 }
        ]
    },
    {
        id: 2,
        question: "🟩 The USB drive contained malware. What now?",
        complexity: 'easy',
        options: [
            { text: "🚨 Isolate the infected system immediately", points: 30, nextScenario: 5 },
            { text: "🤷 Ignore it, since no files were opened", points: -20, timePenalty: 90, nextScenario: 5 }
        ]
    },
    {
        id: 3,
        question: "🟩 Your laptop is now infected with ransomware. What’s your next move?",
        options: [
            { text: "🛡️ Disconnect from the network immediately", points: 30, nextScenario: 6 },
            { text: "🔄 Restart your laptop", points: -15, nextScenario: 6 }
        ]
    },

    // 🟨 MEDIUM SCENARIOS
    {
        id: 4,
        question: "🟨 A phishing email has been reported to IT. What's your next step?",
        complexity: 'medium',
        options: [
            { text: "📣 Alert staff to delete the email immediately", points: 30, nextScenario: 10 },
            { text: "🔍 Analyze the phishing email's metadata", points: 20, nextScenario: 11 },
            { text: "🗑️ Ignore it since no one clicked it", points: -15, timePenalty: 60, nextScenario: 12 }
        ]
    },
    {
        id: 5,
        question: "🟨 A phishing email has been reported to IT. What's your next step?",
        options: [
            { text: "📣 Alert staff to delete the email immediately", points: 30, nextScenario: 10 },
            { text: "🔍 Analyze the phishing email's metadata to track the source", points: 20, nextScenario: 11 },
            { text: "🗑️ Ignore it since no one reported clicking on the email", points: -15, nextScenario: 12 }
        ]
    },

    // 🟥 HARD SCENARIOS
    {
        id: 6,
        question: "🟥 Your airline's data breach has leaked 100,000 customer records. What should you do?",
        complexity: 'hard',
        options: [
            { text: "📞 Inform affected customers immediately", points: 50, nextScenario: 13 },
            { text: "💻 Attempt to patch the vulnerability quietly", points: -30, timePenalty: 120, nextScenario: 14 },
            { text: "🕵️ Contact law enforcement and share threat data", points: 40, nextScenario: 15 }
        ]
    },
    {
        id: 7,
        question: "🟥 A hacker has demanded ransom to stop further leaks. What’s your best move?",
        options: [
            { text: "📞 Contact law enforcement immediately", points: 50, nextScenario: 16 },
            { text: "💰 Pay the ransom and hope for the best", points: -40, nextScenario: 17 },
            { text: "🛡️ Strengthen your firewall and refuse negotiations", points: 30, nextScenario: 18 }
        ]
    },
        // 🎯 BONUS ROUND (Quick Decision Test)
    {
        id: 8,
        question: "🎯 BONUS ROUND! A hacker is rapidly attacking your network. What’s the best immediate response?",
        bonus: true,
        options: [
            { text: "🛡️ Block all incoming traffic temporarily", points: 50 },
            { text: "🔄 Restart key servers", points: -30 },
            { text: "❌ Ignore the attack since systems seem stable", points: -50 }
        ]
    },
    
    // 🟨 MEDIUM SCENARIO — Scenario ID 9
    {
        id: 9,
        question: "🟨 The phishing email was traced to a compromised employee account. What’s your next move?",
        complexity: 'medium',
        options: [
            { text: "🔒 Reset the compromised employee's password immediately", points: 30, nextScenario: 13 },
            { text: "💻 Investigate further before taking action", points: 20, nextScenario: 14 },
            { text: "❌ Ignore it since no data breach has been reported", points: -15, timePenalty: 60, nextScenario: 15 }
        ]
    },

    // 🟩 EASY SCENARIO — Scenario ID 10
    {
        id: 10,
        question: "🟩 Staff are asking how to identify phishing emails. What advice should you provide?",
        complexity: 'easy',
        options: [
            { text: "🔍 Look for suspicious links, spelling errors, and unknown senders", points: 20, nextScenario: 16 },
            { text: "📣 Advise staff to ignore all external emails", points: -10, nextScenario: 17 },
            { text: "❌ Tell staff to only report phishing if they clicked the link", points: -15, nextScenario: 18 }
        ]
    },

    // 🟥 HARD SCENARIO — Scenario ID 11
    {
        id: 11,
        question: "🟥 IT security has discovered a backdoor planted on your airline's web portal. What’s your next step?",
        complexity: 'hard',
        options: [
            { text: "🚨 Shut down the affected web servers immediately", points: 50, nextScenario: 15 },
            { text: "🕵️ Attempt to trace the attacker's IP before taking action", points: 30, timePenalty: 120, nextScenario: 12 },
            { text: "🔄 Restart the web servers and monitor closely", points: -30, timePenalty: 90, nextScenario: 8 }
        ]
    },

    // 🟨 MEDIUM SCENARIO — Scenario ID 12
    {
        id: 12,
        question: "🟨 Due to delayed action, your airline’s reservation system is now sluggish. What should you do?",
        complexity: 'medium',
        options: [
            { text: "🔄 Perform a system reboot during non-peak hours", points: 30, nextScenario: 15 },
            { text: "⚙️ Increase server capacity temporarily", points: 20, nextScenario: 23 },
            { text: "❌ Continue operations as usual and hope performance improves", points: -20, timePenalty: 90, nextScenario: 8 }
        ]
    },
    
    // 🎯 SUCCESSFUL ENDING
    {
        id: 13,
        question: "🎯 SUCCESS! You managed the incident effectively, securing customer trust and airline operations.",
        options: [
            { text: "➡️ View Leaderboard", points: 0, nextScenario: null }
        ]
    },
    
    // ❌ FAILURE ENDINGS
    {
        id: 14,
        question: "❌ FAILURE! A lack of swift communication caused public outrage. The airline suffered severe losses.",
        options: [
            { text: "➡️ View Leaderboard", points: 0, nextScenario: null }
        ]
    },
    
    {
        id: 15,
        question: "🎯 Law enforcement intercepted the hacker. The airline's security improved. Game Over!",
        options: [
            { text: "🔄 Restart", points: 0, nextScenario: 1 }
        ]
    },
    
    // FINAL SUCCESSFUL OUTCOME
    {
        id: 16,
        question: "🎯 SUCCESS! Your strong security measures prevented major data loss, protecting the airline's reputation.",
        options: [
            { text: "➡️ View Leaderboard", points: 0, nextScenario: null }
        ]
    },

    {
        id: 17,
        question: "❌ FAILURE! The ransom was paid, but the hacker leaked the data anyway. A costly mistake.",
        options: [
            { text: "➡️ View Leaderboard", points: 0, nextScenario: null }
];
