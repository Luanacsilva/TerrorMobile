import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { useFonts, Creepster_400Regular } from '@expo-google-fonts/creepster';
import { Product, products } from './product';

const HomeScreen: React.FC = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: '',
    description: '',
    quantity: 0,
    price: 0,
    image: undefined,
  });
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<Product[]>([]);

  // Carregar a fonte
  const [fontsLoaded] = useFonts({
    Creepster_400Regular,
  });

  useEffect(() => {
    setProductList(products);
  }, []);

  const addProduct = () => {
    if (
      newProduct.name &&
      newProduct.description &&
      newProduct.quantity &&
      newProduct.price
    ) {
      const newId = productList.length + 1;
      const productToAdd: Product = {
        id: newId,
        name: newProduct.name,
        description: newProduct.description,
        quantity: newProduct.quantity,
        price: newProduct.price,
        image: newProduct.image || require('@/assets/images/default.png'),
      };
      setProductList([...productList, productToAdd]);
      setNewProduct({ name: '', description: '', quantity: 0, price: 0 });
    } else {
      Alert.alert('Erro', 'Preencha todos os campos corretamente!');
    }
  };

  const deleteProduct = (id: number) => {
    Alert.alert('Confirmação', 'Tem certeza que deseja deletar esta obra?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Deletar',
        style: 'destructive',
        onPress: () => {
          setProductList(productList.filter((product) => product.id !== id));
        },
      },
    ]);
  };

  const editProduct = (product: Product) => {
    setEditingProduct(product);
    setNewProduct({
      name: product.name,
      description: product.description,
      quantity: product.quantity,
      price: product.price,
      image: product.image,
    });
  };

  const saveEdit = () => {
    if (editingProduct) {
      setProductList(
        productList.map((product) =>
          product.id === editingProduct.id
            ? { ...editingProduct, ...newProduct }
            : product
        )
      );
      setEditingProduct(null);
      setNewProduct({ name: '', description: '', quantity: 0, price: 0 });
    }
  };

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index: number) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  if (!fontsLoaded) return <Text>Carregando...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {editingProduct ? 'Editar Obra' : 'Cadastrar Obra'}
      </Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#777"
          value={newProduct.name}
          onChangeText={(text) => setNewProduct({ ...newProduct, name: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          placeholderTextColor="#777"
          value={newProduct.description}
          onChangeText={(text) =>
            setNewProduct({ ...newProduct, description: text })
          }
        />
        <View style={styles.inlineInputs}>
          <TextInput
            style={[styles.input, styles.inlineInput]}
            placeholder="Qtd."
            placeholderTextColor="#777"
            keyboardType="numeric"
            value={newProduct.quantity?.toString()}
            onChangeText={(text) =>
              setNewProduct({ ...newProduct, quantity: parseInt(text) || 0 })
            }
          />
          <TextInput
            style={[styles.input, styles.inlineInput]}
            placeholder="Preço"
            placeholderTextColor="#777"
            keyboardType="numeric"
            value={newProduct.price?.toString()}
            onChangeText={(text) =>
              setNewProduct({ ...newProduct, price: parseFloat(text) || 0 })
            }
          />
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={editingProduct ? saveEdit : addProduct}
        >
          <Text style={styles.addButtonText}>
            {editingProduct ? 'Salvar' : 'Adicionar'}
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Galeria de Arte</Text>
      <FlatList
        data={productList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productDescription}>{item.description}</Text>
              <Text style={styles.productMeta}>Qtd: {item.quantity}</Text>
              <Text style={styles.productMeta}>Preço: R$ {item.price}</Text>
              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() => editProduct(item)}
                >
                  <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => deleteProduct(item.id)}
                >
                  <Text style={styles.buttonText}>Deletar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cartButton}
                  onPress={() => addToCart(item)}
                >
                  <Text style={styles.cartButtonText}>🛒</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />

      <Text style={styles.cartTitle}>Carrinho</Text>
      <FlatList
        data={cart}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.cartItem}>
            <Text style={styles.cartItemText}>{item.name}</Text>
            <Text style={styles.cartItemText}>R$ {item.price.toFixed(2)}</Text>
            <TouchableOpacity
              onPress={() => removeFromCart(index)}
              style={styles.removeButton}
            >
              <Text style={styles.buttonText}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <Text style={styles.cartTotal}>Total: R$ {calculateTotal()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111', padding: 20 },
  header: {
    fontSize: 28,
    color: '#FF0000',
    fontFamily: 'Creepster_400Regular',
    textAlign: 'center',
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#333',
    color: '#FFF',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#444',
  },
  inlineInputs: { flexDirection: 'row', justifyContent: 'space-between' },
  inlineInput: { flex: 1, marginHorizontal: 5 },
  addButton: {
    backgroundColor: '#8B0000',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Creepster_400Regular',
  },
  sectionTitle: {
    fontSize: 24,
    color: '#FF6347',
    fontFamily: 'Creepster_400Regular',
    textAlign: 'center',
    marginBottom: 10,
  },
  productCard: { flexDirection: 'row', backgroundColor: '#222', padding: 12, borderRadius: 8 },
  image: { width: 70, height: 70, borderRadius: 8, marginRight: 12 },
  productDetails: { flex: 1 },
  productName: { fontSize: 18, color: '#FF6347', fontFamily: 'Creepster_400Regular' },
  productDescription: { color: '#CCC', fontSize: 14 },
  productMeta: { color: '#888', fontSize: 12 },
  buttonGroup: { flexDirection: 'row', marginTop: 10 },
  editButton: { backgroundColor: '#FFA500', padding: 8, borderRadius: 8, marginRight: 5 },
  deleteButton: { backgroundColor: '#FF4500', padding: 8, borderRadius: 8, marginRight: 5 },
  cartButton: { backgroundColor: '#FFD700', padding: 8, borderRadius: 8 },
  buttonText: { color: '#FFF', fontWeight: 'bold', textAlign: 'center' },
  cartButtonText: { color: '#000', fontWeight: 'bold', textAlign: 'center', fontSize: 16 },
  cartTitle: { fontSize: 24, color: '#FF0000', fontFamily: 'Creepster_400Regular', textAlign: 'center', marginTop: 20 },
  cartItem: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  cartItemText: { color: '#FFF' },
  cartTotal: { color: '#FF4500', fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 10 },
  removeButton: { backgroundColor: '#FF4500', padding: 8, borderRadius: 8 },
});

export default HomeScreen;