import React, {Component} from 'react'
import { Text, View, Image, Button,SectionList, StyleSheet} from 'react-native'
import {DefaultButton, DefaultButtonTaskBar} from '../components/generalComponents'
import mainStyles from './styles/GeneralStyles'


//Pantalla de vista de tarea
class TaskScreen extends Component {

  static navigationOptions = {
    headerRight: (
      <DefaultButtonTaskBar
        onPress={() => alert('This is a button!')}
        title="AYUDA"
      />
    ),
  };

    render() {
      // para recibir parametros de otra pantalla
    const { navigation } = this.props;
    const cars = navigation.getParam('itemId',3);
      return (
        <View style={{ flex:1}}>
          <View style={{flex:2}}>
            <Text
             style={{fontSize:20, textAlign:'center'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min
            </Text>
          </View>
          <View style={{alignItems: 'center', flex:3,}}>
          <SectionList
            sections={[
              {title: 'Tareas realizadas', data: cars},
              {title: 'Tareas aún sin realizar', data: []},
            ]}
            renderItem={({item}) => <Text style={mainStyles.item} onPress={() => this.props.navigation.navigate('taskSelected')}>{item}</Text>}
            renderSectionHeader={({section}) => <Text style={mainStyles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
          />
          </View>
          <View style={{alignItems: 'center', flex:2}} >
            <View style={{alignItems: 'center', flex:1}}>
              <DefaultButton
              onPress={() => this.props.navigation.push('Main')}
              title="Recolectar Elemento"
              />
            </View>
            <View style={{alignItems: 'center', flex:1}}>
              <DefaultButton
                title="Dejar Elemento"
                onPress={() => this.props.navigation.push('Main')}
              />
            </View>
            </View>
        </View>
      )
    }
  }


export default TaskScreen
