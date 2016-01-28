var React = require('react-native');
import Thing from './Thing'
var {
  ScrollView,
  StyleSheet,
  View
} = React;

class Event extends React.Component {
    render() {
      return (
        <View>
         {this.props.things.map((thing, i) => {
            return <Thing delete={this.props.delete} update={this.props.update} thing={thing} key={i} />
          })}
       </View>
    );
  }
}

var styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#6A85B1',
    height: 300,
  },
  horizontalScrollView: {
    height: 120,
  }
})

module.exports = Event;