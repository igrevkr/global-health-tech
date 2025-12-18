import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Brain, 
  Globe2, 
  Rocket, 
  Building2, 
  TrendingUp,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import GlobalNetworkMap from "@/components/home/GlobalNetworkMap";
import TrustIndicators from "@/components/home/TrustIndicators";
import FinancialChart from "@/components/home/FinancialChart";
import GoogleMap from "@/components/ui/GoogleMap";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HomePage() {
  const { t } = useLanguage();

  const valueProps = [
    {
      icon: Brain,
      title: t("value.ai.title"),
      description: t("value.ai.description"),
      color: "bg-teal"
    },
    {
      icon: Globe2,
      title: t("value.network.title"),
      description: t("value.network.description"),
      color: "bg-coral"
    },
    {
      icon: Rocket,
      title: t("value.export.title"),
      description: t("value.export.description"),
      color: "bg-navy"
    }
  ];

  const painPoints = [
    {
      problem: t("problem1"),
      solution: t("solution1")
    },
    {
      problem: t("problem2"),
      solution: t("solution2")
    },
    {
      problem: t("problem3"),
      solution: t("solution3")
    }
  ];
  return (
    <Layout>
      {/* Hero Section - Slide 1 */}
      <section className="relative min-h-screen bg-white overflow-hidden flex items-center">
        <div className="absolute top-4 right-8 text-xs text-gray-400 uppercase tracking-wider">
          GLOBAL MARKETING CENTER STRATEGY REPORT
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-12">
                <p className="text-navy text-sm mb-4 px-4 py-2 bg-gray-100 rounded-full inline-block">2025 Seoul SBA Strategic Proposal</p>
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-navy leading-tight mb-8">
                  글로벌마케팅센터<br />
                  입주 전략 보고서
                </h1>
              </div>
              
              <div className="space-y-4 mb-12">
                <p className="text-lg text-gray-600 leading-relaxed">
                  의료 AI 기술 기반의
                </p>
                <p className="text-2xl font-bold text-navy border-l-4 border-navy pl-4">
                  서울 중소기업 실증형 수출 지원 전문 기업
                </p>
              </div>

              <div className="mb-16 pb-8 border-b border-gray-200">
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold text-navy">지비피엘 주식회사</span>
                </p>
                <p className="text-gray-500 text-sm">
                  발표자 : 김수봉 (대표이사 · 13년차 풀스택 개발자)
                </p>
              </div>

              {/* Bottom Stats Grid */}
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start gap-2 mb-2">
                    <Building2 className="w-5 h-5 text-navy flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">FOUNDATION</p>
                      <p className="font-bold text-navy text-sm mb-1">2022. 06. 01 설립</p>
                      <p className="text-xs text-gray-500">안정적 기술 기반 성장</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-navy flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">CERTIFICATION</p>
                      <p className="font-bold text-navy text-xs mb-1">기업부설연구소 · 벤처기업</p>
                      <p className="text-xs text-gray-500">AI 바우처 공급기업 등록</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-navy flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">2024 REVENUE</p>
                      <p className="font-bold text-navy text-xl mb-1">18.8억 원 달성</p>
                      <p className="text-xs text-gray-500">전년 대비 52% 고속 성장</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Visual - Google Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[600px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <GoogleMap
                  apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ""}
                  center={{ lat: 20, lng: 0 }}
                  zoom={2}
                  markerTitle="GBPL Global Network"
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Business Section - Slide 3 */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-teal uppercase tracking-wider">CORE BUSINESS</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy mt-4 mb-6">
              GBPL 핵심 서비스 모델
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              국내 의료 기업의 글로벌 성공을 위한 4대 수출 주력 서비스
            </p>
            <p className="text-sm text-gray-500 mt-4 max-w-4xl mx-auto">
              단일 제품 판매가 아닌, 플랫폼 기반의 통합 수출 생태계를 구축합니다.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Service 1 */}
            <motion.div
              variants={fadeInUp}
              className="group bg-gradient-to-br from-teal/5 to-teal/10 rounded-2xl p-8 border border-teal/20 hover:border-teal hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-teal rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-3">
                AI 기반 의료영상 분석 플랫폼
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                대학병원 협력 자체 기술력 확보
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                  <span>상복부 초음파 분석 - 지방간 정도 자동 분석 AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                  <span>흉부 X-ray 진단 - 폐렴·결절·흉막 질환 검출</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                  <span>수출형 SaaS 모델 구축 기반</span>
                </li>
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              variants={fadeInUp}
              className="group bg-gradient-to-br from-navy/5 to-navy/10 rounded-2xl p-8 border border-navy/20 hover:border-navy hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-navy rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-3">
                해외 의료기관 실증(PoC) 연계
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                현지 병원 직접 협력 테스트
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-navy flex-shrink-0 mt-0.5" />
                  <span>현지 의료진 협업 기반 검증</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-navy flex-shrink-0 mt-0.5" />
                  <span>실제 임상 데이터 확보 및 피드백</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-navy flex-shrink-0 mt-0.5" />
                  <span>기술 검증 서비스 리포트 제공</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-navy flex-shrink-0 mt-0.5" />
                  <span>영국·칠레·브라질 거점 활용</span>
                </li>
              </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              variants={fadeInUp}
              className="group bg-gradient-to-br from-coral/5 to-coral/10 rounded-2xl p-8 border border-coral/20 hover:border-coral hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-coral rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-3">
                국내 의료기업 해외 진출 지원
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                전주기적 수출 실행력 제공
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                  <span>규제/인허가 가이드 (FDA/CE)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                  <span>국가별 시장조사 및 수요분석</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                  <span>해외 바이어/유통사 매칭</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                  <span>해외 판매 전략 수립 컨설팅</span>
                </li>
              </ul>
            </motion.div>

            {/* Service 4 */}
            <motion.div
              variants={fadeInUp}
              className="group bg-gradient-to-br from-purple-500/5 to-purple-500/10 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-3">
                의료 솔루션 Joint-Package
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                H/W + S/W 묶음 수출 모델
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>자체 AI S/W + 국내 의료기기 (초음파, 체성분 장비 등)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>시장 진입 확률 및 효율 극대화</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>실증 성공률 제고 전략</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-gray-100 rounded-full">
              <span className="text-sm font-medium text-gray-600">자체 기술력</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-600">글로벌 네트워크</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-600">실행 파트너십</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem-Solution Section - Slide 2 */}
      <section className="py-24 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              문제 정의 | GBPL의 역할
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              서울 의료·헬스케어 중소기업의 글로벌 진출 병목과 해법
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Problems */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="font-display text-2xl font-bold text-coral mb-6">
                시장 진입의 3대 장벽
              </h3>
              <p className="text-gray-300 mb-8 text-sm">
                국내 우수 기업들이 해외 진출 시 직면하는 현실적인 어려움
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-coral/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-coral font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">복잡한 규제 장벽</h4>
                    <p className="text-sm text-gray-400">
                      FDA, CE 등 인허가 절차가 복잡하고 장기화되어 초기 진입 리스크가 매우 큼
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-coral/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-coral font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">데이터 호환성 문제</h4>
                    <p className="text-sm text-gray-400">
                      국가별 의료 데이터 표준 불일치로 현지 시스템 연동 및 적합성 검증 난항
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-coral/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-coral font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">현지 실증(PoC) 기회 부재</h4>
                    <p className="text-sm text-gray-400">
                      가장 치명적인 문제: 실제 해외 병원에서 제품을 테스트할 환경 확보가 거의 불가능
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-teal/10 backdrop-blur-sm rounded-2xl p-8 border border-teal/30"
            >
              <h3 className="font-display text-2xl font-bold text-teal mb-6">
                GBPL MISSION
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-white text-xl mb-3">의료 AI 기술과 실증 네트워크의 융합</h4>
                  <p className="text-gray-300 text-sm">
                    단순 컨설팅을 넘어, 기술과 현장을 직접 연결합니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white text-xl mb-3">초기 진입 리스크 획기적 경감</h4>
                  <p className="text-gray-300 text-sm">
                    실제 병원 환경 테스트 제공으로 서울 중소기업의 글로벌 성공 가속화
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Brain className="w-8 h-8 text-teal" />
                    </div>
                    <p className="text-xs text-gray-300 font-medium">의료 AI 기술</p>
                    <p className="text-xs text-gray-400 mt-1">자체 개발 역량 및 기술 이해도</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Globe2 className="w-8 h-8 text-teal" />
                    </div>
                    <p className="text-xs text-gray-300 font-medium">해외 실증 네트워크</p>
                    <p className="text-xs text-gray-400 mt-1">영국·칠레·브라질 병원 직접 연결</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Rocket className="w-8 h-8 text-teal" />
                    </div>
                    <p className="text-xs text-gray-300 font-medium">수출 실행력</p>
                    <p className="text-xs text-gray-400 mt-1">인허가·유통·마케팅 전주기 지원</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Network Map */}
      <GlobalNetworkMap />

      {/* Trust Indicators */}
      <TrustIndicators />

      {/* Financial Growth */}
      <FinancialChart />

      {/* Conclusion Section - Final Slide */}
      <section className="py-24 bg-gradient-to-br from-navy via-teal/20 to-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-teal uppercase tracking-wider">CONCLUSION</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
              요약 및 제언
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              서울 중소기업의 글로벌 성공을 위한 GBPL의 확고한 비전과 약속
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Column 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="w-16 h-16 bg-teal/20 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-teal" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">
                독보적 융합 모델
              </h3>
              <p className="text-gray-300 text-sm mb-6">
                의료 AI 기술과 해외 실증 네트워크를 결합한 서울 중소기업 맞춤형 통합 수출 플랫폼
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
                  <span className="text-sm text-gray-300">자체 AI 기술력 보유</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
                  <span className="text-sm text-gray-300">英·칠레·브라질 3대 거점</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
                  <span className="text-sm text-gray-300">규제·인허가 원스톱 지원</span>
                </div>
              </div>
            </motion.div>

            {/* Column 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="w-16 h-16 bg-coral/20 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-coral" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">
                검증된 실행 역량
              </h3>
              <p className="text-gray-300 text-sm mb-6">
                폭발적인 매출 성장과 공인된 기술력으로 증명된 안정적인 사업 수행 능력
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-coral flex-shrink-0" />
                  <span className="text-sm text-gray-300">2024년 매출 52% 성장</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-coral flex-shrink-0" />
                  <span className="text-sm text-gray-300">기업부설연구소/벤처 인증</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-coral flex-shrink-0" />
                  <span className="text-sm text-gray-300">대형 SI/금융 프로젝트 완수</span>
                </div>
              </div>
            </motion.div>

            {/* Column 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="w-16 h-16 bg-navy/40 rounded-xl flex items-center justify-center mb-6 border-2 border-white/30">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">
                센터 비전 기여
              </h3>
              <p className="text-gray-300 text-sm mb-6">
                단순 입주를 넘어 센터를 글로벌 수출 허브로 활성화하고 서울 기업과 동반 성장
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-sm text-gray-300">2027년 10개사 동반 진출</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-sm text-gray-300">센터 인프라 글로벌화 선도</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-sm text-gray-300">해외 바이어 유치 및 매칭</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Final Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-teal/20 via-white/10 to-teal/20 rounded-2xl p-12 border border-white/20">
              <h3 className="font-display text-3xl font-bold text-white mb-4">
                최적의 파트너, GBPL이 함께 하겠습니다.
              </h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
                서울경제진흥원의 글로벌 영향력 강화와 국내 의료 헬스케어 산업의 확산을 위해 
                GBPL의 모든 역량을 집중하겠습니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-teal hover:bg-teal-dark text-white">
                  <Link to="/contact">
                    문의하기
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-navy">
                  <Link to="/about/company">
                    회사 소개 보기
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
