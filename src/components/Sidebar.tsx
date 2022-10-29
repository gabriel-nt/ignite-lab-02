import { Lesson } from './Lesson'
import { useGetLessonsQuery } from '../graphql/generated'
import clsx from 'clsx'

interface SidebarProps {
  isOpen: boolean
}

export const Sidebar = ({ isOpen }: SidebarProps) => {
  const { data } = useGetLessonsQuery()

  return (
    <aside
      className={clsx(
        {
          'translate-x-0': isOpen,
          'translate-x-full': !isOpen,
        },
        'w-full top-[65px] bottom-0 z-[1000] md:top-0 md:w-[348px] fixed md:relative md:transform-none bg-gray-700 p-6 border-l border-gray-600 transition-transform',
      )}
    >
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex-col flex gap-8">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            slug={lesson.slug}
            title={lesson.title}
            type={lesson.lessonType}
            availableAt={new Date(lesson.availableAt)}
          />
        ))}
      </div>
    </aside>
  )
}
