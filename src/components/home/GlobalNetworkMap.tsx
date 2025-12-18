import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function GlobalNetworkMap() {
  const [selectedHub, setSelectedHub] = useState<{
    id: string;
    name: string;
    city: string;
    partner: string;
    status: string;
    description: string;
    highlight: string;
    position: { top: string; left: string };
    flag: string;
    color: string;
  } | null>(null);
  const { t } = useLanguage();

  const networkHubs = [
    {
      id: "uk",
      name: t("network.hub.uk.name"),
      city: t("network.hub.uk.city"),
      partner: "Bristol NHS Medical Staff",
      status: t("network.hub.uk.status"),
      description: t("network.hub.uk.description"),
      highlight: t("network.hub.uk.highlight"),
      position: { top: "28%", left: "47%" },
      flag: "🇬🇧",
      color: "teal"
    },
    {
      id: "chile",
      name: t("network.hub.chile.name"),
      city: t("network.hub.chile.city"),
      partner: "BIOANDINA SPA & Ministry of Health",
      status: t("network.hub.chile.status"),
      description: t("network.hub.chile.description"),
      highlight: "",
      position: { top: "72%", left: "28%" },
      flag: "🇨🇱",
      color: "coral"
    },
    {
      id: "brazil",
      name: t("network.hub.brazil.name"),
      city: t("network.hub.brazil.city"),
      partner: "Local Medical Institutions",
      status: t("network.hub.brazil.status"),
      description: t("network.hub.brazil.description"),
      highlight: t("network.hub.brazil.highlight"),
      position: { top: "62%", left: "35%" },
      flag: "🇧🇷",
      color: "navy"
    }
  ];

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
          <span className="text-sm font-medium text-teal uppercase tracking-wider">{t("network.badge")}</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
            {t("network.title2")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            {t("network.subtitle2")}
          </p>
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
            <p className="text-sm text-gray-300">
              <span className="font-bold text-white">{t("network.why")}</span> {t("network.whyDesc")}
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
                      <p className="text-xs font-bold text-navy">🇰🇷 {t("network.hub.seoul")}</p>
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
                    <h4 className="font-semibold text-navy mb-2 text-sm">{t("network.panel.partner")}</h4>
                    <p className="text-sm text-gray-600">{selectedHub.partner}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-navy mb-2 text-sm">{t("network.panel.activities")}</h4>
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
            <p className="text-sm text-gray-300">{t("network.stat.hubs")}</p>
            <p className="text-xs text-gray-400 mt-1">{t("network.stat.hubsDesc")}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <p className="font-mono text-4xl font-bold text-teal mb-2">100%</p>
            <p className="text-sm text-gray-300">{t("network.stat.public")}</p>
            <p className="text-xs text-gray-400 mt-1">{t("network.stat.publicDesc")}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <p className="font-mono text-4xl font-bold text-teal mb-2">{t("network.stat.active")}</p>
            <p className="text-sm text-gray-300">{t("network.stat.activeLabel")}</p>
            <p className="text-xs text-gray-400 mt-1">{t("network.stat.activeDesc")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
