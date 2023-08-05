import { createStore, applyMiddleware,combineReducers} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authreducer } from "./reducers/auth.reducer";
import { homeVideosReducer, reletedVideoReducer, selectedvideoReducer } from "./reducers/videos.reducer";
import { channelDetailsReducer } from "./reducers/channel.reducer";
import { commentsListReducer } from "./reducers/comments.reducer";

 const rootReducer =  combineReducers({
   auth:authreducer,
   homeVideos:homeVideosReducer,
   selectedVideo:selectedvideoReducer,
   channelDetails:channelDetailsReducer,
   commentList:commentsListReducer,
   reletedVideo:reletedVideoReducer,
 })

const store = createStore(rootReducer,{},composeWithDevTools(applyMiddleware(thunk)))

export default store