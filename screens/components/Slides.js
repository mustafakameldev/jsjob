import React, { Component } from 'react';
import { View, ScrollView, Dimensions, Text } from 'react-native';
import { Button } from 'react-native-elements';
const SCREENT_WIDTH = Dimensions.get('window').width;
class Slides  extends Component {

    renderLastSlide(index)
    {
        if(index === this.props.data.length -1 ) {
            return(
                <Button
                    buttonStyle={styles.buttonStyle} 
                    title= "Onward"
                    reised
                    onPress={this.props.onComplete}
                />
            );
        } 
    }

    renderSlides() {
        return this.props.data.map( (slide , index) => {
                console.log(slide);
                
                return (
                    <View style={[styles.slideStyle, {backgroundColor: slide.color}  ]} key={slide.text}>
                            <Text style={styles.textStyle} >{slide.text}</Text>
                            {this.renderLastSlide(index)}
                    </View>
                );
        } );
    }

    render() { 
        return (  
            <ScrollView
                horizontal
                style={{flex: 1}}
                pagingEnabled
            >
                  {this.renderSlides()}
            </ScrollView>
        );
    }
}
const styles = {
    slideStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: SCREENT_WIDTH
    },
    textStyle: {
        fontSize: 30,
        paddingLeft: 20,
        paddingRight: 20,
        color: 'white'
    },
    buttonStyle: {
        backgroundColor: '#0288D1',
        marginTop: 30
    }

}
 
export default Slides ;