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
        <Navigator
          initialRoute={{name: 'EventList', component: EventList}}
          configureScene={() => {
              return Navigator.SceneConfigs.FloatFromRight;
          }}
          renderScene={(route, navigator) => {              
              console.log(route, navigator); 

              if (route.component) {
                  return React.createElement(route.component, { navigator });
              }
          }}
          onBack={() => {
            if (route.index > 0) {
              navigator.pop();
            }
          }}
       />     

              
      </View>
    );
  }
}

AppRegistry.registerComponent('whattodoNative', () => whattodoNative);