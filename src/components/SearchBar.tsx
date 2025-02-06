import { useState } from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

interface SearchBarProps {
  onSearch: (query: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a country..."
          className="w-full px-4 py-3 pl-12 text-lg bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 focus:border-white/20 focus:ring-2 focus:ring-white/10 outline-none transition-all duration-200"
        />
        <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Search
        </button>
      </div>
    </form>
  )
}

