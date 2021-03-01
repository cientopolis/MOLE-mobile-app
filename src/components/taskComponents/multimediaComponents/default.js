import React, { Component } from 'react'
import { View, Button } from 'react-native'

class MultimediaDefaultComponent extends Component {

  render() {

    console.log("Componente default")

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <span>COMPONENTE DEFAULT GENERICO</span>
        <Button title="Default component" onPress={() => {}} />
      </View>
    );
  }

}

export default MultimediaDefaultComponent