import React from 'react'
import reviews from '../data'
import Person from './Person'



const App = () => {
  const [ index, setIndex ] = React.useState(0)
  const [ person, setPerson ] = React.useState()

   React.useEffect(() => {
    setPerson(reviews[index])
  }, [])

// forward button functionality
  const handleForward = () => {
    console.log('forward button was clicked')

    let newIndex;
    // if index is less than the length of array, carry on increasing the index number
    if(index < reviews.length - 1){
      newIndex = index + 1
      setIndex(newIndex)
      setPerson(reviews[newIndex])
      // when index is maximum and cannot go higher, we will reduce it all the way to zero
    } else {
      newIndex = 0
      setIndex(newIndex)
      setPerson(reviews[newIndex])
    }
  }

  // previous button functionality
  const handlePrev = () => {
    console.log('previous button has been clicked')

    let newIndex;
    // when index IS zero, we will update it to make it the last item in the array
    if(index === 0) {
    newIndex = reviews.length - 1
    setIndex(newIndex)
    setPerson(reviews[newIndex])
    // when index is NOT zero, then we will decrease the value of index by 1 
    } else {
      newIndex = index - 1
      setIndex(newIndex)
      setPerson(reviews[newIndex])
    }
  }

 
  
  return (
    <>

    <main>
      {person && <Person person={person} handleForward={handleForward} handlePrev={handlePrev}/>}
    </main>

  </>
  );
};



export default App;
