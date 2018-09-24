import React from 'react';
import { Text, Image, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
    const {artist, title, thumbnail_image } = album;
    const { textStyle, thumbnailStyle, thumbnailContainerStyle } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style={textStyle}>
                    <Text>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
        </Card>
    );
};

const styles = {
    textStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
};

export default AlbumDetail;
