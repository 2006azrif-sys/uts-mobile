import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Perhatikan titik dua (../) karena kita mundur satu folder dari 'app' ke 'src'
import InfoCard from '../components/InfoCard';
import StudentScreen from '../screens/StudentScreen';

export default function Index() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        
        {/* SOAL 1: InfoCard dirender 2x */}
        <Text style={styles.section}>Daftar Tugas</Text>

        <InfoCard
          title="Tugas Pemrograman Mobile"
          status="selesai"
          onPress={() => Alert.alert('Detail', 'Membuka tugas Pemrograman Mobile')}
        />

        <InfoCard
          title="Tugas Basis Data"
          status="proses"
          onPress={() => Alert.alert('Detail', 'Membuka tugas Basis Data')}
        />

        {/* SOAL 2: Search + FlatList */}
        <View style={styles.divider} />
        <Text style={styles.section}>Direktori Mahasiswa</Text>
        
        {/* Kasih tinggi (height) agar FlatList bisa di-scroll di dalam ScrollView */}
        <View style={{ height: 450 }}>
          <StudentScreen />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { 
    flex: 1, 
    backgroundColor: '#f5f5f5' 
  },
  section: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    color: '#333',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 16,
  },
});
