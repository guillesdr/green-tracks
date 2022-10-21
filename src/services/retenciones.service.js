import http from "../http-common";

class RetencionesDataService {
  getAll() {
    return http.get("/retenciones");
  }

  getResumenAnual() {
    return http.get("/retenciones");
  }

  create(data) {
    return http.post("/retenciones", data);
  }

  delete(periodo, juego) {
    return http.delete(`/retenciones/${periodo}/${juego}`);
  }

  getMesJuegoTotal(periodo, juego) {
    return http.get(`/retenciones/getMesJuegoTotal/${periodo}/${juego}`);
  }

  getComisionesResumen(periodo, juego) {
    return http.get(`/retenciones/getResumen`);
  }
}

export default new RetencionesDataService();
