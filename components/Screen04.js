import { Image, Text, TouchableOpacity, View, Button, FlatList, TextInput } from "react-native";
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBike } from '../config/bikeSlice'
export default function Screen04( { navigation} ){

  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [sale, setSale] = useState('')
  const [oldPrice, setOldPrice] = useState('')
  const [image, setImage] = useState(null)

  const handleAddBike = () => {
    if(name && price && sale && oldPrice){

      dispatch(
        addBike({
          name,
          price,
          sale,
          old_price: oldPrice,
          image: "image01"
        })
      ).then(() => {
        navigation.goBack()
      })
    }
    setName('')
    setPrice('')
    setSale('')
    setOldPrice('')
  }



  return(
    <View>
      <TextInput placeholder="Name" value={name} onChangeText={setName}/>
      <TextInput placeholder="Price" value={price} onChangeText={setPrice}/>
      <TextInput placeholder="Sale" value={sale} onChangeText={setSale}/>
      <TextInput placeholder="Old Price" value={oldPrice} onChangeText={setOldPrice}/>
      {image && <Image source={image} style={{width: 50, height: 50}}/>}
      <Button title="Choose Image...." onPress={() => setImage(require('../assets/image01.png'))}/>
      <br/>
      <Button title="Add Bike" onPress={handleAddBike}/>
    </View>
  )
}