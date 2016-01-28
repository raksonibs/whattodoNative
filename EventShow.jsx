var React = require('react-native');

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

class EventShow extends React.Component {
  render() {
        return (
          <View style={styles.thing}>
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
             {this.props.thing.url}
            </Text>
            <Text>
             {this.props.thing.desc}
            </Text>
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

module.exports = EventShow;

