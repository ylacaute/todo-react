import React from 'react';


// Clock available here : http://jsfiddle.net/rainev/vx4r5qzv/
class Clock extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var d = this.props.date;
    var millis = d.getMilliseconds();
    var second = d.getSeconds() * 6 + millis * (6 / 1000);
    var minute = d.getMinutes() * 6 + second / 60;
    var hour = ((d.getHours() % 12) / 12) * 360 + 90 + minute / 12;

    return (
      <div className="clock-widget">
        <div className="face">
          <div className="second" style={transform(rotate(second))} />
          <div className="hour" style={transform(rotate(hour))} />
          <div className="minute" style={transform(rotate(minute))} />
        </div>
      </div>
    );
  }

}

function transform(str) {
  return { transform: str };
}

function rotate(deg) {
  return 'rotate(' + deg + 'deg)';
}


class ClockWidget extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    let self = this;
    this.interval = setInterval(() => {
      self.setState({ date: new Date() });
    },1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <Clock date={this.state.date} />;
  }

}

export default ClockWidget;

