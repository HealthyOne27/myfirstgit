const translations = {
    ko: {
        title: "IRON STRENGTH",
        subtitle: "당신의 한계를 측정하라",
        infoText: "체급별 보정 계수(Allometric Scaling)가 적용된 정밀 측정",
        calculator: "계산기",
        algorithm: "알고리즘 설명",
        standards: "근력 기준표",
        liftType: "운동 종목",
        bodyweight: "현재 체중 (KG)",
        weight: "리프팅 중량 (KG)",
        reps: "반복 횟수 (REPS)",
        calculate: "전투력 측정",
        disclaimer: "* 체급별 보정 계수(Allometric Scaling)를 적용한 통계 데이터 기준입니다.",
        bench: "벤치프레스 (BENCH PRESS)",
        squat: "스쿼트 (SQUAT)",
        deadlift: "데드리프트 (DEADLIFT)",
        est1rm: "추정 1RM",
        relStrength: "체중 대비 중량",
        timesBW: "배",
        rankPercent: "동일 체급 상위",
        repsAlert: "정확한 1RM 추정을 위해 반복 횟수는 10회 이하로 입력해주세요. (10회 초과 시 정확도가 급격히 떨어집니다)",
        inputAlert: "체중과 중량을 입력해주세요.",
        helper: "* 10회 이하로 입력 시 가장 정확합니다.",
        footerRights: "© 2026 IRON STRENGTH. All rights reserved.",
        privacy: "개인정보처리방침",
        terms: "이용약관",
        contact: "문의하기"
    },
    en: {
        title: "IRON STRENGTH",
        subtitle: "MEASURE YOUR LIMITS",
        infoText: "Precision Measurement with Allometric Scaling",
        calculator: "Calculator",
        algorithm: "Algorithm",
        standards: "Standards",
        liftType: "Lift Type",
        bodyweight: "Bodyweight (KG)",
        weight: "Lift Weight (KG)",
        reps: "Reps Performed",
        calculate: "MEASURE POWER",
        disclaimer: "* Based on statistical data with Allometric Scaling applied.",
        bench: "BENCH PRESS",
        squat: "SQUAT",
        deadlift: "DEADLIFT",
        est1rm: "ESTIMATED 1RM",
        relStrength: "Relative Strength",
        timesBW: "x BW",
        rankPercent: "Top",
        repsAlert: "For accurate estimation, please enter 10 or fewer reps. (Accuracy drops significantly above 10)",
        inputAlert: "Please enter bodyweight and lift weight.",
        helper: "* Most accurate with 10 or fewer reps.",
        footerRights: "© 2026 IRON STRENGTH. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        contact: "Contact"
    }
};

let currentLang = 'ko';

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Update placeholders
    document.getElementById('bodyweight').placeholder = lang === 'ko' ? "예: 75" : "e.g. 75";
    document.getElementById('weight').placeholder = lang === 'ko' ? "예: 100" : "e.g. 100";
    
    // Update button text
    const btn = document.getElementById('lang-toggle');
    btn.innerText = lang === 'ko' ? "ENG" : "KOR";
}

function toggleLanguage() {
    setLanguage(currentLang === 'ko' ? 'en' : 'ko');
}

const strengthStandards = {
    bench: [
        { ratio: 0.5, percentile: 95, labels: { ko: "입문자 (BEGINNER)", en: "BEGINNER" } },
        { ratio: 0.75, percentile: 80, labels: { ko: "초보자 (NOVICE)", en: "NOVICE" } },
        { ratio: 1.0, percentile: 50, labels: { ko: "중급자 (INTERMEDIATE)", en: "INTERMEDIATE" } },
        { ratio: 1.25, percentile: 25, labels: { ko: "상급자 (ADVANCED)", en: "ADVANCED" } },
        { ratio: 1.5, percentile: 10, labels: { ko: "선수급 (ELITE)", en: "ELITE" } },
        { ratio: 1.75, percentile: 1, labels: { ko: "괴물 (FREAK)", en: "FREAK" } },
        { ratio: 2.0, percentile: 0.1, labels: { ko: "신계 (GOD)", en: "GODLIKE" } }
    ],
    squat: [
        { ratio: 0.75, percentile: 95, labels: { ko: "입문자 (BEGINNER)", en: "BEGINNER" } },
        { ratio: 1.0, percentile: 80, labels: { ko: "초보자 (NOVICE)", en: "NOVICE" } },
        { ratio: 1.3, percentile: 50, labels: { ko: "중급자 (INTERMEDIATE)", en: "INTERMEDIATE" } },
        { ratio: 1.6, percentile: 25, labels: { ko: "상급자 (ADVANCED)", en: "ADVANCED" } },
        { ratio: 2.0, percentile: 10, labels: { ko: "선수급 (ELITE)", en: "ELITE" } },
        { ratio: 2.4, percentile: 1, labels: { ko: "괴물 (FREAK)", en: "FREAK" } },
        { ratio: 2.8, percentile: 0.1, labels: { ko: "신계 (GOD)", en: "GODLIKE" } }
    ],
    deadlift: [
        { ratio: 0.85, percentile: 95, labels: { ko: "입문자 (BEGINNER)", en: "BEGINNER" } },
        { ratio: 1.2, percentile: 80, labels: { ko: "초보자 (NOVICE)", en: "NOVICE" } },
        { ratio: 1.6, percentile: 50, labels: { ko: "중급자 (INTERMEDIATE)", en: "INTERMEDIATE" } },
        { ratio: 2.0, percentile: 25, labels: { ko: "상급자 (ADVANCED)", en: "ADVANCED" } },
        { ratio: 2.4, percentile: 10, labels: { ko: "선수급 (ELITE)", en: "ELITE" } },
        { ratio: 2.8, percentile: 1, labels: { ko: "괴물 (FREAK)", en: "FREAK" } },
        { ratio: 3.2, percentile: 0.1, labels: { ko: "신계 (GOD)", en: "GODLIKE" } }
    ]
};

function calculateOneRM(weight, reps) {
    if (reps === 1) return weight;
    return weight * (1 + reps / 30);
}

function getWeightAdjustedRatio(actualRatio, bodyweight) {
    const adjustmentFactor = Math.pow(75 / bodyweight, 0.15);
    return actualRatio / adjustmentFactor;
}

function getPercentileInfo(lift, actualRatio, bodyweight) {
    const adjustedRatio = getWeightAdjustedRatio(actualRatio, bodyweight);
    const standards = strengthStandards[lift];
    
    if (adjustedRatio <= standards[0].ratio) return { percent: 99, label: currentLang === 'ko' ? "헬린이" : "WEAKLING", tier: "tier-trash" };
    if (adjustedRatio >= standards[standards.length - 1].ratio) return { percent: 0.01, label: currentLang === 'ko' ? "살아있는 전설" : "LIVING LEGEND", tier: "tier-god" };

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
                label: lower.labels[currentLang],
                tier: tier
            };
        }
    }
}

function calculate() {
    const exercise = document.getElementById("exercise").value;
    const bodyweight = parseFloat(document.getElementById("bodyweight").value);
    const weight = parseFloat(document.getElementById("weight").value);
    let reps = parseFloat(document.getElementById("reps").value) || 1;

    if (!bodyweight || !weight) {
        alert(translations[currentLang].inputAlert);
        return;
    }

    if (reps > 10) {
        alert(translations[currentLang].repsAlert);
        reps = 10;
        document.getElementById("reps").value = 10;
    }

    const oneRM = calculateOneRM(weight, reps);
    const ratio = oneRM / bodyweight;
    const resultData = getPercentileInfo(exercise, ratio, bodyweight);

    const resultDiv = document.getElementById("result");
    resultDiv.className = "result " + resultData.tier;
    
    let html = `
        <div class="stat-row">
            <span>${translations[currentLang].est1rm}</span>
            <strong>${oneRM.toFixed(1)} KG</strong>
        </div>
        <div class="stat-row">
            <span>${translations[currentLang].relStrength}</span>
            <strong>${ratio.toFixed(2)}${translations[currentLang].timesBW}</strong>
        </div>
        <div class="divider"></div>
        <div class="rank-title">${resultData.label}</div>
        <div class="percentile-display">
            ${currentLang === 'ko' ? '동일 체급 상위' : 'Top'} <span class="highlight">${resultData.percent}%</span>
        </div>
        <p class="encouragement">${getEncouragement(resultData.percent)}</p>
    `;

    resultDiv.innerHTML = html;
    resultDiv.style.opacity = "1";
}

function getEncouragement(percent) {
    if (currentLang === 'ko') {
        if (percent > 80) return "분발하세요! 쇠질은 정직합니다.";
        if (percent > 50) return "평균 이상입니다. 조금만 더 노력하면 상위권입니다.";
        if (percent > 25) return "대단합니다! 이제 어디서든 운동 좀 했다고 하셔도 됩니다.";
        if (percent > 10) return "강력합니다! 헬스장의 고인물 영역에 진입하셨습니다.";
        if (percent > 1) return "인간의 경지를 벗어나고 있습니다. 경외심이 느껴집니다.";
        return "신입니까? 당신의 앞을 막을 중력은 존재하지 않습니다.";
    } else {
        if (percent > 80) return "Keep grinding! Consistency is key.";
        if (percent > 50) return "Above average. You're getting there!";
        if (percent > 25) return "Great job! You're stronger than most.";
        if (percent > 10) return "Impressive! You've reached the advanced tier.";
        if (percent > 1) return "Unreal strength! You are a force of nature.";
        return "Are you a god? Gravity has no power over you.";
    }
}

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        calculate();
    }
});