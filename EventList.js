var React = require('react-native');
import EventShow from './Event'
var {
  ScrollView,
  StyleSheet,
  View,
  ScrollView,
  NavigatorIOS,
  ListView,
  TouchableHighlight,
  Image,
  Text
} = React;

var REQUEST_URL = 'http://localhost:3000/api/v1/today';

var Footer = require("./Footer");

let events = [];
let component;

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
    color: 'white'
  },
  title: {
    fontSize: 20,
    color: '#white'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#BA55D3',
  },
  fullView: {
    flex: 1,
    backgroundColor: '#BA55D3',
  }
});

class EventList extends React.Component {
    constructor(props) {
      super(props);
      component = this;
      var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.id !== r2.id});
      this.state = {
        dataSource: dataSource.cloneWithRows(this.props.events)
      };
    }

    rowPressed(eventId) {
      var event = this.props.events.filter(event => event.uuid === eventId)[0];
      
      this.props.navigator.push({
        title: "Event",
        component: EventShow,
        passProps: {event: event}
      });
    }

    renderRow(rowData, sectionID, rowID) {

      return (
        <TouchableHighlight onPress={() => this.rowPressed(rowData.uuid)}
          underlayColor='#dddddd'>
          <View>
            <View style={styles.rowContainer}>
              <Image style={styles.thumb} source={{ uri: rowData.image }} />
              <View style={styles.textContainer}>
                <Text style={styles.price}>{rowData.name}</Text>
                <Text style={styles.title} 
                      numberOfLines={1}>{rowData.location}</Text>
                <Text style={styles.title} 
                      numberOfLines={1}>{rowData.price}</Text>
              </View>
            </View>
            <View style={styles.separator}/>
          </View>
        </TouchableHighlight>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
        style={styles.fullView}
        />
    );
  }

}

module.exports = EventList;