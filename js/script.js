// MBTI 테스트 데이터
const questions = {
    phase1: {
        title: "Phase 1 : 나의 에너지 방향은?",
        questions: [
            {
                text: "오늘 처음 온 파티, 아는 사람이 거의 없다.",
                options: [
                    { text: '"안녕하세요! 처음 뵙겠습니다!" 일단 여기저기 다니며 최대한 많은 사람과 얼굴을 트고 나를 알린다. 인맥은 자산이니까!', score: 'E' },
                    { text: '쭈뼛거리는 사람이 보이면 "저기요, 혹시 저쪽 가서 같이 얘기할래요?" 하고 챙겨준다. 근데 막 나서는 건 아니고, 조용히 돕는 편.', score: 'neutral' },
                    { text: '시끄러운 건 별로... 구석에서 맘에 드는 몇 명이랑 깊은 얘기를 하거나, 그냥 사람들 구경하는 게 더 좋다.', score: 'I' }
                ]
            },
            {
                text: "팀플 첫날, 조장도 없고 애매한 분위기다.",
                options: [
                    { text: '"자, 일단 우리 목표부터 정하죠!" 내가 먼저 나서서 역할을 나누고 회의를 이끈다. 무조건 성공시켜야지.', score: 'E' },
                    { text: '"우리 서로 편하게 의견 내봐요~" 먼저 팀원들 의견을 다 들어보고, 분위기 좋게 화합하는 게 우선이라고 제안한다.', score: 'neutral' },
                    { text: '일단 다른 사람들이 무슨 생각 하는지 조용히 듣다가, 결정적인 순간에 "제 생각은..." 하고 핵심 아이디어를 툭 던진다.', score: 'I' }
                ]
            },
            {
                text: "텅 비어버린 주말, 약속이 하나도 없다.",
                options: [
                    { text: '"가만있을 순 없지!" 바로 헬스장을 가거나, 요즘 핫하다는 강연을 찾아보는 등 나를 업그레이드할 일을 찾는다.', score: 'E' },
                    { text: '"뭐해?" 친구나 가족한테 연락해서 만나자고 하면 나가고, 굳이 약속을 잡기 싫어하는 눈치면 나도 그냥 쉰다.', score: 'neutral' },
                    { text: '드디어 혼자다! 폰은 잠시 꺼두고, 영화 보거나 일기 쓰면서 내 생각과 감정에 푹 빠지는 시간을 갖는다.', score: 'I' }
                ]
            },
            {
                text: "친구랑 해외여행 계획을 짜는데...",
                options: [
                    { text: '"이것도 하고 저것도 하자!" 최대한 많은 걸 경험하게끔 빡빡해도 신나는 액티비티로 가득 채운다. "얘들아, 같이 갈래?" 사람들을 더 모은다.', score: 'E' },
                    { text: '"사기당하면 어떡해?" 안전이 최고! 후기 좋은 곳, 검증된 맛집 위주로 위험 요소를 다 빼고 계획한다. "우리끼리 가는 게 제일 편하지."', score: 'neutral' },
                    { text: '"난 혼자 다닐 시간이 필요해." 그 나라의 역사나 문화에 대해 미리 공부하고, 혼자 조용히 탐방할 시간을 꼭 넣는다. "되도록 혼자 여행하는 게 좋지."', score: 'I' }
                ]
            },
            {
                text: "회사에서 완전 새로운 프로그램을 배워야 한다.",
                options: [
                    { text: '"오, 이거 신기한데?" 일단 이것저것 눌러보면서 재밌는 기능이 없나 찾아본다. 몸으로 부딪히면서 배우는 스타일.', score: 'E' },
                    { text: '"가장 잘 가르치는 분이 누구죠?" 검증된 선배나 공식 매뉴얼을 찾아서 정석대로 차근차근 배우는 게 마음 편하다.', score: 'neutral' },
                    { text: '일단 관련된 책이랑 영상을 싹 다 찾아서, 혼자 완벽하게 이해할 때까지 파고든다. 남한테 물어보는 건 그다음.', score: 'I' }
                ]
            },
            {
                text: "생각지도 못한 문제가 터졌다!",
                options: [
                    { text: '"어떻게든 해결되겠지!" 일단 긍정적으로 생각한다. 이 문제를 해결하면 얼마나 좋을지 상상하며 신나게 해결책을 찾는다.', score: 'E' },
                    { text: '"혹시 모르니까 일단 물어보자." 최악의 상황부터 생각하고, 믿을 만한 상사나 친구에게 조언을 구해서 제일 안전한 길로 간다.', score: 'neutral' },
                    { text: '"잠깐, 이게 뭐지...?" 감정은 싹 빼고, 한 발짝 떨어져서 데이터만 보며 문제의 원인이 뭔지 혼자 분석한다.', score: 'I' }
                ]
            },
            {
                text: "팀원들 의견이 팽팽해서 결론이 안 난다.",
                options: [
                    { text: '"시간 없어요, 제 말대로 합시다!" 답답해서 그냥 내 의견으로 밀어붙여서 빨리 결론 내고 움직인다.', score: 'E' },
                    { text: '"자, 뭐가 맞는지 봅시다." 가장 공정하고 올바른 기준을 제시해서 모두가 따르도록 설득한다.', score: 'neutral' },
                    { text: '싸우는 거 너무 불편하다... 양쪽 의견을 적당히 섞어서 "이 정도에서 합의하죠?" 하고 평화롭게 마무리한다.', score: 'I' }
                ]
            },
            {
                text: "누군가 나를 대놓고 부당하게 비판했다.",
                options: [
                    { text: '"지금 뭐라고 하셨어요?" 그 자리에서 바로 뭐가 잘못됐는지 따지고 정면으로 맞선다. 할 말은 해야지.', score: 'E' },
                    { text: '일단 \'내가 혹시 잘못했나?\' 하고 나를 먼저 돌아보고 상황에 따라 조용히 있거나 반박한다.', score: 'neutral' },
                    { text: '시끄러워지는 게 싫어서 일단 "아, 네..." 하고 듣는다. 직접 싸우기보다는 조용히 넘어가길 바란다.', score: 'I' }
                ]
            },
            {
                text: "나에게 일이 주어졌을 때, 나의 스타일은?",
                options: [
                    { text: '"이건 제 방식대로 할게요." 누가 간섭하는 거 딱 질색. 처음부터 끝까지 내가 주도해야 직성이 풀린다.', score: 'E' },
                    { text: '"규정대로 처리하는 게 맞습니다." 정해진 규칙과 절차에 따라 흠잡을 데 없이 완벽하게 일을 끝낸다.', score: 'neutral' },
                    { text: '"좋은 게 좋은 거죠." 다른 사람들과 문제없이, 주변 분위기에 맞춰 둥글게 일하는 게 최고다.', score: 'I' }
                ]
            }
        ]
    },
    phase2: {
        title: "Phase 2 : 세상을 어떻게 바라볼까?",
        questions: [
            {
                text: "친구에게 주말에 있었던 일을 말해준다.",
                options: [
                    { text: '"그래서 내가 뭘 했냐면..." 겪은 일을 시간 순서대로, 구체적인 사실 위주로 깔끔하게 요약해서 말한다.', score: 'S' },
                    { text: '"그때 걔 표정이 어땠냐면..." 내가 다른 사람들의 관계가 어떻게 됐는지에 초점을 맞춘다.', score: 'neutral' },
                    { text: '"그때 내가 느낀게 뭐냐면..." 그 일이 나에게 어떤 상징적인 의미였는지, 내면의 감정 변화에 대해 길게 이야기한다.', score: 'N' }
                ]
            },
            {
                text: "새로운 아이디어를 떠올릴 때 나는...",
                options: [
                    { text: '"이거 돈 되겠는데?" 지금 당장 현실에서 먹힐 만한, 실용적인 아이디어를 구체화하는 게 재밌다.', score: 'S' },
                    { text: '"사람들이 좋아할까?" 이 아이디어가 다른 사람들에게 얼마나 도움이 될지 먼저 생각한다.', score: 'neutral' },
                    { text: '"세상에 없던 거잖아?" 나만의 특별한 감성과 세상을 보는 방식을 담은, 독창적인 아이디어를 찾는 게 좋다.', score: 'N' }
                ]
            },
            {
                text: "직업을 고르는 가장 중요한 기준은?",
                options: [
                    { text: '누가 봐도 "성공했다"고 할 만한, 현실적인 성취와 보상이 따르는 직업.', score: 'S' },
                    { text: '다른 사람들과 서로 돕고 살아서 \'넌 꼭 필요한 사람이야\'라는 말을 들을 수 있는 직업.', score: 'neutral' },
                    { text: '나의 남다른 개성을 표현하며, 평범하지 않은 이상을 실현할 수 있는 직업.', score: 'N' }
                ]
            },
            {
                text: "처음 해보는 프로젝트, 어떻게 시작할까?",
                options: [
                    { text: '"일단 계획부터 짜자." 앞으로 생길 수 있는 문제들을 미리 다 생각해보고, 구체적이고 현실적인 계획부터 세운다.', score: 'S' },
                    { text: '"핵심 정보가 뭐지?" 이 프로젝트의 기본 원리나 데이터를 객관적으로 파악하는 게 먼저다.', score: 'neutral' },
                    { text: '"와, 이걸 하면 뭐가 가능해질까?" 이 일이 가져올 신나는 미래와 새로운 가능성을 상상하는 것부터 시작한다.', score: 'N' }
                ]
            },
            {
                text: "복잡한 문제를 풀어야 할 때...",
                options: [
                    { text: '내가 원래 알던 공식이나, 가장 안전하고 검증된 방법으로 차근차근 접근한다.', score: 'S' },
                    { text: '문제 전체의 구조를 파악하려고, 한 발짝 떨어져서 체계적으로 분석부터 한다.', score: 'neutral' },
                    { text: '"혹시 이렇게 하면?" 여러 방법을 막 연결해보다가, 직감적으로 떠오르는 새로운 풀이법을 시도한다.', score: 'N' }
                ]
            },
            {
                text: "미래에 대해 친구와 이야기한다면?",
                options: [
                    { text: '"안정적인 직장에, 내 집 마련하려면..." 예측 가능한 미래를 위한 구체적인 계획에 대해 이야기한다.', score: 'S' },
                    { text: '"미래엔 인공지능이 이렇게 된대." 앞으로 현실에 해당 기술이 어떻게 적용되는지 새로운 지식에 대해 이야기한다.', score: 'neutral' },
                    { text: '"나중엔 세계 일주도 하고..." 앞으로 경험할 신나고 재밌는 일들을 상상하며 이야기한다.', score: 'N' }
                ]
            },
            {
                text: "갑자기 이사나 부서 이동을 하게 됐다.",
                options: [
                    { text: '"어쩌겠어, 부당하지 않으니 맞춰 살아야지." 바뀐 환경에 순응하며, 현실적인 부분에 적응하려고 노력한다.', score: 'S' },
                    { text: '"그래서 나한테 좋은 건 뭔데?" 이 변화를 내가 직접 주도할 수 있는지, 나에게 이득인지부터 빠르게 판단한다.', score: 'neutral' },
                    { text: '"이게 과연 옳은 방향일까?" 이 변화가 내가 생각하는 이상적인 모습에 맞는지, 더 나은 원칙은 없는지 고민한다.', score: 'N' }
                ]
            },
            {
                text: "인생 계획을 세울 때 가장 중요한 것은?",
                options: [
                    { text: '복잡한 건 머리 아프다. 그냥 지금처럼 마음 편하고 안정적인 현실을 유지하는 것.', score: 'S' },
                    { text: '내가 원하는 걸 내 힘으로 얻기 위해, 현실에서 어떻게 내 영향력을 키울지 고민하거나 상상하는 것.', score: 'neutral' },
                    { text: '내가 꿈꾸는 가장 완벽하고 이상적인 삶의 모습, 그 유토피아를 어떻게 이룰지 생각하는 것.', score: 'N' }
                ]
            },
            {
                text: "내가 생각하는 '인생 성공'이란?",
                options: [
                    { text: '큰 문제 없이 주변과 잘 지내며, 마음 편하고 안정적인 하루하루를 보내는 것.', score: 'S' },
                    { text: '내가 원하는 걸 내 힘으로 얻고, 이 세상에 내 존재감을 증명하는 것.', score: 'neutral' },
                    { text: '나만의 신념으로 더 나은 세상을 만드는, 나의 이상을 현실로 만드는 것.', score: 'N' }
                ]
            }
        ]
    },
    phase3: {
        title: "Phase 3 : 무엇을 기준으로 결정할까?",
        questions: [
            {
                text: "친구가 만든 결과물이 솔직히 별로다.",
                options: [
                    { text: '"목표 달성하려면, 이 부분은 이렇게 고치는 게 효율적이야." 친구 기분보다는 결과물의 완성도를 위해 객관적으로 말해준다.', score: 'T' },
                    { text: '"음, 솔직히 좀 실망인데..." 내가 느낀 감정을 솔직하게 표현하는 편이다.', score: 'neutral' },
                    { text: '일단 "와, 이 부분 진짜 잘했다!" 하고 칭찬부터 한 뒤, 아쉬운 점은 "여기는 살짝 바꿔보면 어떨까?" 하고 조심스럽게 말한다.', score: 'F' }
                ]
            },
            {
                text: "중요한 결정을 해야 할 때, 나는?",
                options: [
                    { text: '감정은 일단 접어두고, 가장 이성적이고 성공 확률 높은 길이 무엇인지 냉정하게 분석한다.', score: 'T' },
                    { text: '이 논리적인 결정이 내 마음에 어떤 영향을 미치는지 깊이 생각한다.', score: 'neutral' },
                    { text: '이 결정 때문에 다른 사람들이 상처받지 않을지, 모두에게 좋은 결과가 뭔지 먼저 생각한다.', score: 'F' }
                ]
            },
            {
                text: "시험에 떨어졌다. 이때 내 반응은?",
                options: [
                    { text: '슬퍼할 시간에 실패 원인을 분석하고, 다음 시험 합격 계획을 바로 세운다.', score: 'T' },
                    { text: '일단 시험에 떨어졌다는 사실을 받아들인다. 하지만 슬픈 감정을 숨길 수 없으니 그 감정을 온전히 느껴야 다음에 더 잘 된다.', score: 'neutral' },
                    { text: '"괜찮아, 다음에 더 잘 보면 되지!" 친구들 만나서 맛있는 거 먹고 훌훌 털어버리려 한다.', score: 'F' }
                ]
            },
            {
                text: "말이 전혀 안 통하는 사람과 대화할 때.",
                options: [
                    { text: '감정싸움은 피한다. 상대방 말의 논리적 허점을 사실과 팩트로 차분하게 짚어준다.', score: 'T' },
                    { text: '"도대체 왜 저러는 거지?" 상대방의 숨은 의도를 합리적으로 의심하면서 불안해지고, 날카롭게 반응한다.', score: 'neutral' },
                    { text: '"하하, 그런 생각도 할 수 있군요." 논쟁으로 분위기 망치기 싫어서 그냥 웃어넘긴다.', score: 'F' }
                ]
            },
            {
                text: "친구가 울면서 힘들다고 찾아왔다.",
                options: [
                    { text: '일단 진정시키고, "그래서 문제가 뭔데?" 하고 해결책을 찾아주기 위해 객관적으로 상황을 분석한다.', score: 'T' },
                    { text: '친구의 불안한 마음에 감정 이입해서, "어떡해..." 하면서 같이 걱정하면서 이성적으로도 생각하여 최악의 상황에 대비한다.', score: 'neutral' },
                    { text: '"다 잘 될 거야!" 일단 긍정적인 말로 위로부터 해주고, 기분 풀 만한 재밌는 얘기를 꺼낸다.', score: 'F' }
                ]
            },
            {
                text: "불확실한 미래를 생각하면 드는 생각은?",
                options: [
                    { text: '미래를 예측하려면 정보가 필요하다. 관련 데이터를 최대한 모아서 여러 시나리오를 분석해본다.', score: 'T' },
                    { text: '\'앞으로 큰일 나면 어쩌지?\' 하는 걱정스러운 감정부터 들고, 그러면서 위험에 대비할 확실하게 효율적인 계획을 세워야만 안심이 된다.', score: 'neutral' },
                    { text: '어차피 알 수 없는 거, 신나고 재밌는 일만 가득할 거라고 믿는다. 현재를 즐기는 게 최고!', score: 'F' }
                ]
            },
            {
                text: "우리 팀이 점점 산으로 가는 것 같다.",
                options: [
                    { text: '"이건 원칙에 어긋납니다." 뭐가 왜 잘못됐는지 정확하게 지적하고 올바른 방향으로 이끈다.', score: 'T' },
                    { text: '"아, 답답해! 이건 아니잖아요!" 화가 나서 누가 책임자인지 따지고, 상황을 바로잡으려 논리적인 근거와 함께 목소리를 높인다.', score: 'neutral' },
                    { text: '괜히 나섰다가 분위기 싸해질까 봐, 일단은 심각해지기 전까지 조용히 지켜본다.', score: 'F' }
                ]
            },
            {
                text: "다른 사람의 실수를 발견했을 때.",
                options: [
                    { text: '옳고 그름은 분명히 해야 한다. 뭐가 문제였는지 객관적으로 분석해서 고치라고 조언한다.', score: 'T' },
                    { text: '그 실수 때문에 생긴 문제에 화가 나서 "누구 잘못이야!" 하고 책임을 분명히 하고 싶다.', score: 'neutral' },
                    { text: '"사람이 실수할 수도 있지." 상대방이 민망할까 봐 그냥 모른 척 넘어가 준다.', score: 'F' }
                ]
            },
            {
                text: "새해 목표를 세울 때 가장 중요한 것은?",
                options: [
                    { text: '나의 신념에 맞는, 완벽하고 올바른 목표를 세우고 체계적으로 달성 계획을 짠다.', score: 'T' },
                    { text: '내 힘으로 세상을 움직일 수 있는, 도전적이고 야망 있는 목표를 세운다.', score: 'neutral' },
                    { text: '스트레스 받지 않고, 마음 편하게 즐길 수 있는 목표를 세운다.', score: 'F' }
                ]
            }
        ]
    },
    phase4: {
        title: "Phase 4 : 어떤 라이프 스타일을 선호할까?",
        questions: [
            {
                text: "나의 주말 풍경은?",
                options: [
                    { text: '그날그날 꽂히는 거 하면서 보낸다. 계획? 그게 뭐야?', score: 'P' },
                    { text: '대충 뭐 할지는 생각해두지만, 친구가 갑자기 부르면 바로 나간다.', score: 'neutral' },
                    { text: '시간 낭비는 금물. 토요일 아침부터 일요일 밤까지 계획대로 착착 움직인다.', score: 'J' }
                ]
            },
            {
                text: "여행지에서의 나는?",
                options: [
                    { text: '발길 닿는 대로, 마음 가는 대로! 정처 없이 걷다가 우연히 맛집을 발견하는 게 진짜 여행이지.', score: 'P' },
                    { text: '\'이건 꼭 봐야 해!\' 하는 것 몇 개만 정해두고, 나머지는 그날 컨디션 따라 움직인다.', score: 'neutral' },
                    { text: '분 단위로 쪼갠 완벽한 계획표는 필수! 계획대로 모든 걸 해내야 뿌듯하다.', score: 'J' }
                ]
            },
            {
                text: "과제 마감 기한이 다가올 때.",
                options: [
                    { text: '마감 직전에 초인적인 힘이 솟아난다! 그때 폭풍처럼 몰아쳐서 끝내는 편.', score: 'P' },
                    { text: '일마다 다르다. 중요한 건 미리 하고, 아닌 건 막판에 한다.', score: 'neutral' },
                    { text: '스트레스받기 싫어서 미리 계획 세우고, 여유롭게 끝내 놓는다.', score: 'J' }
                ]
            },
            {
                text: "메뉴 고를 때 내 모습은?",
                options: [
                    { text: '주문 직전까지 메뉴판을 정독하며 고민한다. 그 순간 제일 당기는 걸 먹어야 후회가 없다.', score: 'P' },
                    { text: '늘 먹던 거나, 실패 없는 베스트 메뉴를 시킨다.', score: 'neutral' },
                    { text: '식당 가기 전에 이미 메뉴를 다 정해놓고 간다.', score: 'J' }
                ]
            },
            {
                text: "내 책상 상태는 보통...",
                options: [
                    { text: '남들이 보기엔 혼돈의 카오스. 하지만 나만의 질서가 있어서 어디에 뭐가 있는지 다 안다.', score: 'P' },
                    { text: '평소엔 깔끔한데, 바빠지면 순식간에 난장판이 된다.', score: 'neutral' },
                    { text: '항상 모든 물건이 제자리에! 각 잡혀 있어야 마음이 편하다.', score: 'J' }
                ]
            },
            {
                text: "결정을 내려야 하는 순간!",
                options: [
                    { text: '"좀 더 생각해볼게." 더 좋은 선택지가 있을지 모르니, 최대한 가능성을 열어둔다.', score: 'P' },
                    { text: '사소한 건 바로 결정! 중요한 건 신중하게!', score: 'neutral' },
                    { text: '애매한 상황을 싫어한다. 빨리 결정하고 다음 일로 넘어가는 게 좋다.', score: 'J' }
                ]
            },
            {
                text: "새로운 정보를 들었을 때 나는?",
                options: [
                    { text: '"오, 그런 관점도 있구나." 결론 내리기보다 다양한 생각을 접하는 과정이 즐겁다.', score: 'P' },
                    { text: '\'저거 믿을 만한 소스인가?\' 일단 정보의 출처부터 확인한다.', score: 'neutral' },
                    { text: '머릿속 폴더에 \'착착\' 정리한다. 기존에 알던 지식과 연결해서 분류해야 직성이 풀린다.', score: 'J' }
                ]
            },
            {
                text: "나의 인생을 한마디로 표현한다면?",
                options: [
                    { text: '"인생은 예측 불가능한 탐험!" 언제나 새로운 경험을 찾아 유연하게 살아간다.', score: 'P' },
                    { text: '"인생은 균형 잡기 게임!" 계획과 즉흥, 일과 휴식 사이에서 밸런스를 맞추려 노력한다.', score: 'neutral' },
                    { text: '"인생은 내가 만드는 설계도!" 목표를 세우고 계획대로 실행하며 내 삶을 이끌어간다.', score: 'J' }
                ]
            }
        ]
    }
};

// 타이브레이커 질문
const tiebreakerQuestions = {
    'E/I': [
        {
            text: "텅 빈 주말이 생겼을 때, 나의 솔직한 속마음은?",
            options: [
                { text: '"신난다! 누구든 만나서 놀아야지!"', score: 'E' },
                { text: '"신난다! 드디어 혼자 쉴 수 있겠다!"', score: 'I' }
            ]
        },
        {
            text: "처음 만난 사람과의 어색한 침묵이 흐를 때, 나는?",
            options: [
                { text: '내가 먼저 아무 말이나 던져서 분위기를 깨는 편이다.', score: 'E' },
                { text: '상대방이 먼저 말을 걸어주길 기다리는 편이다.', score: 'I' }
            ]
        },
        {
            text: "스트레스를 풀 때, 더 효과적인 방법은?",
            options: [
                { text: '친구들과 시끄벅적하게 수다 떨며 잊어버리기', score: 'E' },
                { text: '조용한 곳에서 혼자만의 시간을 가지며 생각 정리하기', score: 'I' }
            ]
        }
    ],
    'S/N': [
        {
            text: "영화를 보고 나서 친구와 이야기할 때, 나는 주로?",
            options: [
                { text: '배우의 연기나 영상미, 실제 줄거리에 대해 이야기한다.', score: 'S' },
                { text: '영화가 담고 있는 숨은 의미나 감독의 의도를 추측하며 이야기한다.', score: 'N' }
            ]
        },
        {
            text: "친구가 \"나 어제 이상한 꿈 꿨어\"라고 말할 때, 나의 첫 반응은?",
            options: [
                { text: '"무슨 꿈? 어떤 내용이었는데?" (사실 관계 확인)', score: 'S' },
                { text: '"오, 그게 무슨 의미일까?" (의미와 상징 해석)', score: 'N' }
            ]
        },
        {
            text: "대화할 때 더 편안한 스타일은?",
            options: [
                { text: '그래서 결론이 뭔데? 경험과 사실을 바탕으로 한 명확한 대화', score: 'S' },
                { text: '만약에~ 라면? 아이디어와 가능성을 넘나드는 상상 가득한 대화', score: 'N' }
            ]
        }
    ],
    'T/F': [
        {
            text: "친구가 연인과 헤어졌다며 울고 있을 때, 나는?",
            options: [
                { text: '일단 왜 헤어졌는지, 문제의 원인이 무엇인지부터 물어본다.', score: 'T' },
                { text: '"얼마나 힘들어..." 하고 말없이 등을 토닥여주며 위로부터 한다.', score: 'F' }
            ]
        },
        {
            text: "더 듣기 싫은 말은?",
            options: [
                { text: '"너 진짜 차갑다."', score: 'F' },
                { text: '"너 진짜 멍청해."', score: 'T' }
            ]
        },
        {
            text: "중요한 결정을 할 때, 마지막 순간에 더 신경 쓰이는 것은?",
            options: [
                { text: '이 결정이 과연 합리적이고 효율적인가?', score: 'T' },
                { text: '이 결정 때문에 상처받는 사람은 없을까?', score: 'F' }
            ]
        }
    ],
    'J/P': [
        {
            text: "여행 D-1, 나는 보통?",
            options: [
                { text: '시간대별 계획, 준비물 리스트까지 다 체크하고 잠든다.', score: 'J' },
                { text: '"가서 정하면 되지~" 대충 짐만 싸놓고 설레하며 잠든다.', score: 'P' }
            ]
        },
        {
            text: "일을 할 때, 더 선호하는 방식은?",
            options: [
                { text: '명확한 규칙과 마감일 안에서 안정적으로 일하기', score: 'J' },
                { text: '자유로운 환경에서 내 방식대로 유연하게 일하기', score: 'P' }
            ]
        },
        {
            text: "둘 중 더 불편한 상황은?",
            options: [
                { text: '모든 게 확정되고 더 이상 바꿀 수 없는 상황', score: 'P' },
                { text: '아무것도 정해진 게 없고 모든 게 불확실한 상황', score: 'J' }
            ]
        }
    ]
};

// MBTI 결과 데이터
const mbtiResults = {
    'INTJ': {
        title: '용의주도한 전략가',
        description: '당신은 통찰력과 논리력이 매우 뛰어난 사람이에요. 복잡한 문제의 본질을 꿰뚫어 보고, 미래를 예측하여 큰 그림을 그리는 데 천재적인 재능이 있죠. 당신의 머릿속에는 세상을 더 나은 곳으로 만들 수 있는 수많은 아이디어와 전략이 가득합니다. 한 걸음 물러나 세상을 조망하는 당신의 지혜는 조직에 없어서는 안 될 등대와 같아요.'
    },
    'INTP': {
        title: '논리적인 사색가',
        description: '당신은 지적 호기심이 왕성한 아이디어 뱅크입니다! 세상의 원리를 파고들고, 누구도 생각지 못한 새로운 가능성을 탐구하는 것을 즐기죠. 당신의 독창적이고 논리적인 사고는 기존의 틀을 깨고 혁신을 가져옵니다. 주변 사람들은 당신의 번뜩이는 아이디어와 지식의 깊이에 늘 감탄한답니다.'
    },
    'ENTJ': {
        title: '대담한 통솔자',
        description: '당신은 타고난 리더입니다! 목표를 향한 강한 의지와 카리스마로 사람들을 이끌어 불가능해 보이는 일도 현실로 만들어내죠. 당신의 뛰어난 전략적 사고와 결단력은 팀 전체에 활력과 확신을 불어넣습니다. 당신과 함께라면 어떤 목표든 달성할 수 있다는 믿음이 생겨요.'
    },
    'ENTP': {
        title: '뜨거운 논쟁을 즐기는 변론가',
        description: '당신은 유쾌하고 지적인 에너지가 넘치는 사람입니다. 고정관념에 얽매이지 않고, 새로운 아이디어를 탐색하며 지적인 도전을 즐기죠. 당신과의 대화는 언제나 흥미롭고, 사람들의 생각의 폭을 넓혀줍니다. 당신의 재치와 창의력은 주변에 신선한 영감과 웃음을 선사해요.'
    },
    'INFJ': {
        title: '선의의 옹호자',
        description: '당신은 따뜻한 마음과 깊은 통찰력을 지닌 사람이에요. 조용하지만 강한 신념을 가지고, 세상을 더 나은 곳으로 만들기 위해 노력하죠. 사람들의 잠재력을 꿰뚫어 보고, 그들이 성장하도록 돕는 데서 큰 기쁨을 느낍니다. 당신의 진심 어린 격려는 누군가의 인생을 바꾸는 힘을 가지고 있답니다.'
    },
    'INFP': {
        title: '열정적인 중재자',
        description: '당신은 따뜻하고 순수한 마음을 가진 이상주의자입니다. 자신의 가치와 신념을 중요하게 여기며, 진실하고 의미 있는 삶을 살고자 노력하죠. 당신의 깊은 공감 능력과 창의력은 주변 사람들의 마음을 움직이고, 세상에 따뜻한 온기를 더합니다. 당신 곁에 있으면 세상이 더 아름답게 느껴져요.'
    },
    'ENFJ': {
        title: '정의로운 사회운동가',
        description: '당신은 사람들에게 긍정적인 영향력을 주는 타고난 리더입니다. 넘치는 카리스마와 공감 능력으로 사람들의 마음을 얻고, 그들이 공동의 목표를 향해 나아가도록 이끌죠. 당신의 열정과 진심은 주변 사람들에게 깊은 영감을 주며, 긍정적인 변화를 만들어내는 원동력이 됩니다.'
    },
    'ENFP': {
        title: '재기발랄한 활동가',
        description: '당신은 긍정 에너지와 호기심이 가득한 자유로운 영혼입니다. 사람들과 어울리는 것을 좋아하고, 새롭고 재미있는 가능성을 탐색하는 데 큰 기쁨을 느끼죠. 당신의 밝고 활기찬 에너지는 주변 사람들에게도 전파되어, 어디서나 즐겁고 창의적인 분위기를 만들어냅니다. 당신은 그 자체로 행복 바이러스예요!'
    },
    'ISTJ': {
        title: '청렴결백한 논리주의자',
        description: '당신은 책임감과 성실함의 아이콘입니다. 한번 맡은 일은 빈틈없이 완벽하게 해내며, 약속은 반드시 지키는 신뢰의 상징이죠. 당신의 꾸준함과 꼼꼼함은 조직의 튼튼한 기둥 역할을 합니다. 당신 덕분에 모두가 안심하고 자신의 일에 집중할 수 있답니다.'
    },
    'ISFJ': {
        title: '용감한 수호자',
        description: '당신은 따뜻하고 헌신적인 마음을 가진 사람입니다. 주변 사람들을 세심하게 챙기고, 그들이 필요할 때 묵묵히 곁을 지켜주는 든든한 존재죠. 당신의 섬세한 배려와 꾸준한 노력은 주변 사람들에게 큰 안정감과 감동을 줍니다. 당신은 세상의 소금 같은 존재예요.'
    },
    'ESTJ': {
        title: '엄격한 관리자',
        description: '당신은 뛰어난 현실 감각과 조직력을 갖춘 사람입니다. 무엇이 현실적으로 가능한지 빠르게 판단하고, 체계적인 계획을 세워 목표를 효율적으로 달성하죠. 당신의 명확한 판단력과 추진력은 혼란스러운 상황을 깔끔하게 정리하고, 모두를 성공의 길로 이끕니다.'
    },
    'ESFJ': {
        title: '사교적인 외교관',
        description: '당신은 따뜻한 관심과 사교성으로 주변 사람들을 하나로 묶는 역할을 합니다. 사람들에게 인기가 많고, 분위기를 밝고 화목하게 만드는 데 탁월한 재능이 있죠. 당신의 친절함과 현실적인 조언은 주변 사람들에게 큰 힘이 되며, 당신은 언제나 모임의 중심에 있습니다.'
    },
    'ISTP': {
        title: '만능 재주꾼',
        description: '당신은 뛰어난 손재주와 냉철한 분석력을 동시에 갖춘 사람입니다. 도구를 다루거나 위기 상황을 해결하는 데 놀라운 능력을 발휘하죠. 말보다는 행동으로 실력을 증명하며, 어떤 문제든 차분하고 효율적으로 해결하는 당신의 모습은 정말 멋집니다.'
    },
    'ISFP': {
        title: '호기심 많은 예술가',
        description: '당신은 따뜻한 감성과 예술적인 감각을 지닌 사람입니다. 현재의 순간을 온전히 즐길 줄 알며, 자신만의 독특한 방식으로 세상을 아름답게 만들죠. 당신의 겸손하고 유연한 태도, 그리고 삶을 즐기는 모습은 주변 사람들에게 새로운 영감과 여유를 선물합니다.'
    },
    'ESTP': {
        title: '모험을 즐기는 사업가',
        description: '당신은 넘치는 에너지와 뛰어난 임기응변 능력을 가진 사람입니다. 스릴과 도전을 즐기며, 어떤 위기 상황에서도 기회를 포착해내는 능력이 탁월하죠. 당신의 유머 감각과 사교성은 사람들을 끌어당기며, 당신과 함께라면 어떤 일이든 흥미진진한 모험이 됩니다.'
    },
    'ESFP': {
        title: '자유로운 영혼의 연예인',
        description: '당신은 타고난 스타입니다! 사람들의 주목을 받는 것을 즐기고, 어디서나 유쾌하고 긍정적인 에너지를 뿜어내죠. 당신의 뛰어난 사교성과 재치는 주변 사람들을 항상 즐겁게 만듭니다. 당신이 있는 곳은 언제나 웃음과 활기가 넘치는 파티장이 된답니다.'
    }
};

// 세부 지표 결과 텍스트
const dimensionDetailsText = {
    'E/I': {
        A_label: '외향(E) 우세',
        B_label: '내향(I) 우세',
        balanced_label: '외향(E) · 내향(I) 균형',
        A: '당신은 다른 사람들과 교류하고 세상과 활발하게 소통하며 에너지를 얻는 사람입니다. 행동으로 생각을 표현하고, 직접 부딪히며 배우는 것을 즐기죠. 당신의 활기차고 적극적인 에너지는 주변에 긍정적인 활력을 불어넣습니다.',
        B: '당신은 자신의 내면 세계에 집중하며 깊이 있는 시간을 보낼 때 에너지를 얻습니다. 혼자 또는 소수의 사람들과 의미 있는 관계를 맺으며 생각을 정리하고 재충전하죠. 당신의 신중함과 깊이 있는 통찰력은 세상을 더 풍요롭게 만듭니다.',
        balanced: '당신은 상황에 따라 에너지를 조절하는 카멜레온 같은 매력을 가졌습니다. 때로는 사람들과 어울리며 \'사회적 외향성\'을 발휘하고, 때로는 혼자만의 시간을 즐기며 \'내면의 평화\'를 찾죠. 양쪽의 장점을 모두 활용할 줄 아는 당신은 어떤 환경에서든 유연하게 적응하는 능력이 뛰어납니다.'
    },
    'S/N': {
        A_label: '감각(S) 우세',
        B_label: '직관(N) 우세',
        balanced_label: '감각(S) · 직관(N) 균형',
        A: '당신은 현재에 집중하며, 오감을 통해 직접 경험한 구체적이고 현실적인 정보를 신뢰합니다. 사실에 기반하여 꼼꼼하게 일을 처리하는 당신의 능력은 아이디어를 실현 가능한 결과물로 만들어내는 데 큰 강점을 보입니다.',
        B: '당신은 나무보다는 숲을 보는 사람입니다. 현재의 사실 너머에 있는 가능성과 미래의 큰 그림을 보며 영감을 얻죠. 당신의 뛰어난 통찰력과 상상력은 아무도 보지 못하는 새로운 길을 발견하고 혁신을 이끌어냅니다.',
        balanced: '당신은 현실에 발을 딛고 미래를 꿈꾸는 사람입니다. 구체적인 데이터 속에서 미래의 가능성을 예측하고, 창의적인 아이디어를 현실적인 계획으로 만들어내는 능력이 탁월하죠. 나무와 숲을 함께 볼 줄 아는 당신의 시야는 매우 현실적이면서도 혁신적인 성과를 만들어냅니다.'
    },
    'T/F': {
        A_label: '사고(T) 우세',
        B_label: '감정(F) 우세',
        balanced_label: '사고(T) · 감정(F) 균형',
        A: '당신은 결정을 내릴 때 객관적인 사실과 논리적인 원칙을 중요하게 생각합니다. 감정에 휩쓸리기보다 이성적인 분석을 통해 가장 합리적이고 효율적인 결론을 내리죠. 당신의 명확하고 공정한 판단력은 문제 해결에 큰 힘을 발휘합니다.',
        B: '당신은 결정을 내릴 때 사람들과의 관계, 그리고 자신이 중요하게 생각하는 가치를 우선적으로 고려합니다. 다른 사람의 입장에 깊이 공감하며, 모두에게 좋은 방향으로 조화를 이끌어내죠. 당신의 따뜻한 마음은 공동체를 더 단단하게 만듭니다.',
        balanced: '당신은 머리와 가슴을 함께 사용하는 균형 잡힌 조언가입니다. 객관적인 분석을 하면서도 인간적인 배려를 놓치지 않는 \'따뜻한 이성\'을 가졌죠. 덕분에 당신은 상황을 냉철하게 판단하면서도, 사람들의 마음을 다치지 않게 하는 현명한 결정을 내릴 수 있습니다.'
    },
    'J/P': {
        A_label: '판단(J) 우세',
        B_label: '인식(P) 우세',
        balanced_label: '판단(J) · 인식(P) 균형',
        A: '당신은 목표를 세우고 체계적으로 계획하여 일을 처리하는 것을 선호합니다. 예측 가능하고 정돈된 환경에서 안정감을 느끼며, 결정을 내리고 일을 마무리 짓는 것에서 만족감을 얻죠. 당신의 추진력과 정리 능력은 삶을 효율적으로 이끌어갑니다.',
        B: '당신은 상황에 따라 유연하게 적응하며, 새로운 가능성을 위해 선택의 문을 열어두는 것을 선호합니다. 즉흥적이고 자율적인 환경에서 창의력을 발휘하며, 과정 자체를 즐기는 경향이 있죠. 당신의 유연함은 예상치 못한 상황에서 빛을 발합니다.',
        balanced: '당신은 상황에 맞춰 항해하는 유연한 탐험가입니다. 큰 목표와 계획은 세워두되, 세부적인 과정에서는 새로운 기회나 더 나은 방법을 발견하면 기꺼이 경로를 수정할 줄 알죠. 안정과 모험의 조화를 아는 당신은 계획성과 유연성을 모두 발휘하여 목표를 효과적으로 달성합니다.'
    }
};

// 전역 변수
let currentPhase = 1;
let currentQuestion = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
let answers = [];
let tiebreakerMode = false;
let tiebreakerIndex = 0;
let tiebreakerType = '';
let tiebreakerQueue = [];

// DOM 요소들
const screens = {
    start: document.getElementById('start-screen'),
    phase: document.getElementById('phase-screen'),
    tiebreaker: document.getElementById('tiebreaker-screen'),
    result: document.getElementById('result-screen'),
    allTypes: document.getElementById('all-types-screen'),
    typeDetail: document.getElementById('type-detail-screen')
};

// 이벤트 리스너 등록
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('start-btn').addEventListener('click', startTest);
    const startAllBtn = document.getElementById('view-all-types-btn-start');
    if (startAllBtn) startAllBtn.addEventListener('click', showAllTypes);
    document.getElementById('retake-btn').addEventListener('click', resetTest);
    document.getElementById('share-btn').addEventListener('click', shareResult);
    document.getElementById('view-all-types-btn').addEventListener('click', showAllTypes);
    document.getElementById('take-test-btn').addEventListener('click', startTest);
    document.getElementById('back-to-all-types-btn').addEventListener('click', showAllTypes);
    
    // MBTI 유형 버튼들에 이벤트 리스너 추가
    document.querySelectorAll('.mbti-type-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const mbtiType = this.getAttribute('data-type');
            showTypeDetail(mbtiType);
        });
    });
});

// 테스트 시작
function startTest() {
    showScreen('phase');
    loadQuestion();
}

// 화면 전환
function showScreen(screenName) {
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    screens[screenName].classList.add('active');
}

// 질문 로드
function loadQuestion() {
    const phaseKey = `phase${currentPhase}`;
    const phase = questions[phaseKey];
    
    if (!phase) {
        // 모든 Phase 완료, 결과 계산
        calculateResult();
        return;
    }
    
    const question = phase.questions[currentQuestion];
    
    // Phase 제목과 진행률 업데이트
    document.getElementById('phase-title').textContent = phase.title;
    document.getElementById('question-counter').textContent = `${currentQuestion + 1} / ${phase.questions.length}`;
    
    // 진행률 바 업데이트
    const progress = ((currentQuestion + 1) / phase.questions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    
    // 질문 텍스트 설정
    document.getElementById('question-text').textContent = question.text;
    
    // 선택지 생성
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerHTML = `<div class="option-text">${option.text}</div>`;
        
        optionElement.addEventListener('click', () => selectOption(option.score));
        optionsContainer.appendChild(optionElement);
    });
}

// 선택지 선택
function selectOption(score) {
    // 점수 계산
    if (score !== 'neutral') {
        scores[score]++;
    }
    
    // 답변 저장
    answers.push(score);
    
    // 다음 질문으로
    currentQuestion++;
    
    const phaseKey = `phase${currentPhase}`;
    const phase = questions[phaseKey];
    
    if (currentQuestion >= phase.questions.length) {
        // Phase 완료, 다음 Phase로
        currentPhase++;
        currentQuestion = 0;
        
        if (currentPhase > 4) {
            // 모든 Phase 완료
            calculateResult();
        } else {
            loadQuestion();
        }
    } else {
        loadQuestion();
    }
}

// 결과 계산
function calculateResult() {
    // 타이브레이커 확인
    const tiebreakers = [];
    
    if (scores.E === scores.I) {
        tiebreakers.push('E/I');
    }
    if (scores.S === scores.N) {
        tiebreakers.push('S/N');
    }
    if (scores.T === scores.F) {
        tiebreakers.push('T/F');
    }
    if (scores.J === scores.P) {
        tiebreakers.push('J/P');
    }
    
    if (tiebreakers.length > 0) {
        // 여러 지표를 순차적으로 처리하기 위한 큐 구성
        tiebreakerMode = true;
        tiebreakerQueue = tiebreakers.slice();
        tiebreakerType = tiebreakerQueue[0];
        tiebreakerIndex = 0;
        showTiebreaker();
    } else {
        // 바로 결과 표시
        showResult();
    }
}

// 타이브레이커 표시
function showTiebreaker() {
    showScreen('tiebreaker');
    
    const tiebreakerQuestion = tiebreakerQuestions[tiebreakerType][tiebreakerIndex];
    
    document.getElementById('tiebreaker-question-text').textContent = tiebreakerQuestion.text;
    
    const optionsContainer = document.getElementById('tiebreaker-options-container');
    optionsContainer.innerHTML = '';
    
    tiebreakerQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerHTML = `<div class="option-text">${option.text}</div>`;
        
        optionElement.addEventListener('click', () => selectTiebreakerOption(option.score));
        optionsContainer.appendChild(optionElement);
    });
}

// 타이브레이커 선택
function selectTiebreakerOption(score) {
    scores[score]++;
    tiebreakerIndex++;
    
    if (tiebreakerIndex >= tiebreakerQuestions[tiebreakerType].length) {
        // 현재 지표 타이브레이커 완료 → 다음 지표가 있으면 이어서 진행
        tiebreakerIndex = 0;
        tiebreakerQueue.shift();
        if (tiebreakerQueue.length > 0) {
            tiebreakerType = tiebreakerQueue[0];
            showTiebreaker();
        } else {
            // 모든 타이브레이커 완료
            tiebreakerMode = false;
            showResult();
        }
    } else {
        showTiebreaker();
    }
}

// 결과 표시
function showResult() {
    showScreen('result');
    
    // MBTI 유형 결정 (타이브레이커가 있었거나 명확한 차이가 있을 때)
    const eiScore = scores.E - scores.I;
    const snScore = scores.S - scores.N;
    const tfScore = scores.T - scores.F;
    const jpScore = scores.J - scores.P;
    
    // 각 지표별로 결정 (타이브레이커가 있었거나 명확한 차이가 있을 때)
    const ei = eiScore > 0 ? 'E' : 'I';
    const sn = snScore > 0 ? 'S' : 'N';
    const tf = tfScore > 0 ? 'T' : 'F';
    const jp = jpScore > 0 ? 'J' : 'P';
    
    const mbtiType = ei + sn + tf + jp;
    
    // 결과 표시
    document.getElementById('mbti-result').textContent = mbtiType;
    document.getElementById('result-title').textContent = mbtiResults[mbtiType].title;
    document.getElementById('result-description').textContent = mbtiResults[mbtiType].description;
    
    // 점수 표시
    updateScoreDisplay();

    // 세부 지표 결과 표시
    renderDimensionDetails({ eiScore, snScore, tfScore, jpScore });
}

// 점수 표시 업데이트
function updateScoreDisplay() {
    const maxScore = 9; // 각 지표당 최대 점수
    
    // E/I 점수
    const eiScore = scores.E - scores.I;
    const eiPercent = ((eiScore + maxScore) / (maxScore * 2)) * 100;
    document.getElementById('ei-score').style.width = `${eiPercent}%`;
    
    // 중간 표시 로직 (-3 ~ +3 범위일 때)
    let eiDisplay = `${eiScore > 0 ? '+' : ''}${eiScore}`;
    if (eiScore >= -2 && eiScore <= 2) {
        eiDisplay += ' (중간)';
    }
    document.getElementById('ei-value').textContent = eiDisplay;
    
    // S/N 점수
    const snScore = scores.S - scores.N;
    const snPercent = ((snScore + maxScore) / (maxScore * 2)) * 100;
    document.getElementById('sn-score').style.width = `${snPercent}%`;
    
    let snDisplay = `${snScore > 0 ? '+' : ''}${snScore}`;
    if (snScore >= -2 && snScore <= 2) {
        snDisplay += ' (중간)';
    }
    document.getElementById('sn-value').textContent = snDisplay;
    
    // T/F 점수
    const tfScore = scores.T - scores.F;
    const tfPercent = ((tfScore + maxScore) / (maxScore * 2)) * 100;
    document.getElementById('tf-score').style.width = `${tfPercent}%`;
    
    let tfDisplay = `${tfScore > 0 ? '+' : ''}${tfScore}`;
    if (tfScore >= -2 && tfScore <= 2) {
        tfDisplay += ' (중간)';
    }
    document.getElementById('tf-value').textContent = tfDisplay;
    
    // J/P 점수
    const jpScore = scores.J - scores.P;
    const jpPercent = ((jpScore + maxScore) / (maxScore * 2)) * 100;
    document.getElementById('jp-score').style.width = `${jpPercent}%`;
    
    let jpDisplay = `${jpScore > 0 ? '+' : ''}${jpScore}`;
    if (jpScore >= -2 && jpScore <= 2) {
        jpDisplay += ' (중간)';
    }
    document.getElementById('jp-value').textContent = jpDisplay;
}

// 세부 지표 결과 렌더링
function renderDimensionDetails({ eiScore, snScore, tfScore, jpScore }) {
    // -3..+3 사이를 균형으로 간주... 할려고 했으나 수정 사항 발생
    // 확률 계산한 결과 -3점 이상 3점 이하로 나올 확률은 78.8%(9개 질문 기준), 82.6%(8개 질문 기준)으로 나옵니다.
    // 따라서 -2점 이상 2점 이하로 설정하여 62.3%(9개 질문 기준), 65.3%(8개 질문 기준)으로 확률을 낮춥니다.
    const isBalanced = (v) => v >= -2 && v <= 2;

    // E/I
    const eiTrend = isBalanced(eiScore) ? dimensionDetailsText['E/I'].balanced_label : (eiScore > 0 ? dimensionDetailsText['E/I'].A_label : dimensionDetailsText['E/I'].B_label);
    const eiText = isBalanced(eiScore) ? dimensionDetailsText['E/I'].balanced : (eiScore > 0 ? dimensionDetailsText['E/I'].A : dimensionDetailsText['E/I'].B);
    document.getElementById('ei-trend').textContent = eiTrend;
    document.getElementById('ei-detail').textContent = eiText;

    // S/N
    const snTrend = isBalanced(snScore) ? dimensionDetailsText['S/N'].balanced_label : (snScore > 0 ? dimensionDetailsText['S/N'].A_label : dimensionDetailsText['S/N'].B_label);
    const snText = isBalanced(snScore) ? dimensionDetailsText['S/N'].balanced : (snScore > 0 ? dimensionDetailsText['S/N'].A : dimensionDetailsText['S/N'].B);
    document.getElementById('sn-trend').textContent = snTrend;
    document.getElementById('sn-detail').textContent = snText;

    // T/F
    const tfTrend = isBalanced(tfScore) ? dimensionDetailsText['T/F'].balanced_label : (tfScore > 0 ? dimensionDetailsText['T/F'].A_label : dimensionDetailsText['T/F'].B_label);
    const tfText = isBalanced(tfScore) ? dimensionDetailsText['T/F'].balanced : (tfScore > 0 ? dimensionDetailsText['T/F'].A : dimensionDetailsText['T/F'].B);
    document.getElementById('tf-trend').textContent = tfTrend;
    document.getElementById('tf-detail').textContent = tfText;

    // J/P
    const jpTrend = isBalanced(jpScore) ? dimensionDetailsText['J/P'].balanced_label : (jpScore > 0 ? dimensionDetailsText['J/P'].A_label : dimensionDetailsText['J/P'].B_label);
    const jpText = isBalanced(jpScore) ? dimensionDetailsText['J/P'].balanced : (jpScore > 0 ? dimensionDetailsText['J/P'].A : dimensionDetailsText['J/P'].B);
    document.getElementById('jp-trend').textContent = jpTrend;
    document.getElementById('jp-detail').textContent = jpText;
}

// 테스트 재시작
function resetTest() {
    currentPhase = 1;
    currentQuestion = 0;
    scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    answers = [];
    tiebreakerMode = false;
    tiebreakerIndex = 0;
    tiebreakerType = '';
    tiebreakerQueue = [];
    
    showScreen('start');
}

// 결과 공유
function shareResult() {
    const mbtiType = document.getElementById('mbti-result').textContent;
    const resultTitle = document.getElementById('result-title').textContent;
    
    const shareText = `나의 MBTI 유형은 ${mbtiType} (${resultTitle})입니다! 🎉\n\nMBTI 테스트를 해보세요: ${window.location.href}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'MBTI 테스트 결과',
            text: shareText,
            url: window.location.href
        });
    } else {
        // 클립보드에 복사
        navigator.clipboard.writeText(shareText).then(() => {
            alert('결과가 클립보드에 복사되었습니다!');
        }).catch(() => {
            alert('결과 공유에 실패했습니다.');
        });
    }
}

// 모든 MBTI 유형 보기
function showAllTypes() {
    showScreen('allTypes');
}

// 개별 MBTI 유형 상세 보기
function showTypeDetail(mbtiType) {
    showScreen('typeDetail');
    
    document.getElementById('detail-mbti-type').textContent = mbtiType;
    document.getElementById('detail-type-title').textContent = mbtiResults[mbtiType].title;
    document.getElementById('detail-type-description').textContent = mbtiResults[mbtiType].description;
}
