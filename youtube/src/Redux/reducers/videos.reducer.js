import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, RELETED_VIDEO_FAIL, RELETED_VIDEO_REQUEST, RELETED_VIDEO_SUCCESS, SELECTED_VIDEO_FAIL, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS } from "../ActionType";

export const homeVideosReducer = (
  state = {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory:'All'
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case HOME_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: state.activeCategory===payload.category?[...state.videos,...payload.videos]:payload.videos,
        loading: false,
        nextPageToken: payload.nextPageToken,
        activeCategory:payload.category
      };
    case HOME_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
      case HOME_VIDEOS_REQUEST:
        return {
          ...state,
          loading: true,
         
        };
    default:
      return state;
  }
};

export const selectedvideoReducer =(state={
  loading:true,
  video:null,
},action) =>{
  const{type, payload} = action;

  switch(type){
    case SELECTED_VIDEO_SUCCESS:return{
      ...state,loading:false,video:payload
    }
    case SELECTED_VIDEO_REQUEST:return{
      ...state,loading:true
    }
    case SELECTED_VIDEO_FAIL:return{
      ...state,loading:false, video:null, error:payload
    }
    default: return state
  }
}

export const reletedVideoReducer =(state={
  loading:true,
  videos:null,
  error:null,
},action) =>{
  const{type, payload} = action;

  switch(type){
    case RELETED_VIDEO_SUCCESS:return{
      ...state,loading:false,videos:payload
    }
    case RELETED_VIDEO_REQUEST:return{
      ...state,loading:true
    }
    case RELETED_VIDEO_FAIL:return{
      ...state,loading:false, videos:null, error:payload
    }
    default: return state
  }
}
