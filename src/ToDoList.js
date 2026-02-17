import { useState } from 'react'

export function ToDo () {
  let [input, setInput] = useState('')
  let [list, setList] = useState([])

  function handleing (e) {
    e.preventDefault()
    if (input.trim() !== '') {
      setList([...list, input])
    }
    setInput('')
  }
  function handleRemove (indexR) {
    const remove = list.filter((value, index) => index !== indexR)
    setList(remove)
  }
  function handleEdit (indexE) {
    const remove = list.filter((value, index) => index !== indexE)
    setList(remove)
    setInput(list[indexE])
  }
  return (
    <div className='flex justify-center'>
      <div className=' p-4 m-8 bg-gradient-to-l from-indigo-500 to-slate-600  min-w-[350px] max-w-[400px] min-h-[180px] rounded-xl font-medium'>
        <h1 className='text-center text-white mb-4 text-xl'>TO DO LIST</h1>
        <div className='flex w-full justify-center mt-4 mb-4'>
          <input
            value={input}
            className=' border-2 border-slate-700 p-1 rounded-l-lg '
            type='text'
            onInput={e => setInput(e.target.value)}
          ></input>
          <button
            className='bg-white  p-1 w-12 rounded-r-lg  border-2 border-slate-700 '
            onClick={handleing}
          >
            Add
          </button>
        </div>
        <ul className=''>
          {list.map((value, index) => {
            return (
              <li
                key={index}
                className='flex justify-between pr-3 pl-3  bg-slate-200 w-full p-1 rounded-md mb-2 text-lg font-medium '
              >
                {value}{' '}
                <div className='flex gap-3'>
                  <small
                    onClick={() => handleEdit(index)}
                    className='cursor-pointer text-lg '
                  >
                    🖋️
                  </small>
                  <small
                    onClick={() => handleRemove(index)}
                    className='cursor-pointer font-bold text-lg'
                  >
                    X
                  </small>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
