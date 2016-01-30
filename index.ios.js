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
             style={styles.app}
             initialRoute={{
               title: 'EventList',
               component: EventList,
               passProps: { navigator: this.props.navigator }
             }} />
              
      </View>
    );
  }
}

AppRegistry.registerComponent('whattodoNative', () => whattodoNative);