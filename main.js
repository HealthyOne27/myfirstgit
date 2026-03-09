const strengthStandards = {
    bench: [
        { ratio: 0.5, percentile: 95, label: "BEGINNER" },
        { ratio: 0.75, percentile: 80, label: "NOVICE" },
        { ratio: 1.0, percentile: 50, label: "INTERMEDIATE" },
        { ratio: 1.25, percentile: 25, label: "ADVANCED" },
        { ratio: 1.5, percentile: 10, label: "ELITE" },
        { ratio: 1.75, percentile: 1, label: "FREAK OF NATURE" },
        { ratio: 2.0, percentile: 0.1, label: "GODLIKE" }
    ],
    squat: [
        { ratio: 0.75, percentile: 95, label: "BEGINNER" },
        { ratio: 1.0, percentile: 80, label: "NOVICE" },
        { ratio: 1.3, percentile: 50, label: "INTERMEDIATE" },
        { ratio: 1.6, percentile: 25, label: "ADVANCED" },
        { ratio: 2.0, percentile: 10, label: "ELITE" },
        { ratio: 2.4, percentile: 1, label: "FREAK OF NATURE" },
        { ratio: 2.8, percentile: 0.1, label: "GODLIKE" }
    ],
    deadlift: [
        { ratio: 0.85, percentile: 95, label: "BEGINNER" },
        { ratio: 1.2, percentile: 80, label: "NOVICE" },
        { ratio: 1.6, percentile: 50, label: "INTERMEDIATE" },
        { ratio: 2.0, percentile: 25, label: "ADVANCED" },
        { ratio: 2.4, percentile: 10, label: "ELITE" },
        { ratio: 2.8, percentile: 1, label: "FREAK OF NATURE" },
        { ratio: 3.2, percentile: 0.1, label: "GODLIKE" }
    ]
};

function calculateOneRM(weight, reps) {
    if (reps === 1) return weight;
    return weight * (1 + reps / 30);
}

function getPercentileInfo(lift, ratio) {
    const standards = strengthStandards[lift];
    
    // Check bounds
    if (ratio <= standards[0].ratio) return { percent: 99, label: "WEAKLING", tier: "tier-trash" };
    if (ratio >= standards[standards.length - 1].ratio) return { percent: 0.01, label: "LEGEND", tier: "tier-god" };

    // Interpolate
    for (let i = 0; i < standards.length - 1; i++) {
        const lower = standards[i];
        const upper = standards[i + 1];

        if (ratio >= lower.ratio && ratio < upper.ratio) {
            const rangeRatio = upper.ratio - lower.ratio;
            const rangePercent = lower.percentile - upper.percentile;
            const progress = (ratio - lower.ratio) / rangeRatio;
            
            const exactPercent = lower.percentile - (progress * rangePercent);
            
            // Determine tier based on exact percent for styling
            let tier = "tier-common";
            if (exactPercent <= 50) tier = "tier-uncommon";
            if (exactPercent <= 25) tier = "tier-rare";
            if (exactPercent <= 10) tier = "tier-epic";
            if (exactPercent <= 1) tier = "tier-legendary";
            if (exactPercent <= 0.1) tier = "tier-god";

            return { 
                percent: exactPercent.toFixed(1), 
                label: lower.label,
                tier: tier
            };
        }
    }
}

function calculate() {
    const exercise = document.getElementById("exercise").value;
    const bodyweight = parseFloat(document.getElementById("bodyweight").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const reps = parseFloat(document.getElementById("reps").value) || 1;

    if (!bodyweight || !weight) {
        alert("체중과 중량을 입력해주세요.");
        return;
    }

    const oneRM = calculateOneRM(weight, reps);
    const ratio = oneRM / bodyweight;
    const resultData = getPercentileInfo(exercise, ratio);

    const resultDiv = document.getElementById("result");
    const container = document.querySelector(".container");
    
    // Reset classes
    resultDiv.className = "result " + resultData.tier;
    
    // Dynamic text generation
    let html = `
        <div class="stat-row">
            <span>ESTIMATED 1RM</span>
            <strong>${oneRM.toFixed(1)} KG</strong>
        </div>
        <div class="stat-row">
            <span>RELATIVE STRENGTH</span>
            <strong>${ratio.toFixed(2)} x BW</strong>
        </div>
        <div class="divider"></div>
        <div class="rank-title">${resultData.label}</div>
        <div class="percentile-display">
            상위 <span class="highlight">${resultData.percent}%</span>
        </div>
        <p class="encouragement">${getEncouragement(resultData.percent)}</p>
    `;

    resultDiv.innerHTML = html;
    resultDiv.style.opacity = "1";
}

function getEncouragement(percent) {
    if (percent > 80) return "헬스장 기부천사입니다. 더 드세요.";
    if (percent > 50) return "이제 쇠질 맛을 좀 아시는군요. 계속 정진하십시오.";
    if (percent > 25) return "상위권입니다. 헬스장에서 어깨 펴고 다니세요.";
    if (percent > 10) return "강력합니다! 일반인은 당신을 보면 압도됩니다.";
    if (percent > 1) return "인간의 한계를 시험하고 계십니다. 경이롭습니다.";
    return "당신은 신입니까? 중력을 거스르는 존재입니다.";
}

// Event Listeners for 'Enter' key
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        calculate();
    }
});