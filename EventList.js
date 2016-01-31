var React = require('react-native');
import Event from './Event'
var {
  ScrollView,
  StyleSheet,
  View,
  ScrollView,
  NavigatorIOS
} = React;

var REQUEST_URL = 'http://localhost:3000/api/v1/today';

let events = [];
let component;

class EventList extends React.Component {
    constructor(props) {
      super(props);
      this.state = { events: this.props.events };
      component = this;
    }

    render() {
      events = this.props.events

      return (
        <View style={styles.eventContainer}>
          <ScrollView automaticallyAdjustContentInsets={false}
            onScroll={() => { console.log('onScroll!'); }}
            scrollEventThrottle={200}
            style={styles.scrollView}
          >
           {events.map((event, i) => {
              return <Event navigator={this.props.navigator} event={event} key={i} />
            })}         
          </ScrollView>
        </View>
    );
  }
}

var styles = StyleSheet.create({
  eventContainer: {
    alignSelf: 'center',
    padding: 20,
    paddingTop: 100,
    backgroundColor: '#85b16a',
  },
  scrollView: {
    backgroundColor: '#6A85B1',
    height: 600,
  },
  horizontalScrollView: {
    height: 120,
  }
})

module.exports = EventList;