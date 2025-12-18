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
                <p className="text-navy text-sm mb-4 px-4 py-2 bg-gray-100 rounded-full inline-block">{t("home.hero.badge")}</p>
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-navy leading-tight mb-8">
                  {t("home.hero.title1")}<br />
                  {t("home.hero.title2")}
                </h1>
              </div>
              
              <div className="space-y-4 mb-12">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t("home.hero.subtitle1")}
                </p>
                <p className="text-2xl font-bold text-navy border-l-4 border-navy pl-4">
                  {t("home.hero.subtitle2")}
                </p>
              </div>

              <div className="mb-16 pb-8 border-b border-gray-200">
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold text-navy">{t("home.hero.company")}</span>
                </p>
                <p className="text-gray-500 text-sm">
                  {t("home.hero.presenter")}
                </p>
              </div>

              {/* Bottom Stats Grid */}
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start gap-2 mb-2">
                    <Building2 className="w-5 h-5 text-navy flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{t("home.hero.foundation")}</p>
                      <p className="font-bold text-navy text-sm mb-1">{t("home.hero.foundationDate")}</p>
                      <p className="text-xs text-gray-500">{t("home.hero.foundationDesc")}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-navy flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{t("home.hero.certification")}</p>
                      <p className="font-bold text-navy text-xs mb-1">{t("home.hero.certificationValue")}</p>
                      <p className="text-xs text-gray-500">{t("home.hero.certificationDesc")}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-navy flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{t("home.hero.revenue")}</p>
                      <p className="font-bold text-navy text-xl mb-1">{t("home.hero.revenueValue")}</p>
                      <p className="text-xs text-gray-500">{t("home.hero.revenueDesc")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Visual - Global Network Globe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[600px] flex items-center justify-center">
                {/* SVG World Map */}
                <svg viewBox="0 0 800 400" className="w-full h-auto">
                  {/* Background */}
                  <rect width="800" height="400" fill="#f8fafc" />
                  
                  {/* Simplified World Map Paths */}
                  <g fill="#d1d5db" stroke="#9ca3af" strokeWidth="0.5">
                    {/* North America */}
                    <path d="M80,60 Q100,50 130,55 L160,70 Q180,85 175,110 L155,130 Q135,145 105,140 L80,125 Q60,105 80,60Z" />
                    <path d="M100,75 Q115,70 130,75 L140,85 Q145,95 140,105 L125,112 Q110,115 100,108 L95,95 Q95,82 100,75Z" />
                    
                    {/* South America */}
                    <path d="M180,200 Q200,190 215,200 L225,230 Q235,265 220,300 L195,315 Q170,305 175,265 L180,225 Q178,210 180,200Z" />
                    
                    {/* Europe */}
                    <path d="M360,55 Q390,48 415,58 L435,80 Q445,100 430,120 L400,130 Q375,125 365,100 L358,75 Q355,62 360,55Z" />
                    
                    {/* Africa */}
                    <path d="M375,140 Q405,132 430,145 L450,180 Q465,220 455,265 L425,290 Q390,285 380,250 L370,200 Q368,165 375,140Z" />
                    
                    {/* Asia */}
                    <path d="M480,50 Q540,40 610,55 L660,85 Q690,115 680,155 L640,185 Q590,200 540,190 L490,170 Q460,140 470,100 L480,70 Q478,58 480,50Z" />
                    <path d="M520,70 Q545,65 570,72 L590,88 Q600,105 592,122 L570,135 Q545,140 525,132 L510,115 Q505,95 520,70Z" />
                    
                    {/* Australia */}
                    <path d="M620,260 Q650,252 680,262 L700,285 Q710,310 695,335 L665,345 Q635,340 625,315 L618,285 Q615,270 620,260Z" />
                  </g>

                  {/* Connection Lines */}
                  <g stroke="#2D9CDB" strokeWidth="2" strokeDasharray="6,3" opacity="0.6">
                    {/* Seoul to UK */}
                    <path d="M600,100 Q480,60 390,85" fill="none">
                      <animate attributeName="stroke-dashoffset" from="18" to="0" dur="2s" repeatCount="indefinite" />
                    </path>
                    {/* Seoul to Chile */}
                    <path d="M600,100 Q400,200 200,280" fill="none">
                      <animate attributeName="stroke-dashoffset" from="18" to="0" dur="2s" repeatCount="indefinite" />
                    </path>
                    {/* Seoul to Brazil */}
                    <path d="M600,100 Q450,180 210,240" fill="none">
                      <animate attributeName="stroke-dashoffset" from="18" to="0" dur="2s" repeatCount="indefinite" />
                    </path>
                  </g>

                  {/* Seoul Marker (HQ) */}
                  <g transform="translate(600, 100)">
                    <circle r="10" fill="#0A2540" />
                    <circle r="6" fill="#2D9CDB" />
                    <circle r="14" fill="none" stroke="#2D9CDB" strokeWidth="2" opacity="0.5">
                      <animate attributeName="r" from="10" to="22" dur="1.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                    <text x="18" y="5" fontSize="12" fill="#0A2540" fontWeight="600">Seoul HQ</text>
                  </g>

                  {/* UK Marker */}
                  <g transform="translate(390, 85)">
                    <circle r="7" fill="#FF6B6B" />
                    <circle r="11" fill="none" stroke="#FF6B6B" strokeWidth="2" opacity="0.5">
                      <animate attributeName="r" from="7" to="15" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <text x="12" y="4" fontSize="11" fill="#0A2540" fontWeight="500">UK</text>
                  </g>

                  {/* Chile Marker */}
                  <g transform="translate(200, 280)">
                    <circle r="7" fill="#2D9CDB" />
                    <circle r="11" fill="none" stroke="#2D9CDB" strokeWidth="2" opacity="0.5">
                      <animate attributeName="r" from="7" to="15" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <text x="12" y="4" fontSize="11" fill="#0A2540" fontWeight="500">Chile</text>
                  </g>

                  {/* Brazil Marker */}
                  <g transform="translate(210, 240)">
                    <circle r="7" fill="#2D9CDB" />
                    <circle r="11" fill="none" stroke="#2D9CDB" strokeWidth="2" opacity="0.5">
                      <animate attributeName="r" from="7" to="15" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <text x="12" y="4" fontSize="11" fill="#0A2540" fontWeight="500">Brazil</text>
                  </g>
                </svg>
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
            <span className="text-sm font-medium text-teal uppercase tracking-wider">{t("home.core.badge")}</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy mt-4 mb-6">
              {t("home.core.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("home.core.subtitle")}
            </p>
            <p className="text-sm text-gray-500 mt-4 max-w-4xl mx-auto">
              {t("home.core.description")}
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
                {t("home.service1.title")}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {t("home.service1.subtitle")}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                  <span>{t("home.service1.item1")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                  <span>{t("home.service1.item2")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                  <span>{t("home.service1.item3")}</span>
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
                {t("home.service2.title")}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {t("home.service2.subtitle")}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-navy flex-shrink-0 mt-0.5" />
                  <span>{t("home.service2.item1")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-navy flex-shrink-0 mt-0.5" />
                  <span>{t("home.service2.item2")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-navy flex-shrink-0 mt-0.5" />
                  <span>{t("home.service2.item3")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-navy flex-shrink-0 mt-0.5" />
                  <span>{t("home.service2.item4")}</span>
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
                {t("home.service3.title")}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {t("home.service3.subtitle")}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                  <span>{t("home.service3.item1")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                  <span>{t("home.service3.item2")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                  <span>{t("home.service3.item3")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                  <span>{t("home.service3.item4")}</span>
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
                {t("home.service4.title")}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {t("home.service4.subtitle")}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>{t("home.service4.item1")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>{t("home.service4.item2")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>{t("home.service4.item3")}</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-gray-100 rounded-full">
              <span className="text-sm font-medium text-gray-600">{t("home.core.flow1")}</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-600">{t("home.core.flow2")}</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-600">{t("home.core.flow3")}</span>
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
