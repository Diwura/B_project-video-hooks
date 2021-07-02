import {useEffect, useState} from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

     useEffect(() =>{
        search(defaultSearchTerm);
    }, []);

    const search = async (term) =>{
        const response = await  youtube.get('/search',{
              params:{
                  q:term,
                  type:'video'
              }
          });

          setVideos(response.data.items);
            
      };
return [videos, search];
}


export default useVideos;