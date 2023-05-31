import { ResultFetch } from "../../interface/ResultFetch";
import { Box } from "@mui/material";
export default function Cards({ resultFetch }: { resultFetch: ResultFetch }) {
  return (
    <Box
      sx={{
        backgroundColor: "#ffd90f",
        border: "1px solid black",
        p: 3,
        m: 2,
        height: "770px"
        
        
      }}
    >
        <img className="card-image" src={resultFetch.Imagen} />
        <div className="card-info">
          <h3>
            <span className="titulos">Story:</span> {resultFetch.Historia}
          </h3>
          <h3>
            <span className="titulos">Gender:</span> {resultFetch.Genero}
          </h3>
          <h3>
            <span className="titulos">Status:</span> {resultFetch.Estado}
          </h3>
          <h3>
            <span className="titulos">Occupation:</span> {resultFetch.Ocupacion}
          </h3>
        </div>
    </Box>
  );
}
