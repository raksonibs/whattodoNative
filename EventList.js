var React = require('react-native');
import Event from './Event'
var {
  ScrollView,
  StyleSheet,
  View,
  ScrollView,
  NavigatorIOS,
  ListView
} = React;

var REQUEST_URL = 'http://localhost:3000/api/v1/today';

let things = [];
let component;

class EventList extends React.Component {
    constructor(props) {
      super(props);
      var dataSource = new ListView.DataSource(
        {rowHasChanged: (r1, r2) => r1.id !== r2.id});
      this.state = {
        dataSource: dataSource.cloneWithRows(things)
      };
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

    rowPressed(eventId) {
      var event = this.props.things.filter(prop => prop.id === eventId)[0];

      this.props.navigator.push({
        title: "Event",
        component: EventShow,
        passProps: {event: event}
      });
    }

    renderRow(rowData, sectionID, rowID) {
      return (
        <TouchableHighlight onPress={() => this.rowPressed(rowData.id)}
            underlayColor='#dddddd'>
          <View>
            <View style={styles.rowContainer}>
              <Image style={styles.thumb} source={{ uri: rowData.image }} />
              <View  style={styles.textContainer}>
                <Text style={styles.price}>{rowData.price}</Text>
                <Text style={styles.title} 
                      numberOfLines={1}>{rowData.name}</Text>
              </View>
            </View>
            <View style={styles.separator}/>
          </View>
        </TouchableHighlight>
      );
    }

    render() {
      things = this.state.things || things
      return (
        <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}/>
    );
  }
}

var styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  }
});

module.exports = EventList;