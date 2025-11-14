import { createContext, useEffect, useState } from "react"
import { supabase } from "../services/supabaseClient"
import type { Music } from "../types/music"


interface MusicContextType {
  musics: Music[]
  loading: boolean
}

export const MusicContext = createContext<MusicContextType>({ musics: [], loading: true })

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const [musics, setMusics] = useState<Music[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMusics = async () => {
      const { data, error } = await supabase.from("musics").select("*")

      if (!error && data) {
        const sorted = [...data].sort((a, b) =>
          a.title.localeCompare(b.title)
        )
        setMusics(sorted)
      }
      setLoading(false)
    }
    fetchMusics()
  }, [])


  return (
    <MusicContext.Provider value={{ musics, loading }}>
      {children}
    </MusicContext.Provider>
  )
}


