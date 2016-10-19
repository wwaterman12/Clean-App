import React from 'react';
import { Link } from 'react-router';

const propTypes = {
  selection: React.PropTypes.object,
};

class ProvidersDisplay extends React.Component {
  constructor () {
    super();
    this.state = {
      currentWeek: null,
      providers: {
        OsojiMasters: {
          prices: {
            AC1: 6500,
            AC2: 7500,
            Range: 8000,
            Bathroom: 7000,
            Toilet: 5000,
          },
          availabilities: {
            Monday: {
              start: 1000,
              end: 1200,
            },
            Tuesday: {
              start: 1600,
              end: 1800,
            },
            Wednesday: {},
            Thursday: {},
            Friday: {
              start: 1100,
              end: 1300,
            },
            Saturday: {},
            Sunday: {
              start: 1000,
              end: 1400,
            },
          },
        },
        CleaningDucks: {
          prices: {
            AC1: 7000,
            AC2: 8000,
            Range: 7900,
            Bathroom: 8000,
            Toilet: 5500,
          },
          availabilities: {
            Monday: {},
            Tuesday: {
              start: 1300,
              end: 1500,
            },
            Wednesday: {},
            Thursday: {},
            Friday: {
              start: 1000,
              end: 1300,
            },
            Saturday: {},
            Sunday: {},
          }
        },
        SuperCleaners: {
          prices: {
            AC1: 8000,
            AC2: 10000,
            Range: 5000,
            Bathroom: 8000,
            Toilet: 5000,
          },
          availabilities: {
            Monday: {},
            Tuesday: {
              start: 1200,
              end: 1400,
            },
            Wednesday: {
              start: 1300,
              end: 1500,
            },
            Thursday: {},
            Friday: {
              start: 1000,
              end: 1400,
            },
            Saturday: {},
            Sunday: {},
          },
        },
      }
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
      newStart = new Date(startDate.valueOf() + 1000*60*60*24*8);
      newEnd = new Date(endDate.valueOf() + 1000*60*60*24*8);
    }
    else if (direction < 0) {
      newStart = new Date(startDate - 691200000);
      newEnd = new Date(endDate - 691200000);
    }
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
      <div>
        <div id='week-bar'>
          <span id="left-week-button" className='week-button' onClick={this.lastWeek}>T</span>
          <span id='dates-display'>
            {`${week.startMonth}月${week.startDay}日~${week.endMonth}月${week.endDay}日`}
          </span>
          <span id="right-week-button" className='week-button' onClick={this.nextWeek}>T</span>
        </div>
        <div id='filter-options'>
          <div>Advanced time search</div>
          <div>Sorted by: lowest price</div>
        </div>
        <div>
          vendor list goes here
        </div>
      </div>
    );
  }
}

export default ProvidersDisplay;
