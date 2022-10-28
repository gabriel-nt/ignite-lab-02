import clsx from 'clsx'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { CheckCircle, Lock } from 'phosphor-react'
import { Link, useParams } from 'react-router-dom'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export const Lesson = ({ title, type, slug, availableAt }: LessonProps) => {
  const isLessonAvailable = isPast(availableAt)

  const { slug: urlSlug } = useParams<{
    slug: string
  }>()

  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    },
  )

  const isActiveLesson = slug === urlSlug

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div
        className={clsx(
          {
            'bg-green-500': isActiveLesson,
          },
          'rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors',
        )}
      >
        <header className="flex items-center justify-between">
          <span
            className={clsx(
              {
                'text-blue-500': isLessonAvailable,
                'text-orange-500': !isLessonAvailable,
                'text-white': isActiveLesson,
              },
              'text-sm  font-medium flex items-center gap-2',
            )}
          >
            {isLessonAvailable ? (
              <>
                <CheckCircle size={20} />
                Conteúdo liberado
              </>
            ) : (
              <>
                <Lock size={20} />
                Em breve
              </>
            )}
          </span>

          <span
            className={clsx(
              {
                'text-green-500': type === 'live' && !isActiveLesson,
                'text-white': type === 'class' || isActiveLesson,
                'border-white': isActiveLesson,
              },
              'text-xs rounded px-2 py-[0.125rem] border border-green-500 uppercase',
            )}
          >
            {type === 'live' ? 'Ao vivo' : 'Aula prática'}
          </span>
        </header>

        <strong
          className={clsx(
            {
              'text-gray-200': !isActiveLesson,
              'text-white': isActiveLesson,
            },
            ' mt-5 block',
          )}
        >
          {title}
        </strong>
      </div>
    </Link>
  )
}
