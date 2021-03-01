import TypeErrorComponent from './typeErrorComponent'
import MultipleChoiceComponent from './multipleChoiceComponent/multipleChoiceComponent'
import FreeAnswerComponent from './freeAnswerComponent'
import FotoComponent from './multimediaComponents/fotoComponents/fotoComponent'
import VideoComponent from './multimediaComponents/videoComponents/videoComponent'
import AudioComponent from './multimediaComponents/audioComponents/audioComponent'
import LocationComponent from './multimediaComponents/locationComponents/locationComponent'

export const TypeError = TypeErrorComponent
export const MultipleChoice = MultipleChoiceComponent
export const FreeAnswer = FreeAnswerComponent
export const Foto = FotoComponent
export const Video = VideoComponent
export const Audio = AudioComponent
export const Location = LocationComponent

export default {
  TypeError,
  MultipleChoice,
  FreeAnswer,
  Foto,
  Video,
  Audio,
  Location
}