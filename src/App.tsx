import { useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { Button } from "./components/ui/button";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "test"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    };

    fetchData();
  }, []);

  return <div>
    <Button onClick={() => alert("click")}>Click</Button>
    <h1 className="text-3xl font-bold underline">
      🔥 Firebase 연결 완료!
    </h1>
  </div>
}

export default App;
