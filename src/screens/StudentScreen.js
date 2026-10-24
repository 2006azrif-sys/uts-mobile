import { useState } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

// Dataset statis di luar komponen
const DAFTAR_MAHASISWA = [
  { id: '1', nama: 'Alifia Putri',      prodi: 'Sistem Informasi' },
  { id: '2', nama: 'Budi Santoso',      prodi: 'Teknologi Informasi' },
  { id: '3', nama: 'Citra Dewi',        prodi: 'Sistem Informasi' },
  { id: '4', nama: 'Dimas Anggara',     prodi: 'Teknik Informatika' },
  { id: '5', nama: 'Eka Nur Safitri',   prodi: 'Sistem Informasi' },
  { id: '6', nama: 'Fajar Ramadhan',    prodi: 'Teknik Informatika' },
];

export default function StudentScreen() {
  const [keyword, setKeyword] = useState('');

  // Filter real-time, case-insensitive
  const filteredData = DAFTAR_MAHASISWA.filter((mhs) =>
    mhs.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.nama}>{item.nama}</Text>
      <Text style={styles.prodi}>{item.prodi}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Direktori Mahasiswa</Text>

      <TextInput
        style={styles.input}
        placeholder="Cari nama mahasiswa..."
        value={keyword}
        onChangeText={setKeyword}
      />

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.empty}>Data tidak ditemukan!</Text>
        }
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    fontSize: 14,
  },
  item: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 8,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#1976d2',
  },
  nama: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
  },
  prodi: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  empty: {
    textAlign: 'center',
    color: '#999',
    marginTop: 24,
    fontSize: 14,
  },
});
