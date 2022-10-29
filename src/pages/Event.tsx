import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Video } from '../components/Video'

export const Event = () => {
  const { slug } = useParams<{
    slug: string
  }>()

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    setIsSidebarOpen(false)
  }, [slug])

  function toggleSidebar() {
    setIsSidebarOpen((prevState) => !prevState)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header onClickMenu={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <main className="flex flex-1">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1"></div>}
        <Sidebar isOpen={isSidebarOpen} />
      </main>
    </div>
  )
}
