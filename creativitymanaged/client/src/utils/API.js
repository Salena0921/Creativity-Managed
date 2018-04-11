import axios from "axios";

export default {  
  getDesigns: function() {
    return axios.get("/api/designs");
  },
  
  getDesign: function(id) {
    return axios.get("/api/designs/" + id);
  },
  
  deleteDesign: function(id) {
    return axios.delete("/api/designs/" + id);
  },
  
  saveDesign: function(designData) {
    return axios.post("/api/designs", designData);
  }
};