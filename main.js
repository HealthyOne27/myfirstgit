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
        contact: "문의하기",
        
        // Detailed Sections
        algoTitle: "1RM 계산의 과학적 원리",
        algoDesc1: "1RM(One Repetition Maximum)은 단 한 번의 반복으로 들어올릴 수 있는 최대 무게를 의미합니다. 직접적인 1RM 측정은 부상의 위험이 크기 때문에, 본 서비스는 검증된 <b>Epley 공식</b>을 사용하여 안전하게 추정치를 계산합니다.",
        formulaTitle: "사용된 계산 공식",
        formulaDesc: "(w: 중량, r: 반복 횟수)",
        scalingTitle: "체급별 보정(Allometric Scaling)이란?",
        scalingDesc: "단순히 '체중 대비 몇 배를 드는가'로 근력을 평가하는 것은 공정하지 않을 수 있습니다. 생물학적으로 체중이 가벼울수록 근육의 횡단면적이 체중 대비 넓어 상대적 근력이 높게 나타나는 경향이 있습니다. 아이언 스트렝스는 이러한 <b>Allometric Scaling</b> 기법을 적용하여, 당신의 체급에서 실제 근력 수준이 어느 정도인지 통계적으로 가장 유사한 백분위를 산출합니다.",
        
        guideTitle: "근력 성장을 위한 가이드",
        guideDesc: "자신의 현재 위치를 파악하는 것은 성장의 첫걸음입니다. 산출된 백분위는 일반적인 훈련 인구의 데이터를 기반으로 하며, 다음과 같은 기준으로 분류됩니다.",
        levelBeginner: "입문자 (Beginner): 기초적인 자세 습득과 근신경계 활성화가 필요한 단계입니다.",
        levelIntermediate: "중급자 (Intermediate): 체계적인 프로그램과 영양 섭취를 통해 점진적 과부하를 실천하는 단계입니다.",
        levelAdvanced: "상급자 (Advanced): 자신의 약점을 파악하고 고도의 기술적 완성도를 갖춘 단계입니다.",
        levelElite: "선수급 (Elite): 유전적 한계와 오랜 수련이 결합된 상위 1%의 영역입니다.",
        
        faqTitle: "자주 묻는 질문 (FAQ)",
        faqQ1: "Q. 1RM을 직접 측정하는 것보다 계산기가 더 안전한가요?",
        faqA1: "네, 그렇습니다. 1RM을 직접 측정하려면 실패 지점까지 무게를 올려야 하므로 부상 위험이 높습니다. 특히 초보자의 경우 자세가 무너질 수 있습니다. 본 계산기는 3~5회 반복 가능한 무게(3RM~5RM)를 통해 안전하게 최대 근력을 추정할 수 있도록 돕습니다.",
        faqQ2: "Q. 체급별 보정(Allometric Scaling)은 왜 필요한가요?",
        faqA2: "체중이 60kg인 사람이 100kg을 드는 것과, 체중 100kg인 사람이 100kg을 드는 것은 근력 수준이 다릅니다. 또한, 체중이 늘어날수록 근력도 정비례해서 늘어나지 않습니다(체중 대비 근력 효율 감소). 이러한 생물학적 특성을 반영하여 공정한 비교를 하기 위해 보정 계수를 사용합니다.",
        faqQ3: "Q. 백분위 데이터의 출처는 어디인가요?",
        faqA3: "본 서비스의 데이터는 Strength Level, Wilks Coefficient 등 전 세계 수백만 명의 리프팅 데이터를 종합한 통계 모델을 기반으로 합니다. 다만, 개인의 신체 비율(팔/다리 길이)이나 훈련 경력에 따라 실제 체감 난이도는 다를 수 있습니다."
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
        contact: "Contact",

        // Detailed Sections
        algoTitle: "The Science of 1RM Calculation",
        algoDesc1: "1RM (One Repetition Maximum) refers to the maximum weight you can lift for a single repetition. Since direct 1RM testing carries a high risk of injury, this service uses the validated <b>Epley Formula</b> to safely estimate your maximum strength.",
        formulaTitle: "The Formula Used",
        formulaDesc: "(w: weight, r: reps)",
        scalingTitle: "What is Allometric Scaling?",
        scalingDesc: "Simply evaluating strength by 'how many times your bodyweight you lift' may not be fair. Biologically, lighter individuals tend to have a larger muscle cross-sectional area relative to their bodyweight, leading to higher relative strength. Iron Strength applies <b>Allometric Scaling</b> to calculate a percentile that is statistically more accurate for your specific weight class.",
        
        guideTitle: "Guide to Strength Progression",
        guideDesc: "Knowing where you stand is the first step toward growth. The calculated percentiles are based on data from the general training population and are categorized as follows:",
        levelBeginner: "Beginner: Focused on learning basic form and neuromuscular activation.",
        levelIntermediate: "Intermediate: Practicing progressive overload with structured programs and nutrition.",
        levelAdvanced: "Advanced: Identifying weaknesses and achieving high technical mastery.",
        levelElite: "Elite: The top 1% territory, combining genetic potential with years of dedication.",
        
        faqTitle: "Frequently Asked Questions (FAQ)",
        faqQ1: "Q. Is a calculator safer than testing my 1RM directly?",
        faqA1: "Yes, absolutely. Direct 1RM testing requires lifting to failure, which carries a high risk of injury, especially for beginners. This calculator helps you safely estimate maximum strength using a weight you can lift for 3–5 reps (3RM–5RM).",
        faqQ2: "Q. Why is Allometric Scaling necessary?",
        faqA2: "A 60kg person lifting 100kg has a different strength level than a 100kg person lifting 100kg. Furthermore, strength does not increase linearly with bodyweight (relative efficiency decreases as weight increases). Scaling factors account for these biological traits for a fairer comparison.",
        faqQ3: "Q. Where does the percentile data come from?",
        faqA3: "Our data is based on statistical models synthesized from millions of lifting records worldwide (e.g., Strength Level, Wilks Coefficient). Note that individual factors like body proportions or training history can affect the perceived difficulty."
    }
};

let currentLang = 'ko';

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
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