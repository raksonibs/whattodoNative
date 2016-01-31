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
  Image
} = React;

var styles = StyleSheet.create({
  container: {
    marginTop: 65
  },
  heading: {
    backgroundColor: '#F8F8F8',
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  image: {
    width: 400,
    height: 300
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    margin: 5,
    color: '#656565'
  },
  description: {
    fontSize: 18,
    margin: 5,
    color: '#656565'
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
      <View style={styles.container}>
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
      </View>
    );
  }
}

module.exports = Event;