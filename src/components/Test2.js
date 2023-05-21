import React from 'react'
// export default class Test2 extends React.Component {
//   constructor(props) {
//     console.log('child constructor')
//     super(props)
//   }
//   componentDidMount() {
//     console.log('child component got mounted')
//   }
//   componentWillUnmount() {
//     console.log('The child component about to be unmounted.')
//     //alert('The child component about to be unmounted.')
//   }
//   render() {
//     console.log('child render')
//     return <h1>Child Header</h1>
//   }
// }

const ReactX = (() => {
  let index = 0
  let state = []
  const useState = (initialvalue) => {
    let localindex = index
    index++
    if (state[localindex] == undefined) {
      state[localindex] = initialvalue
    }

    const setterFunction = (value) => {
      state[localindex] = value
    }
    return [state[localindex], setterFunction]
  }
  const useEffect = (callBack, dependencyArray) => {
    let hasChanged = true
    const oldDependencies = state[index]

    if (oldDependencies) {
      hasChanged = false
      dependencyArray.forEach((dependency, index) => {
        const oldDependency = oldDependencies[index]
        const areTheSame = Object.is(dependency, oldDependency)
        if (!areTheSame) hasChanged = true
      })
    }
    if (hasChanged) callBack(index, oldDependencies)

    state[index] = dependencyArray
    // index++
  }

  const resetIndex = () => {
    index = 0
  }

  return { useState, resetIndex, useEffect }
})()

const { useState, resetIndex, useEffect } = ReactX
const Test2 = () => {
  const [counterValue, setCounterValue] = useState(1)
  //console.log('index:', index, ' ')
  const [name, setName] = useState('Thomas')
  //console.log('index:', index, ' ')
  console.log('couterValue', counterValue, '')
  useEffect(
    (index, oldDependencies) => {
      console.log('useEffect Called Yha', '-index-', index)
      console.log('old Dependencies', oldDependencies)
    },
    [name]
  )
  // if (counterValue !== 2)
  setCounterValue(2)
  //if (name != 'Jack')
  setName('Jack')
}

Test2()
resetIndex()
Test2()
resetIndex()
Test2()

export default Test2
