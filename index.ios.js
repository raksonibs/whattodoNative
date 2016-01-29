var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  Navigator
} = React;

var Dimensions = require('Dimensions');

var EventForm             = require('./EventForm');
var EventList             = require('./EventList');

var REQUEST_URL = 'http://localhost:3000/api/v1/today';

let things = [];
let component;

fetch(REQUEST_URL)
  .then((response) => response.json())
  .then((responseData) => {
    console.log('fetching')
    things = responseData.events

  })
 .done();

class whattodoNative extends React.Component {
  constructor(props) {
    super(props);
    this.state = { things: things, text: "Input new thing here!"};
    component = this;
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
        things = responseData.events
        this.setState({
            things: things
        });
    })
    .done();
  }

  render() {
    return (
      <View style={styles.app}>
        <Navigator
          initialRoute={{name: 'EventList', component: EventList, passProps: {things: things}}}
          configureScene={() => {
              return Navigator.SceneConfigs.FloatFromRight;
          }}
          renderScene={(route, navigator) => {              
              console.log(route, navigator); 

              if (route.component) {
                  return React.createElement(route.component, { navigator });
              }
          }}
       />     
      </View>
    );
  }


  things() {
    return  (
      <ScrollView automaticallyAdjustContentInsets={false}
        onScroll={() => { console.log('onScroll!'); }}
        scrollEventThrottle={200}
        style={styles.scrollView}
        >
        <EventList things={this.state.things} />
      </ScrollView>
    )
  }
}

let screenHeight = Dimensions.get('window').height;

var styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#C41D47'
  },
  inputText: {
    alignSelf: 'center',
    marginTop: 40,
    width: screenHeight * 0.05,
    height: screenHeight * 0.05,
    borderColor: 'gray', 
    borderWidth: 1
  },
  image: {
    width: screenHeight * 0.2,
    height: screenHeight * 0.2,
    alignSelf: 'center',
  },
  thingform: {
    alignSelf: 'center',
  },
  things: {
    alignSelf: 'center',
    padding: 20,
    paddingTop: 0
  },
  scrollView: {
    backgroundColor: '#6A85B1',
    height: 300,
  },
  horizontalScrollView: {
    height: 120,
  }
});

AppRegistry.registerComponent('whattodoNative', () => whattodoNative);