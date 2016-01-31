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

class MainApp extends Component {
  constructor(props) {    
    super(props);
    this.state = {
      isLoading: true,
      message: ''
    }
  }

  componentDidMount() {
    this._executeQuery();
  }

  _handleResponse(response) {
    this.setState({ isLoading: false , message: '' });
    if (response.events.length > 0) {
      this.props.navigator.push({
        title: 'Events',
        component: EventList,
        passProps: {events: response.events}
      });
    } else {
      this.setState({ message: 'Not recognized; please try again.'});
    }
  }

  _executeQuery() {    
    console.log(REQUEST_URL);
    fetch(REQUEST_URL)
    .then(response => response.json())
    .then(responseData => this._handleResponse(responseData))
    .catch(error => {      
      console.log("error")
      this.setState({
        isLoading: false,
        message: 'Something bad happened ' + error
      });
    })
  }
   
  render() {

    var spinner = this.state.isLoading ?
      ( <ActivityIndicatorIOS
          hidden='true'
          size='large'/> ) :
      ( <View/>);
    return (
      <View style={styles.container}>        
        <Text> Loading for you fine folks... </Text>
        {spinner}
        <Text style={styles.description}>{this.state.message}</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  image: {
    width: 217,
    height: 138
  }
});

module.exports = MainApp;
