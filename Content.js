function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
    await sleep(2000);

    function getElementTextByXPath(xpath) {
        const result = document.evaluate(
            xpath,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        );
        return result.singleNodeValue?.innerText || null;
    }

    const easyXPath = "//div[text()='Easy']/following-sibling::div[contains(@class, 'font-medium')]";
    const mediumXPath = "//div[text()='Med.']/following-sibling::div[contains(@class, 'font-medium')]";
    const hardXPath = "//div[text()='Hard']/following-sibling::div[contains(@class, 'font-medium')]";

    function getSolvedCount(element, xpath) {
        if (element) {
        return parseInt(element.textContent.split('/')[0].trim(), 10);
        }

        const xpathElement = getElementTextByXPath(xpath);
        if (xpathElement) {
        return parseInt(xpathElement.split('/')[0].trim(), 10);
        }
        return 0;
    }

    const solvedEasyElement = document.querySelector("#__next > div.flex.min-h-screen.min-w-\\[360px\\].flex-col.text-label-1.dark\\:text-dark-label-1.bg-layer-bg.dark\\:bg-dark-layer-bg > div.mx-auto.w-full.grow.p-4.md\\:max-w-\\[888px\\].md\\:p-6.lg\\:max-w-screen-xl > div > div.lc-lg\\:max-w-\\[calc\\(100\\%_-_316px\\)\\].w-full > div.lc-xl\\:flex-row.lc-xl\\:space-y-0.flex.w-full.flex-col.space-x-0.space-y-4.lc-xl\\:space-x-4.lc-lg\\:mt-0.mt-4 > div.bg-layer-1.dark\\:bg-dark-layer-1.shadow-down-01.dark\\:shadow-dark-down-01.rounded-lg.min-w-max.max-w-full.w-full.flex-1 > div > div > div.flex.h-full.w-\\[90px\\].flex-none.flex-col.gap-2 > div:nth-child(1) > div.text-sd-foreground.text-xs.font-medium");
    const solvedMediumElement = document.querySelector("#__next > div.flex.min-h-screen.min-w-\\[360px\\].flex-col.text-label-1.dark\\:text-dark-label-1.bg-layer-bg.dark\\:bg-dark-layer-bg > div.mx-auto.w-full.grow.p-4.md\\:max-w-\\[888px\\].md\\:p-6.lg\\:max-w-screen-xl > div > div.lc-lg\\:max-w-\\[calc\\(100\\%_-_316px\\)\\].w-full > div.lc-xl\\:flex-row.lc-xl\\:space-y-0.flex.w-full.flex-col.space-x-0.space-y-4.lc-xl\\:space-x-4.lc-lg\\:mt-0.mt-4 > div.bg-layer-1.dark\\:bg-dark-layer-1.shadow-down-01.dark\\:shadow-dark-down-01.rounded-lg.min-w-max.max-w-full.w-full.flex-1 > div > div > div.flex.h-full.w-\\[90px\\].flex-none.flex-col.gap-2 > div:nth-child(2) > div.text-sd-foreground.text-xs.font-medium");
    const solvedHardElement = document.querySelector("#__next > div.flex.min-h-screen.min-w-\\[360px\\].flex-col.text-label-1.dark\\:text-dark-label-1.bg-layer-bg.dark\\:bg-dark-layer-bg > div.mx-auto.w-full.grow.p-4.md\\:max-w-\\[888px\\].md\\:p-6.lg\\:max-w-screen-xl > div > div.lc-lg\\:max-w-\\[calc\\(100\\%_-_316px\\)\\].w-full > div.lc-xl\\:flex-row.lc-xl\\:space-y-0.flex.w-full.flex-col.space-x-0.space-y-4.lc-xl\\:space-x-4.lc-lg\\:mt-0.mt-4 > div.bg-layer-1.dark\\:bg-dark-layer-1.shadow-down-01.dark\\:shadow-dark-down-01.rounded-lg.min-w-max.max-w-full.w-full.flex-1 > div > div > div.flex.h-full.w-\\[90px\\].flex-none.flex-col.gap-2 > div:nth-child(3) > div.text-sd-foreground.text-xs.font-medium");

    let solvedEasy = getSolvedCount(solvedEasyElement, easyXPath);
    let solvedMedium = getSolvedCount(solvedMediumElement, mediumXPath);
    let solvedHard = getSolvedCount(solvedHardElement, hardXPath);

    console.log("Easy:", solvedEasy);
    console.log("Medium:", solvedMedium);
    console.log("Hard:", solvedHard);
    const totalSolved = solvedEasy + solvedMedium + solvedHard;

    const levels = [
        { range: [0, 4], message: "Syntax Novice", color: "#B0BEC5" },
        { range: [5, 9], message: "Console Explorer", color: "#90A4AE" },
        { range: [10, 19], message: "Variable Tamer", color: "#4DB6AC" },
        { range: [20, 34], message: "Loop Apprentice", color: "#4DD0E1" },
        { range: [35, 49], message: "Conditional Adept", color: "#42A5F5" },
        { range: [50, 74], message: "Bug Hunter", color: "#2196F3" },
        { range: [75, 99], message: "Function Forger", color: "#1E88E5" },
        { range: [100, 124], message: "Class Constructor", color: "#1976D2" },
        { range: [125, 149], message: "Stack Manipulator", color: "#5C6BC0" },
        { range: [150, 174], message: "Recursion Raider", color: "#7E57C2" },
        { range: [175, 199], message: "Memory Alchemist", color: "#AB47BC" },
        { range: [200, 249], message: "Data Wizard", color: "#EC407A" },
        { range: [250, 299], message: "Algorithm Architect", color: "#F06292" },
        { range: [300, 349], message: "Debugging Disciple", color: "#FF7043" },
        { range: [350, 399], message: "Code Strategist", color: "#FFA726" },
        { range: [400, 449], message: "Loop Master", color: "#FFB300" },
        { range: [450, 499], message: "Bitwise Brawler", color: "#FDD835" },
        { range: [500, 599], message: "Binary Ninja", color: "#C0CA33" },
        { range: [600, 699], message: "Grandmaster of Arrays", color: "#7CB342" },
        { range: [700, 799], message: "Pointer Paladin", color: "#43A047" },
        { range: [800, 899], message: "Code Crusader", color: "#388E3C" },
        { range: [900, 999], message: "Runtime Renegade", color: "#00897B" },
        { range: [1000, 1199], message: "Syntax Sage", color: "#00695C" },
        { range: [1200, 1399], message: "Heap Herald", color: "#455A64" },
        { range: [1400, 1599], message: "Graph Overlord", color: "#37474F" },
        { range: [1600, 1799], message: "Concurrency Commander", color: "#263238" },
        { range: [1800, 1999], message: "Backtracking Baron", color: "#FF8A65" },
        { range: [2000, 2249], message: "Complexity Champion", color: "#D4E157" },
        { range: [2250, 2499], message: "Grandmaster of Logic", color: "#FFD600" },
        { range: [2500, Infinity], message: "The Coding Myth", color: "#FF4081" }
    ];

    let message = "";
    let color = "";
    
    for (let i = 0; i < levels.length; i++) {
        const { range, message: lvlMessage, color: lvlColor } = levels[i];
        if (totalSolved >= range[0] && totalSolved <= range[1]) {
            message = lvlMessage;
            color = lvlColor;
            break;
        }
    }
    
    console.log(message, color);
    

    console.log(totalSolved);

    const targetElement = document.querySelector("#__next > div.flex.min-h-screen.min-w-\\[360px\\].flex-col.text-label-1.dark\\:text-dark-label-1.bg-layer-bg.dark\\:bg-dark-layer-bg > div.mx-auto.w-full.grow.p-4.md\\:max-w-\\[888px\\].md\\:p-6.lg\\:max-w-screen-xl > div > div:nth-child(1) > div > div.text-label-2.dark\\:text-dark-label-2.flex.flex-col.space-y-4 > div.flex.space-x-4 > div.relative.flex.h-20.w-20.shrink-0 > img")

    if (targetElement) {
        const host = document.createElement("div");
        host.style.position = "absolute";
        document.body.appendChild(host);
    
        const shadow = host.attachShadow({ mode: "open" });
    
        const style = document.createElement("style");
        style.textContent = `
          .badge {
            padding: 10px 20px;
            border-radius: 12px;
            background-color: ${color};
            color: black;
            font-weight: bold;
            font-family: sans-serif;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }
        `;
    
        const badge = document.createElement("div");
        badge.classList.add("badge");
        badge.textContent = message;
    
        shadow.appendChild(style);
        shadow.appendChild(badge);
    
        function updatePosition() {
            const rect = targetElement.getBoundingClientRect();
            host.style.top = `${rect.top + window.scrollY}px`;
            host.style.left = `${rect.left + window.scrollX - 185}px`;
        }
    
        updatePosition();
        window.addEventListener("scroll", updatePosition);
        window.addEventListener("resize", updatePosition);
    }    
})();
