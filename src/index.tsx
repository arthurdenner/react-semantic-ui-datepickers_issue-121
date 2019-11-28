import * as React from "react";
import * as ReactDOM from "react-dom";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import { DateTime } from "luxon";

interface AppProps {}
interface AppState {
  gte: DateTime;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      gte: null
    };
    this.onChange = this.onChange.bind(this);
  }

  private onChange(e, d) {
    const dt: DateTime = DateTime.fromJSDate(d.value);
    this.setState({ gte: dt });
  }

  render() {
    const { gte } = this.state;
    // gte is DateTime. So i will convert it to JS Date on value below
    return (
      <div>
        <SemanticDatepicker
          value={gte.toJSDate()}
          name={"date_gte"}
          format={"DD-MM-YYYY"}
          clearable={true}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
