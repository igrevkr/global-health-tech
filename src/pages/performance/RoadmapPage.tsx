import { motion } from "framer-motion";
import { 
  Target, 
  Globe2, 
  FileCheck, 
  Users, 
  Building2, 
  Rocket,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

const roadmap2026 = [
  {
    category: "PoC 확대",
    icon: Globe2,
    title: "영국/중남미 실증 심화",
    description: "Bristol NHS 및 칠레·브라질 실증 사이트 확대 운영 및 데이터 확보",
    color: "bg-teal",
  },
  {
    category: "규제/인허가",
    icon: FileCheck,
    title: "FDA/CE 대응 가이드 제작",
    description: "동반 진출 기업을 위한 규제 대응 매뉴얼 및 인증 가이드라인 배포",
    color: "bg-coral",
  },
  {
    category: "글로벌 마케팅",
    icon: Rocket,
    title: "주요 의료 Expo 참가",
    description: "UK Med-Tech Expo, KOTRA 수출상담회(연 4회) 등 공동관 운영",
    color: "bg-navy",
  },
];

const roadmap2027 = [
  {
    category: "TARGET GOAL",
    icon: Target,
    title: "유럽권 PoC 2건 추가",
    description: "영국 외 유럽 주요국으로 실증 네트워크 확장 및 레퍼런스 확보",
    color: "bg-teal",
  },
  {
    category: "동반 성장",
    icon: Users,
    title: "10개사 동반 진출 달성",
    description: "서울/국내 의료기기 기업 10개사 해외 동반 진출 및 수출 주력 20개사 Pool 확보",
    color: "bg-coral",
  },
  {
    category: "유통/모델",
    icon: Building2,
    title: "공식 공급망 구축",
    description: "중남미 의료기관 공식 솔루션 공급망 확립 및 Joint-Package 모델 정착",
    color: "bg-navy",
  },
];

const centerUtilization = [
  {
    title: "Global Networking Hub",
    subtitle: "해외 바이어 초청 및 상담",
    items: [
      "영국/칠레/브라질 의료진 및 기관 담당자 초청",
      "센터 내 회의실을 활용한 온/오프라인 수출 상담회 개최",
    ],
    contribution: "센터의 공신력을 활용한 국제 협력 촉진 및 실질적 계약 성사 유도",
    icon: Globe2,
  },
  {
    title: "Co-Growth Platform",
    subtitle: "국내 기업 동반 지원",
    items: [
      "의료·헬스케어 기업 대상 공동 워크숍 및 IR 운영",
      "GBPL 보유 해외 네트워크와 국내 기업 간 미팅 주선",
    ],
    contribution: "서울 중소기업을 위한 해외 진출 거점 역할 수행 및 협력 프로그램 주도",
    icon: Users,
  },
  {
    title: "Digital Content Studio",
    subtitle: "공동 마케팅 및 홍보",
    items: [
      "센터 내 S-LIVE 스튜디오 활용 솔루션 소개 영상 제작",
      "해외 배포용 영문/현지어 홍보 콘텐츠 제작",
    ],
    contribution: "센터 디지털 인프라 활용률 제고 및 공동 홍보 콘텐츠 제작 표준 확립",
    icon: Rocket,
  },
  {
    title: "Knowledge Sharing",
    subtitle: "실증 결과 공유 및 확산",
    items: [
      "해외 병원 PoC 결과 발표회 및 중소기업 공동 IR",
      "성공 사례 백서 발간 및 센터 입주 기업 성과 홍보",
    ],
    contribution: "투자 유치 연계 및 실적 홍보 극대화로 센터 대외 인지도 및 브랜드 가치 제고",
    icon: FileCheck,
  },
];

export default function RoadmapPage() {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-teal/20 text-teal rounded-full text-sm font-medium mb-6">
              STRATEGY ROADMAP
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              2026-2027 수출 가속화 전략
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              센터 입주 후 단계별 확장 및 서울 중소기업 동반 성장을 위한 로드맵
            </p>
            <div className="mt-8 inline-block bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <p className="text-sm text-gray-300">
                <span className="font-bold text-white">센터 공공성 기여 목표:</span> 단순 입주를 넘어, 서울 중소기업의 글로벌 진출 성공 사례를 체계적으로 만들어가겠습니다.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-off-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* 2026 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <span className="font-mono text-6xl font-bold text-navy">2026</span>
                <h2 className="font-display text-2xl font-bold text-navy mt-2">
                  {t("roadmap.2026.title")}
                </h2>
                <div className="w-full h-1 bg-teal mt-4" />
              </div>

              <div className="space-y-6">
                {roadmap2026.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-teal uppercase tracking-wider">
                          {item.category}
                        </span>
                        <h3 className="font-semibold text-navy mt-1 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 2027 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <span className="font-mono text-6xl font-bold text-teal">2027</span>
                <h2 className="font-display text-2xl font-bold text-navy mt-2">
                  {t("roadmap.2027.title")}
                </h2>
                <div className="w-full h-1 bg-navy mt-4" />
              </div>

              <div className="space-y-6">
                {roadmap2027.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-coral uppercase tracking-wider">
                          {item.category}
                        </span>
                        <h3 className="font-semibold text-navy mt-1 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Commitments */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-teal uppercase tracking-wider">{t("roadmap.commitment.badge")}</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mt-2 mb-4">
              {t("roadmap.commitment.title")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {commitments.map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <commitment.icon className="w-8 h-8 text-teal" />
                </div>
                <span className="text-sm text-teal font-medium">{commitment.date}</span>
                <h3 className="font-display text-xl font-bold text-navy mt-2 mb-3">
                  {commitment.title}
                </h3>
                <p className="text-gray-600 text-sm">{commitment.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Center Utilization */}
      <section className="py-24 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-teal uppercase tracking-wider">CENTER UTILIZATION</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
              센터 활용 계획 및 활성화 기여
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              센터 인프라를 활용한 글로벌 수출 허브 구축 및 서울 중소기업 상생 전략
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {centerUtilization.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-teal/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-teal text-sm">{item.subtitle}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">주요 실행 계획</p>
                  <div className="space-y-2">
                    {item.items.map((listItem) => (
                      <div key={listItem} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{listItem}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">센터 활성화 기여</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.contribution}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-teal/20 to-teal/10 rounded-2xl p-8 max-w-3xl mx-auto border border-teal/30">
              <p className="text-white text-xl font-bold mb-3">
                센터를 '글로벌 수출 협력의 구심점'으로
              </p>
              <p className="text-gray-300 leading-relaxed">
                단순 공간 활용을 넘어, 서울 중소기업이 함께 성장하는 오픈 이노베이션 플랫폼을 만들겠습니다.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-teal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Join Us on This Journey
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Partner with GBPL to accelerate your global market entry and be part of 
              our mission to support Korean health tech innovation worldwide.
            </p>
            <Button asChild size="lg" className="bg-white text-teal hover:bg-gray-100">
              <Link to="/contact">
                Start Your Partnership
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
