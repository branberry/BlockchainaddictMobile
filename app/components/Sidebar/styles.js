import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    SideNav : {
        top : 50,
        marginLeft : 15,
    },

    titleText : {
        fontFamily : 'normal',
        fontSize : 21,
        color :'#CCCCCC', 
    },
    selectorWrap : {
        marginBottom : 10,
    },

    selector : {
        fontFamily : 'normal',
        fontSize : 18,
        color : '#CCCCCC', 
        backgroundColor : 'rgba(255, 255, 255, 0.05)',
        width : '96%',
        height : 35,
        paddingTop : 6,
        paddingLeft : 7,
    },

    selectorAndroid : {
        fontSize: 18,
        color :'#CCCCCC',  
    },

    bottomLink  : {
        position : 'absolute',
        bottom: 0,
        marginLeft : 15,
        paddingBottom: 10,
        flex: 1,
        flexDirection: 'row',
    },

    bottomLinkWord: {
        fontSize : 14,
        flex : 1,
        color : 'rgba(207,206,207,0.7)',
        fontWeight : '600',
    }

})