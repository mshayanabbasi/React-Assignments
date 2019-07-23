import React from 'react'
const App2 = (props) => {
  const temArray = props.charts.filter((v, i) => {
    return props.book.id === v.bookLikedID;
  })
  return (
    <div>
      {temArray.length > 0 ? (
        <ul>
          {temArray.map((v,i) => {
            return <li key={i}>{props.peeps[v.peepsID].name}</li>
          })}
        </ul>
      ): ("None of the peeps in the chart liked this book")}
    </div>
  )
}
export default App2
