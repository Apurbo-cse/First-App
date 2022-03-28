/* eslint-disable prettier/prettier */
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import imagePath from '../Asset/Constant/ImgPath';
import React from 'react';
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
content: 'Coming Live at 9pm See you there 🏏',
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

export default function Shakib() {
return (
<>
    <View style={styles.container}>
        <View style={{ paddingBottom: 10 }}>
            <FlatList data={DATA} renderItem={({ item })=> {
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
                            <Image style={styles.cardCoverImg} source={item.imgCardContent} />
                        </View>
                        <View style={styles.cardInfo}>
                            <View>
                                <Text style={styles.infoText}>
                                    {/*
                                    <FontAwesome5 name={'heart'} /> */}
                                    ❤️ 100k
                                </Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Text style={styles.infoText}>16 Comments</Text>
                                </View>
                                <View>
                                    <Text style={styles.infoText}>106 Share</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ borderBottomColor: 'black', borderBottomWidth: 0.7, margin: 10, }}>
                       
                         

                    </View>
                    <View style={styles.cardButtons}>
                            <TouchableOpacity style={styles.likeBtn}>
                                <Text style={styles.btnText}>❤️ Like</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.likeBtn}>
                                <Text style={styles.btnText}>💌 Comment</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.likeBtn}>
                                <Text style={styles.btnText}>❤️ Share</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
                );
                }}
                />
        </View>
    </View>
</>
);
}