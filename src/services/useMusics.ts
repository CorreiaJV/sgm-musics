import { useContext } from "react"
import { MusicContext } from "../context/musicsContext"

export function useMusics() {
  return useContext(MusicContext)
}
