import React, { Component } from 'react';
import { Link } from 'react-router';
import ProviderListItem from './ProviderListItem.jsx';

const propTypes = {
  selectedServices: React.PropTypes.object,
  setProviderTimeAndPrice: React.PropTypes.func,
};

class ProviderList extends Component {
  constructor() {
    super();
    this.state = {
      currentWeek: null,
      providers: [
        {
          id: 39585,
          name: 'OsoujiMasters',
          prices: {
            airCondition1: 6500,
            airCondition2: 7500,
            rangeHood: 8000,
            bathroom: 7000,
            toilet: 5000,
          },
          availabilities: [
            { start: 1000, end: 1200 },
            { start: 1600, end: 1800 },
            { start: 1100, end: 1300 },
            { start: 1000, end: 1400 },
          ],
        },
        {
          id: 57854,
          name: 'CleaningDucks',
          prices: {
            airCondition1: 7000,
            airCondition2: 8000,
            rangeHood: 7900,
            bathroom: 8000,
            toilet: 5500,
          },
          availabilities: [
            { start: 1300, end: 1500 },
            { start: 1000, end: 1300 },
          ],
        },
        {
          id: 48585,
          name: 'SuperCleaners',
          prices: {
            airCondition1: 8000,
            airCondition2: 10000,
            rangeHood: 5000,
            bathroom: 8000,
            toilet: 5000,
          },
          availabilities: [
            { start: 1200, end: 1400 },
            { start: 1300, end: 1500 },
            { start: 1000, end: 1400 },
          ],
        },
      ],
    };
    this.getDayAndMonth = this.getDayAndMonth.bind(this);
    this.incrementWeek = this.incrementWeek.bind(this);
    this.nextWeek = this.nextWeek.bind(this);
    this.lastWeek = this.lastWeek.bind(this);
  }
  componentWillMount() {
    const today = new Date();
    const sevenDays = new Date(Date.now() + 604800000);
    this.setState({
      currentWeek: {
        startDate: today,
        endDate: sevenDays,
      },
    });
  }
  getDayAndMonth() {
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
  incrementWeek(direction) {
    const startDate = this.state.currentWeek.startDate;
    const endDate = this.state.currentWeek.endDate;
    let newStart;
    let newEnd;
    if (direction > 0) {
      newStart = new Date(startDate.valueOf() + (1000 * 60 * 60 * 24 * 8));
      newEnd = new Date(endDate.valueOf() + (1000 * 60 * 60 * 24 * 8));
    } else if (direction < 0) {
      newStart = new Date(startDate - 691200000);
      newEnd = new Date(endDate - 691200000);
    }
    this.setState({
      currentWeek: {
        startDate: newStart,
        endDate: newEnd,
      },
    });
  }
  nextWeek() {
    this.incrementWeek(1);
  }
  lastWeek() {
    this.incrementWeek(-1);
  }
  generateRandomDate () {
    const week = this.getDayAndMonth(this.state.currentWeek);
    let eachDay = week.startDay;
    let eachMonth = week.startMonth;
    const dates = [];
    for(let i=0; i<7; i++) {
      eachDay += i;
      if (eachDay === 31) {
        eachDay = 1;
        eachMonth += 1;
      }
      dates.push({ day: eachDay, month: eachMonth });
    }
    const index = Math.floor(Math.random() * 7);
    return dates[index];
  }
  render() {
    const week = this.getDayAndMonth(this.state.currentWeek);
    return (
      <div>
        <div id="week-bar">
          <button
            id="left-week-button"
            className="week-button"
            onClick={this.lastWeek}
          >◀</button>
          <span id="dates-display">
            {`${week.startMonth}月${week.startDay}日~${week.endMonth}月${week.endDay}日`}
          </span>
          <button
            id="right-week-button"
            className="week-button"
            onClick={this.nextWeek}
          >▶</button>
        </div>
        <div id="filter-options">
          <div>Advanced time search</div>
          <div>Sorted by: Lowest price</div>
        </div>
        <div>
          { this.state.providers.map(provider =>
              provider.availabilities.map((availability) => {
                const dateOfAvailability = this.generateRandomDate();
                return (
                  <ProviderListItem
                    providerID={provider.id}
                    providerName={provider.name}
                    prices={provider.prices}
                    availability={availability}
                    selectedServices={this.props.selectedServices}
                    setProviderTimeAndPrice={this.props.setProviderTimeAndPrice}
                    date={dateOfAvailability}
                  />
                );}
          )) }
        </div>
      </div>
    );
  }
}

ProviderList.propTypes = propTypes;

export default ProviderList;
