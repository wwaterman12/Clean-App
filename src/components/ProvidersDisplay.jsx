import React from 'react';
import { Link } from 'react-router';

// const propTypes = {
//   selection: React.PropTypes.object,
// };

class ProvidersDisplay extends React.Component {
  constructor () {
    super();
    this.state = {
      currentWeek: null,
    };
    this.getDayAndMonth = this.getDayAndMonth.bind(this);
    this.incrementWeek = this.incrementWeek.bind(this);
    this.nextWeek = this.nextWeek.bind(this);
    this.lastWeek = this.lastWeek.bind(this);
  }

  componentWillMount () {
    const today = new Date();
    const sevenDays = new Date(Date.now() + 604800000);
    this.setState({
      currentWeek: {
        startDate: today,
        endDate: sevenDays,
      },
    });
  }

  getDayAndMonth () {
    const today = this.state.currentWeek.startDate;
    const nextWeek = this.state.currentWeek.endDate;
    const weekData = {
      startDay: today.getDate(),
      startMonth: today.getMonth() + 1,
      endDay: nextWeek.getDate(),
      endMonth: nextWeek.getMonth() + 1,
    };
    return weekData;
  }

  incrementWeek (direction) {
    const startDate = this.state.currentWeek.startDate;
    const endDate = this.state.currentWeek.endDate;
    let newStart;
    let newEnd;
    if (direction > 0) {
      console.log('add route hit')
      debugger
      newStart = new Date(startDate.valueOf() + 1000*60*60*24*8);
      newEnd = new Date(endDate.valueOf() + 1000*60*60*24*8);
    }
    else if (direction < 0) {
      console.log('subtract route hit')
      newStart = new Date(startDate - 691200000);
      newEnd = new Date(endDate - 691200000);
    }
    console.log(newStart);
    console.log(newEnd);
    this.setState({
      currentWeek: {
        startDate: newStart,
        endDate: newEnd,
      }
    });
  }

  nextWeek () {
    this.incrementWeek(1);
  }

  lastWeek () {
    this.incrementWeek(-1);
  }

  render () {
    const week = this.getDayAndMonth(this.state.currentWeek);
    return (
      <div id='week-bar'>
        <div className='week-button' onClick={this.lastWeek}>triangle</div>
        <div id='dates-display'>
          {`${week.startMonth}月${week.startDay}日~${week.endMonth}月${week.endDay}日`}
        </div>
        <div className='week-button' onClick={this.nextWeek}>triangle</div>
      </div>
    );
  }
}

export default ProvidersDisplay;
