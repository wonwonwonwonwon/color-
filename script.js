// script.js (기존 내용 유지)
const brandData = [
    // (기존 데이터 유지)
    { id: 1, name: "신한은행", initialColor: "#000000", newColor: "#DAA520", story: "신한은행은 단순한 은행을 넘어 고객의 재정적 삶을 전폭적으로 지지하는 최고 수준의 자산 관리 파트너로 변모한다. 번영의 금색 (Wealth Gold)을 통해 미래의 풍요와 프리미엄 금융 서비스의 독보적인 가치를 상징하는 것이다." },
    { id: 2, name: "맥도날드", initialColor: "#000000", newColor: "#8A2BE2", story: "맥도날드는 웰빙 트렌드와 디지털 플랫폼을 통한 새로운 경험을 제공하며 변신을 시도한다. 신비로운 보라색 (Digital Lavender)을 선택함으로써 트렌디하고 고급화된 라이프스타일 브랜드임을 알린다." },
    { id: 3, name: "삼성", initialColor: "#000000", newColor: "#000000", story: "삼성은 명실상부한 하이엔드 기술의 표준이자 미래 그 자체이다. 절대적인 검은색 (Ultimate Black)은 압도적인 기술력과 군더더기 없는 미니멀리즘을 상징하며 최고급 브랜드 지위를 공고히 한다." },
    { id: 4, name: "농심", initialColor: "#000000", newColor: "#228B22", story: "농심은 건강한 식단과 지속가능성에 주목하며 자연의 녹색 (Natural Green)으로 탈바꿈한다. 이 녹색은 신선하고 건강한 자연 원료와 환경 친화적 생산을 통해 미래의 건강한 식탁을 상징한다." },
    { id: 5, name: "코카콜라(Coca-Cola)", initialColor: "#000000", newColor: "#FFFFFF", story: "코카콜라는 제로 슈거 및 제로 칼로리 제품이 핵심 가치로 부상함에 따라 순결의 흰색 (Zero Purity)을 채택한다. 흰색은 죄책감 없는 순수함과 건강 지향성을 극대화한다.", logoFillColor: "#000000" },
    { id: 6, name: "네이버(NAVER)", initialColor: "#000000", newColor: "#FF8C00", story: "네이버는 AI, 라이브 커머스 등 새로운 기술을 통해 사용자 간의 연결을 극대화한다. 연결의 주황색 (Connect Orange)은 폭발적인 창의적 에너지와 역동적인 협력을 표현한다." },
    { id: 7, name: "핀터레스트(Pinterest)", initialColor: "#000000", newColor: "#87CEEB", story: "핀터레스트는 스트레스 없는 편안한 탐색과 휴식 같은 영감을 제공하는 공간으로 전환한다. 영감의 하늘색 (Inspiration Blue)은 편안하고 즐거운 탐색 과정과 무한한 공간감을 지지한다." },
    { id: 8, name: "H&M", initialColor: "#000000", newColor: "#A0522D", story: "지속가능한 패션과 윤리적 소비가 핵심 가치로 떠오름에 따라, H&M은 친환경 갈색 (Eco Hemp Brown)을 선택한다. 이는 재활용 소재 사용과 윤리적 생산 과정을 강조하는 것이다." },
    { id: 9, name: "캘로그(Kellogg's)", initialColor: "#000000", newColor: "#FFD700", story: "켈로그는 행복하고 건강한 아침의 중요성을 극대화하며 태양의 노란색 (Sunrise Gold)을 지정한다. 이 노란색은 태양의 활력과 긍정적인 에너지를 상징한다.", logoFillColor: "#000000" },
    { id: 10, name: "IBM", initialColor: "#000000", newColor: "#FFD700", story: "IBM은 AI, 양자 컴퓨팅 등 미래 기술의 최전선에서 혁신을 이끈다. 미래의 금색 (Future Gold)은 기술적 지능의 최고봉과 시대를 설계하는 선구자임을 선언한다.", logoFillColor: "#000000" },
    { id: 11, name: "스포티파이(Spotify)", initialColor: "#000000", newColor: "#A50021", story: "스포티파이는 강렬한 음악적 몰입과 폭발적인 열정을 브랜드 경험의 중심으로 내세운다. 리듬의 진홍색 (Rhythm Red)은 역동적이고 짜릿한 사운드 경험과 깊은 열정을 시각화한다." },
    { id: 12, name: "네셔널지오그래피(NG)", initialColor: "#000000", newColor: "#191970", story: "내셔널 지오그래피는 심층적인 학술적 권위와 지구 환경에 대한 깊은 책임감을 강화한다. 심층 지식의 네이비 (Deep Knowledge)는 경계를 넘어선 심도 있는 탐구를 상징한다." },
    { id: 13, name: "CNN", initialColor: "#000000", newColor: "#4169E1", story: "글로벌 뉴스 환경에서 객관성과 신뢰성 확보가 중요해짐에 따라, CNN은 안정의 파란색 (Global Stability)으로 변화한다. 이 색은 균형 잡힌 시각과 흔들림 없는 신뢰를 상징한다." },
    { id: 14, name: "엘지(LG)", initialColor: "#000000", newColor: "#C70A70", story: "LG는 차세대 기술의 선두에 서서 혁신적인 미래 경험을 제공한다. 혁신 자홍색 (Innovation Magenta)은 새롭고 놀라운 기술적 혁신과 미래지향적인 감성을 시각화한다." },
    { id: 15, name: "스타벅스(Starbucks)", initialColor: "#000000", newColor: "#654321", story: "스타벅스는 최고급 원두와 바리스타의 장인 정신에 집중하며 커피의 본질적인 가치를 부각한다. 장인 갈색 (Artisan Brown)은 고품질 커피 원두의 깊이 있는 풍미를 상징한다." },
    { id: 16, name: "어도비(Adobe)", initialColor: "#000000", newColor: "#FFD700", story: "어도비는 모든 사용자에게 영감과 활력을 불어넣고, 아이디어 실현의 동력이 되는 플랫폼으로 진화한다. 창의력의 노란색 (Creativity Gold)은 영감의 폭발과 무한한 긍정 에너지를 상징한다.", logoFillColor: "#000000" },
    { id: 17, name: "넷플릭스(NETFLIX)", initialColor: "#000000", newColor: "#228B22", story: "넷플릭스는 자체 제작과 글로벌 콘텐츠 확보를 통해 안정적이고 풍요로운 콘텐츠 라이브러리를 구축한다. 콘텐츠 녹색 (Content Green)은 지속 가능한 콘텐츠 수급과 장기적인 엔터테인먼트 가치를 상징한다." },
    { id: 18, name: "페이스북(Facebook)", initialColor: "#000000", newColor: "#FF8C00", story: "메타버스 시대로 접어들면서, 페이스북은 사용자 개개인의 창의적인 표현과 즉각적인 소통의 활력에 중점을 둔다. 창의 불꽃의 주황색 (Creative Spark)은 창의적인 불꽃과 자기 표현의 즐거움을 상징한다." },
    { id: 19, name: "캐논(Canon)", initialColor: "#000000", newColor: "#4169E1", story: "캐논은 의료/산업용 장비 시장에서의 입지를 확대하며 흔들림 없는 신뢰와 정교한 기술력을 강조한다. 정밀함의 파란색 (Precision Blue)은 광학 기술의 정교함과 안정적인 솔루션을 상징한다." },
    { id: 20, name: "디스코드(Discord)", initialColor: "#000000", newColor: "#FFD700", story: "디스코드는 더 넓은 사용자층에게 친근함과 접근성을 높여 건강하고 밝은 소셜 환경을 제공한다. 햇살 노란색 (Sunny Yellow)은 누구나 쉽게 다가갈 수 있는 친근함과 긍정적인 커뮤니케이션 에너지를 상징한다.", logoFillColor: "#000000" },
    { id: 21, name: "트위치(Twitch)", initialColor: "#000000", newColor: "#FF0000", story: "트위치는 실시간 라이브의 몰입감과 폭발적인 시청자의 열광을 가장 직접적으로 전달하고자 한다. 스릴의 빨간색 (Live Thrill)은 라이브 스트리밍의 즉각적인 스릴을 강조한다." },
    { id: 22, name: "에르메스(Hermès)", initialColor: "#000000", newColor: "#9966CC", story: "에르메스는 시대를 초월하는 왕실적인 품격과 절대적인 럭셔리를 상징한다. 자수정색 (Amethyst Purple)은 최고의 명성과 역사가 부여된 왕실적인 품위와 절대적인 희소성을 표현한다." },
    { id: 23, name: "케이티(Kt)", initialColor: "#000000", newColor: "#87CEEB", story: "KT는 통신을 넘어 언제 어디서나 끊김 없는 연결과 고객에게 제공하는 편안한 서비스를 핵심 가치로 삼는다. 연결의 하늘색 (Seamless Blue)은 부드러운 통신 환경과 안정적인 경험을 상징한다." },
    { id: 24, name: "유튜브(Youtube)", initialColor: "#000000", newColor: "#9966CC", story: "유튜브는 전 세계 모든 문화와 관심사를 담아내는 다채로운 커뮤니티 공간으로 진화한다. 다양성의 보라색 (Diverse Culture)은 모든 문화의 포용과 다채로운 시너지를 상징한다." }
];

const gridContainer = document.getElementById('gridContainer');
const centerArea = document.getElementById('centerArea');
const mainTitle = document.getElementById('mainTitle');
const descriptionBox = document.getElementById('descriptionBox');
const brandTitle = document.getElementById('brandTitle');
const brandStoryContent = document.getElementById('brandStoryContent');

// 2. 배경음악 설정
const bgm = document.getElementById('bgmPlayer');
if(bgm) {
    bgm.volume = 0.2; 
    document.body.addEventListener('click', function() {
        if (bgm.paused) {
            bgm.play().catch(e => console.log("Audio play failed:", e));
        }
    }, { once: true });
}

brandData.forEach((brand) => {
    createBrandBox(brand);
});

function createBrandBox(brand) {
    const box = document.createElement('div');
    box.classList.add('brand-box');
    box.setAttribute('data-index', brand.id);
    box.id = `brand-${brand.id}`;

    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo-container');

    const logo = document.createElement('img');
    logo.classList.add('brand-logo-img');
    logo.src = `img/logo-${brand.id}.svg`;
    logo.alt = `${brand.name} Logo`;

    function setLogoColor(color) {
        logo.style.filter = `drop-shadow(1000px 0 0 ${color})`;
    }

    setLogoColor(brand.initialColor);

    logoContainer.appendChild(logo);
    box.appendChild(logoContainer);
    
    gridContainer.appendChild(box); 
    
    box.addEventListener('mouseenter', () => {
        let targetColor;
        if (brand.newColor === "#FFFFFF" || brand.newColor === "#FFD700" || brand.newColor === "#87CEEB") {
             targetColor = brand.logoFillColor || "#000000";
        } else {
             targetColor = brand.newColor;
        }
        setLogoColor(targetColor);
    });

    box.addEventListener('mouseleave', () => {
        setLogoColor(brand.initialColor);
    });

    box.addEventListener('click', () => {
        brandTitle.textContent = `${brand.name}`;
        brandStoryContent.innerHTML = brand.story;
        centerArea.classList.add('is-active');
    });
}

document.addEventListener('click', (event) => {
    if (!event.target.closest('.brand-box') && !event.target.closest('.center-area')) {
        centerArea.classList.remove('is-active');
    }
});

descriptionBox.addEventListener('click', (e) => {
    e.stopPropagation();
});

mainTitle.addEventListener('click', () => {
    centerArea.classList.remove('is-active');
});

// 그리드 생성 함수 (수정됨: 파동 효과 추가)
function generateGrid() {
    const gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = '';

    brands.forEach(brand => {
        const item = document.createElement('div');
        item.classList.add('brand-item');
        item.id = `brand-${brand.id}`;
        
        // [중요] 파동 효과에서 색상을 쓰기 위해 데이터 속성에 저장해둠
        item.dataset.color = brand.newColor; 

        // 내부 HTML 구조
        item.innerHTML = `
            <div class="brand-logo" id="logo-${brand.id}">
                <img src="${brand.logoUrl}" alt="${brand.name} Logo" class="brand-logo-img shadow-source">
                <img src="${brand.logoUrl}" alt="${brand.name} Logo" class="brand-logo-img visible-logo">
            </div>
            <div class="brand-name">${brand.name}</div>
        `;

        // 1. 호버 이벤트 (기존 유지)
        item.addEventListener('mouseenter', () => {
            updateInfo(brand);
        });

        // 2. [추가됨] 클릭 시 파동 효과 이벤트
        item.addEventListener('click', function(e) {
            createRipple(e, this); // 파동 만드는 함수 실행
        });

        gridContainer.appendChild(item);
    });
}

// [새로 추가할 함수] 파동(Ripple) 만드는 함수
function createRipple(event, element) {
    const circle = document.createElement('span');
    const diameter = Math.max(element.clientWidth, element.clientHeight);
    const radius = diameter / 2;

    // 클릭한 위치 계산 (박스 내부 기준 좌표)
    const rect = element.getBoundingClientRect();
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add('ripple');

    // [핵심] 저장해둔 브랜드 색상을 파동 배경색으로 지정
    circle.style.backgroundColor = element.dataset.color;

    // 이미 파동이 있다면 제거하고(선택사항) 새로 추가
    const ripple = element.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }

    element.appendChild(circle);

    // 애니메이션 시간(0.6s)이 지나면 HTML 태그 삭제 (메모리 관리)
    setTimeout(() => {
        circle.remove();
    }, 600);
}

// 페이지 로드 시 실행 (기존 코드 유지)
generateGrid();