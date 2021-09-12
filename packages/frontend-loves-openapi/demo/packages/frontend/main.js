import { OpenAPI, PetsService } from "../sdk";

OpenAPI.BASE = "http://localhost:4010";

PetsService.listPets().then((data) => {
  document.getElementById("preview").innerHTML = JSON.stringify(data, null, 2);
});