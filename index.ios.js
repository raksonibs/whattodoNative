var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView
} = React;

var Dimensions = require('Dimensions');

var EventForm             = require('./EventForm');
var EventList             = require('./EventList');

var REQUEST_URL = 'http://localhost:3000/api/v1/today';

let things = [];
let component;

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
        <Image source={require('image!pizza')} style={styles.image} />
        {this.thingform()}        
        {this.things()}
      </View>
    );
  }

  addThing(thing) {
    fetch('http://localhost:3000/api/v1/create_today', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: thing.name
      })
    })
    .then((response) => response.json())
    .then((responseData) => {      
        things.unshift(responseData)
        component.setState({
            things: things
        });
    })
    .done();

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

  thingform() {
    return (
      <View style={styles.thingform}>
        <EventForm text={this.state.text} addThing={this.addThing}/>
      </View>
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

AppRegistry.registerComponent('whattodoNative', () => TestNative);