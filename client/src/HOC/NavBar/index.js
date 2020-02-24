const withNavBar = Wrapped => {
  class HOC extends Component {
    render() {
      return (
        <Wrapper>
          <Wrapped {...this.props} />
        </Wrapper>
      );
    }
  }

  return HOC;
};

export default withNavBar;
