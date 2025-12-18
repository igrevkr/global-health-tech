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
  ChevronRight,
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
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  const { t } = useLanguage();

  const valueProps = [
    {
      icon: Brain,
      title: t("value.ai.title"),
      description: t("value.ai.description"),
      color: "bg-teal",
    },
    {
      icon: Globe2,
      title: t("value.network.title"),
      description: t("value.network.description"),
      color: "bg-coral",
    },
    {
      icon: Rocket,
      title: t("value.export.title"),
      description: t("value.export.description"),
      color: "bg-navy",
    },
  ];

  const painPoints = [
    {
      problem: t("problem1"),
      solution: t("solution1"),
    },
    {
      problem: t("problem2"),
      solution: t("solution2"),
    },
    {
      problem: t("problem3"),
      solution: t("solution3"),
    },
  ];
  return (
    <Layout>
      {/* Hero Section - Slide 1 */}
      <section className="relative min-h-screen bg-white overflow-hidden">
        {/* Header Bar */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-end">
            <span className="text-xs text-gray-400 uppercase tracking-widest">
              {t("home.hero.headerText")}
            </span>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="pt-8"
            >
              {/* Badge */}
              <div className="mb-8">
                <span className="inline-block text-sm text-gray-600 px-4 py-2 border border-gray-300 rounded-full">
                  {t("home.hero.badge")}
                </span>
              </div>

              {/* Main Title - Red/Coral Color */}
              <h1 className="font-display text-5xl sm:text-6xl lg:text-[4.5rem] font-bold text-coral leading-[1.1] mb-8">
                {t("home.hero.title1")}
                <br />
                {t("home.hero.title2")}
              </h1>

              {/* Subtitle */}
              <div className="mb-8">
                <p className="text-lg text-teal mb-2">
                  {t("home.hero.subtitle1")}
                </p>
                <p className="text-xl font-semibold text-teal">
                  {t("home.hero.subtitle2")}
                </p>
              </div>

              {/* Company Info with Divider */}
              <div className="flex items-center gap-4 mb-16">
                <span className="font-bold text-navy">
                  {t("home.hero.company")}
                </span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-500 text-sm">
                  {t("home.hero.presenter")}
                </span>
              </div>
            </motion.div>

            {/* Right Visual - World Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full">
                {/* World Map Image */}
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&q=80"
                  alt="World Map"
                  className="w-full h-auto opacity-30"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 divide-x divide-gray-200"
            >
              {/* Foundation */}
              <div className="py-8 px-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">
                    {t("home.hero.foundation")}
                  </p>
                  <p className="font-bold text-navy text-sm">
                    {t("home.hero.foundationDate")}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {t("home.hero.foundationDesc")}
                  </p>
                </div>
              </div>

              {/* Certification */}
              <div className="py-8 px-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">
                    {t("home.hero.certification")}
                  </p>
                  <p className="font-bold text-navy text-sm">
                    {t("home.hero.certificationValue")}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {t("home.hero.certificationDesc")}
                  </p>
                </div>
              </div>

              {/* Revenue */}
              <div className="py-8 px-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">
                    {t("home.hero.revenue")}
                  </p>
                  <p className="font-bold text-navy text-lg">
                    {t("home.hero.revenueValue")}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {t("home.hero.revenueDesc")}
                  </p>
                </div>
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
            <span className="text-sm font-medium text-teal uppercase tracking-wider">
              {t("home.core.badge")}
            </span>
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
              <span className="text-sm font-medium text-gray-600">
                {t("home.core.flow1")}
              </span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-600">
                {t("home.core.flow2")}
              </span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-600">
                {t("home.core.flow3")}
              </span>
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
              {t("home.problem.title")}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("home.problem.subtitle")}
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
                {t("home.problem.barriers")}
              </h3>
              <p className="text-gray-300 mb-8 text-sm">
                {t("home.problem.barriersDesc")}
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-coral/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-coral font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">
                      {t("home.problem.barrier1.title")}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {t("home.problem.barrier1.desc")}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-coral/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-coral font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">
                      {t("home.problem.barrier2.title")}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {t("home.problem.barrier2.desc")}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-coral/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-coral font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">
                      {t("home.problem.barrier3.title")}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {t("home.problem.barrier3.desc")}
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
                {t("home.mission.title")}
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-white text-xl mb-3">
                    {t("home.mission.heading1")}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {t("home.mission.desc1")}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white text-xl mb-3">
                    {t("home.mission.heading2")}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {t("home.mission.desc2")}
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Brain className="w-8 h-8 text-teal" />
                    </div>
                    <p className="text-xs text-gray-300 font-medium">
                      {t("home.mission.pillar1")}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {t("home.mission.pillar1.desc")}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Globe2 className="w-8 h-8 text-teal" />
                    </div>
                    <p className="text-xs text-gray-300 font-medium">
                      {t("home.mission.pillar2")}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {t("home.mission.pillar2.desc")}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Rocket className="w-8 h-8 text-teal" />
                    </div>
                    <p className="text-xs text-gray-300 font-medium">
                      {t("home.mission.pillar3")}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {t("home.mission.pillar3.desc")}
                    </p>
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
            <span className="text-sm font-medium text-teal uppercase tracking-wider">
              {t("home.conclusion.badge")}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
              {t("home.conclusion.title")}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("home.conclusion.subtitle")}
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
                {t("home.conclusion.col1.title")}
              </h3>
              <p className="text-gray-300 text-sm mb-6">
                {t("home.conclusion.col1.desc")}
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
                  <span className="text-sm text-gray-300">
                    {t("home.conclusion.col1.item1")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
                  <span className="text-sm text-gray-300">
                    {t("home.conclusion.col1.item2")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
                  <span className="text-sm text-gray-300">
                    {t("home.conclusion.col1.item3")}
                  </span>
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
                {t("home.conclusion.col2.title")}
              </h3>
              <p className="text-gray-300 text-sm mb-6">
                {t("home.conclusion.col2.desc")}
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-coral flex-shrink-0" />
                  <span className="text-sm text-gray-300">
                    {t("home.conclusion.col2.item1")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-coral flex-shrink-0" />
                  <span className="text-sm text-gray-300">
                    {t("home.conclusion.col2.item2")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-coral flex-shrink-0" />
                  <span className="text-sm text-gray-300">
                    {t("home.conclusion.col2.item3")}
                  </span>
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
                {t("home.conclusion.col3.title")}
              </h3>
              <p className="text-gray-300 text-sm mb-6">
                {t("home.conclusion.col3.desc")}
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-sm text-gray-300">
                    {t("home.conclusion.col3.item1")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-sm text-gray-300">
                    {t("home.conclusion.col3.item2")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-sm text-gray-300">
                    {t("home.conclusion.col3.item3")}
                  </span>
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
                {t("home.conclusion.final.title")}
              </h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
                {t("home.conclusion.final.desc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-teal hover:bg-teal-dark text-white"
                >
                  <Link to="/contact">
                    {t("home.conclusion.cta1")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white bg-transparent text-white hover:bg-white hover:text-navy"
                >
                  <Link to="/about/company">{t("home.conclusion.cta2")}</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
