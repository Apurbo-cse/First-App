/* eslint-disable prettier/prettier */
import {View, Image, StyleSheet,Text} from 'react-native';
import React from 'react';

export default function Card() {
return (
<>
<View style={styles.mainCardView}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.subCardView}>
            <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png',}} resizeMode="contain" style={{
              borderRadius: 25,
              height: 50,
              width: 50,
            }} />
        </View>

        <View style={{marginLeft: 12}}>
            <Text style={styles.TitleText } >Cad</Text>

            <View style={styles.Test}>
                <Text  style={{ color: 'gray', fontSize: 12, }} >Test</Text>
            </View>
        
        </View>

    </View>

    <View style={styles.RightCircle}>
        <Text style={{color: 'white'}}>5 </Text>
    </View>

</View>
<View style={styles.mainCardView}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.subCardView}>
            <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png',}} resizeMode="contain" style={{
              borderRadius: 25,
              height: 50,
              width: 50,
            }} />
        </View>

        <View style={{marginLeft: 12}}>
            <Text style={styles.TitleText } >Cat</Text>

            <View style={styles.Test}>
                <Text  style={{ color: 'gray', fontSize: 12, }} >Test</Text>
            </View>
        
        </View>

    </View>

    <View style={styles.RightCircle}>
        <Text style={{color: 'white'}}>5 </Text>
    </View>

</View>
<View style={styles.mainCardView}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.subCardView}>
            <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png',}} resizeMode="contain" style={{
              borderRadius: 25,
              height: 50,
              width: 50,
            }} />
        </View>

        <View style={{marginLeft: 12}}>
            <Text style={styles.TitleText } >Cat</Text>

            <View style={styles.Test}>
                <Text  style={{ color: 'gray', fontSize: 12, }} >Test</Text>
            </View>
        
        </View>

    </View>

    <View style={styles.RightCircle}>
        <Text style={{color: 'white'}}>5 </Text>
    </View>

</View>
<View style={styles.mainCardView}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.subCardView}>
            <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png',}} resizeMode="contain" style={{
              borderRadius: 25,
              height: 50,
              width: 50,
            }} />
        </View>

        <View style={{marginLeft: 12}}>
            <Text style={styles.TitleText } >Cat</Text>

            <View style={styles.Test}>
                <Text  style={{ color: 'gray', fontSize: 12, }} >Test</Text>
            </View>
        
        </View>

    </View>

    <View style={styles.RightCircle}>
        <Text style={{color: 'white'}}>5 </Text>
    </View>

</View>
<View style={styles.mainCardView}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.subCardView}>
            <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png',}} resizeMode="contain" style={{
              borderRadius: 25,
              height: 50,
              width: 50,
            }} />
        </View>

        <View style={{marginLeft: 12}}>
            <Text style={styles.TitleText } >Cat</Text>

            <View style={styles.Test}>
                <Text  style={{ color: 'gray', fontSize: 12, }} >Test</Text>
            </View>
        
        </View>

    </View>

    <View style={styles.RightCircle}>
        <Text style={{color: 'white'}}>5 </Text>
    </View>

</View>
<View style={styles.mainCardView}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.subCardView}>
            <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png',}} resizeMode="contain" style={{
              borderRadius: 25,
              height: 50,
              width: 50,
            }} />
        </View>

        <View style={{marginLeft: 12}}>
            <Text style={styles.TitleText } >Cat</Text>

            <View style={styles.Test}>
                <Text  style={{ color: 'gray', fontSize: 12, }} >Test</Text>
            </View>
        
        </View>

    </View>

    <View style={styles.RightCircle}>
        <Text style={{color: 'white'}}>5 </Text>
    </View>

</View>
<View style={styles.mainCardView}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.subCardView}>
            <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png',}} resizeMode="contain" style={{
              borderRadius: 25,
              height: 50,
              width: 50,
            }} />
        </View>

        <View style={{marginLeft: 12}}>
            <Text style={styles.TitleText } >Cat</Text>

            <View style={styles.Test}>
                <Text  style={{ color: 'gray', fontSize: 12, }} >Test</Text>
            </View>
        
        </View>

    </View>

    <View style={styles.RightCircle}>
        <Text style={{color: 'white'}}>5 </Text>
    </View>

</View>

</>

);
}

const styles = StyleSheet.create({
mainCardView: {
height: 90,
alignItems: 'center',
justifyContent: 'center',
backgroundColor: 'white',
borderRadius: 15,
shadowColor: 'black',
shadowOffset: {width: 0, height: 0},
shadowOpacity: 1,
shadowRadius: 8,
elevation: 8,
flexDirection: 'row',
// eslint-disable-next-line no-dupe-keys
justifyContent: 'space-between',
paddingLeft: 16,
paddingRight: 14,
marginTop: 6,
marginBottom: 6,
marginLeft: 16,
marginRight: 16,
},

subCardView: {
height: 50,
width: 50,
borderRadius: 25,
backgroundColor: 'green',
borderColor: 'red',
borderWidth: 1,
borderStyle: 'solid',
alignItems: 'center',
justifyContent: 'center',
},

TitleText:{
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'nunitoBold',
    textTransform: 'capitalize',
},

Test:{
    marginTop: 4,
    borderWidth: 0,
    width: '100%',
},

RightCircle:{
    height: 25,
    backgroundColor: 'pink',
    borderWidth: 0,
    width: 25,
    marginLeft: -26,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
}
});