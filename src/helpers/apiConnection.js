import checkFormat from './checkActivityFormat'

const API = 'https://localhost:3001/api/'

const getActivity = id => fetch(API + `Activities/${id}`).then(
  result => result.json().then(
    activity => fetch(API + `Activities/${id}/Tasks`).then(
      result => result.json().then(
        tasks => {
          if(checkFormat({...activity, tasks})) {
            return {...activity, tasks}
            } else {
            throw new Error("Archivo de actividad corrupto")
          }
        }
      )
    ) 
  )
)

export default getActivity