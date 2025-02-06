import { motion } from "framer-motion"
import type { Country } from "../types/country"

interface CountryCardProps {
  country: Country
}

export default function CountryCard({ country }: CountryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-200"
    >
      <img src={country.flags.svg || "/placeholder.svg"} alt={`Flag of ${country.name.common}`} className="w-full h-48 object-cover"/>
      
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{country.name.common}</h2>
        <div className="space-y-2 text-gray-300">
          <p>
            <span className="font-medium text-gray-400">Capital:</span> {country.capital?.[0] || "N/A"}
          </p>
          <p>
            <span className="font-medium text-gray-400">Region:</span> {country.region}
          </p>
          <p>
            <span className="font-medium text-gray-400">Population:</span> {country.population.toLocaleString()}
          </p>
          <p>
            <span className="font-medium text-gray-400">Languages:</span>{" "}
            {country.languages ? Object.values(country.languages).join(", ") : "N/A"}
          </p>
        </div>
      </div>
    </motion.div>
  )
}