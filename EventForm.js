'use strict'

let React = require('react-native');
let { StyleSheet, Image, TextInput, TouchableHighlight, View, Text } = React;
var Dimensions = require('Dimensions');
var EventFormButton = require('./EventFormButton');

var REQUEST_URL = 'http://localhost:3000/api/v1/get_rating/';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      money: '',
      activity: '',
      location: '',
      isLoading: false,
      showPrice: true,
      showActivity: false,
      showLocation: false,
      message: ''
    };
  }

  changePrice(price) {
    this.state.money = price;
    this.setState({showPrice: false, showActivity: true})
  }

  changeActivity(activity) {
    this.state.activity = activity;
    this.setState({showActivty: false, showLocation: true})
  }

  changeLocation(location) {
    this.state.location = location;
    this.setState({showLocation: false})
    this._executeSearch()
  }

  _handleResponse(response) {
    // these events have a score!
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

  _executeSearch() {
    this.setState({
      isLoading: true,
    })
    console.log(REQUEST_URL);
    fetch(REQUEST_URL + this.state.money + '/' + this.state.activity + '/' + this.state.location)
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

  renderButtons() {
    let prices = [0,25,100];
    let locations = ['far', 'close', 'explore']
    let categories = ['Party', 'Party', 'Party']

    for (var i=0; i < 9;i++) {
      if ( i <  3) {
        if (this.state.showPrice === true) {          
          return <EventFormButton key={i} changePrice={this.changePrice.bind(this, i)} attributeAmount={prices[i]} />        
        }
      } else if ( i > 6) {
        if (this.state.showLocation === true) {
          return <EventFormButton key={i} changeLocation={this.changeLocation.bind(this, i)} attributeAmount={locations[i - 3]} />
        }
      } else {
        if (this.state.showActivity === true) {
          return <EventFormButton key={i} changeActivity={this.changeActivity.bind(this, i)} attributeAmount={activity[i - 6]} />
        }
      }
    }
  }

  render() {

    var spinner = this.state.isLoading ?
      ( <ActivityIndicatorIOS
          hidden='true'
          size='large'/> ) :
      ( this.renderButtons() );

    return (
      <View style={styles.container}>
        {spinner}
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

module.exports = EventForm;