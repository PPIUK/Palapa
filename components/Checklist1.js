import React, { useState } from 'react';
import { CheckBox } from 'react-native-elements';

function CheckboxComponent() {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);  
  const [check6, setCheck6] = useState(false);    
  const [check7, setCheck7] = useState(false);    

  return (

    <>
      <CheckBox
        left
        title="Passport"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={check1}
        onPress={() => setCheck1(!check1)}
      />

      <CheckBox
        left
        title="Visa"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={check2}
        onPress={() => setCheck2(!check2)}
      />

      <CheckBox
        left
        title="Dokumen VFS - Visa Facilitation Services Global UK"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={check3}
        onPress={() => setCheck3(!check3)}
      />

      <CheckBox
        left
        title="CAS - Confirmation of Acceptance for Studies"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={check4}
        onPress={() => setCheck4(!check4)}
      />
      <CheckBox
        left
        title="LoA - Letter of Acceptance from University"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={check5}
        onPress={() => setCheck5(!check5)}
      />      
      <CheckBox
        left
        title="Locator Form"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={check6}
        onPress={() => setCheck6(!check6)}
      />            
      <CheckBox
        left
        title="PCR Test"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={check7}
        onPress={() => setCheck7(!check7)}
      />                  
    </>
  );
};


export default CheckboxComponent;