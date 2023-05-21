import React from 'react'
import ReactDOM from 'react-dom/client'
import Test2 from './Test2'
export default class Test1 extends React.Component {
  constructor(props) {
    super(props)
    console.log('const called')
    this.state = { show: true, color: 'blue', border: 'green' }
  }
  componentDidMount() {
    console.log('Parent Component Mounted')
  }
  componentDidUpdate() {
    console.log(
      'componentDidUpdate method called afer component is mounted in DOM'
    )
  }
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps function is called')
    return { color: props.favcolor }
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate fn called')
    return true
  }

  changeColor() {
    console.log('color method called')
    //this.state.color = 'red'
    this.setState({ color: 'red', border: 'red' })
    // console.log('After setting the state', this.state.color, this.state.border)
  }
  toggleHeader() {
    if (this.state.show) this.setState({ ...this.state, show: false })
    else this.setState({ ...this.state, show: true })
  }
  componentDidCatch(error, info) {
    console.log(error, ':', info)
    this.setState({ error, info })
  }
  render() {
    console.log('Render Method is called')
    if (this.state.error) {
      return <div>We have Encountered an Error! {this.state.error}</div>
    }
    return (
      <>
        <h2>Color changed to:{this.state.color}</h2>
        <button
          style={{ border: `4px solid ${this.state.border} ` }}
          onClick={() => {
            this.changeColor()
          }}
        >
          ChangeColor
        </button>
        <button
          onClick={() => {
            this.toggleHeader()
          }}
        >
          toggleHeader
        </button>
        {this.state.show && <Test2 />}
      </>
    )
  }
}

//state has to be changed through set method ,to re-render the component . otherwise re-rendering doesn't happen

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
