import React, {useState, useEffect} from 'react'
import {Grid} from '@material-ui/core'
import SearchBar from '../components/SearchBar'
import VideosList from '../components/VideosList'
import VideoPreview from '../components/VideoPreview'
import hook from '../utils/hooks'
import api from '../services/youtubeApi'
import log from '../services/logApi'

function App() {
  const [data, setData] = useState([])
  const [offset, setOffset] = useState('')
  const [isFetching, setIsFetching] = useState(false)
  const [keyword, setKeyword] = useState("")
  const [selected, setSelected] = useState('')
  const [error, setError] = useState('')

  const prevKeyword = hook.usePrevious(keyword)

  const previewVideo =(id)=>{
    setSelected(id)
    logPreviewedVideo(id)
  }
  const fetchData=async()=>{
    let newOffset = '';
    if(isFetching){
      newOffset = offset;
    }
    try {
      const request = await api.fetchVideos(newOffset, keyword) 
      if (request.status === 200) {
        const dataFetched = prevKeyword !== keyword ? request.data.items : data.concat(request.data.items)
        setData(dataFetched) 
        newOffset = request.data.nextPageToken
        setOffset(newOffset)
      }   
    } catch (error) {
      setError(error.response.data.error.message)
    }
    prevKeyword !== keyword && keyword.length >0 && (logKeyword(keyword))

  } 

  const logKeyword=async(data)=>{
     try {
      await log.logQuery(data) 
    } catch (error) {
      console.log(error)
    }
  }

  const logPreviewedVideo=async(id)=>{
    try {
      await log.logVideo(id) 
    } catch (error) {
     console.log(error)
   }
 }

  useEffect(() => {
    if(isFetching && keyword.length > 0){
      fetchData()
      setIsFetching(false)
    }
  }, [isFetching, data])

  return (
    <section className="main">
      <Grid container>
        <Grid item xs={12} sm={12} md={7} lg={7}>
        <SearchBar onSearch={fetchData} setKeyword={setKeyword} keyword={keyword}/>
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <VideoPreview id={selected}/>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
            {error.length === 0 ? <VideosList data={data} callback={setIsFetching} select={previewVideo}/>: <div className="card-wrapper">{error}</div>}
        </Grid>   
      </Grid>
    </section>
  );
}

export default App;
