import { collection, doc, onSnapshot, orderBy } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const useFetchCollection = (collectionName) => {
  const [data, setData] = useState([]);

  const getCollection = () => {
    try {
      const collRef = collection(db, collectionName);
      const q = query(collRef, orderBy('createdAt', 'desc'));
      onSnapshot(q, (snapshot) => {
        const allData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(allData);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCollection();
  }, []);
  return { data };
};

export default useFetchCollection;
