var React = require('react-native');
import EventShow from './EventShow.js'

var {
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  Text,
  TouchableElement,
  StyleSheet,
  Dimensions,
  Image
} = React;

let screenHeight = Dimensions.get('window').height;

class Event extends React.Component {
  constructor(props) {
    super(props)
  }

  rowPressed(propertyGuid) {
    var event =  this.props.event

    this.props.navigator.push({
      title: "Event",
      component: Event,
      passProps: {event: event, navigator: this.props.navigator}
    });
  }

  onPressEvent() {
    console.log("pressed")
    this.props.navigator.push({
        name: 'EventShow',
        component: EventShow,
        passProps: {event: this.props.event, navigator: this.props.navigator}
    });
  }

  render() {
        return (
          <View style={styles.event}>
            <TouchableHighlight
              onPress={this.onPressEvent.bind(this)}
            >
              <View>
                <Image
                  source={{uri: this.props.event.image}}              
                />
                
                <Text>
                  {this.props.event.name}
                </Text>
                <Text>
                  {this.props.event.price}
                </Text>
                <Text>
                  {this.props.event.location}
                  // need difference from this person here
                </Text>
                <Text>
                  Click to learn more, then show view, with listing url
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        );
    }
}

var styles = StyleSheet.create({
  event: {
    alignSelf: 'center',
    padding: 20,
    paddingTop: 0,
    width: screenHeight * 0.5,
    height: screenHeight * 0.1,
    borderColor: 'gray', 
    borderWidth: 1
  },
});

module.exports = Event;

