var React = require('react-native');

var {
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  Text,
  TouchableElement,
  StyleSheet,
  Dimensions
} = React;

let screenHeight = Dimensions.get('window').height;

class Thing extends React.Component {
  makeLoved() {
    this.props.update(this.props.thing)
  }
  delete() {
    this.props.delete(this.props.thing)
  }
  render() {
        return (
          <View style={styles.thing}>
            <Text>
              {this.props.thing.name}
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

module.exports = Thing;

