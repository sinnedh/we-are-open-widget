import React from "react";
import translate from "./translate";
import "./style.css";

const defaultUrl =
  "https://us-central1-we-are-open-2a85e.cloudfunctions.net/venue";

const Day = ({ title, openingHours }) => (
  <div className="day">
    <strong className="title">{title}</strong>
    <ul>
      {openingHours && openingHours.length > 0
        ? openingHours.map(({ open, close }, i) => (
            <li key={i}>
              {open} {translate("to")} {close}
            </li>
          ))
        : translate("Closed")}
    </ul>
  </div>
);

const weekdays = ["MON", "TUE", "WED", "THU", "SAT", "SUN"];
const OpeningHours = ({ openingHours }) => (
  <div>
    <h1>{translate("Opening hours")}</h1>
    {weekdays.map((weekday, i) => (
      <Day
        key={i}
        title={translate(weekday)}
        openingHours={openingHours[weekday]}
      />
    ))}
  </div>
);

const ExceptionalDays = ({ exceptionalDays }) => (
  <div>
    <h1>{translate("Exceptional days")}</h1>
    {Object.keys(exceptionalDays).map(key => (
      <Day
        key={key}
        title={key}
        openingHours={exceptionalDays[key].openingHours}
      />
    ))}
  </div>
);

class WeAreOpenWidget extends React.Component {
  state = { exceptionalDays: {}, openingHours: {}, ready: false };

  componentDidMount = () => {
    const { id, url = defaultUrl } = this.props;
    fetch(`${url}/${id}/`)
      .then(response => response.json())
      .then(({ exceptionalDays, openingHours }) =>
        this.setState({ exceptionalDays, openingHours, ready: true })
      );
  };

  render = () => {
    const { exceptionalDays, openingHours, ready } = this.state;

    if (!ready) {
      return <div>{translate("Loading")}</div>;
    }

    return (
      <React.Fragment>
        <OpeningHours openingHours={openingHours} />
        <ExceptionalDays exceptionalDays={exceptionalDays} />
      </React.Fragment>
    );
  };
}

export default WeAreOpenWidget;
