import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Building, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const yearlyData = [
  { year: "2023", revenue: 12.3, employees: 6 },
  { year: "2024", revenue: 18.8, employees: 16 },
  { year: "2025(E)", revenue: 17, employees: 13 },
];

const trackRecords = [
  {
    title: "AIA생명 고객포털 고도화",
    description: "금융권 수준의 보안 및 대규모 트래픽 처리",
    icon: Building,
  },
  {
    title: "교보문고 리딩트리 재구축",
    description: "대고객 서비스 플랫폼 안정성 확보",
    icon: Building,
  },
  {
    title: "현대자동차 그룹 계열사 SI",
    description: "엔터프라이즈급 시스템 통합 역량",
    icon: Building,
  },
];

function AnimatedNumber({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(current);
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-mono">
      {displayValue.toFixed(decimals)}
    </span>
  );
}

export default function FinancialChart() {
  const chartRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(chartRef, { once: true });
  const { t } = useLanguage();

  const maxRevenue = Math.max(...yearlyData.map((d) => d.revenue));

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-teal uppercase tracking-wider">FINANCIAL STABILITY</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy mt-4 mb-6">
            재무 안정성 및 성장 모멘텀
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            폭발적인 초기 성장세와 탄탄한 대형 프로젝트 수행 역량 입증
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Left: Growth Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-bold text-navy mb-8">
              폭발적 양적 성장 (2023 vs 2024)
            </h3>
            
            <div className="space-y-8">
              {/* Revenue */}
              <div className="bg-gradient-to-br from-teal/5 to-teal/10 rounded-2xl p-8 border border-teal/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-teal rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">REVENUE</p>
                    <p className="font-mono text-4xl font-bold text-navy">
                      <AnimatedNumber value={18.8} decimals={1} />억
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-teal/20 text-teal rounded-full text-sm font-bold">52% 성장</span>
                  <span className="text-sm text-gray-600">2023년 12.3억 대비</span>
                </div>
              </div>

              {/* Employees */}
              <div className="bg-gradient-to-br from-navy/5 to-navy/10 rounded-2xl p-8 border border-navy/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">EMPLOYEES</p>
                    <p className="font-mono text-4xl font-bold text-navy">
                      <AnimatedNumber value={16} />명
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-navy/20 text-navy rounded-full text-sm font-bold">166% 증가</span>
                  <span className="text-sm text-gray-600">2023년 6명 대비</span>
                </div>
              </div>

              {/* 2025 Strategy */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h4 className="font-bold text-navy mb-2">2025년 전략</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  고부가가치 글로벌 사업 집중을 위해 매출 목표를 보수적으로 조정(16~18억)하고, 
                  핵심 인력 위주로 조직을 재편하여 내실 다지기에 주력.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Track Record */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-bold text-navy mb-4">
              검증된 기술 안정성
            </h3>
            <p className="text-gray-600 mb-8">
              대형 금융 및 기업 프로젝트 수행으로 입증된 IT/보안 역량
            </p>

            <div className="space-y-4 mb-8">
              {trackRecords.map((record, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-teal hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <record.icon className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy mb-1">{record.title}</h4>
                      <p className="text-sm text-gray-600">{record.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-coral/5 to-coral/10 rounded-2xl p-6 border border-coral/20">
              <h4 className="font-bold text-navy mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-coral" />
                안정적 캐시카우 확보
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                기존 SI/ITO 사업의 안정적인 수익 기반은 글로벌 의료 AI 사업의 
                초기 리스크를 상쇄하고 지속 가능한 투자를 가능하게 합니다.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Chart */}
        <motion.div
          ref={chartRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-navy to-navy/90 rounded-2xl p-8 lg:p-12"
        >
          <h3 className="font-display text-2xl font-bold text-white mb-8 text-center">
            연도별 매출 및 인력 추이
          </h3>
          
          <div className="grid grid-cols-3 gap-8">
            {yearlyData.map((data, index) => (
              <div key={data.year} className="text-center">
                <div className="mb-4">
                  <p className="text-teal font-mono text-lg mb-2">{data.year}</p>
                  <div className="relative h-48 flex flex-col justify-end">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={isInView ? { height: `${(data.revenue / maxRevenue) * 100}%` } : { height: 0 }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="bg-gradient-to-t from-teal to-teal/60 rounded-t-lg mx-auto w-20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-1">매출</p>
                    <p className="font-mono text-xl font-bold text-white">{data.revenue}억</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-1">인력</p>
                    <p className="font-mono text-xl font-bold text-white">{data.employees}명</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
