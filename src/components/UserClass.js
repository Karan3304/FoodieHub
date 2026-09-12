import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      userInfo: {
        name: "Dummy name",
        bio: "Dummy bio",
        avatar_url: "dummy_url",
      },
    };
    // console.log(this.props.name + " child constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + " child compnenet did mount");
    // API call
    const data = await fetch("https://api.github.com/users/Karan3304");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component updated");
  }

  componentWillUnmount() {
    console.log("component is unmounted");
  }
  render() {
    // const { name, location } = this.props;
    // console.log(this.props.name + " child render");
    const { name, bio, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name:{name}</h2>
        <h3>Location:{bio}</h3>
        <h4>Contact:@karans3304</h4>
      </div>
    );
  }
}

export default UserClass;
