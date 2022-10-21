import http from "../http-common";

class PadronDataService {
  getAll() {
    return http.get("/padron");
  }

  get(id) {
    return http.get(`/padron/${id}`);
  }

  create(data) {
    return http.post("/padron", data);
  }

  update(id, data) {
    return http.put(`/padron/${id}`, data);
  }

  delete(id) {
    return http.delete(`/padron/${id}`);
  }

  deleteAll() {
    return http.delete(`/padron`);
  }

  findByTitle(title) {
    return http.get(`/padron?title=${title}`);
  }

  findByNumeroAgencia(numAgencia) {
    return http.get(`/padron/${numAgencia}`);
  }
}

export default new PadronDataService();
