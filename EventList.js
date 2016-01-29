var React = require('react-native');
import Event from './Event'
var {
  ScrollView,
  StyleSheet,
  View
} = React;

class EventList extends React.Component {
    render() {
      things = this.props.things || []
      return (
        <View>
         {things.map((thing, i) => {
            return <Event delete={this.props.delete} update={this.props.update} thing={thing} key={i} />
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

module.exports = EventList;