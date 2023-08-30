import { BrowserRouter,Router, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Headers from './Components/Header';
import Explore from './Pages/Explore';
import Collections from './Pages/Collections';
import Footer from './Components/Footer';
import ImageToImageCollect from "./Components/ImageToImage/ImageToImageCollect";
import ImageToTextCollect from "./Components/ImageToText/ImageToTextCollect";
import ImageToVideoCollect from "./Components/ImageToVideo/ImageToVideoCollect";
import SpeechToTextCollect from "./Components/SpeechToText/SpeechToTextCollect";
import TextToImageCollect from "./Components/TextToImage/TextToImageCollect";
import TextToSpeechCollect from "./Components/TextToSpeech/TextToSpeechCollect";
import TextToTextCollect from "./Components/TextToText/TextToTextCollect";
import TextToVideoCollect from "./Components/TextToVideo/TextToVideoCollect";
import VideoToImageCollect from "./Components/VideoToImage/VideoToImageCollect";
import VideoToVideoCollect from "./Components/VideoToVideo/VideoToVideoCollect";

import TextToTextresult from './Components/TextToText/Models/TextToTextResult';
import Demo from './Components/TextToText/Models/Demo';
import Api from './Components/TextToText/Models/Api';
import Example from './Components/TextToText/Models/Example';
import Version from './Components/TextToText/Models/Version';

import TextToVideoResult from './Components/TextToVideo/Models/TextToVideoResult';
import TToVDemo from './Components/TextToVideo/Models/Demo';
import TToVApi from './Components/TextToVideo/Models/Api';
import TToVExample from './Components/TextToVideo/Models/Example';
import TToVVersion from './Components/TextToVideo/Models/Version';

import TextToSpeechResult from './Components/TextToSpeech/Models/TextToSpeechResult';
import TToSDemo from './Components/TextToSpeech/Models/Demo';
import TToSApi from './Components/TextToSpeech/Models/Api';
import TToSExample from './Components/TextToSpeech/Models/Example';
import TToSVersion from './Components/TextToSpeech/Models/Version';

import TextToImageResult from './Components/TextToImage/Models/TextToImageResult';
import TToIDemo from './Components/TextToImage/Models/Demo';
import TToIApi from './Components/TextToImage/Models/Api';
import TToIExample from './Components/TextToImage/Models/Example';
import TToIVersion from './Components/TextToImage/Models/Version';

import ImageToImage1Result from './Components/ImageToImage/Models/ariel/ImageToImage1Result';
import IToI1Demo from './Components/ImageToImage/Models/ariel/Demo';
import IToI1Api from './Components/ImageToImage/Models/ariel/Api';
import IToI1Example from './Components/ImageToImage/Models/ariel/Example';
import IToI1Version from './Components/ImageToImage/Models/ariel/Version';

import ImageToImage2Result from './Components/ImageToImage/Models/hzwer/ImageToImage2Result';
import IToI2Demo from './Components/ImageToImage/Models/hzwer/Demo';
import IToI2Api from './Components/ImageToImage/Models/hzwer/Api';
import IToI2Example from './Components/ImageToImage/Models/hzwer/Example';
import IToI2Version from './Components/ImageToImage/Models/hzwer/Version';

import ImageToTextResult from './Components/ImageToText/Models/ImageToTextResult';
import IToTDemo from './Components/ImageToText/Models/Demo';
import IToTApi from './Components/ImageToText/Models/Api';
import IToTExample from './Components/ImageToText/Models/Example';
import IToTVersion from './Components/ImageToText/Models/Version';

import ImageToVideoResult from './Components/ImageToVideo/Models/ImageToVideoResult';
import IToVDemo from './Components/ImageToVideo/Models/Demo';
import IToVApi from './Components/ImageToVideo/Models/Api';
import IToVExample from './Components/ImageToVideo/Models/Example';
import IToVVersion from './Components/ImageToVideo/Models/Version';

import SpeechToTextResult from './Components/SpeechToText/Models/SpeechToTextResult';
import SToTDemo from './Components/SpeechToText/Models/Demo';
import SToTApi from './Components/SpeechToText/Models/Api';
import SToTExample from './Components/SpeechToText/Models/Example';
import SToTVersion from './Components/SpeechToText/Models/Version';

import VideoToImageResult from './Components/VideoToImage/Models/VideoToImageResult';
import VToIDemo from './Components/VideoToImage/Models/Demo';
import VToIApi from './Components/VideoToImage/Models/Api';
import VToIExample from './Components/VideoToImage/Models/Example';
import VToIVersion from './Components/VideoToImage/Models/Version';

import VideoToVideo2Result from './Components/VideoToVideo/Models/arielreplicate/VideoToVideo2Result';
import VToV2Demo from './Components/VideoToVideo/Models/arielreplicate/Demo';
import VToV2Api from './Components/VideoToVideo/Models/Pollination/Api';
import VToV2Example from './Components/VideoToVideo/Models/arielreplicate/Example';
import VToV2Version from './Components/VideoToVideo/Models/arielreplicate/Version';

import VideoToVideo1Result from './Components/VideoToVideo/Models/Pollination/VideoToVideo1Result';
import VToV1Demo from './Components/VideoToVideo/Models/Pollination/Demo';
import VToV1Api from './Components/VideoToVideo/Models/Pollination/Api';
import VToV1Example from './Components/VideoToVideo/Models/Pollination/Example';
import VToV1Version from './Components/VideoToVideo/Models/Pollination/Version';

function App() {
  return (
    <div className="App">
      <Headers/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Explore/>} />
            <Route path="collection" exact element={ <Collections/>} >
            <Route path="imagetoimage" element={ <ImageToImageCollect/>} />
            <Route path="imagetotext" element={ <ImageToTextCollect/>} />
            <Route path="imagetovideo" element={ <ImageToVideoCollect/>} />
            <Route path="speechtotext" element={ <SpeechToTextCollect/>} />
            <Route path="texttoimage" element={ <TextToImageCollect/>} />
            <Route path="texttospeech" element={ <TextToSpeechCollect/>} />
            <Route path="texttotext" element={ <TextToTextCollect/>} />
            <Route path="texttovideo" element={ <TextToVideoCollect/>} />
            <Route path="videotoimage" element={ <VideoToImageCollect/>} />
            <Route path="videotovideo" element={ <VideoToVideoCollect/>} />
          </Route>
            <Route path="collection/texttotextresult" element={ <TextToTextresult/>} >
              <Route path="demo" element={ <Demo/>} />
              <Route path="api" element={ <Api/>} />
              <Route path="example" element={ <Example/>} />
              <Route path="versions" element={ <Version/>} />
            </Route>
            <Route path="collection/texttovideoresult" element={ <TextToVideoResult/>} >
              <Route path="demo" element={ <TToVDemo/>} />
              <Route path="api" element={ <TToVApi/>} />
              <Route path="example" element={ <TToVExample/>} />
              <Route path="versions" element={ <TToVVersion/>} />
            </Route>
            <Route path="collection/texttospeechresult" element={ <TextToSpeechResult/>} >
              <Route path="demo" element={ <TToSDemo/>} />
              <Route path="api" element={ <TToSApi/>} />
              <Route path="example" element={ <TToSExample/>} />
              <Route path="versions" element={ <TToSVersion/>} />
            </Route>
            <Route path="collection/texttoimageresult" element={ <TextToImageResult/>} >
              <Route path="demo" element={ <TToIDemo/>} />
              <Route path="api" element={ <TToIApi/>} />
              <Route path="example" element={ <TToIExample/>} />
              <Route path="versions" element={ <TToIVersion/>} />
            </Route>
            <Route path="collection/imagetoimage1result" element={ <ImageToImage1Result/>} >
              <Route path="demo" element={ <IToI1Demo/>} />
              <Route path="api" element={ <IToI1Api/>} />
              <Route path="example" element={ <IToI1Example/>} />
              <Route path="versions" element={ <IToI1Version/>} />
            </Route>
            <Route path="collection/imagetoimage2result" element={ <ImageToImage2Result/>} >
              <Route path="demo" element={ <IToI2Demo/>} />
              <Route path="api" element={ <IToI2Api/>} />
              <Route path="example" element={ <IToI2Example/>} />
              <Route path="versions" element={ <IToI2Version/>} />
            </Route>
            <Route path="collection/imagetotextresult" element={ <ImageToTextResult/>} >
              <Route path="demo" element={ <IToTDemo/>} />
              <Route path="api" element={ <IToTApi/>} />
              <Route path="example" element={ <IToTExample/>} />
              <Route path="versions" element={ <IToTVersion/>} />
            </Route>
            <Route path="collection/imagetovideoresult" element={ <ImageToVideoResult/>} >
              <Route path="demo" element={ <IToVDemo/>} />
              <Route path="api" element={ <IToVApi/>} />
              <Route path="example" element={ <IToVExample/>} />
              <Route path="versions" element={ <IToVVersion/>} />
            </Route>
            <Route path="collection/speechtotextresult" element={ <SpeechToTextResult/>} >
              <Route path="demo" element={ <SToTDemo/>} />
              <Route path="api" element={ <SToTApi/>} />
              <Route path="example" element={ <SToTExample/>} />
              <Route path="versions" element={ <SToTVersion/>} />
            </Route>
            <Route path="collection/videotoimageresult" element={ <VideoToImageResult/>} >
              <Route path="demo" element={ <VToIDemo/>} />
              <Route path="api" element={ <VToIApi/>} />
              <Route path="example" element={ <VToIExample/>} />
              <Route path="versions" element={ <VToIVersion/>} />
            </Route>
            <Route path="collection/videotovideo1result" element={ <VideoToVideo1Result/>} >
              <Route path="demo" element={ <VToV1Demo/>} />
              <Route path="api" element={ <VToV1Api/>} />
              <Route path="example" element={ <VToV1Example/>} />
              <Route path="versions" element={ <VToV1Version/>} />
            </Route>
            <Route path="collection/videotovideo2result" element={ <VideoToVideo2Result/>} >
              <Route path="demo" element={ <VToV2Demo/>} />
              <Route path="api" element={ <VToV2Api/>} />
              <Route path="example" element={ <VToV2Example/>} />
              <Route path="versions" element={ <VToV2Version/>} />
            </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
