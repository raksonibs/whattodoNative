'use strict'

let React = require('react-native');
let { StyleSheet, Image, TextInput, TouchableHighlight, View, Text } = React;
var Dimensions = require('Dimensions');

class EventFormButton extends React.Component {
  constructor(props) {
    super(props);
  }

  changeAttribute() {
    if (this.props.attributeName === 'price') {
      this.props.changePrice(this.props.attributeAmount);
    } else if (this.props.attributeName === 'location') {
      this.props.changeLocation(this.props.attributeAmount);
    } else if (this.props.attributeName === 'activity') {
      this.props.changeActivity(this.props.attributeAmount);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          underlayColor='#ccc'
          onPress={changeAttribute}
        >
          <Text style={styles.buttonText}>{this.props.attributeAmount}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

let screenHeight = Dimensions.get('window').height;
var windowSize = Dimensions.get('window');

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1,
    backgroundColor: '#BA55D3',
  },
  heading: {
    backgroundColor: '#BA55D3',
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  image: {
    width: 420,
    height: 300
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: 'white'
  },
  title: {
    fontSize: 20,
    margin: 5,
    color: 'white'
  },
  description: {
    fontSize: 18,
    margin: 5,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

module.exports = EventFormButton;