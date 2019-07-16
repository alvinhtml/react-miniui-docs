 export const A = React.forwardRef((props, ref) => (
  <div ref={ref}>{props.children}</div>
));

 export class B extends Component {
  render() {
    return <div>b</div>
  }
}

 export class C extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <>{this.props.children}{this.props.b}</>
    )
  }
}

class D extends Component {
  render() {
    return <C b={<B />}><A /></C>
  }
}
