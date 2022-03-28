/* eslint-disable prettier/prettier */
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import imagePath from '../../../Constants/imagePath';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const DATA = [
  {
    key: '1',
    name: 'Shakib Al Hasan',
    content: 'Coming Live at 9pm See you there 🏏',
    imgCardIcon: imagePath.cardProfileIcon,
    imgCardContent: imagePath.cardCover,
  },
  {
    key: '2',
    name: 'Ayman Sadique',
    content: 'Hello every one how are you all! 😃',
    imgCardIcon: imagePath.cardProfileIcon2,
    imgCardContent: imagePath.cardCover2,
  },
  {
    key: '3',
    name: 'Shakib Al Hasan',
    content: 'Coming Live at 9pm See you there 🏏' ,
    imgCardIcon: imagePath.cardProfileIcon,
    imgCardContent: imagePath.cardCover,
  },
  {
    key: '4',
    name: 'Ayman Sadique',
    content: 'Hello every one how are you all! 😃',
    imgCardIcon: imagePath.cardProfileIcon2,
    imgCardContent: imagePath.cardCover2,
  },
  {
    key: '5',
    name: 'Ayman Sadique',
    content: 'Hello every one how are you all! 😃',
    imgCardIcon: imagePath.cardProfileIcon2,
    imgCardContent: imagePath.cardCover2,
  },
  {
    key: '6',
    name: 'Shakib Al Hasan',
    content: 'Coming Live at 9pm See you there ! 🏏',
    imgCardIcon: imagePath.cardProfileIcon,
    imgCardContent: imagePath.cardCover,
  },
  {
    key: '7',
    name: 'Ayman Sadique',
    content: 'Hello every one how are you all! 😃',
    imgCardIcon: imagePath.cardProfileIcon2,
    imgCardContent: imagePath.cardCover2,
  },
];

export default function Post() {
  return (
    <>
      <FlatList
        data={DATA}
        renderItem={({item}) => {
          return (
            <View style={styles.CardRow}>
              <View style={styles.MainCard}>
                <TouchableOpacity style={styles.cardImg}>
                  <Image style={styles.starCardImg} source={item.imgCardIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.cardText}>{item.name}</Text>
                  <Text style={styles.time}>5.31pm 2nd july</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.CardContent}>
                <Text style={styles.cardContentText}>{item.content}</Text>

                <View>
                  <Image
                    style={styles.cardCoverImg}
                    source={item.imgCardContent}
                  />
                </View>

                <View style={styles.cardInfo}>
                  <View>
                    <Text style={styles.infoText}> 
                    <FontAwesome5 name={'heart'} />
                    240</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <View>
                      <Text style={styles.infoText}>16 Comments</Text>
                    </View>
                    <View>
                      <Text style={styles.infoText}>106 Share</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 0.7,
                    margin: 10,
                  }}
                />
                <View style={styles.cardButtons}>
                  <TouchableOpacity style={styles.likeBtn}>
                    <Text style={styles.btnText}>  <Icon  name="heart" color={'red'} />Like</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.likeBtn}>
                    <Text style={styles.btnText}>  <FontAwesome5 name={'comment'} />Comment</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.likeBtn}>
                    <Text style={styles.btnText}>  <FontAwesome5 name={'share'} />Share</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
    </>
  );
}
