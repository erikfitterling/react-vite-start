import React from 'react';
import './App.css';
import { db } from './firebaseConfig';
import { collection, query, where, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore';

function App() {
  const [name, setName] = React.useState('');
  const [experience, setExperience] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleEnterValhalla = async () => {
    if (!name || !experience) {
      setMessage('Bitte fülle alle Felder aus!');
      return;
    }

    try {
      // Suche nach existierendem Eintrag mit dem Namen
      const usersRef = collection(db, "valhallaUsers");
      const q = query(usersRef, where("name", "==", name));
      const querySnapshot = await getDocs(q);
      
      const isGoodExperience = experience === 'guder';
      
      if (querySnapshot.empty) {
        // Wenn kein Eintrag existiert, erstelle einen neuen
        await addDoc(usersRef, {
          name: name,
          experiences: [isGoodExperience]
        });
        setMessage(`Willkommen in Valhalla, ${name}!`);
      } else {
        // Wenn ein Eintrag existiert, aktualisiere ihn
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();
        const updatedExperiences = [...userData.experiences, isGoodExperience];
        
        await updateDoc(doc(db, "valhallaUsers", userDoc.id), {
          experiences: updatedExperiences
        });
        
        setMessage(`Willkommen zurück in Valhalla, ${name}! Das ist dein ${updatedExperiences.length}. Besuch.`);
      }
      
      // Felder zurücksetzen
      setName('');
      setExperience('');
      
    } catch (error) {
      console.error("Fehler beim Speichern in Firebase:", error);
      setMessage("Ein Fehler ist aufgetreten. Odin ist nicht erfreut.");
    }
  };
  
  return (
    <div>
      <h1>Valhalla Counter</h1>
      <div className='input-container'>
        <input 
          type="text" 
          placeholder="Wer bischen du" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select 
          value={experience} 
          onChange={(e) => setExperience(e.target.value)}
          aria-label="Wars en guder"
        >
          <option value="" disabled>How was your experience?</option>
          <option value="guder">Good</option>
          <option value="schlechter">Bad</option>
        </select>
        <button onClick={handleEnterValhalla}>Enter Valhalla</button>
      </div>
      
      {message && <div className="message">{message}</div>}
    </div>
  )
}

export default App