'use strict'

let React = require('react-native');
let { StyleSheet, Image, TextInput, TouchableHighlight, View, Text } = React;
var Dimensions = require('Dimensions');

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: this.props.text || '', text: this.props.text || ''};
  }

  addThing() {
    let thing = {name: this.state.text, loved: 'false'}
    this.props.addThing(thing)

    this.setState({
      input: '',
      text: ''
    })
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.image}
          value={this.state.text}
          onChange={(event) => this.setState({text: event.nativeEvent.text})}
        />

        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.button}
            underlayColor='#ccc'
            onPress={this.addThing.bind(this)}
          >
            <Text style={styles.buttonText}>Add Thing!</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

let screenHeight = Dimensions.get('window').height;
var windowSize = Dimensions.get('window');

let styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    width: screenHeight*0.5,
    height: screenHeight * 0.1,
    borderColor: 'gray', 
    borderWidth: 1
  },
  buttonContainer: {
    bottom: 0,
    flex: .1,
    width: windowSize.width,
    backgroundColor: '#eee',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 30,
    color: '#666666',
  },
})

module.exports = Event;