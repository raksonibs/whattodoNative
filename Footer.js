'use strict';
 
var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component
} = React;

var REQUEST_URL = 'http://localhost:3000/api/v1/today';

var EventList             = require('./EventList');

class Footer extends Component {
  constructor(props) {    
    super(props);
    this.state = {
      money: '',
      category: '',
      location: ''
    }
  }

  componentDidMount() {
   
  }

  _handleResponse(response) {
    if (response.events.length > 0) {
      this.props.navigator.push({
        title: 'Events',
        component: EventList,
        passProps: {events: response.events}
      });
    } else {
      this.setState({ message: 'Not recognized; please try again.'});
    }
    this.setState({ isLoading: false , message: '' });
  }

  onEventPressed() {
    this.props.navigator.push({
      title: "EventForm",
      component: EventForm,
      passProps: {navigator: navigator}
    });
  }
   
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button}
          underlayColor='#99d9f4'
          onPress={this.onEventPressed.bind(this)}
          >
          <Text style={styles.buttonText}>Match me!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: 'white'
  },
  text: {
    color: 'white'
  },
  header: {
    fontSize: 25,
    margin: 5,
    color: 'white',
    fontFamily: 'Roboto-Bold'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
    backgroundColor: '#BA55D3',
    flex: 1
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  image: {
    width: 217,
    height: 138
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
  },
});

module.exports = Footer;