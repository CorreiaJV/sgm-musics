import { useEffect, useState } from 'react'
import { supabase } from '../services/supabaseClient'
import type { Music } from '../types/musics'
import { Heading, List, ListItem, Spinner } from '@chakra-ui/react'

export default function Home() {
  const [musics, setMusics] = useState<Music[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMusics = async () => {
      const { data, error } = await supabase.from('musics').select('*')
      if (error) {
        console.error('Erro ao buscar músicas:', error)
      } else {
        setMusics(data as Music[])
      }
      setLoading(false)
    }

    fetchMusics()
  }, [])

  if (loading) return <Spinner size="xl" />

  return (
    <>
      <Heading mb={4}>Lista de músicas</Heading>
      <List spacing={2}>
        {musics.map((m) => (
          <ListItem key={m.id}>
            {m.title} — {m.url}
          </ListItem>
        ))}
      </List>
    </>
  )
}
