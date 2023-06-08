export const sido = {
  11: '서울',
  26: '부산',
  27: '대구',
  28: '인천',
  29: '광주',
  30: '대전',
  31: '울산',
  32: '세종',
  41: '경기',
  42: '강원',
  43: '충북',
  44: '충남',
  45: '전북',
  46: '전남',
  47: '경북',
  48: '경남',
  49: '제주',
} as Record<number, string>

export const sidoCodes = Object.keys(sido).map((key) => +key)

export const sigungu = {
  1100000: '서울본청',
  1111000: '서울종로구',
  1112000: '서울중구',
  1113000: '서울용산구',
  1114000: '서울성동구',
  1115000: '서울광진구',
  1116000: '서울동대문구',
  1117000: '서울중랑구',
  1118000: '서울성북구',
  1119000: '서울강북구',
  1120000: '서울도봉구',
  1121000: '서울노원구',
  1122000: '서울은평구',
  1123000: '서울서대문구',
  1124000: '서울마포구',
  1125000: '서울양천구',
  1126000: '서울강서구',
  1127000: '서울구로구',
  1128000: '서울금천구',
  1129000: '서울영등포구',
  1130000: '서울동작구',
  1131000: '서울관악구',
  1132000: '서울서초구',
  1133000: '서울강남구',
  1134000: '서울송파구',
  1135000: '서울강동구',
  2600000: '부산본청',
  2611000: '부산중구',
  2612000: '부산서구',
  2613000: '부산동구',
  2614000: '부산영도구',
  2615000: '부산진구',
  2616000: '부산동래구',
  2617000: '부산남구',
  2618000: '부산북구',
  2619000: '부산해운대구',
  2620000: '부산사하구',
  2621000: '부산금정구',
  2622000: '부산강서구',
  2623000: '부산연제구',
  2624000: '부산수영구',
  2625000: '부산사상구',
  2671000: '부산기장군',
  2700000: '대구본청',
  2711000: '대구중구',
  2712000: '대구동구',
  2713000: '대구서구',
  2714000: '대구남구',
  2715000: '대구북구',
  2716000: '대구수성구',
  2717000: '대구달서구',
  2771000: '대구달성군',
  2800000: '인천본청',
  2811000: '인천중구',
  2812000: '인천동구',
  2813000: '인천미추홀구',
  2814000: '인천연수구',
  2815000: '인천남동구',
  2816000: '인천부평구',
  2817000: '인천계양구',
  2818000: '인천서구',
  2871000: '인천강화군',
  2872000: '인천옹진군',
  2900000: '광주본청',
  2911000: '광주동구',
  2912000: '광주서구',
  2913000: '광주남구',
  2914000: '광주북구',
  2915000: '광주광산구',
  3000000: '대전본청',
  3011000: '대전동구',
  3012000: '대전중구',
  3013000: '대전서구',
  3014000: '대전유성구',
  3015000: '대전대덕구',
  3100000: '울산본청',
  3111000: '울산중구',
  3112000: '울산남구',
  3113000: '울산동구',
  3114000: '울산북구',
  3171000: '울산울주군',
  3200000: '세종본청',
  4100000: '경기본청',
  4111000: '경기수원시',
  4112000: '경기성남시',
  4113000: '경기의정부시',
  4114000: '경기안양시',
  4115000: '경기부천시',
  4116000: '경기광명시',
  4117000: '경기평택시',
  4118000: '경기동두천시',
  4119000: '경기안산시',
  4120000: '경기고양시',
  4121000: '경기과천시',
  4122000: '경기구리시',
  4123000: '경기남양주시',
  4124000: '경기오산시',
  4125000: '경기시흥시',
  4126000: '경기군포시',
  4127000: '경기의왕시',
  4128000: '경기하남시',
  4129000: '경기용인시',
  4130000: '경기파주시',
  4131000: '경기이천시',
  4132000: '경기안성시',
  4133000: '경기김포시',
  4134000: '경기화성시',
  4135000: '경기광주시',
  4136000: '경기양주시',
  4137000: '경기포천시',
  4138000: '경기여주시',
  4175000: '경기연천군',
  4177000: '경기가평군',
  4178000: '경기양평군',
  4200000: '강원본청',
  4211000: '강원춘천시',
  4212000: '강원원주시',
  4213000: '강원강릉시',
  4214000: '강원동해시',
  4215000: '강원태백시',
  4216000: '강원속초시',
  4217000: '강원삼척시',
  4271000: '강원홍천군',
  4272000: '강원횡성군',
  4273000: '강원영월군',
  4274000: '강원평창군',
  4275000: '강원정선군',
  4276000: '강원철원군',
  4277000: '강원화천군',
  4278000: '강원양구군',
  4279000: '강원인제군',
  4280000: '강원고성군',
  4281000: '강원양양군',
  4300000: '충북본청',
  4312000: '충북충주시',
  4313000: '충북제천시',
  4314000: '충북청주시',
  4372000: '충북보은군',
  4373000: '충북옥천군',
  4374000: '충북영동군',
  4375000: '충북진천군',
  4376000: '충북괴산군',
  4377000: '충북음성군',
  4378000: '충북단양군',
  4379000: '충북증평군',
  4400000: '충남본청',
  4411000: '충남천안시',
  4412000: '충남공주시',
  4413000: '충남보령시',
  4414000: '충남아산시',
  4415000: '충남서산시',
  4416000: '충남논산시',
  4417000: '충남계룡시',
  4418000: '충남당진시',
  4471000: '충남금산군',
  4473000: '충남부여군',
  4474000: '충남서천군',
  4475000: '충남청양군',
  4476000: '충남홍성군',
  4477000: '충남예산군',
  4478000: '충남태안군',
  4500000: '전북본청',
  4511000: '전북전주시',
  4512000: '전북군산시',
  4513000: '전북익산시',
  4514000: '전북정읍시',
  4515000: '전북남원시',
  4516000: '전북김제시',
  4571000: '전북완주군',
  4572000: '전북진안군',
  4573000: '전북무주군',
  4574000: '전북장수군',
  4575000: '전북임실군',
  4576000: '전북순창군',
  4577000: '전북고창군',
  4578000: '전북부안군',
  4600000: '전남본청',
  4611000: '전남목포시',
  4612000: '전남여수시',
  4613000: '전남순천시',
  4614000: '전남나주시',
  4615000: '전남광양시',
  4671000: '전남담양군',
  4672000: '전남곡성군',
  4673000: '전남구례군',
  4674000: '전남고흥군',
  4675000: '전남보성군',
  4676000: '전남화순군',
  4677000: '전남장흥군',
  4678000: '전남강진군',
  4679000: '전남해남군',
  4680000: '전남영암군',
  4681000: '전남무안군',
  4682000: '전남함평군',
  4683000: '전남영광군',
  4684000: '전남장성군',
  4685000: '전남완도군',
  4686000: '전남진도군',
  4687000: '전남신안군',
  4700000: '경북본청',
  4711000: '경북포항시',
  4712000: '경북경주시',
  4713000: '경북김천시',
  4714000: '경북안동시',
  4715000: '경북구미시',
  4716000: '경북영주시',
  4717000: '경북영천시',
  4718000: '경북상주시',
  4719000: '경북문경시',
  4720000: '경북경산시',
  4771000: '경북군위군',
  4772000: '경북의성군',
  4773000: '경북청송군',
  4774000: '경북영양군',
  4775000: '경북영덕군',
  4776000: '경북청도군',
  4777000: '경북고령군',
  4778000: '경북성주군',
  4779000: '경북칠곡군',
  4780000: '경북예천군',
  4781000: '경북봉화군',
  4782000: '경북울진군',
  4783000: '경북울릉군',
  4800000: '경남본청',
  4811000: '경남창원시',
  4813000: '경남진주시',
  4815000: '경남통영시',
  4816000: '경남사천시',
  4817000: '경남김해시',
  4818000: '경남밀양시',
  4819000: '경남거제시',
  4820000: '경남양산시',
  4871000: '경남의령군',
  4872000: '경남함안군',
  4873000: '경남창녕군',
  4874000: '경남고성군',
  4875000: '경남남해군',
  4876000: '경남하동군',
  4877000: '경남산청군',
  4878000: '경남함양군',
  4879000: '경남거창군',
  4880000: '경남합천군',
  4900000: '제주본청',
} as Record<number, string>

export const sigunguCodes = Object.keys(sigungu).map((key) => +key)

export const lofinRealms = {
  10: '일반공공행정',
  20: '공공질서및안전',
  50: '교육',
  60: '문화및관광',
  70: '환경',
  80: '사회복지',
  90: '보건',
  100: '농림해양수산',
  110: '산업·중소기업및에너지',
  120: '교통및물류',
  140: '국토및지역개발',
  150: '과학기술',
  160: '예비비',
  900: '기타',
} as Record<number, string>

export const lofinSectors = {
  11: '입법 및 선거관리',
  13: '지방행정·재정지원',
  14: '재정·금융',
  16: '일반행정',
  23: '경찰',
  25: '재난방재·민방위',
  26: '소방',
  51: '유아 및 초중등교육',
  52: '고등교육',
  53: '평생·직업교육',
  61: '문화예술',
  62: '관광',
  63: '체육',
  64: '문화재',
  65: '문화및관광일반',
  71: '상하수도·수질',
  72: '폐기물',
  73: '대기',
  74: '자연',
  75: '해양',
  76: '환경보호일반',
  81: '기초생활보장',
  82: '취약계층지원',
  84: '보육·가족및여성',
  85: '노인·청소년',
  86: '노동',
  87: '보훈',
  88: '주택',
  89: '사회복지일반',
  91: '보건의료',
  93: '식품의약안전',
  101: '농업·농촌',
  102: '임업·산촌',
  103: '해양수산·어촌',
  111: '산업금융지원',
  112: '산업기술지원',
  113: '무역 및 투자유치',
  114: '산업진흥·고도화',
  115: '에너지및자원개발',
  116: '산업·중소기업일반',
  121: '도로',
  123: '도시철도',
  124: '해운·항만',
  125: '항공·공항',
  126: '대중교통·물류등기타',
  141: '수자원',
  142: '지역및도시',
  143: '산업단지',
  151: '기술개발',
  152: '과학기술연구지원',
  153: '과학기술일반',
  161: '예비비',
  901: '기타',
} as Record<number, string>
