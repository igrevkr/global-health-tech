import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const networkHubs = [
  {
    id: "uk",
    name: "영국 (유럽 선진 시장)",
    city: "Bristol NHS 의료진 협력",
    partner: "Bristol NHS Medical Staff",
    status: "MOU 체결 및 실증 프로젝트 착수",
    description: "간질환/흉부질환 AI 실증 및 임상 피드백 확보, 뇌종양 변화 관찰 AI 공동연구 논의 중",
    highlight: "NHS 중심 의료 AI 도입률 60% 시장",
    position: { top: "28%", left: "47%" },
    flag: "🇬🇧",
    color: "teal"
  },
  {
    id: "chile",
    name: "칠레 (중남미 교두보)",
    city: "BIOANDINA SPA, 보건부 연계",
    partner: "BIOANDINA SPA & Ministry of Health",
    status: "MOU 체결 및 실증 프로젝트 착수",
    description: "정부 보건 디지털화 추진에 발맞춘 시범 적용, 중남미 시장 진입 전 실증 테스트베드",
    highlight: "",
    position: { top: "72%", left: "28%" },
    flag: "🇨🇱",
    color: "coral"
  },
  {
    id: "brazil",
    name: "브라질 (중남미 최대 시장)",
    city: "현지 의료기관 파트너십",
    partner: "Local Medical Institutions",
    status: "MOU 체결 및 실증 프로젝트 착수",
    description: "현지 등록 및 판매를 위한 적합성 검증 수행, 남미 최대 규모 시장성 확인",
    highlight: "ANVISA 등록 연계 지원 가능",
    position: { top: "62%", left: "35%" },
    flag: "🇧🇷",
    color: "navy"
  }
];

export default function GlobalNetworkMap() {
  const [selectedHub, setSelectedHub] = useState<typeof networkHubs[0] | null>(null);
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-br from-navy via-navy to-teal/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-teal uppercase tracking-wider">GLOBAL NETWORK</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
            독보적인 글로벌 PoC 네트워크
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            국영·공공 기관 기반의 공신력 높은 3대 핵심 거점 확보
          </p>
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
            <p className="text-sm text-gray-300">
              <span className="font-bold text-white">Why GBPL Network?</span> 사설 병원이 아닌 국영/보건부 연계로 공신력 확보 · 단순 협약을 넘어선 실질적 PoC 수행 단계
            </p>
          </div>
        </motion.div>

        {/* Map Container */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            {/* World Map Background */}
            <div className="relative w-full h-[600px] rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
              {/* Simple SVG World Map */}
              <svg viewBox="0 0 1000 500" className="w-full h-full opacity-20">
                <image 
                  href="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1000&q=80" 
                  width="1000" 
                  height="500" 
                  opacity="0.3" 
                />
              </svg>

              {/* Network Markers */}
              {networkHubs.map((hub) => (
                <motion.button
                  key={hub.id}
                  onClick={() => setSelectedHub(hub)}
                  className="absolute group cursor-pointer"
                  style={{ top: hub.position.top, left: hub.position.left }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="relative">
                    {/* Pulsing ring */}
                    <div className={`absolute inset-0 w-12 h-12 -translate-x-1/2 -translate-y-1/2 bg-${hub.color} rounded-full animate-ping opacity-20`} />
                    
                    {/* Main marker */}
                    <div className={`relative w-8 h-8 -translate-x-1/2 -translate-y-1/2 bg-${hub.color} rounded-full border-4 border-white shadow-lg flex items-center justify-center`}>
                      <MapPin className="w-4 h-4 text-white" />
                    </div>

                    {/* Label */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white rounded-lg px-3 py-2 shadow-xl">
                        <p className="text-xs font-bold text-navy">{hub.flag} {hub.name}</p>
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}

              {/* Seoul HQ Marker */}
              <motion.div
                className="absolute"
                style={{ top: "35%", left: "75%" }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <div className="relative">
                  <div className="absolute inset-0 w-12 h-12 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 rounded-full animate-ping opacity-30" />
                  <div className="relative w-10 h-10 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <span className="text-lg">🏢</span>
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap">
                    <div className="bg-yellow-400 rounded-lg px-3 py-2 shadow-xl">
                      <p className="text-xs font-bold text-navy">🇰🇷 Seoul HQ</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Hub Details Panel */}
          <AnimatePresence>
            {selectedHub && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 right-0 w-full lg:w-96 bg-white rounded-2xl shadow-2xl p-6 border-2 border-teal"
              >
                <button
                  onClick={() => setSelectedHub(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-gray-600" />
                </button>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl">{selectedHub.flag}</span>
                    <h3 className="font-display text-xl font-bold text-navy">
                      {selectedHub.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{selectedHub.city}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal/10 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-teal" />
                    <span className="text-xs font-medium text-teal">{selectedHub.status}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-navy mb-2 text-sm">파트너</h4>
                    <p className="text-sm text-gray-600">{selectedHub.partner}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-navy mb-2 text-sm">주요 활동</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{selectedHub.description}</p>
                  </div>

                  {selectedHub.highlight && (
                    <div className="bg-gradient-to-r from-teal/10 to-teal/5 rounded-lg p-3 border border-teal/20">
                      <p className="text-sm font-medium text-teal">{selectedHub.highlight}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Network Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <p className="font-mono text-4xl font-bold text-teal mb-2">3</p>
            <p className="text-sm text-gray-300">글로벌 거점</p>
            <p className="text-xs text-gray-400 mt-1">영국 · 칠레 · 브라질</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <p className="font-mono text-4xl font-bold text-teal mb-2">100%</p>
            <p className="text-sm text-gray-300">국영/공공 기관 연계</p>
            <p className="text-xs text-gray-400 mt-1">높은 공신력 확보</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <p className="font-mono text-4xl font-bold text-teal mb-2">Active</p>
            <p className="text-sm text-gray-300">실질적 PoC 수행</p>
            <p className="text-xs text-gray-400 mt-1">단순 협약을 넘어선 실행</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
