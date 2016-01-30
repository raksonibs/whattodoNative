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
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.thing}>
        Event Show
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

