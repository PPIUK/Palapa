import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';

const CheckboxComponent = (props) => {
  const [checked, setChecked] = useState(false);

  return (
    <View>
      <CheckBox
        center
        title= {props.desc}
        checked= {checked}
        onPress={ () => setChecked(!checked)}
      />
    </View>
  );
}

    


export default CheckboxComponent;