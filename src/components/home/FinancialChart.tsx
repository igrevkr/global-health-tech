import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Building, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const yearlyData = [
  { year: "2023", revenue: 12.3, employees: 6 },
  { year: "2024", revenue: 18.8, employees: 16 },
  { year: "2025(E)", revenue: 17, employees: 13 },
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

  const trackRecords = [
    {
      title: t("financial.track.aia"),
      description: t("financial.track.aia.desc"),
      icon: Building,
    },
    {
      title: t("financial.track.kyobo"),
      description: t("financial.track.kyobo.desc"),
      icon: Building,
    },
    {
      title: t("financial.track.hyundai"),
      description: t("financial.track.hyundai.desc"),
      icon: Building,
    },
  ];

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
          <span className="text-sm font-medium text-teal uppercase tracking-wider">{t("financial.badge")}</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy mt-4 mb-6">
            {t("financial.title2")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("financial.subtitle2")}
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
              {t("financial.growth.title")}
            </h3>
            
            <div className="space-y-8">
              {/* Revenue */}
              <div className="bg-gradient-to-br from-teal/5 to-teal/10 rounded-2xl p-8 border border-teal/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-teal rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{t("financial.revenue.label")}</p>
                    <p className="font-mono text-4xl font-bold text-navy">
                      <AnimatedNumber value={18.8} decimals={1} />{t("financial.revenue.unit")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-teal/20 text-teal rounded-full text-sm font-bold">{t("financial.revenue.growth")}</span>
                  <span className="text-sm text-gray-600">{t("financial.revenue.compare")}</span>
                </div>
              </div>

              {/* Employees */}
              <div className="bg-gradient-to-br from-navy/5 to-navy/10 rounded-2xl p-8 border border-navy/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{t("financial.employees.label")}</p>
                    <p className="font-mono text-4xl font-bold text-navy">
                      <AnimatedNumber value={16} />{t("financial.employees.unit")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-navy/20 text-navy rounded-full text-sm font-bold">{t("financial.employees.growth")}</span>
                  <span className="text-sm text-gray-600">{t("financial.employees.compare")}</span>
                </div>
              </div>

              {/* 2025 Strategy */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h4 className="font-bold text-navy mb-2">{t("financial.strategy.title")}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t("financial.strategy.desc")}
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
              {t("financial.tech.title")}
            </h3>
            <p className="text-gray-600 mb-8">
              {t("financial.tech.subtitle")}
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
                {t("financial.cashcow.title")}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t("financial.cashcow.desc")}
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
            {t("financial.chart.title")}
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
                    <p className="text-xs text-gray-400 mb-1">{t("financial.chart.revenue")}</p>
                    <p className="font-mono text-xl font-bold text-white">{data.revenue}{t("financial.revenue.unit")}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-1">{t("financial.chart.workforce")}</p>
                    <p className="font-mono text-xl font-bold text-white">{data.employees}{t("financial.employees.unit")}</p>
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
