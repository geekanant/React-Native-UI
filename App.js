
import React from 'react'
import CardComponentTop from './components/CardComponentTop';
import CardComponentMarket from './components/CardComponentMarket';
import Table1 from './components/Table1';
import {StatusBar} from 'react-native'



import {
  AppRegistry,
  Text,
  View,
  Dimensions,
  Image,
  Animated,Button
} from 'react-native'
import {Container,Icon,Content,Card,CardItem,Thumbnail,Body,Left,Right,Badge } from 'native-base';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

import SlidingUpPanel from 'rn-sliding-up-panel'
const {height} = Dimensions.get('window')

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#2196F3',
    flexDirection: 'row',
    paddingTop:25,
    paddingLeft:20,
    paddingRight:20,
  },
  panel: {
    flex: 1,
    backgroundColor: 'pink',
    position: 'relative',
    height:800,
  },
  panelHeader: {
    height: 120,
    backgroundColor: '#2196F3',
    paddingTop:25,
    paddingLeft:20,
    paddingRight:20,
    flexDirection: 'row',
    position: 'relative',

  },
  favoriteIcon: {
    position: 'absolute',
    top: -24,
    right: 24,
    backgroundColor: '#2b8a3e',
    width: 48,
    height: 48,
    padding: 8,
    borderRadius: 24,
    zIndex: 1
  }
}

export default class App extends React.Component {

  static defaultProps = {
    draggableRange: {
      top: height / 1.18,
      bottom: 120
    }
  }

  _draggedValue = new Animated.Value(-120)

  constructor(props) {
    super(props)

    this._renderFavoriteIcon = this._renderFavoriteIcon.bind(this)

  }


  _renderFavoriteIcon() {
    const {top, bottom} = this.props.draggableRange

    const draggedValue = this._draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })

    const transform = [{scale: draggedValue}]

    return (
      <Animated.View style={[styles.favoriteIcon,position:'absolute', {transform}]}>
      </Animated.View>
    )
  }

  render() {
    return (
      <View>
      <CardComponentTop/>
      <CardItem style={{height:30,marginTop:0,marginLeft:0,marginBottom:0,paddingLeft:0,paddingTop:10}}>
      <Button title="       Bitcoin       "   color="#0984e3"></Button>
      <Button title="       Ehereum       " ></Button>
      <Button title="       Ripple         " ></Button>
      </CardItem>
  <CardItem style={{height:55,marginTop:0,marginLeft:0,marginBottom:0,paddingLeft:0,paddingTop:0,backgroundColor:'#ecf0f1'}}>
  <View>
      <Text style={{marginLeft:20,marginRight:20}}>{"\n\nProfile               Price              Quantity            Action\n\n"}</Text>
      </View></CardItem>
      <CardItem style={{height:55,marginTop:0,marginLeft:0,marginBottom:0,paddingLeft:0,paddingTop:0}}>
      <View>

      <Image source={require('./assets/prof_icon.png')} style={{height:25,width:25,marginRight:30,marginLeft:20,marginTop:20}}/>
    <Image source={require('./assets/star.png')} style={{height:15,width:15,marginRight:30,marginLeft:20,marginTop:5}}></Image>
      </View>
      <Text>             $12                      9                    BUY</Text>

</CardItem>

<CardItem style={{height:55,marginTop:0,marginLeft:0,marginBottom:0,paddingLeft:0,paddingTop:0}}>
<View>
<Image source={require('./assets/prof_icon.png')} style={{height:25,width:25,marginRight:30,marginLeft:20,marginTop:20}}/>
<View style={{flexDirection:'row'}}><Image source={require('./assets/star.png')} style={{height:15,width:15,marginRight:3,marginLeft:20,marginTop:5}}></Image>
<Image source={require('./assets/star.png')} style={{height:15,width:15,marginRight:5,marginLeft:2,marginTop:5}}></Image>

</View>
</View>
<Text>             $10                      8                    SELL</Text>

</CardItem>
<CardItem style={{height:55,marginTop:0,marginLeft:0,marginBottom:0,paddingLeft:0,paddingTop:0}}>
<View>

<Image source={require('./assets/prof_icon.png')} style={{height:25,width:25,marginRight:30,marginLeft:20,marginTop:20}}/>
<View style={{flexDirection:'row'}}><Image source={require('./assets/star.png')} style={{height:15,width:15,marginRight:3,marginLeft:20,marginTop:5}}></Image>
<Image source={require('./assets/star.png')} style={{height:15,width:15,marginRight:5,marginLeft:2,marginTop:5}}></Image>
</View>
</View>
<Text>             $12                      7                    SELL</Text>

</CardItem>
<CardItem style={{height:55,marginTop:0,marginLeft:0,marginBottom:0,paddingLeft:0,paddingTop:0}}>
<View>

<Image source={require('./assets/prof_icon.png')} style={{height:25,width:25,marginRight:30,marginLeft:20,marginTop:20}}/>
<View style={{flexDirection:'row'}}><Image source={require('./assets/star.png')} style={{height:15,width:15,marginRight:3,marginLeft:20,marginTop:5}}></Image>

</View></View>
<Text>             $16                      5                    BUY</Text>

</CardItem>
<CardItem style={{height:55,marginTop:0,marginLeft:0,marginBottom:0,paddingLeft:0,paddingTop:0}}>
<View>

<Image source={require('./assets/prof_icon.png')} style={{height:25,width:25,marginRight:30,marginLeft:20,marginTop:20}}/>
<View style={{flexDirection:'row'}}><Image source={require('./assets/star.png')} style={{height:15,width:15,marginRight:3,marginLeft:20,marginTop:5}}></Image>
<Image source={require('./assets/star.png')} style={{height:15,width:15,marginRight:5,marginLeft:2,marginTop:5}}></Image>

</View>
</View>
<Text>             $15                      6                    SELL</Text>

</CardItem>

<SlidingUpPanel
visible
startCollapsed
showBackdrop={true}
ref={c => this._panel = c}
draggableRange={this.props.draggableRange}
onDrag={v => this._draggedValue.setValue(v)}>
<View style={styles.panel}>
<View style={styles.panelHeader}>
<View >
<Image source={require('./assets/new.png')} style={{height:45,width:45,marginRight:30,marginLeft:20}}></Image>
<Text style={{marginLeft:28,color:'white'}}>New</Text></View>
<View >
<Image source={require('./assets/market.png')} style={{height:45,width:45,marginRight:30}}></Image>
<Text style={{marginLeft:0,color:'white'}}>Market</Text></View>
<View >
<Image source={require('./assets/vendor.png')} style={{height:45,width:45,marginRight:30}}></Image>
<Text style={{marginLeft:0,color:'white'}}>Partners</Text>
</View>
<View >
<Image source={require('./assets/profile.png')} style={{height:45,width:45,marginRight:30}}></Image>
<Text style={{marginLeft:0,color:'white',marginLeft:2}}>Profile</Text>

</View>
</View>


<View style={styles.panelHeader}>
<View >
<Image source={require('./assets/profile.png')} style={{height:45,width:45,marginRight:30,marginLeft:20}}></Image>
<Text style={{marginLeft:28,color:'white'}}>New</Text></View>
<View >
<Image source={require('./assets/profile.png')} style={{height:45,width:45,marginRight:30}}></Image>
<Text style={{marginLeft:0,color:'white'}}>  New</Text></View>
<View >
<Image source={require('./assets/profile.png')} style={{height:45,width:45,marginRight:30}}></Image>
<Text style={{marginLeft:0,color:'white'}}>  New</Text></View>
<View >
<Image source={require('./assets/profile.png')} style={{height:45,width:45,marginRight:30}}></Image>
<Text style={{marginLeft:0,color:'white'}}>  New</Text></View>

</View>
<View style={styles.container}>
<View >
<Image source={require('./assets/profile.png')} style={{height:45,width:45,marginRight:30,marginLeft:20}}></Image>
<Text style={{marginLeft:28,color:'white'}}>New</Text></View>
<View >
<Image source={require('./assets/profile.png')} style={{height:45,width:45,marginRight:30}}></Image>
<Text style={{marginLeft:0,color:'white'}}>  New</Text></View>
<View >
<Image source={require('./assets/profile.png')} style={{height:45,width:45,marginRight:30}}></Image>
<Text style={{marginLeft:0,color:'white'}}>  New</Text></View>
<View >
<Image source={require('./assets/profile.png')} style={{height:45,width:45,marginRight:30}}></Image>
<Text style={{marginLeft:0,color:'white'}}>  New</Text></View>


</View>
<View style={styles.container}>
<View >
<Image source={require('./assets/profile.png')} style={{height:45,width:45,marginRight:30,marginLeft:20}}></Image>
<Text style={{marginLeft:28,color:'white'}}>New</Text></View>
<View >
<Image source={require('./assets/profile.png')} style={{height:45,width:45,marginRight:30}}></Image>
<Text style={{marginLeft:0,color:'white'}}>  New</Text></View>
<View >
<Image source={require('./assets/profile.png')} style={{height:45,width:45,marginRight:30}}></Image>
<Text style={{marginLeft:0,color:'white'}}>  New</Text></View>
<View >
<Image source={require('./assets/profile.png')} style={{height:45,width:45,marginRight:30}}></Image>
<Text style={{marginLeft:0,color:'white'}}>  New</Text></View>


</View>
<View style={styles.container}>
<View >
<Image source={require('./assets/profile.png')} style={{height:45,width:45,marginRight:30,marginLeft:20}}></Image>
<Text style={{marginLeft:28,color:'white'}}>New</Text></View>
<View >
<Image source={require('./assets/profile.png')} style={{height:45,width:45,marginRight:30}}></Image>
<Text style={{marginLeft:0,color:'white'}}>New</Text></View>
<View >
<Image source={require('./assets/profile.png')} style={{height:45,width:45,marginRight:30}}></Image>
<Text style={{marginLeft:0,color:'white'}}>New</Text></View>
<View >
<Image source={require('./assets/profile.png')} style={{height:45,width:45,marginRight:30}}></Image>
<Text style={{marginLeft:0,color:'white'}}>New</Text></View>

</View>
</View>
</SlidingUpPanel>
      <StatusBar  backgroundColor="#2196F3"
     />
      </View>

    )
  }
}

AppRegistry.registerComponent('App', () => BottomSheet)
