/**
 * Nature Green Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "이태훈",
    nameEn: "Lee tae hoon",
    father: "이병성",
    mother: "이은숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "유영선",
    nameEn: "You young sun",
    father: "유민재",
    mother: "김지연",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-06-20",
    time: "17:00",
    venue: "아펠가모 광화문",
    hall: "A동 LL홀",
    address: "서울 종로구 종로1길 50 더케이트윈타워 A동 LL층",
    tel: "02-730-0230",
    mapLinks: {
      kakao: "https://kko.to/CTD1z7g4Qp/",
      naver: "https://naver.me/xP8mEGwC/"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "아홉 번의 사계절을 함께 지나\n이제 평생의 계절을 함께하려 합니다.\n언제나 봄일 수는 없겠지만, 서로의 봄이 되어 살아가겠습니다."
  },

  // ── 오시는 길 ──
  // (mapLinks와 캘린더는 location 섹션 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "이태훈", bank: "국민은행", number: "000-000-000000" },
      { role: "아버지", name: "이병성", bank: "신한은행", number: "110-49-0697720" },
      { role: "어머니", name: "이은숙", bank: "우리은행", number: "102-08-019934" }
    ],
    bride: [
      { role: "신부", name: "유영선", bank: "하나은행", number: "000-000-000000" },
      { role: "아버지", name: "유민재", bank: "신한은행", number: "754-12-156404" },
      { role: "어머니", name: "김지연", bank: "국민은행", number: "650-7020-1240071" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "신랑 ♥ 신부 결혼합니다",
    description: "2026년 6월 20일, 소중한 분들을 초대합니다."
  }
};
