import clsx from 'clsx'
import { List, X } from 'phosphor-react'
import { Logo } from './Logo'

interface HeaderProps {
  isSidebarOpen: boolean
  onClickMenu: () => void
}

export const Header = ({ onClickMenu, isSidebarOpen }: HeaderProps) => (
  <header
    className={clsx(
      {
        'fixed z-[1000]': isSidebarOpen,
      },
      'w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600',
    )}
  >
    <div className="hidden md:block">
      <Logo />
    </div>

    <div className="flex flex-1 justify-between md:hidden px-6">
      <Logo variant="mobile" />

      <div className="flex items-center gap-2">
        <span>Aulas</span>
        {isSidebarOpen ? (
          <X
            className="text-blue-500 cursor-pointer"
            size={24}
            onClick={onClickMenu}
          />
        ) : (
          <List
            className="text-blue-500 cursor-pointer"
            size={24}
            onClick={onClickMenu}
          />
        )}
      </div>
    </div>
  </header>
)
