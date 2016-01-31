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
  NavigatorIOS
} = React;

var Dimensions = require('Dimensions');

var EventForm             = require('./EventForm');
var EventList             = require('./EventList');

var styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#85b16a'
  }
});


class whattodoNative extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "Input new thing here!"};
    component = this;
  }

  render() {
    return (
      <View style={styles.app}>
        <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Events',
          component: EventList
        }}/>    

              
      </View>
    );
  }
}

var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
})

AppRegistry.registerComponent('whattodoNative', () => whattodoNative);