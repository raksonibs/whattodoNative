var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  Navigator,
  NavigatorIOS,
  TouchableHighlight,
  Component
} = React;

var Dimensions = require('Dimensions');

var REQUEST_URL = 'http://localhost:3000/api/v1/today';
let things = []

var EventForm             = require('./EventForm');
var EventList             = require('./EventList');
var MainApp            = require('./MainApp');

var styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#85b16a'
  }
});


class whattodoNative extends Component {
  constructor(props) {
    super(props);    
    component = this;
    this.state = {
    }
  }

  onEventPrssed() {            
    this.props.navigator.push({
      title: "Search",
      component: SearchShow
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigatorIOS
        barTintColor='#000'
        titleTextColor='#fff'
        tintColor='#fff'
        style={styles.container}
        initialRoute={{
          title: 'WhatToDo',
          component: MainApp
        }}/>
        <View style={styles.footer}>
          <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'
            onPress={this.onEventPressed.bind(this)}
            >
            <Text style={styles.buttonText}>Match your events!</Text>
          </TouchableHighlight>
        </View>     
      </View>
    );
  }
}

var {width, height} = Dimensions.get('window');

var styles = React.StyleSheet.create({
  text: {
    color: 'white',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  footer: {
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'stretch'
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#BA55D3',
  }
})

AppRegistry.registerComponent('whattodoNative', () => whattodoNative);