var React = require('react-native');
import EventShow from './EventShow.js'

var {
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  Text,
  TouchableElement,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView
} = React;

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
  }
});

let screenHeight = Dimensions.get('window').height;

class Event extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var event = this.props.event;
    
    return (
      <ScrollView style={styles.container}>
        <Image style={styles.image} 
            source={{uri: event.image}} />
        <View style={styles.heading}>
          <Text style={styles.price}>{event.name}</Text>
          <Text style={styles.title}>{event.price}</Text>
          <Text style={styles.description}>{event.location}</Text>
          <Text style={styles.title}>{event.dayOn}</Text>
          <Text style={styles.title}>{event.url}</Text>
          <View style={styles.separator}/>
        </View>
        <Text style={styles.description}>{event.desc}</Text>
      </ScrollView>
    );
  }
}

module.exports = Event;