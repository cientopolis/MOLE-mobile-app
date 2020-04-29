import React, { Component } from 'react'
import { View, Button } from 'react-native'

class DefaultFotoComponent extends Component {

  render() {

    console.log("Componente default")

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Default component" onPress={() => {}} />
      </View>
    );
  }

}

export default DefaultFotoComponent