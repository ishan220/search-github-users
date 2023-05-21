/state has to be changed through set method ,to re-render the component . otherwise re-rendering doesn't happen

/*****shouldComponentUpdate()****/
//This function decides whether the changed state will be shown in the component, that is if component will re-render if state/prop has been changed,
// if value returned is  true , state is set through set method--.Component re-renders
//if value returned is true , state is set directly (accessing the properties directly)--Component does not re-renders

/* Flow of Execution
=>1)constructor
  2)getDerivedStateFromProps
  3)render
  4)componentDidMount
=> 
  1)constructor(called on initial mounting )
  2)custom method trying to change state, it works for the properties not changed by "getDerivedStateFromProps" method provided "shouldComponentUpdate" function return true
  3)getDerivedStateFromProps (this is responsible to change the state)
  4)shouldComponentUpdate() --this is needed for custom update state method to re-render the component, but it doesnot work for the properties changes through prop "getDerivedStateFromProps" method is present,
  5)render
  6)child const
  7)child render
  8)child mount
  9)componentDidUpdate(if the component is updated in DOM,then only it is called , not called when mounted first)
  10)componentDidMount(this is called when the component is mounted for first time)

 =>
 1)constructor
 2)custom method trying to change state
 3)shouldComponentUpdate() --this is needed for custom update state method to re-render the component 

 =>componentWillUnmount  --this is called when any component is removed from DOM
    */


//////Class Components Vs Functional Components
Class Components --> mutable , same instance state is updated , hence previous states gets overriden
Functional Components --> immutable


///////
React Elements structure
type: div/h1/other tags
props: className, style etc
key: 
children
///////////////

////////diffing algorithm
"key" property of element is used for diffing algorithm, hence indicatig react to replace only the elements in tree having key value different from previous state
/////////
Hooks
/////////


######
Developing our own Hook

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

##########

Auth0 Setup
##########

1)Open Auth0
2)Create application selecting Single Page Application
3)provide , callback, logout, web-origin url -- http://localhost:3000, netlify_url
4)create DB connection ,add social connection
5)try connection

///////////
{
  "sub": "auth0|6469f8361eb8b08245970b84",
  "nickname": "ishangoel1502",
  "name": "ishangoel1502@gmail.com",
  "picture": "https://s.gravatar.com/avatar/1ef24acc125c22464994510deb375f8d?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fis.png",
  "updated_at": "2023-05-21T10:53:42.233Z"
}

///////////

if we are using Netlify account , to avoid "page not found bugs"
add "_redirects" file in public folder with content "/*   /index.html 200"


///
#######Warnings and create-react-app
"build" : "CI= react-scripts build "
/////////



