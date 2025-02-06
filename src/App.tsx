import { useState } from "react"
import axios from "axios"
import SearchBar from "./components/SearchBar"
import CountryCard from "./components/CountryCard"
import type { Country } from "./types/country"

export default function App() {
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const searchCountry = async (query: string) => {
    if (!query) return

    setLoading(true)
    setError("")

    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${query}`)
      setCountries(response.data)
    } catch (err) {
      setError("Country not found. Please try another search.")
      setCountries([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Info Country
        </h1>

        <SearchBar onSearch={searchCountry} />

        {loading && (
          <div className="text-center mt-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-white"></div>
          </div>
        )}

        {error && <div className="text-center mt-12 text-red-400">{error}</div>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {countries.map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))}
        </div>
      </div>
    </div>
  )
}