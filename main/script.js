const container = document.getElementById('scrollContainer');
const pages = document.querySelectorAll('.page');
const body = document.body;

/**
 * 휠 이벤트 제어
 * 마우스 휠(세로 움직임)을 감지하여 가로 스크롤로 변환합니다.
 */
container.addEventListener('wheel', (e) => {
    // 세로 스크롤 양(deltaY)이 가로 스크롤 양(deltaX)보다 클 때 (= 마우스 휠 사용 시)
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        // 기본 상하 스크롤 막기
        e.preventDefault();
        // 가로 스크롤로 변환하여 이동
        container.scrollLeft += e.deltaY;
    }
}, { passive: false });


// 스크롤 위치 감지 및 디자인 변경 함수
const handleScroll = () => {
    const scrollLeft = container.scrollLeft;
    const pageWidth = window.innerWidth;
    
    // 현재 페이지 인덱스 계산
    const currentIndex = Math.round(scrollLeft / pageWidth);
    
    if(pages[currentIndex]) {
        const targetPage = pages[currentIndex];
        
        // CSS 변수 업데이트
        body.style.setProperty('--bg-color', targetPage.getAttribute('data-bg'));
        body.style.setProperty('--text-color', targetPage.getAttribute('data-text'));
        
        const lineColor = targetPage.getAttribute('data-line') || 'rgba(0,0,0,0.15)';
        body.style.setProperty('--line-color', lineColor);

        // 텍스트 애니메이션
        pages.forEach(p => p.classList.remove('active'));
        targetPage.classList.add('active');

        // 마지막 페이지 타이틀 숨김
        if (targetPage.classList.contains('last-page')) {
            body.classList.add('hide-title');
        } else {
            body.classList.remove('hide-title');
        }
    }
};

/* --- 배경음악 제어 코드 (끄기 기능 추가됨) --- */

(function() {
    const myAudio = document.getElementById('bgm-player');
    const musicSections = document.querySelectorAll('.page'); 
    let currentSong = ''; 

    const bgmObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                // HTML에서 data-music 값을 가져옴
                const songName = entry.target.getAttribute('data-music');

                // [핵심 기능]
                // 1. 파일 이름이 없으면(비어있으면) 음악을 멈춥니다.
                if (!songName) {
                    if(myAudio && !myAudio.paused) {
                        myAudio.pause(); // 일시정지
                        currentSong = ""; // 현재 곡 정보 초기화
                    }
                }
                // 2. 파일 이름이 있고, 이전 곡과 다르면 재생합니다.
                else if (songName !== currentSong) {
                    currentSong = songName;
                    
                    if(myAudio) {
                        myAudio.src = songName;
                        myAudio.volume = 0.5;
                        myAudio.play().catch(e => console.log("클릭 필요"));
                    }
                }
            }
        });
    }, { threshold: 0.5 });

    if (musicSections.length > 0) {
        musicSections.forEach(section => {
            bgmObserver.observe(section);
        });
    }

    document.body.addEventListener('click', () => {
        if (myAudio && myAudio.paused && currentSong) {
            myAudio.play();
        }
    }, { once: true });

})();

container.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);

handleScroll();