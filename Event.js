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

  onPressEvent() {
    console.log("pressed")
    this.props.navigator.push({
        name: 'EventShow',
        component: EventShow,
        passProps: {thing: this.props.thing, navigator: this.props.navigator}
    });
  }

  render() {
        return (
          <View style={styles.thing}>
            <TouchableHighlight
              onPress={this.onPressEvent.bind(this)}
            >
              <View>
                <Image
                  source={{uri: this.props.thing.image}}              
                />
                
                <Text>
                  {this.props.thing.name}
                </Text>
                <Text>
                  {this.props.thing.price}
                </Text>
                <Text>
                  {this.props.thing.location}
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
  thing: {
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

