import React, {useEffect, useState} from "react";
import ToDoList from "./ToDoList";

function App() {

  const accessKey = "o7NEn4VC-wnJ1HNuZaEkM9O6t0zJbHLWm13J48_fI4s"

  const [background, setBackground] = useState("");

  useEffect(() => {
      const fetchImage = async () => {
        try{
          const response = await fetch(`https://api.unsplash.com/photos/random?query=motivation&client_id=${accessKey}`);

          if(!response.ok){
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          console.log(data)
          setBackground(data.urls.full)
          document.body.style.background = `url(${data.urls.full}) no-repeat center center fixed`;
          document.body.style.backgroundSize = 'cover';
        } catch (error){
          console.log('Error fetching the image from Unsplash', error)
        }
      };

      fetchImage();
  }, [])

  return(
    <>
      <ToDoList />
    </>
  );

}

export default App
