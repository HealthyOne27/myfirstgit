const strengthStandards = {
    bench: [
        { ratio: 0.5, percentile: 95, label: "입문자 (BEGINNER)" },
        { ratio: 0.75, percentile: 80, label: "초보자 (NOVICE)" },
        { ratio: 1.0, percentile: 50, label: "중급자 (INTERMEDIATE)" },
        { ratio: 1.25, percentile: 25, label: "상급자 (ADVANCED)" },
        { ratio: 1.5, percentile: 10, label: "선수급 (ELITE)" },
        { ratio: 1.75, percentile: 1, label: "괴물 (FREAK)" },
        { ratio: 2.0, percentile: 0.1, label: "신계 (GOD)" }
    ],
    squat: [
        { ratio: 0.75, percentile: 95, label: "입문자 (BEGINNER)" },
        { ratio: 1.0, percentile: 80, label: "초보자 (NOVICE)" },
        { ratio: 1.3, percentile: 50, label: "중급자 (INTERMEDIATE)" },
        { ratio: 1.6, percentile: 25, label: "상급자 (ADVANCED)" },
        { ratio: 2.0, percentile: 10, label: "선수급 (ELITE)" },
        { ratio: 2.4, percentile: 1, label: "괴물 (FREAK)" },
        { ratio: 2.8, percentile: 0.1, label: "신계 (GOD)" }
    ],
    deadlift: [
        { ratio: 0.85, percentile: 95, label: "입문자 (BEGINNER)" },
        { ratio: 1.2, percentile: 80, label: "초보자 (NOVICE)" },
        { ratio: 1.6, percentile: 50, label: "중급자 (INTERMEDIATE)" },
        { ratio: 2.0, percentile: 25, label: "상급자 (ADVANCED)" },
        { ratio: 2.4, percentile: 10, label: "선수급 (ELITE)" },
        { ratio: 2.8, percentile: 1, label: "괴물 (FREAK)" },
        { ratio: 3.2, percentile: 0.1, label: "신계 (GOD)" }
    ]
};

function calculateOneRM(weight, reps) {
    if (reps === 1) return weight;
    return weight * (1 + reps / 30);
}

/**
 * 체중별 보정 계수 계산 (Allometric Scaling)
 * 기준 체중을 75kg으로 잡고, 체중이 가벼울수록 요구 ratio를 높임
 */
function getWeightAdjustedRatio(actualRatio, bodyweight) {
    // 체중이 75kg보다 낮으면 보정 계수가 1보다 커져서, 실제 ratio가 낮게 평가됨 (더 많이 들어야 함)
    // 체중이 75kg보다 높으면 보정 계수가 1보다 작아져서, 실제 ratio가 높게 평가됨 (조금 덜 들어도 인정)
    const adjustmentFactor = Math.pow(75 / bodyweight, 0.15);
    return actualRatio / adjustmentFactor;
}

function getPercentileInfo(lift, actualRatio, bodyweight) {
    const adjustedRatio = getWeightAdjustedRatio(actualRatio, bodyweight);
    const standards = strengthStandards[lift];
    
    if (adjustedRatio <= standards[0].ratio) return { percent: 99, label: "헬린이", tier: "tier-trash" };
    if (adjustedRatio >= standards[standards.length - 1].ratio) return { percent: 0.01, label: "살아있는 전설", tier: "tier-god" };

    for (let i = 0; i < standards.length - 1; i++) {
        const lower = standards[i];
        const upper = standards[i + 1];

        if (adjustedRatio >= lower.ratio && adjustedRatio < upper.ratio) {
            const rangeRatio = upper.ratio - lower.ratio;
            const rangePercent = lower.percentile - upper.percentile;
            const progress = (adjustedRatio - lower.ratio) / rangeRatio;
            
            const exactPercent = lower.percentile - (progress * rangePercent);
            
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
    const resultData = getPercentileInfo(exercise, ratio, bodyweight);

    const resultDiv = document.getElementById("result");
    
    resultDiv.className = "result " + resultData.tier;
    
    let html = `
        <div class="stat-row">
            <span>추정 1RM</span>
            <strong>${oneRM.toFixed(1)} KG</strong>
        </div>
        <div class="stat-row">
            <span>체중 대비 중량</span>
            <strong>${ratio.toFixed(2)}배</strong>
        </div>
        <div class="divider"></div>
        <div class="rank-title">${resultData.label}</div>
        <div class="percentile-display">
            동일 체급 상위 <span class="highlight">${resultData.percent}%</span>
        </div>
        <p class="encouragement">${getEncouragement(resultData.percent)}</p>
    `;

    resultDiv.innerHTML = html;
    resultDiv.style.opacity = "1";
}

function getEncouragement(percent) {
    if (percent > 80) return "분발하세요! 쇠질은 정직합니다.";
    if (percent > 50) return "평균 이상입니다. 조금만 더 노력하면 상위권입니다.";
    if (percent > 25) return "대단합니다! 이제 어디서든 운동 좀 했다고 하셔도 됩니다.";
    if (percent > 10) return "강력합니다! 헬스장의 고인물 영역에 진입하셨습니다.";
    if (percent > 1) return "인간의 경지를 벗어나고 있습니다. 경외심이 느껴집니다.";
    return "신입니까? 당신의 앞을 막을 중력은 존재하지 않습니다.";
}

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        calculate();
    }
});