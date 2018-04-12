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
  },

  getFabrics: function() {
    return axios.get("/api/fabrics");
  },
  
  getFabric: function(id) {
    return axios.get("/api/fabrics/" + id);
  },
  
  deleteFabric: function(id) {
    return axios.delete("/api/fabrics/" + id);
  },
  
  saveFabric: function(fabricData) {
    return axios.post("/api/fabrics", fabricData);
  },

  getPatterns: function() {
    return axios.get("/api/patterns");
  },
  
  getPattern: function(id) {
    return axios.get("/api/patterns/" + id);
  },
  
  deletePattern: function(id) {
    return axios.delete("/api/patterns/" + id);
  },
  
  savePattern: function(fabricData) {
    return axios.post("/api/patterns", fabricData);
  }
};