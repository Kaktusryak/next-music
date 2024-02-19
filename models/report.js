import mongoose,{Schema} from "mongoose";

let Report
const reportSchema = new Schema(
    {
        music_id:String,
        music_name:String,
        music_artists:String
    },
    {
        timestamps:true
    }
)


if (mongoose.models && mongoose.models.Report) {
    Report = mongoose.models.Report;
  } else {
    Report = mongoose.model('Report', reportSchema);
  }
  
export default Report;