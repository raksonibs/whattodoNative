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

let things = [];
let component;

class EventList extends React.Component {
    constructor(props) {
      super(props);
      this.state = { things: things };
      component = this;
    }

    componentDidMount() {
      this.fetchData()
    }

    fetchData() {
      fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
          things = responseData.events
          this.setState({
              things: things
          });
      })
      .done();
    }
    render() {
      things = this.state.things || things
      debugger
      return (
        <View style={styles.thingContainer}>
          <ScrollView automaticallyAdjustContentInsets={false}
            onScroll={() => { console.log('onScroll!'); }}
            scrollEventThrottle={200}
            style={styles.scrollView}
          >
           {things.map((thing, i) => {
              return <Event navigator={this.props.navigator} delete={this.props.delete} update={this.props.update} thing={thing} key={i} />
            })}         
          </ScrollView>
        </View>
    );
  }
}

var styles = StyleSheet.create({
  thingContainer: {
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