import React, { useState } from 'react'
import { classNames } from 'utils'

export type ListProps = {
  id: number
  title: string
  completed: boolean
}

export type Props = {
  toDoList: ListProps
}

const ToDoCard: React.FC<Props> = ({ toDoList }) => {
  const [list, setList] = useState<ListProps>(toDoList)

  const handleChangeStatus = () => {
    setList((prev) => ({ ...prev, completed: !list.completed }))
  }

  return (
    <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 w-full dark:bg-gray-800">
      <div className="w-full flex items-center justify-between p-6 space-x-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="text-gray-900 text-sm font-medium truncate dark:text-gray-400">
              {list.title}
            </h3>
            <span
              className={classNames(
                list.completed
                  ? 'text-green-800 bg-green-100'
                  : 'text-red-800 bg-red-100',
                'flex-shrink-0 inline-block px-2 py-0.5 text-xs font-medium rounded-full'
              )}
            >
              {list.completed ? 'Concluído' : 'Pendente'}
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="-ml-px w-0 flex-1 flex">
            <button
              onClick={handleChangeStatus}
              className="relative w-0 flex-1 inline-flex items-center justify-center py-2 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 dark:text-gray-500"
            >
              <span className="ml-3">
                {list.completed ? 'Tornar pendente' : 'Concluir'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default ToDoCard
