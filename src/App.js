import { HashRouter, Router, Routes } from 'react-router-dom';
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
import VToV2Api from './Components/VideoToVideo/Models/arielreplicate/Api';
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
      <Headers />
      <HashRouter >
      <Routes>
          <Route path="/" element={ <Explore/>} />
            <Route path="/collection" element={ <Collections/>} >
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
        
          <Route path="/collect/texttotextresult" element={ <TextToTextresult/>} >
            <Route path="/collect/texttotextresult/demo" element={ <Demo/>} />
            <Route path="/collect/texttotextresult/api" element={ <Api/>} />
            <Route path="/collect/texttotextresult/example" element={ <Example/>} />
            <Route path="/collect/texttotextresult/versions" element={ <Version/>} />
          </Route>
          <Route path="/collect/texttovideoresult" element={ <TextToVideoResult/>} >
            <Route path="/collect/texttovideoresult/demo" element={ <TToVDemo/>} />
            <Route path="/collect/texttovideoresult/api" element={ <TToVApi/>} />
            <Route path="/collect/texttovideoresult/example" element={ <TToVExample/>} />
            <Route path="/collect/texttovideoresult/versions" element={ <TToVVersion/>} />
          </Route>
          <Route path="/collect/texttospeechresult" element={ <TextToSpeechResult/>} >
            <Route path="/collect/texttospeechresult/demo" element={ <TToSDemo/>} />
            <Route path="/collect/texttospeechresult/api" element={ <TToSApi/>} />
            <Route path="/collect/texttospeechresult/example" element={ <TToSExample/>} />
            <Route path="/collect/texttospeechresult/versions" element={ <TToSVersion/>} />
          </Route>
          <Route path="/collect/texttoimageresult" element={ <TextToImageResult/>} >
            <Route path="/collect/texttoimageresult/demo" element={ <TToIDemo/>} />
            <Route path="/collect/texttoimageresult/api" element={ <TToIApi/>} />
            <Route path="/collect/texttoimageresult/example" element={ <TToIExample/>} />
            <Route path="/collect/texttoimageresult/versions" element={ <TToIVersion/>} />
          </Route>
          <Route path="/collect/imagetoimage1result" element={ <ImageToImage1Result/>} >
            <Route path="/collect/imagetoimage1result/demo" element={ <IToI1Demo/>} />
            <Route path="/collect/imagetoimage1result/api" element={ <IToI1Api/>} />
            <Route path="/collect/imagetoimage1result/example" element={ <IToI1Example/>} />
            <Route path="/collect/imagetoimage1result/versions" element={ <IToI1Version/>} />
          </Route>
          <Route path="/collect/imagetoimage2result" element={ <ImageToImage2Result/>} >
            <Route path="/collect/imagetoimage2result/demo" element={ <IToI2Demo/>} />
            <Route path="/collect/imagetoimage2result/api" element={ <IToI2Api/>} />
            <Route path="/collect/imagetoimage2result/example" element={ <IToI2Example/>} />
            <Route path="/collect/imagetoimage2result/versions" element={ <IToI2Version/>} />
          </Route>
          <Route path="/collect/imagetotextresult" element={ <ImageToTextResult/>} >
            <Route path="/collect/imagetotextresult/demo" element={ <IToTDemo/>} />
            <Route path="/collect/imagetotextresult/api" element={ <IToTApi/>} />
            <Route path="/collect/imagetotextresult/example" element={ <IToTExample/>} />
            <Route path="/collect/imagetotextresult/versions" element={ <IToTVersion/>} />
          </Route>
          <Route path="/collect/imagetovideoresult" element={ <ImageToVideoResult/>} >
            <Route path="/collect/imagetovideoresult/demo" element={ <IToVDemo/>} />
            <Route path="/collect/imagetovideoresult/api" element={ <IToVApi/>} />
            <Route path="/collect/imagetovideoresult/example" element={ <IToVExample/>} />
            <Route path="/collect/imagetovideoresult/versions" element={ <IToVVersion/>} />
          </Route>
          <Route path="/collect/speechtotextresult" element={ <SpeechToTextResult/>} >
            <Route path="/collect/speechtotextresult/demo" element={ <SToTDemo/>} />
            <Route path="/collect/speechtotextresult/api" element={ <SToTApi/>} />
            <Route path="/collect/speechtotextresult/example" element={ <SToTExample/>} />
            <Route path="/collect/speechtotextresult/versions" element={ <SToTVersion/>} />
          </Route>
          <Route path="/collect/videotoimageresult" element={ <VideoToImageResult/>} >
            <Route path="/collect/videotoimageresult/demo" element={ <VToIDemo/>} />
            <Route path="/collect/videotoimageresult/api" element={ <VToIApi/>} />
            <Route path="/collect/videotoimageresult/example" element={ <VToIExample/>} />
            <Route path="/collect/videotoimageresult/versions" element={ <VToIVersion/>} />
          </Route>
          <Route path="/collect/videotovideo1result" element={ <VideoToVideo1Result/>} >
            <Route path="/collect/videotovideo1result/demo" element={ <VToV1Demo/>} />
            <Route path="/collect/videotovideo1result/api" element={ <VToV1Api/>} />
            <Route path="/collect/videotovideo1result/example" element={ <VToV1Example/>} />
            <Route path="/collect/videotovideo1result/versions" element={ <VToV1Version/>} />
          </Route>
          <Route path="/collect/videotovideo2result" element={ <VideoToVideo2Result/>} >
            <Route path="/collect/videotovideo2result/demo" element={ <VToV2Demo/>} />
            <Route path="/collect/videotovideo2result/api" element={ <VToV2Api/>} />
            <Route path="/collect/videotovideo2result/example" element={ <VToV2Example/>} />
            <Route path="/collect/videotovideo2result/versions" element={ <VToV2Version/>} />
          </Route>
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
