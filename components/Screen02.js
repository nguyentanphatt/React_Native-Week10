import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import image01 from '../assets/image01.png'
import image02 from '../assets/image02.png'
import image03 from '../assets/image03.png'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBikes } from '../config/bikeSlice'
function Screen02({ navigation }) {
     const [type, setType] = useState("All");
    const dispatch = useDispatch()
    const status = useSelector((state)=>state.bike.status)
    const bikes = useSelector((state) => state.bike.bikes)

    useEffect(()=>{
        dispatch(fetchBikes())
    },[dispatch])

    if(status === 'Loading'){
      return <ActivityIndicator size="large" color="#0000ff" />
    }

    if(status === "Failed"){
      return <Text>Error</Text>
    }

    const img = (image) => {
      switch(image){
        case 'image01':{
          return image01
        }
        case 'image02':{
          return image02
        }
        case 'image03':{
          return image03
        }
      }
    }
  
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontWeight: "700", fontSize: 24, color: "red" }}>
        The world's Best Bike
      </Text>
      <View style={styles.filter}>
        <TouchableOpacity
          style={[
            styles.filterContainer,
            type === "All" && styles.selectedButton,
          ]}
          onPress={() => setType("All")}
        >
          <Text
            style={[
                styles.text,
                type === "All" && styles.selectedText,
              ]}
          >All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterContainer,
            type === "Roadbike" && styles.selectedButton,
          ]}
          onPress={() => setType("Roadbike")}
        >
          <Text
             style={[
                styles.text,
                type === "Roadbike" && styles.selectedText,
              ]}
          >Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterContainer,
            type === "Mountain" && styles.selectedButton,
          ]}
          onPress={() => setType("Mountain")}
        >
          <Text
             style={[
                styles.text,
                type === "Mountain" && styles.selectedText,
              ]}
          >Mountain</Text>
        </TouchableOpacity>
      </View>
        <FlatList 
            data={bikes}
            renderItem={({item}) => (
                <View style={styles.itemContainer}>
                    <TouchableOpacity onPress={() =>navigation.navigate('Screen03', {
                        name: item.name,
                        price: item.price,
                        sale: item.sale,
                        old_price: item.old_price,
                        image: item.image
                    })}>
                    <Image source={img(item.image)} style={{width: 150, height: 100}}/>
                    <Text style={{marginTop: 10}}>{item.name}</Text>
                    <Text style={{fontWeight: '700', marginTop: 10}}>${item.price}</Text>
                    </TouchableOpacity>
                </View>
            )}
           
            numColumns={2}
        />
        <View >
                <TouchableOpacity 
                    onPress={()=>navigation.navigate('Screen04')}
                    style={{alignSelf:"center", backgroundColor:"red", width:200, height:50, justifyContent:"center", alignItems:"center", marginTop: 20, borderRadius: 10}}>
                    <Text style={{color:"white", fontSize: 24, fontWeight: '700'}}>
                        Add new bike
                    </Text>
                </TouchableOpacity>
            </View>
    </View>
  );
}
export default Screen02;

const styles = StyleSheet.create({
  filter: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10
  },
  filterContainer: {
    width: 100,
    height: 40,
    backgroundColor: "#fff",
    borderColor: "red",
    borderWidth: 1,
    marginRight: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    color: 'gray'
  },    
  selectedText: {
    color: 'red'
  },
  itemContainer:{
    width: 140,
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 30,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#F7BA8326'
  }
});
